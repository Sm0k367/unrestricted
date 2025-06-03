import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getPlanLimits, canExceedLimit } from '@/lib/stripe'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { type, prompt, model, settings, projectId } = await req.json()

    // Validate input
    if (!type || !prompt) {
      return NextResponse.json(
        { error: 'Type and prompt are required' },
        { status: 400 }
      )
    }

    // Check user subscription and limits
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { subscription: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get current usage for the month
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    
    const currentUsage = await prisma.usageStats.findFirst({
      where: {
        userId: user.id,
        date: {
          gte: startOfMonth,
        },
      },
    })

    // Check limits based on subscription plan
    const plan = user.subscription?.plan || 'CREATOR'
    const limits = getPlanLimits(plan)
    
    let currentGenerations = 0
    switch (type) {
      case 'TEXT':
        currentGenerations = currentUsage?.textGenerations || 0
        break
      case 'IMAGE':
        currentGenerations = currentUsage?.imageGenerations || 0
        break
      case 'CODE':
        currentGenerations = currentUsage?.codeGenerations || 0
        break
      case 'AUDIO':
        currentGenerations = currentUsage?.audioGenerations || 0
        break
      case 'VIDEO':
        currentGenerations = currentUsage?.videoGenerations || 0
        break
    }

    if (!canExceedLimit(limits.generations, currentGenerations)) {
      return NextResponse.json(
        { error: 'Generation limit exceeded for your plan' },
        { status: 429 }
      )
    }

    // Create generation record
    const generation = await prisma.generation.create({
      data: {
        userId: user.id,
        type: type.toUpperCase(),
        prompt,
        model: model || 'gpt-4',
        status: 'PENDING',
        projectId,
        metadata: settings,
      },
    })

    try {
      let result: any
      let tokens = 0
      let cost = 0

      switch (type.toUpperCase()) {
        case 'TEXT':
          result = await generateText(prompt, model, settings)
          tokens = result.usage?.total_tokens || 0
          cost = calculateTextCost(tokens, model)
          break
          
        case 'IMAGE':
          result = await generateImage(prompt, settings)
          cost = calculateImageCost(settings)
          break
          
        case 'CODE':
          result = await generateCode(prompt, model, settings)
          tokens = result.usage?.total_tokens || 0
          cost = calculateTextCost(tokens, model)
          break
          
        default:
          throw new Error(`Unsupported generation type: ${type}`)
      }

      // Update generation with result
      const updatedGeneration = await prisma.generation.update({
        where: { id: generation.id },
        data: {
          result: JSON.stringify(result),
          status: 'COMPLETED',
          tokens,
          cost,
        },
      })

      // Update usage stats
      await updateUsageStats(user.id, type.toUpperCase(), tokens, cost)

      return NextResponse.json({
        id: updatedGeneration.id,
        result,
        tokens,
        cost,
      })

    } catch (error: any) {
      // Update generation with error
      await prisma.generation.update({
        where: { id: generation.id },
        data: {
          status: 'FAILED',
          result: JSON.stringify({ error: error.message }),
        },
      })

      console.error('Generation error:', error)
      return NextResponse.json(
        { error: 'Generation failed' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function generateText(prompt: string, model: string = 'gpt-4', settings: any = {}) {
  const response = await openai.chat.completions.create({
    model: model || 'gpt-4',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: settings.maxTokens || 2000,
    temperature: settings.temperature || 0.7,
    top_p: settings.topP || 1,
    frequency_penalty: settings.frequencyPenalty || 0,
    presence_penalty: settings.presencePenalty || 0,
  })

  return {
    content: response.choices[0]?.message?.content,
    usage: response.usage,
    model: response.model,
  }
}

async function generateImage(prompt: string, settings: any = {}) {
  const response = await openai.images.generate({
    model: settings.model || 'dall-e-3',
    prompt,
    size: settings.size || '1024x1024',
    quality: settings.quality || 'standard',
    n: settings.n || 1,
  })

  return {
    images: response.data,
    model: settings.model || 'dall-e-3',
  }
}

async function generateCode(prompt: string, model: string = 'gpt-4', settings: any = {}) {
  const systemPrompt = `You are an expert software developer. Generate clean, well-documented, and efficient code based on the user's requirements. Include comments and follow best practices.`

  const response = await openai.chat.completions.create({
    model: model || 'gpt-4',
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: settings.maxTokens || 3000,
    temperature: settings.temperature || 0.2,
  })

  return {
    code: response.choices[0]?.message?.content,
    usage: response.usage,
    model: response.model,
  }
}

function calculateTextCost(tokens: number, model: string): number {
  // Simplified cost calculation - adjust based on actual pricing
  const costPerToken = model.includes('gpt-4') ? 0.00003 : 0.000002
  return tokens * costPerToken
}

function calculateImageCost(settings: any): number {
  // Simplified cost calculation - adjust based on actual pricing
  const model = settings.model || 'dall-e-3'
  const quality = settings.quality || 'standard'
  
  if (model === 'dall-e-3') {
    return quality === 'hd' ? 0.08 : 0.04
  }
  return 0.02
}

async function updateUsageStats(userId: string, type: string, tokens: number, cost: number) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const updateData: any = {
    totalTokens: { increment: tokens },
    totalCost: { increment: cost },
  }

  switch (type) {
    case 'TEXT':
      updateData.textGenerations = { increment: 1 }
      break
    case 'IMAGE':
      updateData.imageGenerations = { increment: 1 }
      break
    case 'CODE':
      updateData.codeGenerations = { increment: 1 }
      break
    case 'AUDIO':
      updateData.audioGenerations = { increment: 1 }
      break
    case 'VIDEO':
      updateData.videoGenerations = { increment: 1 }
      break
  }

  await prisma.usageStats.upsert({
    where: {
      userId_date: {
        userId,
        date: today,
      },
    },
    update: updateData,
    create: {
      userId,
      date: today,
      ...Object.fromEntries(
        Object.entries(updateData).map(([key, value]: [string, any]) => [
          key,
          value.increment || 0,
        ])
      ),
    },
  })
}
