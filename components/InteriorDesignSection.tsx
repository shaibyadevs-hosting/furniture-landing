"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export function InteriorDesignSection() {
  const features = [
    "Modern, Elegant Furniture Designs",
    "Tailored to Your Space",
    "Crafted for Comfort & Style",
    "Premium Quality, Lasting Durability",
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-visible pt-[5vw] pb-[3vw] md:pt-[4vw] md:pb-[2vw]">
      {/* dotted background */}
      <div className="absolute top-[0.5vw] left-[0.5vw] w-[35vw] h-[35vw] md:w-[10vw] md:h-[10vw] opacity-100
      max-sm:translate-y-[30vw]
      max-sm:w-[30vw]
      max-sm:h-[30vw]
      ">
        <Image
          src="/gridsection/Dot.png"
          alt="Dotted Pattern"
          fill
          className="object-contain pointer-events-none select-none"
        />
      </div>

      <div className="w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4vw] items-center">
        {/* Left image grid */}
        <div className="relative order-1 lg:order-1 w-full flex justify-center md:justify-start">
          <div className="grid grid-cols-2 gap-[2vw] lg:gap-[4vw] relative">
            {/* First image */}
            <div className="space-y-[1vw] translate-y-[2vw] max-sm:translate-y-[1vw] ">
              <div className="relative aspect-[4/6] rounded-l-[1vw] overflow-hidden scale-[1.05] w-[26vw] max-sm:w-[40vw]  md:w-[32vw] mx-auto">
                <Image
                  src="/gridsection/img-grid-1 1.png"
                  alt="Interior 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second + third stacked images */}
            <div className="space-y-[1vw] pt-[2vw] relative">
              {/* Second grid image */}
              <div className="relative aspect-square rounded-xl overflow-hidden w-[10vw] max-sm:translate-y-[-2vw] max-sm:w-[38vw] md:w-[16vw] lg:w-[14vw] mx-auto lg:mr-[-5vw]">
                <Image
                  src="/gridsection/img-grid-2 1.png"
                  alt="Interior 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third grid image */}
              <div
                className="
                  absolute 
                  right-[-1vw] 
                  bottom-[-5vw] 
                  max-sm:right-[28vw] 
                  max-sm:bottom-[-9vw] 
                  max-sm:w-[28vw] 
                  
                  md:right-[3vw] 
                  md:bottom-[3vw] 
                  lg:right-[-1vw] 
                  lg:bottom-[-5vw]
                  aspect-[3/4] 
                  rounded-[0.6vw] 
                  overflow-hidden 
                  w-[18vw] sm:w-[28vw] md:w-[20vw] lg:w-[22vw]
                  z-[10]
                "
              >
                <Image
                  src="/gridsection/img-grid-3 1.png"
                  alt="Interior 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right text and sofa */}
        <div className="relative order-3 lg:order-2 w-full pl-[5vw] max-sm:mt-[13vw] sm:pl-[8vw] md:pl-[6vw]">
          <h2 className="text-[3vw] md:text-[2vw] font-semibold text-gray-900 leading-tight mb-[2vw]">
            We help you make
            <br />
            <span className="text-gray-900">Modern Interior Design</span>
          </h2>

          <p className="text-[1.2vw] md:text-[0.9vw] text-gray-600 mb-[3vw] leading-relaxed max-w-[38vw] sm:max-w-[70vw]">
            Transform your space into a reflection of your style. Our modern interior
            design approach brings harmony, texture, and creativity together to make
            every corner feel fresh, inviting, and uniquely yours.
          </p>

          <div className="grid grid-cols-2 gap-y-[1.5vw] gap-x-[1vw] mb-[3vw]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-[0.6vw]">
                <div className="bg-gray-900 flex items-center justify-center rounded-full w-[1.3vw] h-[1.3vw] flex-shrink-0">
                  <Check className="text-white w-[0.6vw] h-[0.6vw]" />
                </div>
                <span className="text-gray-700 text-[1vw] md:text-[0.8vw] leading-[1.3]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Button 
            onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
            className="bg-gray-900 hover:bg-gray-800 text-white text-[1vw] md:text-[0.85vw] px-[2vw] py-[1vw] rounded-full"
          >
            Explore
          </Button>

          {/* Sofa image - Responsive positioning */}
          <div className="absolute 
            bottom-[-20vw] right-[1vw] w-[30vw] h-[30vw] 
            max-sm:bottom-[14vw] max-sm:right-[-3vw] max-sm:z-[10] max-sm:w-[48vw] max-sm:h-[48vw]
            md:bottom-[-30vw] md:right-[3vw] md:w-[35vw] md:h-[35vw]
            lg:bottom-[-35vw] lg:right-[2vw] lg:w-[35vw] lg:h-[35vw]
            xl:bottom-[-35vw] xl:right-[1vw] xl:w-[35vw] xl:h-[35vw]
            z-[10]">
            <Image
              src="/gridsection/sofa 1.png"
              alt="Sofa"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
