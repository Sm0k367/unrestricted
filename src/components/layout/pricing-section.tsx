'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Check,
  Zap,
  Crown,
  Building,
  Code,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Creator',
      description: 'Perfect for individual creators and small projects',
      icon: Sparkles,
      price: { monthly: 19, annual: 15 },
      originalPrice: { monthly: 29, annual: 23 },
      badge: 'Most Popular',
      features: [
        '1,000 generations/month',
        'All AI models (GPT-4, DALL-E, Claude)',
        'Basic templates library',
        'Community support',
        'Export in multiple formats',
        'Basic analytics',
        'Mobile app access'
      ],
      cta: 'Start Creating',
      highlight: true
    },
    {
      name: 'Pro',
      description: 'For professionals and growing businesses',
      icon: Zap,
      price: { monthly: 49, annual: 39 },
      originalPrice: { monthly: 69, annual: 55 },
      features: [
        '5,000 generations/month',
        'Priority processing (2x faster)',
        'Advanced templates & workflows',
        'Email support',
        'Custom branding',
        'Advanced analytics',
        'Team collaboration (3 members)',
        'API access (basic)',
        'Webhook integrations'
      ],
      cta: 'Go Pro',
      highlight: false
    },
    {
      name: 'Team',
      description: 'For teams and collaborative projects',
      icon: Crown,
      price: { monthly: 149, annual: 119 },
      originalPrice: { monthly: 199, annual: 159 },
      features: [
        '20,000 generations/month',
        'Ultra-fast processing (5x faster)',
        'Custom model fine-tuning',
        'Priority support',
        'Advanced team management',
        'Unlimited team members',
        'Full API access',
        'Custom integrations',
        'Advanced security features',
        'Usage analytics & reporting'
      ],
      cta: 'Scale Your Team',
      highlight: false
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      icon: Building,
      price: { monthly: 999, annual: 799 },
      badge: 'White-label Ready',
      features: [
        'Unlimited generations',
        'Dedicated infrastructure',
        'Custom model training',
        'White-label solutions',
        'Dedicated account manager',
        'SLA guarantees (99.9% uptime)',
        'Advanced security & compliance',
        'Custom integrations',
        'On-premise deployment options',
        'Priority feature requests'
      ],
      cta: 'Contact Sales',
      highlight: false,
      isEnterprise: true
    }
  ]

  const apiPricing = [
    {
      name: 'Developer API',
      description: 'Pay-per-use API access for developers',
      icon: Code,
      pricing: [
        { type: 'Text Generation', price: '$0.02', unit: 'per 1K tokens' },
        { type: 'Image Generation', price: '$0.08', unit: 'per image' },
        { type: 'Code Generation', price: '$0.05', unit: 'per request' },
        { type: 'Audio Generation', price: '$0.15', unit: 'per minute' }
      ],
      features: [
        'RESTful API access',
        'Multiple AI providers',
        'Comprehensive SDKs',
        'Webhook support',
        'Rate limiting controls',
        'Usage analytics',
        'Developer documentation',
        'Community support'
      ],
      cta: 'Start Building',
      highlight: false
    }
  ]

  const getPrice = (plan: any) => {
    const price = isAnnual ? plan.price.annual : plan.price.monthly
    const originalPrice = plan.originalPrice ? (isAnnual ? plan.originalPrice.annual : plan.originalPrice.monthly) : null
    return { price, originalPrice }
  }

  return (


section
) }
