"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SpacesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bentoSquares = [
    { name: "Modular Kitchen", link: "modular-kitchen", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop" },
    { name: "Office Furniture", link: "office-furniture", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
    { name: "Hotel Furniture", link: "hotel-furniture", image: "https://images.unsplash.com/photo-1582719478250-c894e4dc24cb?w=800&h=800&fit=crop" },
    { name: "Home Furniture", link: "home-furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop" }
  ];

  const slideshowProducts = [
    { title: "Premium Bedroom Sets", subtitle: "Transform your sanctuary", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=1200&fit=crop", link: "/category/bedroom-furniture" },
    { title: "Luxury Living Spaces", subtitle: "Crafted for comfort", image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=1200&h=1200&fit=crop", link: "/category/home-furniture" },
    { title: "Executive Office", subtitle: "Elevate your workspace", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=1200&fit=crop", link: "/category/office-furniture" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowProducts.length);
    }, 4000); // Breathe effect every 4 seconds
    return () => clearInterval(timer);
  }, [slideshowProducts.length]);

  return (
    <div className="py-12 sm:py-16">
      {/* Category Selection Row */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
          Explore by <span className="text-amber-500">Space</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
          Discover furniture collections designed perfectly for every room.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 min-h-[500px] lg:min-h-[600px]">
          
          {/* Left Side: Slideshow Block */}
          <div className="relative rounded-2xl overflow-hidden group min-h-[400px] lg:min-h-full shadow-lg">
            {slideshowProducts.map((slide, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{slide.title}</h3>
                  <p className="text-lg text-gray-200 mb-6">{slide.subtitle}</p>
                  <Link href={slide.link} className="inline-flex items-center text-white font-semibold group/link">
                    <span className="mr-2 text-lg">Shop now</span>
                    <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
            
            {/* Slide Indicators */}
            <div className="absolute top-6 right-6 flex gap-2 z-20">
              {slideshowProducts.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: 4 Squares Masonry */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 min-h-[500px] lg:min-h-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top Left - Shorter */}
              <Link 
                href={`/category/${bentoSquares[0].link}`}
                className="relative rounded-2xl overflow-hidden group shadow-md block flex-[4]"
              >
                <Image src={bentoSquares[0].image} alt={bentoSquares[0].name} fill className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full flex items-center justify-between z-10">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-tight">{bentoSquares[0].name}</h3>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>

              {/* Bottom Left - Taller */}
              <Link 
                href={`/category/${bentoSquares[1].link}`}
                className="relative rounded-2xl overflow-hidden group shadow-md block flex-[6]"
              >
                <Image src={bentoSquares[1].image} alt={bentoSquares[1].name} fill className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full flex items-center justify-between z-10">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-tight">{bentoSquares[1].name}</h3>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top Right - Taller */}
              <Link 
                href={`/category/${bentoSquares[2].link}`}
                className="relative rounded-2xl overflow-hidden group shadow-md block flex-[6]"
              >
                <Image src={bentoSquares[2].image} alt={bentoSquares[2].name} fill className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full flex items-center justify-between z-10">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-tight">{bentoSquares[2].name}</h3>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>

              {/* Bottom Right - Shorter */}
              <Link 
                href={`/category/${bentoSquares[3].link}`}
                className="relative rounded-2xl overflow-hidden group shadow-md block flex-[4]"
              >
                <Image src={bentoSquares[3].image} alt={bentoSquares[3].name} fill className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full flex items-center justify-between z-10">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-tight">{bentoSquares[3].name}</h3>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
