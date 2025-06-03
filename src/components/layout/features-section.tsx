'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Shield,
  Code,
  Image,
  FileText,
  Music,
  Video,
  Globe,
  Users,
  BarChart3,
  Lock,
  Cpu,
  Palette,
  MessageSquare,
  Workflow,
  Database
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FeaturesSection() {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Generation',
      description: 'Generate content in seconds with our optimized AI infrastructure and global CDN.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption and advanced access controls.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Developer-First API',
      description: 'RESTful APIs, SDKs, webhooks, and comprehensive documentation for seamless integration.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration, shared workspaces, and advanced permission management.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const contentTypes = [
    {
      icon: FileText,
      title: 'Text Generation',
      description: 'Articles, blogs, marketing copy, technical documentation, and creative writing.',
      features: ['Multiple AI models', 'Custom templates', 'Tone adjustment', 'Multi-language support']
    },
    {
      icon: Image,
      title: 'Image Creation',
      description: 'High-quality images, artwork, logos, and visual content for any purpose.',
      features: ['Multiple styles', 'Custom dimensions', 'Batch generation', 'Style transfer']
    },
    {
      icon: Code,
      title: 'Code Generation',
      description: 'Full applications, functions, scripts, and documentation in 50+ languages.',
      features: ['Multiple languages', 'Framework support', 'Code review', 'Documentation']
    },
    {
      icon: Music,
      title: 'Audio & Music',
      description: 'Original music, sound effects, voiceovers, and audio content.',
      features: ['Multiple genres', 'Custom length', 'High quality', 'Commercial use'],
      badge: 'Coming Soon'
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Animated videos, presentations, and multimedia content.',
      features: ['Multiple formats', 'Custom duration', 'HD quality', 'Animations'],
      badge: 'Coming Soon'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Custom workflows, integrations, and automated content pipelines.',
      features: ['Custom triggers', 'Multi-step flows', 'Integrations', 'Scheduling']
    }
  ]

  const enterpriseFeatures = [
    {
      icon: Database,
      title: 'Custom Model Training',
      description: 'Train models on your data for specialized use cases'
    },
    {
      icon: Lock,
      title: 'Private Cloud Deployment',
      description: 'Deploy on your infrastructure for maximum security'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Detailed usage analytics and performance insights'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment for optimal performance'
    },
    {
      icon: MessageSquare,
      title: '24/7 Priority Support',
      description: 'Dedicated support team and SLA guarantees'
    },
    {
      icon: Palette,
      title: 'White-label Solutions',
      description: 'Fully customizable and brandable platform'
    }
  ]

  return (


section
) }
