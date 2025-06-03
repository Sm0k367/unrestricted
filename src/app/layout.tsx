import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Ensure this path is correct
import { Providers } from '@/components/providers' // Ensure this path is correct
import { Toaster } from '@/components/ui/toaster'   // Ensure this path is correct

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
    url: 'https://your-actual-domain.com', // IMPORTANT: Replace with your domain
    title: 'Epic Tech AI Engineering - Unrestricted Media Generation',
    description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content with enterprise-grade features.',
    siteName: 'Epic Tech AI Engineering',
    // images: [ { url: 'https://your-actual-domain.com/og-image.png', width: 1200, height: 630, alt: 'Site OG Image' } ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epic Tech AI Engineering - Unrestricted Media Generation',
    description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content with enterprise-grade features.',
    creator: '@YourTwitterHandle', // IMPORTANT: Replace with your Twitter handle
    // images: ['https://your-actual-domain.com/twitter-image.png'],
  },
}

export async function generateViewport(): Promise<Viewport> {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' }, // Example dark theme color
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
