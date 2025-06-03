# Epic Tech AI Engineering - Unrestricted Media Generation Platform

## 🚀 Overview

Epic Tech AI Engineering is a comprehensive SaaS-first platform (80%) with strategic WaaS features (20%) for AI-powered content generation. Built with Next.js 15, TypeScript, and modern web technologies, it provides enterprise-grade reliability for generating text, images, code, and multimedia content.

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM, PostgreSQL
- **Authentication**: NextAuth.js with multiple providers
- **Payments**: Stripe with webhook integration
- **AI Providers**: OpenAI (primary), extensible to Anthropic, Nvidia, Groq, Replicate
- **Deployment**: Vercel (primary), Cloudflare (alternative)
- **Database**: PostgreSQL with Prisma ORM

### Project Structure
```
epic-tech-ai/
├── frontend/      # Next.js application
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # Reusable components
│   │   ├── lib/            # Utility libraries
│   │   ├── types/          # TypeScript definitions
│   │   └── hooks/          # Custom React hooks
│   ├── prisma/         # Database schema
│   └── public/         # Static assets
├── backend/       # Backend services (future)
├── database/      # Database configurations
├── docs/          # Documentation
├── deployment/    # Deployment configurations
│   ├── vercel/         # Vercel deployment
│   ├── github/         # GitHub Actions
│   └── cloudflare/     # Cloudflare deployment
├── api/           # API documentation (e.g. OpenAPI specs, not Next.js API routes)
└── shared/        # Shared utilities
```

## 🎯 Business Model

### SaaS-First Approach (80%)
- **Target**: Individual creators, small businesses, teams
- **Revenue**: Subscription-based ($19-$149/month)
- **Features**: Web interface, collaboration, templates, analytics

### WaaS Components (20%)
- **Target**: Developers, enterprises, agencies
- **Revenue**: API usage fees, enterprise contracts
- **Features**: RESTful API, SDKs, webhooks, white-labeling

## 💰 Pricing Strategy

### SaaS Plans
1. **Creator** - $19/month
   - 1,000 generations/month
   - All AI models
   - Basic templates
   - Community support

2. **Pro** - $49/month
   - 5,000 generations/month
   - Priority processing
   - Advanced templates
   - Email support
   - Team collaboration (3 members)
   - Basic API access

3. **Team** - $149/month
   - 20,000 generations/month
   - Ultra-fast processing
   - Custom model fine-tuning
   - Unlimited team members
   - Full API access
   - Advanced security

4. **Enterprise** - $999/month
   - Unlimited generations
   - Dedicated infrastructure
   - White-label solutions
   - Custom integrations
   - SLA guarantees

### API Pricing
- **Text Generation**: $0.02 per 1K tokens
- **Image Generation**: $0.08 per image
- **Code Generation**: $0.05 per request
- **Volume Discounts**: 5-15% based on usage

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account
- OpenAI API key

### Installation (Assuming you are in the `epic-tech-ai` root)

