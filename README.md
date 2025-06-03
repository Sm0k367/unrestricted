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
├── api/           # API documentation
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

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sm0k367/unrestricted.git
   cd unrestricted
   ```
2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```
4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. **Run the development server**
   ```bash
   npm run dev
   ```
6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Environment Variables
**Required**
```
DATABASE_URL="postgresql://username:password@localhost:5432/epic_tech_ai"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
OPENAI_API_KEY="sk-your-openai-api-key"
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
```

**OAuth Providers**
```
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

**Email Configuration**
```
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@epic-tech-ai.com"
```

### Database Schema
The application uses Prisma ORM with PostgreSQL. Key models include:

- **User**: User accounts and authentication
- **Subscription**: Billing and plan management
- **Generation**: AI content generation records
- **UsageStats**: Usage tracking and analytics
- **Team**: Team collaboration features
- **Project**: Content organization
- **Template**: Reusable generation templates
- **ApiKey**: API access management

## 🎨 Features

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

## 🔌 API Documentation

### Authentication
```bash
# Get API key from dashboard
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.epic-tech-ai.com/v1/generate
```

### Generate Text
```bash
curl -X POST https://api.epic-tech-ai.com/v1/generate \
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

### Generate Image
```bash
curl -X POST https://api.epic-tech-ai.com/v1/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "image",
    "prompt": "A futuristic city skyline",
    "settings": {
      "size": "1024x1024",
      "quality": "hd"
    }
  }'
```

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```
2. **Deploy**
   ```bash
   vercel --prod
   ```
3. **Configure environment variables in Vercel dashboard**

### Cloudflare Deployment
1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```
2. **Deploy**
   ```bash
   cd deployment/cloudflare
   ./deploy.sh production
   ```

### GitHub Actions
The repository includes automated CI/CD with GitHub Actions:

- Testing: Automated tests on pull requests
- Preview Deployments: Automatic preview deployments
- Production Deployments: Automatic production deployments on main branch
- Security Scanning: Dependency and security audits

## 🔒 Security

### Authentication & Authorization
- NextAuth.js with multiple providers
- JWT tokens with secure storage
- Role-based access control
- API key management

### Data Protection
- End-to-end encryption
- SOC 2 compliance ready
- GDPR compliance
- Regular security audits

### Infrastructure Security
- HTTPS everywhere
- Security headers
- Rate limiting
- DDoS protection

## 📊 Monitoring & Analytics

### Application Monitoring
- Real-time error tracking
- Performance monitoring
- Uptime monitoring
- User analytics

### Business Metrics
- Usage analytics
- Revenue tracking
- Customer metrics
- API usage statistics

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Code Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Conventional commits

### Testing
```bash
npm run test          # Run tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## 📚 Additional Resources

### Documentation
- API Documentation
- Deployment Guide
- Contributing Guide
- Security Policy

### Support
- Documentation: docs.epic-tech-ai.com
- Community: community.epic-tech-ai.com
- Support: support@epic-tech-ai.com
- Sales: sales@epic-tech-ai.com

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- OpenAI for AI capabilities
- Vercel for hosting platform
- Stripe for payment processing
- All contributors and supporters

Epic Tech AI Engineering - Transforming creative workflows with unrestricted AI media generation.
