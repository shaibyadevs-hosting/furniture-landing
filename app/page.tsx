import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { InspirationSection } from '@/components/InspirationSection'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { SpacesSection } from '@/components/SpacesSection'
import { TransformationsSection } from '@/components/TransformationsSection'
import { ProcessSection } from '@/components/ProcessSection'
import { InteriorDesignSection } from '@/components/InteriorDesignSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ClientsSection } from '@/components/ClientsSection'
import { FollowUsSection } from '@/components/FollowUsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      
      {/* New Inspiration Section replacing FeaturedCollections */}
      <InspirationSection />

      {/* Featured Products Showcase */}
      <FeaturedProducts />
      
      {/* Explore By Space Section */}
      <SpacesSection />

      {/* Before & After Transformations Section */}
      <TransformationsSection />
      
      {/* Vertical Process Timeline */}
      <ProcessSection />
      
      <section id="about">
        <InteriorDesignSection />
        <TestimonialsSection />
        <ClientsSection />
        <FollowUsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  )
}
