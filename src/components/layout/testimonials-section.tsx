'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Content Creator',
      company: 'TechBlog Pro',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Epic Tech AI has revolutionized my content creation workflow. I can generate high-quality articles, images, and even code snippets in minutes. The quality is consistently impressive.',
      rating: 5,
      highlight: 'Increased productivity by 300%'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'StartupFlow',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The API integration was seamless, and the documentation is excellent. We\'ve built our entire content generation pipeline on Epic Tech AI. The reliability and speed are unmatched.',
      rating: 5,
      highlight: 'Saved 40 hours/week on content creation'
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Director',
      company: 'GrowthCorp',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'From social media posts to technical documentation, Epic Tech AI handles it all. The team collaboration features have transformed how our marketing team works together.',
      rating: 5,
      highlight: 'Generated 1000+ marketing assets'
    },
    {
      name: 'David Kim',
      role: 'Software Engineer',
      company: 'DevTools Inc',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The code generation capabilities are incredible. It understands context, follows best practices, and even generates comprehensive documentation. It\'s like having a senior developer on demand.',
      rating: 5,
      highlight: 'Accelerated development by 250%'
    },
    {
      name: 'Lisa Thompson',
      role: 'Creative Director',
      company: 'DesignStudio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      content: 'The image generation quality is outstanding. We use it for client presentations, social media, and even print materials. The style consistency and customization options are perfect.',
      rating: 5,
      highlight: 'Created 500+ unique designs'
    },
    {
      name: 'James Wilson',
      role: 'Product Manager',
      company: 'InnovateLabs',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      content: 'Epic Tech AI has become an essential part of our product development process. From user stories to technical specs, it helps us maintain consistency and quality across all documentation.',
      rating: 5,
      highlight: 'Improved documentation quality by 200%'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '10M+', label: 'Generations Created' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9/5', label: 'User Rating' }
  ]

  return (


section
) }
