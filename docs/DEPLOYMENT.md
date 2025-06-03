# Epic Tech AI - Deployment Guide

## Overview

This guide covers deploying Epic Tech AI to various platforms including Vercel (recommended), Cloudflare, and custom infrastructure. The platform is designed for scalability and supports multiple deployment strategies.

## Prerequisites

### Required Services
- **Database**: PostgreSQL 13+ (Supabase, Neon, or self-hosted)
- **Authentication**: OAuth providers (Google, GitHub)
- **Payments**: Stripe account with API keys
- **AI Provider**: OpenAI API key
- **Email**: SMTP service (Gmail, SendGrid, etc.)

### Development Tools
- Node.js 18+
- npm or yarn
- Git
- Vercel CLI or Wrangler CLI

## Environment Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# Core Configuration
DATABASE_URL="postgresql://username:password@host:5432/database"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-32-character-secret"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Stripe Configuration
STRIPE_SECRET_KEY="sk_live_your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_your-stripe-publishable-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Stripe Price IDs (create these in Stripe Dashboard)
STRIPE_CREATOR_PRICE_ID="price_creator_monthly"
STRIPE_CREATOR_ANNUAL_PRICE_ID="price_creator_annual"
STRIPE_PRO_PRICE_ID="price_pro_monthly"
STRIPE_PRO_ANNUAL_PRICE_ID="price_pro_annual"
STRIPE_TEAM_PRICE_ID="price_team_monthly"
STRIPE_TEAM_ANNUAL_PRICE_ID="price_team_annual"
STRIPE_ENTERPRISE_PRICE_ID="price_enterprise_monthly"
STRIPE_ENTERPRISE_ANNUAL_PRICE_ID="price_enterprise_annual"

# AI Providers
OPENAI_API_KEY="sk-your-openai-api-key"

# Email Configuration
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@your-domain.com"

# Optional: Additional AI Providers
ANTHROPIC_API_KEY="your-anthropic-api-key"
REPLICATE_API_TOKEN="your-replicate-api-token"

# Optional: Analytics & Monitoring
VERCEL_ANALYTICS_ID="your-vercel-analytics-id"
SENTRY_DSN="your-sentry-dsn"

# Feature Flags
NEXT_PUBLIC_ENABLE_AUDIO_GENERATION="false"
NEXT_PUBLIC_ENABLE_VIDEO_GENERATION="false"
NEXT_PUBLIC_ENABLE_TEAM_FEATURES="true"
NEXT_PUBLIC_ENABLE_API_ACCESS="true"
Vercel Deployment (Recommended)
Vercel provides the best experience for Next.js applications with automatic deployments, edge functions, and global CDN.

1. Prepare for Deployment
npm install --legacy-peer-deps
npm run build
2. Deploy with Vercel CLI
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
3. Configure Environment Variables
In the Vercel dashboard:

Go to your project settings
Navigate to "Environment Variables"
Add all required environment variables
Redeploy the application
4. Set Up Database
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push
5. Configure Custom Domain
In Vercel dashboard, go to "Domains"
Add your custom domain
Configure DNS records as instructed
Update NEXTAUTH_URL environment variable
6. Set Up Stripe Webhooks
In Stripe dashboard, go to "Webhooks"
Add endpoint: https://your-domain.com/api/webhooks/stripe
Select events: customer.subscription.*, invoice.payment_*
Copy webhook secret to STRIPE_WEBHOOK_SECRET
Cloudflare Deployment
Cloudflare provides excellent performance with global edge computing and integrated services.

1. Install Wrangler CLI
npm install -g wrangler
wrangler login
2. Configure Cloudflare
Edit wrangler.toml (create this file at the root of your project if it doesn't exist):

name = "epic-tech-ai" # Your project name
compatibility_date = "2024-01-01"

[env.production]
name = "epic-tech-ai-production"
route = "your-domain.com/*"
zone_id = "your-cloudflare-zone-id"
# Add other environment-specific settings

# Example for Pages
# main = "./.next/server/pages" # Adjust if using Next.js output
# build.command = "npm run build"
# build.upload.format = "service-worker"
3. Deploy
# For Cloudflare Pages
wrangler pages deploy .next # Or your build output directory

# For Cloudflare Workers (if API is separate)
# wrangler deploy
4. Configure Environment Variables
# Set secrets for Pages
wrangler pages secret put DATABASE_URL --project-name epic-tech-ai-production
# ... add other secrets

# Set secrets for Workers
# wrangler secret put DATABASE_URL
5. Set Up Custom Domain
Refer to Cloudflare documentation for setting up custom domains for Pages or Workers.

Database Setup
Option 1: Supabase (Recommended)
Create account at supabase.com
Create new project
Get connection string from Settings → Database
Update DATABASE_URL environment variable
Option 2: Neon
Create account at neon.tech
Create new project
Get connection string
Update DATABASE_URL environment variable
Option 3: Self-Hosted PostgreSQL
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Create database
sudo -u postgres createdb epic_tech_ai

# Create user
sudo -u postgres createuser --interactive
Database Migration
# Generate Prisma client
npx prisma generate

# Apply schema to database
npx prisma db push

# Optional: Seed database
# npx prisma db seed
OAuth Configuration
Google OAuth
Go to Google Cloud Console
Create new project or select existing
Enable Google+ API
Create OAuth 2.0 credentials
Add authorized redirect URIs:
https://your-domain.com/api/auth/callback/google
http://localhost:3000/api/auth/callback/google (for development)
GitHub OAuth
Go to GitHub Settings → Developer settings → OAuth Apps
Create new OAuth App
Set Authorization callback URL:
https://your-domain.com/api/auth/callback/github
Copy Client ID and Client Secret
Stripe Configuration
1. Create Stripe Account
Sign up at stripe.com
Complete account verification
Get API keys from Dashboard → Developers → API keys
2. Create Products and Prices
# Use Stripe CLI or Dashboard to create products
stripe products create --name="Creator Plan" --description="Perfect for individual creators"
stripe prices create --product=prod_xxx --unit-amount=1900 --currency=usd --recurring-interval=month
# Repeat for all plans (Pro, Team, Enterprise) and annual versions
3. Set Up Webhooks
Go to Dashboard → Developers → Webhooks
Add endpoint: https://your-domain.com/api/webhooks/stripe
Select events:
customer.subscription.created
customer.subscription.updated
customer.subscription.deleted
invoice.payment_succeeded
invoice.payment_failed
Monitoring & Analytics
Vercel Analytics
npm install @vercel/analytics
Add to your src/app/layout.tsx:

import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    

html
) }


