"use client";

import Image from "next/image";

export function InteriorDesignSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Dotted background accent */}
      <div className="absolute top-4 left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-60 pointer-events-none select-none">
        <Image
          src="/gridsection/Dot.png"
          alt="Dotted Pattern"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left image grid and Mobile Sofa */}
          <div className="relative w-full flex flex-col items-center justify-center order-2 lg:order-1">
            {/* Image Stack */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-[340px] sm:h-[420px] lg:h-[500px]">

              {/* Back tall image */}
              <div className="absolute left-0 top-0 w-[58%] h-[80%] rounded-2xl overflow-hidden shadow-md z-10">
                <Image
                  src="/gridsection/img-grid-1 1.png"
                  alt="Interior 1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second grid image (top right) */}
              <div className="absolute right-[8%] top-0 w-[34%] h-[44%] rounded-xl overflow-hidden shadow-md z-10">
                <Image
                  src="/gridsection/img-grid-2 1.png"
                  alt="Interior 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third grid image (bottom right) */}
              <div className="absolute right-0 bottom-0 w-[42%] h-[52%] rounded-2xl overflow-hidden shadow-lg z-20">
                <Image
                  src="/gridsection/img-grid-3 1.png"
                  alt="Interior 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Sofa image — Mobile only (below image stack) */}
            <div className="lg:hidden relative w-full max-w-xs sm:max-w-sm mt-12 mx-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
              <Image
                src="/gridsection/sofa 1.png"
                alt="Sofa"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right text */}
          <div className="order-1 lg:order-2 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-600/40" />
              <span className="text-amber-600 font-bold text-xs tracking-[0.28em] uppercase">Interior Design</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              We help you make<br />
              <span className="text-[#0b132b]">Modern Interior Design</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Transform your space into a reflection of your style. Our modern interior
              design approach brings harmony, texture, and creativity together to make
              every corner feel fresh, inviting, and uniquely yours.
            </p>

            {/* Sofa image — Desktop only (inline, part of flow) */}
            <div className="hidden lg:block relative w-full max-w-xs sm:max-w-sm mt-4 mx-auto lg:mx-0 drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
              <Image
                src="/gridsection/sofa 1.png"
                alt="Sofa"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
