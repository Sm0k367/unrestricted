import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import { prisma } from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        
        // Add subscription info to session
        const subscription = await prisma.subscription.findUnique({
          where: { userId: user.id },
        })
        
        session.user.subscription = subscription
      }
      return session
    },
    async signIn({ user, account, profile }) {
      // Create Stripe customer on first sign in
      if (account?.provider && !user.stripeCustomerId) {
        try {
          const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
          const customer = await stripe.customers.create({
            email: user.email,
            name: user.name,
            metadata: {
              userId: user.id,
            },
          })
          
          await prisma.user.update({
            where: { id: user.id },
            data: { stripeCustomerId: customer.id },
          })
        } catch (error) {
          console.error('Error creating Stripe customer:', error)
        }
      }
      
      return true
    },
  },
  events: {
    async createUser({ user }) {
      // Initialize user with default settings
      await prisma.usageStats.create({
        data: {
          userId: user.id,
          date: new Date(),
        },
      })
    },
  },
}