### Sentry Error Tracking

```bash
npm install @sentry/nextjs
Configure sentry.client.config.js, sentry.server.config.js, sentry.edge.config.js at the root of your project. Refer to Sentry documentation for Next.js.

Uptime Monitoring
Set up monitoring with:

UptimeRobot
Pingdom
StatusPage
Security Configuration
Security Headers
Add to next.config.js:

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
Rate Limiting (Example with Upstash)
Install @upstash/ratelimit and @upstash/redis. Implement in your API routes or middleware.

// Example in an API route
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(), // Requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requests per 10 seconds
})

// In your API handler:
// const ip = req.ip ?? '127.0.0.1'
// const { success } = await ratelimit.limit(ip)
// if (!success) return new Response('Rate limited', { status: 429 })
Performance Optimization
Image Optimization
Next.js provides built-in image optimization. Configure allowed domains in next.config.js.

module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.openai.com',
      'your-storage-domain.com' // If using external storage
    ],
    formats: ['image/webp', 'image/avif'],
  },
}
Caching Strategy
Utilize Next.js caching capabilities (Data Cache, Full Route Cache). For API routes, set Cache-Control headers.

// Example API route caching
export async function GET() {
  // const data = await fetchData()
  // return Response.json(data, {
  //   headers: {
  //     'Cache-Control': 's-maxage=60, stale-while-revalidate=300'
  //   }
  // })
}
Bundle Analysis
npm install @next/bundle-analyzer --save-dev
Add to next.config.js:

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your existing Next.js config
})
Run with ANALYZE=true npm run build.

Backup & Recovery
Database Backups
Implement regular automated backups for your PostgreSQL database. Example using pg_dump:

# Automated backup script (run via cron)
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump $DATABASE_URL > backup_$DATE.sql
# aws s3 cp backup_$DATE.sql s3://your-backup-bucket/ # Example: Upload to S3
Code Backups
Use Git with multiple remotes (e.g., GitHub, GitLab).
Ensure regular pushes to remote repositories.
Scaling Considerations
Database Scaling
Read Replicas: Set up read replicas for heavy read workloads.
Connection Pooling: Use PgBouncer or similar for managing connections.
Query Optimization: Monitor and optimize slow database queries.
Application Scaling
Edge Functions: Utilize Vercel Edge Functions or Cloudflare Workers for global performance.
CDN: Leverage CDN capabilities of Vercel/Cloudflare for static assets.
Caching: Implement Redis or similar for session and data caching if needed.
Troubleshooting
Common Issues
Build Failures
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
Database Connection Issues
# Test database connection locally
npx prisma studio # If it connects, Prisma can reach DB
# Check DATABASE_URL in deployed environment
Environment Variable Issues
# Verify environment variables in Vercel/Cloudflare dashboard
# Locally, ensure .env.local is correctly populated
Debugging
Enable debug mode for Next.js:

DEBUG=* npm run dev
Check logs on your deployment platform:

Vercel: vercel logs your-project-name.vercel.app
Cloudflare: wrangler pages deployment tail or check Workers logs.
Maintenance
Regular Tasks
Update Dependencies: Monthly review and update of npm packages.
Database Maintenance: Regular VACUUM and ANALYZE operations for PostgreSQL.
Monitor Performance: Weekly review of performance metrics.
Backup Verification: Monthly restoration tests of database backups.
Update Process
# Update dependencies
npm update
npm audit fix # Address vulnerabilities

# Test updates thoroughly
npm run test
npm run build

# Deploy updates (e.g., for Vercel)
vercel --prod
Support
For deployment issues:

Documentation: docs.epic-tech-ai.com (Your future docs site)
Community: (Your future community forum)
Support: support@epic-tech-ai.com
This deployment guide ensures a robust, scalable, and secure deployment of Epic Tech AI across multiple platforms.
