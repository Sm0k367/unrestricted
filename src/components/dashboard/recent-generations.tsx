'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Image,
  Code,
  Music,
  Video,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
  ExternalLink,
  Copy,
  Download
} from 'lucide-react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface Generation {
  id: string
  type: 'TEXT' | 'IMAGE' | 'CODE' | 'AUDIO' | 'VIDEO'
  prompt: string
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
  createdAt: string
  result?: any
  model?: string
  tokens?: number
  cost?: number
}

export function RecentGenerations() {
  const [generations, setGenerations] = useState<Generation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecentGenerations()
  }, [])

  const fetchRecentGenerations = async () => {
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/generations?limit=10')
      // if (response.ok) {
      //   const data = await response.json()
      //   setGenerations(data)
      // }

      // Mock data for now
      setGenerations([
        { id: '1', type: 'TEXT', prompt: 'Write a blog post about AI', status: 'COMPLETED', createdAt: new Date(Date.now() - 3600000).toISOString(), result: { content: 'This is a blog post...' }, model: 'gpt-4', cost: 0.003 },
        { id: '2', type: 'IMAGE', prompt: 'A cat wearing a hat', status: 'COMPLETED', createdAt: new Date(Date.now() - 7200000).toISOString(), result: { images: [{url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=150&fit=crop&crop=face'}] }, model: 'dall-e-3', cost: 0.04 },
        { id: '3', type: 'CODE', prompt: 'Python script for web scraping', status: 'FAILED', createdAt: new Date(Date.now() - 10800000).toISOString(), model: 'gpt-4' },
        { id: '4', type: 'TEXT', prompt: 'Marketing email copy', status: 'PROCESSING', createdAt: new Date(Date.now() - 14400000).toISOString(), model: 'gpt-3.5-turbo' },
        { id: '5', type: 'IMAGE', prompt: 'Abstract background design', status: 'PENDING', createdAt: new Date(Date.now() - 18000000).toISOString(), model: 'dall-e-2' },
      ])

    } catch (error) {
      console.error('Failed to fetch generations:', error)
    } finally {
      setLoading(false)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'TEXT':
        return FileText
      case 'IMAGE':
        return Image
      case 'CODE':
        return Code
      case 'AUDIO':
        return Music
      case 'VIDEO':
        return Video
      default:
        return FileText
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return

CheckCircle
  case 'FAILED':
    return

XCircle
  case 'PROCESSING':
  case 'PENDING':
    return <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
  default:
    return

Clock
}
}

const getTypeColor = (type: string) => { switch (type) { case 'TEXT': return 'from-blue-500 to-cyan-500' case 'IMAGE': return 'from-purple-500 to-pink-500' case 'CODE': return 'from-green-500 to-emerald-500' case 'AUDIO': return 'from-orange-500 to-red-500' case 'VIDEO': return 'from-indigo-500 to-purple-500' default: return 'from-gray-500 to-gray-600' } }

const truncatePrompt = (prompt: string, maxLength: number = 60) => { return prompt.length > maxLength ? prompt.substring(0, maxLength) + '...' : prompt }

const copyToClipboard = async (text: string) => { try { await navigator.clipboard.writeText(text) // You could add a toast notification here } catch (error) { console.error('Failed to copy:', error) } }

if (loading) { return (


Card
)
}

return (


Card
) }
