import { Metadata } from 'next'
import { HeroSection } from '@/components/layout/hero-section'
import { FeaturesSection } from '@/components/layout/features-section'
import { PricingSection } from '@/components/layout/pricing-section'
import { TestimonialsSection } from '@/components/layout/testimonials-section'
import { CTASection } from '@/components/layout/cta-section'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Epic Tech AI Engineering - Unrestricted Media Generation Platform',
  description: 'Transform your creative workflow with our advanced AI platform. Generate text, images, code, and multimedia content with enterprise-grade reliability and API access.',
}

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