1. **Clone the repository** (If you haven't already)
   ```bash
   # git clone https://github.com/Sm0k367/unrestricted.git
   # cd unrestricted
   ```
2. **Navigate to the frontend application**
   ```bash
   cd frontend
   ```
3. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or pnpm install or yarn install
   ```
4. **Set up environment variables**
   Create a `.env.local` file in the `frontend/` directory by copying `frontend/.env.example` (once it's created).
   ```bash
   # cd frontend
   # cp .env.example .env.local
   # Edit .env.local with your configuration
   ```
5. **Set up the database** (Ensure Prisma schema is in `frontend/prisma/schema.prisma`)
   ```bash
   # cd frontend
   npx prisma generate
   npx prisma db push
   ```
6. **Run the development server**
   ```bash
   # cd frontend
   npm run dev
   ```
7. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration (Environment Variables in `frontend/.env.local`)

**Required**
```
DATABASE_URL="postgresql://username:password@localhost:5432/epic_tech_ai"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key" # Generate a strong secret
OPENAI_API_KEY="sk-your-openai-api-key"
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key" # Use test key for development
STRIPE_WEBHOOK_SECRET="whsec_your-stripe-webhook-secret" # From Stripe dashboard
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key" # Use test key for development
```

**OAuth Providers (Example: Google & GitHub)**
```
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

**Email Configuration (Example: Resend or SMTP)**
```
# For Resend
# EMAIL_SERVER_USER="resend"
# EMAIL_SERVER_PASSWORD="your-resend-api-key"
# EMAIL_FROM="Your Name <you@yourdomain.com>"

# For SMTP
# EMAIL_SERVER_HOST="smtp.example.com"
# EMAIL_SERVER_PORT="587"
# EMAIL_SERVER_USER="your-email@example.com"
# EMAIL_SERVER_PASSWORD="your-email-password"
# EMAIL_FROM="Your Name <noreply@yourdomain.com>"
```

### Database Schema
The application will use Prisma ORM with PostgreSQL. Key models (to be defined in `frontend/prisma/schema.prisma`) will include:

- **User**: User accounts and authentication
- **Account**: For NextAuth multi-provider linking
- **Session**: For NextAuth sessions
- **VerificationToken**: For NextAuth email verification
- **Subscription**: Billing and plan management (Stripe integration)
- **Generation**: AI content generation records
- **UsageStats**: Usage tracking and analytics
- **Team**: Team collaboration features
- **Project**: Content organization
- **Template**: Reusable generation templates
- **ApiKey**: API access management

## 🎨 Features (Planned)

### Core Generation Features
- Text Generation: Articles, blogs, marketing copy, documentation
- Image Creation: Logos, artwork, social media content
- Code Generation: Applications, functions, scripts, documentation
- Audio Generation: Music, voiceovers, sound effects (coming soon)
- Video Creation: Animations, presentations (coming soon)

### Platform Features
- User Authentication: Multiple OAuth providers + email
- Subscription Management: Stripe integration with webhooks
- Team Collaboration: Real-time collaboration and sharing
- Project Organization: Organize content into projects
- Template Library: Pre-built and custom templates
- Usage Analytics: Detailed usage tracking and insights
- API Access: RESTful API with comprehensive documentation

### Enterprise Features
- Custom Model Training: Train models on your data
- White-label Solutions: Fully customizable platform
- Advanced Security: SOC 2 compliance, SSO integration
- Dedicated Support: 24/7 priority support
- Custom Integrations: Tailored workflow integrations

## 🔌 API Documentation (Conceptual)

Details for the RESTful API will be provided under `/api/` or a dedicated docs site.

### Authentication
```bash
# Example: Get API key from user dashboard
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.epictech.ai/v1/generate
     # Note: api.epictech.ai is a placeholder for your actual API domain
```

### Generate Text
```bash
curl -X POST https://api.epictech.ai/v1/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "text",
    "prompt": "Write a blog post about AI",
    "model": "gpt-4",
    "settings": {
      "maxTokens": 2000,
      "temperature": 0.7
    }
  }'
```

## 🚀 Deployment

Deployment will primarily target Vercel for the frontend and Next.js API routes.

### Vercel Deployment (Recommended for `frontend/` app)
1.  **Install Vercel CLI**
    ```bash
    npm install -g vercel
    ```
2.  **Link Project (from `frontend/` directory)**
    ```bash
    # cd frontend
    vercel link
    ```
3.  **Deploy**
    ```bash
    # cd frontend
    vercel --prod
    # Or vercel for a preview deployment
    ```
4.  **Configure environment variables in Vercel dashboard.**

### GitHub Actions
The repository should include automated CI/CD with GitHub Actions for testing, preview deployments, production deployments, security scanning, etc. (Workflow file to be created in `.github/workflows/`).

## 🔒 Security (Planned Principles)

- **Authentication & Authorization**: NextAuth.js, JWTs, RBAC.
- **Data Protection**: Encryption at rest/transit, GDPR considerations.
- **Infrastructure Security**: HTTPS, security headers, rate limiting.

## 📊 Monitoring & Analytics (Planned)

- Application monitoring (e.g., Sentry, Vercel Analytics).
- Business metrics dashboard.

## 🤝 Contributing

Details to be provided (e.g., development workflow, code standards, testing strategy).

## 📚 Additional Resources

- API Documentation (To be built)
- Deployment Guide (To be expanded)

## 📄 License
This project will be licensed under the MIT License (LICENSE file to be added).

## 🙏 Acknowledgments
- OpenAI, Vercel, Stripe, and the open-source community.

Epic Tech AI Engineering - Transforming creative workflows with unrestricted AI media generation.
