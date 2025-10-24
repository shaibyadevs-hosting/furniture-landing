import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedCollections } from '@/components/FeaturedCollections'
import { ProductSection } from '@/components/ProductSection'
import { PromotionBanner } from '@/components/PromotionBanner'
import { InteriorDesignSection } from '@/components/InteriorDesignSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="krona-one-regular min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCollections />
      <ProductSection />
      <PromotionBanner />
      <InteriorDesignSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
