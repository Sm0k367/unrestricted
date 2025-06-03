#!/bin/bash

# Epic Tech AI - Cloudflare Deployment Script
# This script handles deployment to Cloudflare Pages

set -e

echo "☁️  Starting Epic Tech AI deployment to Cloudflare Pages..."

# Check if Wrangler CLI is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found. Installing..."
    npm install -g wrangler
fi

# Navigate to project root (assuming this script is in deployment/cloudflare)
cd "$(dirname "$0")/../../"

# Check if user is authenticated with Cloudflare
if ! wrangler whoami &> /dev/null; then
    echo "🔐 Please authenticate with Cloudflare by running 'wrangler login'"
    exit 1
fi

# Set deployment environment (staging or production)
ENVIRONMENT=${1:-staging} # Default to staging if no argument provided
echo "🎯 Deploying to environment: $ENVIRONMENT"

# Project name on Cloudflare Pages (ensure this matches your CF Pages project name)
CLOUDFLARE_PROJECT_NAME="epic-tech-ai-${ENVIRONMENT}"
# If your Next.js app is at the root:
NEXT_APP_DIR="."
# If your Next.js app is in a 'frontend' subdirectory:
# NEXT_APP_DIR="frontend"


echo "📦 Installing dependencies in $NEXT_APP_DIR..."
(cd "$NEXT_APP_DIR" && npm install --legacy-peer-deps)

echo "🔧 Building the application in $NEXT_APP_DIR..."
(cd "$NEXT_APP_DIR" && npm run build) # Assumes 'npm run build' produces output in '.next'

echo "🗄️  Preparing database (Prisma)..."
(cd "$NEXT_APP_DIR" && npx prisma generate)
# Note: `prisma db push` should ideally be run against the target database.
# For Cloudflare deployments, this might be part of a separate migration strategy
# or handled if your build process can connect to the DB.
# If deploying a static site with API as workers, migrations are handled differently.
echo "Skipping 'prisma db push' in this script. Handle migrations separately for your Cloudflare environment."


echo "☁️  Deploying to Cloudflare Pages: $CLOUDFLARE_PROJECT_NAME..."

# Deploy to Cloudflare Pages
# Wrangler will use wrangler.toml if present in the $NEXT_APP_DIR or root.
# The `pages_build_output_dir` in wrangler.toml (or default .next) will be used.
(cd "$NEXT_APP_DIR" && wrangler pages deploy ".next" --project-name "$CLOUDFLARE_PROJECT_NAME" --branch "$ENVIRONMENT")
# If using static export (next export), the directory would be "out" instead of ".next"

echo "✅ Cloudflare Pages deployment initiated successfully for $CLOUDFLARE_PROJECT_NAME!"

# Post-deployment steps (manual or via Cloudflare dashboard/API for now)
echo ""
echo "📋 Next steps (manual or via Cloudflare Dashboard/API):"
echo "1. Ensure environment variables (DATABASE_URL, NEXTAUTH_SECRET, etc.) are set in Cloudflare Pages project settings."
echo "2. Configure custom domain for '$CLOUDFLARE_PROJECT_NAME' if not already set."
echo "3. Set up Stripe webhooks to point to your Cloudflare deployment URL."
echo "4. Test all functionality thoroughly."
echo "5. Configure KV, R2, Durable Objects, or Workers for API backends if your Next.js app uses them via Cloudflare bindings (configure in wrangler.toml and CF dashboard)."
echo ""
echo "🔗 Useful links:"
echo "   - Cloudflare Dashboard: https://dash.cloudflare.com"
# Attempt to get deployment URL (this is a best guess, actual URL structure might vary)
PAGES_URL="${CLOUDFLARE_PROJECT_NAME}.pages.dev"
echo "   - Likely Application URL: https://$PAGES_URL"
echo ""
echo "🎉 Epic Tech AI Cloudflare deployment process initiated!"
Important Notes for Cloudflare deploy.sh:

This script is tailored for Cloudflare Pages deploying a Next.js application.
Project Name: CLOUDFLARE_PROJECT_NAME must match the project name you've created in your Cloudflare Pages dashboard.
Build Output: It assumes your Next.js build output is in the .next directory (standard for App Router). If you use next export, change .next to out.
wrangler.toml: This script assumes wrangler.toml is configured correctly at the root of your project (or within the $NEXT_APP_DIR if preferred by your setup) to guide Wrangler, especially for bindings (KV, R2, DO, Workers for API).
Database Migrations: prisma db push is commented out with a note. Running migrations directly in a CI/CD script for Cloudflare needs careful consideration of how your database is accessed during the build/deployment. Often, migrations are handled as a separate step or via a dedicated migration service/script that connects to your production/staging database.
Environment Variables: Secrets and environment variables for Cloudflare Pages are best managed through the Cloudflare dashboard or using wrangler pages secret put.
API Backends: If your API routes are part of the Next.js app, they'll be deployed with Pages. If you have separate Cloudflare Workers for your API, you'd deploy them using wrangler deploy with their own wrangler.toml configuration. This script focuses on the Pages deployment.
