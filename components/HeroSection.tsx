"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const heroImages = [
    "/hero/Luxury_burgundy_velvet_accent_chair_with_tufted_backrest.png",
    "/hero/Premium_L-shaped_sectional_sofa_in_charcoal_gray_with_wooden_base.png",
    "/hero/Premium_wooden_dining_table_with_elegant_chairs_in_walnut_finish.png",
    "/hero/img1.png",
    "/hero/img2.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || heroImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % heroImages.length;
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, heroImages.length]);

  return (
    <section 
      className='hero-carousel relative min-h-[35vh] sm:min-h-[70vh] md:min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images with fade effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="hero-carousel-bg absolute inset-0 transition-opacity duration-[2000ms] ease"
          style={{
            backgroundImage: `url(${encodeURI(image)})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600/50 via-slate-700/50 to-slate-800/50 z-2"></div>
      
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydi0yaC0ydjJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTR2Mmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptMC00aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50 z-3"></div>

      <div className='container mx-auto px-4 sm:px-6 relative z-10 text-center pt-4 sm:pt-16 md:pt-20 pb-4 sm:pb-12'>
        <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl max-w-7xl mx-auto font-extrabold text-white mb-3 sm:mb-6 leading-tight px-4 drop-shadow-2xl' style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' }}>
          Crafting <span className='text-blue-300 drop-shadow-lg' style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(59, 130, 246, 0.6)' }}>Comfort</span>{" "}
          <span className='text-white'>&</span>{" "}
          <span className='text-blue-300 drop-shadow-lg' style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(59, 130, 246, 0.6)' }}>Elegance</span>
          <br className='hidden sm:block' />
          <span className='text-white'>with Every Piece</span>
        </h1>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-8 md:mt-12 mb-4 sm:mb-12 md:mb-16 px-4'>
          <Button
            size='sm'
            onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
            className='bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-6 lg:px-8 py-1.5 sm:py-3 lg:py-4 text-xs sm:text-base lg:text-lg font-semibold rounded-md transition-all w-full sm:w-auto'
          >
            Shop Now →
          </Button>
          <Button
            size='sm'
            variant='outline'
            className='border-t-2 border-white text-white bg-slate-800 hover:bg-white hover:text-slate-800 px-2 sm:px-6 lg:px-8 py-1.5 sm:py-3 lg:py-4 text-xs sm:text-base lg:text-lg font-semibold rounded-md transition-all w-full sm:w-auto'
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
