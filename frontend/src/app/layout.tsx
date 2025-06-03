import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers'; // Will be created in the next step

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Epic Tech AI - Unrestricted Media Generation',
    template: '%s | Epic Tech AI',
  },
  description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content with enterprise-grade features.',
  keywords: ['AI', 'artificial intelligence', 'content generation', 'SaaS', 'API', 'automation', 'text generation', 'image generation', 'code generation'],
  authors: [{ name: 'Epic Tech AI Engineering', url: 'https://epictech.ai' }], // Replace with actual domain
  creator: 'Epic Tech AI Engineering',
  publisher: 'Epic Tech AI Engineering',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://epictech.ai', // Replace with your actual domain
    title: 'Epic Tech AI - Unrestricted Media Generation',
    description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content.',
    siteName: 'Epic Tech AI',
    // images: [
    //   {
    //     url: 'https://epictech.ai/og-image.png', // Replace with actual OG image URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'Epic Tech AI Platform',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epic Tech AI - Unrestricted Media Generation',
    description: 'Advanced AI-powered platform for generating text, images, code, and multimedia content.',
    // siteId: '@YourTwitterSiteID', // If you have one
    creator: '@YourTwitterHandle', // Replace with your Twitter handle
    // images: ['https://epictech.ai/twitter-image.png'], // Replace with actual Twitter image URL
  },
  // icons: { // Add icon configuration if you have favicons etc.
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }, // Or your specific dark background
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Optional: to prevent zooming on mobile
  // userScalable: false, // Optional: to prevent zooming on mobile
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head /> {/* Next.js handles <head> elements via Metadata API */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers> {/* This component will wrap ThemeProvider, SessionProvider etc. */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

// Helper function cn (usually in lib/utils.ts) - ensure it exists or is created later
// For now, to make this file runnable if isolated, define a placeholder cn
// In a real setup, this would be imported: import { cn } from "@/lib/utils";
function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}
