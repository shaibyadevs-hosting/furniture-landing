import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { InspirationSection } from '@/components/InspirationSection'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { SpacesSection } from '@/components/SpacesSection'
import { TransformationsSection } from '@/components/TransformationsSection'
import { ProcessSection } from '@/components/ProcessSection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ClientsSection } from '@/components/ClientsSection'
import { AboutSection } from '@/components/AboutSection'
import { FollowUsSection } from '@/components/FollowUsSection'
import { FAQSection } from '@/components/FAQSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfbf9]">
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
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ClientsSection />
        <AboutSection />
        <FollowUsSection />
      </section>
      <section id="contact">
        <FAQSection />
        <ContactSection />
      </section>
      <Footer />
    </div>
  )
}
