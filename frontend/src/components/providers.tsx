'use client' // This is a client component because it uses client-side hooks and context

import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { useState, type ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode;
  // If you pass pageProps.session to SessionProvider, you might need this:
  // session?: any;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Configure global query defaults here if needed
            staleTime: 60 * 1000, // 1 minute
            // gcTime: 1000 * 60 * 60 * 24, // 24 hours (tanstack query v5 default)
          },
        },
      })
  );

  return (
    <SessionProvider> {/* session={session} can be added here if needed */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
