import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { InspirationSection } from '@/components/InspirationSection'
import { SpacesSection } from '@/components/SpacesSection'
import { InteriorDesignSection } from '@/components/InteriorDesignSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
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
      
      {/* Explore By Space Section */}
      <SpacesSection />
      
      <section id="about">
        <InteriorDesignSection />
        <TestimonialsSection />
        <FollowUsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  )
}
