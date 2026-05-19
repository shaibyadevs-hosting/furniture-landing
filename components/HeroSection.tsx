"use client";

import { useState, useEffect } from "react";

export function HeroSection() {
  const heroImages = [
    "/modular kitchen.png",
    "/office.png",
    "/Home furniture.png",
    "/hotel furniture.png",
    "/bedroom set.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % heroImages.length;
        return nextIndex;
      });
    }, 5000); // Changed to 5 seconds to let the slow zoom play out beautifully

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      className='hero-carousel relative min-h-[65vh] sm:min-h-[80vh] md:min-h-screen flex flex-col justify-end overflow-hidden'
    >
      {/* Background images (No zoom, full size) */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-carousel-bg absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${index === currentImageIndex
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0'
            }`}
          style={{
            backgroundImage: `url(${encodeURI(image)})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Gradient only at the bottom to make text readable, leaving the rest of the image in full view */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none"></div>

      {/* Dotted pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydi0yaC0ydjJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTR2Mmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptMC00aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 z-10 pointer-events-none"></div>

      {/* Text Content - Moved to the bottom */}
      <div className='container mx-auto px-6 sm:px-12 relative z-30 pb-20 sm:pb-32 lg:pb-40'>
        <div className={`max-w-4xl transition-all duration-1000 transform translate-y-0 opacity-100`}>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3 sm:mb-4 leading-tight tracking-tight drop-shadow-lg'>
            Crafting <span className='font-bold text-white'>Comfort</span> <br className="hidden sm:block" />
            & <span className='font-bold text-white'>Elegance</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl max-w-2xl font-light drop-shadow-md">
            India's leading manufacturer of premium modular furniture.
            Elevate your spaces with uncompromised quality.
          </p>
        </div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-8 right-8 sm:right-12 z-30 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentImageIndex ? 'w-12 bg-gray-800' : 'w-4 bg-gray-400 hover:bg-gray-600'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
