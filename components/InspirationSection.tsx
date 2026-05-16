import Image from 'next/image';

export function InspirationSection() {
  return (
    <section className="bg-white relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left Side: Image Collage */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[580px] w-full">
            {/* Back tall image */}
            <div className="absolute left-0 top-0 w-[62%] h-[82%] rounded-3xl overflow-hidden shadow-lg z-10">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Modern interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Pop-out Office Desk PNG — contained within the collage box */}
            <div className="absolute right-0 bottom-0 w-[54%] sm:w-[48%] z-20 drop-shadow-[0_16px_24px_rgba(0,0,0,0.15)]">
              <Image
                src="/office desk.png"
                alt="Popout Furniture"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Accent dot */}
            <div className="absolute top-[78%] left-[58%] w-3 h-3 rounded-full bg-amber-400 z-30" />
          </div>

          {/* Right Side: Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber-600/40" />
              <span className="text-amber-600 font-bold text-xs tracking-[0.28em] uppercase">Our Craft</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] mb-6 tracking-tight">
              Crafting<br />
              <span className="text-[#0b132b]">Spaces</span><br />
              That Inspire
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-lg">
              From precision-engineered modular kitchens to bespoke bedroom suites — Touchwood Furnitech shapes the spaces where life unfolds beautifully.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
