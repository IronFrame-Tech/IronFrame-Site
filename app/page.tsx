import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { DifferentiatorsSection } from '@/components/sections/DifferentiatorsSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <HowItWorksSection />
      <CTASection />
    </>
  )
}
