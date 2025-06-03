'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Code,
  CheckCircle
} from 'lucide-react'

export function CTASection() {
  const [email, setEmail] = useState('')

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in under 60 seconds'
    },
    {
      icon: Shield,
      title: 'No Risk',
      description: '14-day free trial, cancel anytime'
    },
    {
      icon: Code,
      title: 'Full Access',
      description: 'All features unlocked from day one'
    }
  ]

  const features = [
    'Generate unlimited content during trial',
    'Access to all AI models and tools',
    'Team collaboration features',
    'API access and documentation',
    'Priority customer support',
    'No credit card required'
  ]

  return (


section
) }
