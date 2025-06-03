import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Epic Tech AI Engineering - Unrestricted Media Generation',
  description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content with enterprise-grade features.',
  keywords: ['AI', 'artificial intelligence', 'content generation', 'SaaS', 'API', 'automation'],
  authors: [{ name: 'Epic Tech AI Engineering' }],
  creator: 'Epic Tech AI Engineering',
  publisher: 'Epic Tech AI Engineering',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://epic-tech-ai.vercel.app',
    title: 'Epic Tech AI Engineering - Unrestricted Media Generation',
    description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content with enterprise-grade features.',
    siteName: 'Epic Tech AI Engineering',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epic Tech AI Engineering - Unrestricted Media Generation',
    description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content with enterprise-grade features.',
    creator: '@epictechai',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    

html
) }
