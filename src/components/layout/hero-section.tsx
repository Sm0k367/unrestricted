'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Code, 
  Image, 
  FileText,
  Play,
  CheckCircle
} from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [email, setEmail] = useState('')

  const features = [
    'Generate unlimited content',
    'Access to all AI models',
    'API access included',
    'Enterprise-grade security'
  ]

  const demoCards = [
    {
      icon: FileText,
      title: 'Text Generation',
      description: 'Create articles, blogs, and copy',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Image,
      title: 'Image Creation',
      description: 'Generate stunning visuals',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Code Generation',
      description: 'Build applications faster',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    

section
) }

