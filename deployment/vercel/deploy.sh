#!/bin/bash

# Epic Tech AI - Vercel Deployment Script
# This script handles the complete deployment process to Vercel

set -e

echo "🚀 Starting Epic Tech AI deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Navigate to project root (assuming this script is in deployment/vercel)
cd "$(dirname "$0")/../../"

echo "📦 Installing dependencies..."
npm install --legacy-peer-deps # Assuming package.json is at root

echo "🔧 Building the application..."
npm run build # Assuming build script is at root

echo "🗄️  Running database migrations..."
npx prisma generate
npx prisma db push # Ensure DATABASE_URL is set in your environment for this step

echo "🌐 Deploying to Vercel..."

# Deploy to Vercel
# The Vercel CLI will pick up vercel.json from the root for configuration.
if [ "$1" = "production" ]; then
    echo "🚀 Deploying to production..."
    vercel --prod --yes
else
    echo "🧪 Deploying to preview..."
    vercel --yes
fi

echo "✅ Deployment completed successfully!"

# Post-deployment tasks
echo "🔄 Running post-deployment tasks..."

# Warm up the application
echo "🔥 Warming up the application..."
sleep 10

# Get the deployment URL
# Adjust project name if it's different in Vercel
DEPLOYMENT_URL=$(vercel ls epic-tech-ai --json | jq -r '.[0].url')

if [ "$DEPLOYMENT_URL" != "null" ] && [ -n "$DEPLOYMENT_URL" ]; then
    echo "🌍 Application deployed to: https://$DEPLOYMENT_URL"
    
    # Test the deployment
    echo "🧪 Testing deployment..."
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$DEPLOYMENT_URL")
    
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✅ Deployment test passed!"
    else
        echo "⚠️  Deployment test returned status: $HTTP_STATUS for https://$DEPLOYMENT_URL"
    fi
else
    echo "⚠️  Could not retrieve deployment URL. Please check Vercel dashboard."
fi

echo "🎉 Epic Tech AI deployment process completed!"
echo ""
echo "📋 Next steps:"
echo "1. Configure environment variables in Vercel dashboard if not done via vercel.json or secrets."
echo "2. Set up custom domain (if needed) in Vercel dashboard."
echo "3. Configure Stripe webhooks to point to your Vercel deployment URL."
echo "4. Test all functionality thoroughly."
echo ""
echo "🔗 Useful links:"
echo "   - Vercel Dashboard: https://vercel.com/dashboard"
# echo "   - Application: https://$DEPLOYMENT_URL" # Uncomment if DEPLOYMENT_URL is reliably fetched
# echo "   - API Health: https://$DEPLOYMENT_URL/api/health" # Assuming you have a health check endpoint
Important Notes for deploy.sh:

This script assumes your package.json, prisma schema, and vercel.json are at the root of your repository where you run this script from (after cding into the root). If your Next.js app is in a subdirectory (e.g., frontend), you'll need to adjust paths like npm install, npm run build, npx prisma generate, etc., to cd frontend && npm install or prefix commands with npm --prefix frontend run build.
The command vercel ls epic-tech-ai --json | jq -r '.[0].url' tries to get the URL. Ensure epic-tech-ai matches your Vercel project name. This might need adjustment or manual checking.
Ensure DATABASE_URL is available in the environment where npx prisma db push is run, especially for production deployments. Vercel environment variables should cover this if set correctly.
