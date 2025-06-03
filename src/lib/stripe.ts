import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export const getStripe = () => {
  if (typeof window !== 'undefined') {
    const stripePromise = import('@stripe/stripe-js').then(({ loadStripe }) =>
      loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
    )
    return stripePromise
  }
  return null
}

// Subscription plans configuration
export const SUBSCRIPTION_PLANS = {
  CREATOR: {
    name: 'Creator',
    price: 19,
    annualPrice: 15,
    stripePriceId: process.env.STRIPE_CREATOR_PRICE_ID!,
    stripeAnnualPriceId: process.env.STRIPE_CREATOR_ANNUAL_PRICE_ID!,
    features: [
      '1,000 generations/month',
      'All AI models',
      'Basic templates',
      'Community support',
      'Export formats',
      'Basic analytics',
      'Mobile app access'
    ],
    limits: {
      generations: 1000,
      teamMembers: 1,
      projects: 10,
      apiCalls: 0
    }
  },
  PRO: {
    name: 'Pro',
    price: 49,
    annualPrice: 39,
    stripePriceId: process.env.STRIPE_PRO_PRICE_ID!,
    stripeAnnualPriceId: process.env.STRIPE_PRO_ANNUAL_PRICE_ID!,
    features: [
      '5,000 generations/month',
      'Priority processing',
      'Advanced templates',
      'Email support',
      'Custom branding',
      'Advanced analytics',
      'Team collaboration (3 members)',
      'API access (basic)',
      'Webhook integrations'
    ],
    limits: {
      generations: 5000,
      teamMembers: 3,
      projects: 50,
      apiCalls: 10000
    }
  },
  TEAM: {
    name: 'Team',
    price: 149,
    annualPrice: 119,
    stripePriceId: process.env.STRIPE_TEAM_PRICE_ID!,
    stripeAnnualPriceId: process.env.STRIPE_TEAM_ANNUAL_PRICE_ID!,
    features: [
      '20,000 generations/month',
      'Ultra-fast processing',
      'Custom model fine-tuning',
      'Priority support',
      'Advanced team management',
      'Unlimited team members',
      'Full API access',
      'Custom integrations',
      'Advanced security',
      'Usage analytics'
    ],
    limits: {
      generations: 20000,
      teamMembers: -1, // unlimited
      projects: 200,
      apiCalls: 100000
    }
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 999,
    annualPrice: 799,
    stripePriceId: process.env.STRIPE_ENTERPRISE_PRICE_ID!,
    stripeAnnualPriceId: process.env.STRIPE_ENTERPRISE_ANNUAL_PRICE_ID!,
    features: [
      'Unlimited generations',
      'Dedicated infrastructure',
      'Custom model training',
      'White-label solutions',
      'Dedicated account manager',
      'SLA guarantees',
      'Advanced security & compliance',
      'Custom integrations',
      'On-premise deployment',
      'Priority feature requests'
    ],
    limits: {
      generations: -1, // unlimited
      teamMembers: -1, // unlimited
      projects: -1, // unlimited
      apiCalls: -1 // unlimited
    }
  }
} as const

export type SubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS

// Helper functions
export function formatPrice(price: number, currency: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}

export function getPlanLimits(plan: SubscriptionPlan) {
  return SUBSCRIPTION_PLANS[plan].limits
}

export function canExceedLimit(limit: number, current: number): boolean {
  return limit === -1 || current < limit
}
