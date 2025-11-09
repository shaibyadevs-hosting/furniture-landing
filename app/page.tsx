"use client";

import { useState } from 'react';
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedCollections } from '@/components/FeaturedCollections'
import { ProductSection } from '@/components/ProductSection'
import { PromotionBanner } from '@/components/PromotionBanner'
import { InteriorDesignSection } from '@/components/InteriorDesignSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FollowUsSection } from '@/components/FollowUsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Chair');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="krona-one-regular min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="products">
        <FeaturedCollections 
          activeCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <ProductSection selectedCategory={selectedCategory} />
      </section>
      <PromotionBanner />
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
