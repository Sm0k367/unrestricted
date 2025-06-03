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
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background Glows */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 blur-[100px] rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 blur-[100px] rounded-full animate-pulse-slow delay-1000"></div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
            Unleash Your Creative Potential
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Generate <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Unlimited</span> Content
            <br />
            with Epic Tech AI
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Our advanced AI platform empowers you to create high-quality text, images, code, and more with unparalleled speed and control.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()} // Replace with actual form submission logic
            className="mt-10 max-w-md mx-auto sm:flex sm:justify-center"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 text-base rounded-md sm:max-w-xs focus:ring-primary focus:border-primary"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto px-6 py-3 text-base font-medium rounded-md shadow-md"
              variant="gradient"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. Start creating instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          {demoCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-xl p-6 shadow-lg bg-gradient-to-br ${card.gradient} text-white relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <card.icon className="h-10 w-10 mb-4 opacity-80" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm opacity-90">{card.description}</p>
                <Button variant="ghost" size="sm" className="mt-4 text-white hover:bg-white/20 border border-white/30">
                  Learn More <Play className="ml-2 h-4 w-4 fill-white" />
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

