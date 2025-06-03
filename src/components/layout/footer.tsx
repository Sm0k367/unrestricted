'use client'

import Link from 'next/link'
import {
  Zap,
  Twitter,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

export function Footer() {
  const navigation = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '/docs' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'Status', href: '/status' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Templates', href: '/templates' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Webinars', href: '/webinars' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  }

  const social = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/epictechai',
      icon: Twitter
    },
    {
      name: 'GitHub',
      href: 'https://github.com/epic-tech-ai',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/epic-tech-ai',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:hello@epic-tech-ai.com',
      icon: Mail
    }
  ]

  return (


footer
) }
