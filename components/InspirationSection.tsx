import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function InspirationSection() {
  const features = [
    "Modern, Elegant Furniture Designs",
    "Tailored to Your Space",
    "Crafted for Comfort & Style",
    "Premium Quality, Lasting Durability"
  ];

  return (
    <section className="pt-28 sm:pt-60 bg-white relative" style={{ paddingBottom: '10rem' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* Left Side: Image Collage */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full mt-10 lg:mt-0">
            {/* Back tall image */}
            <div className="absolute left-0 top-0 w-[65%] h-[80%] rounded-3xl overflow-hidden shadow-sm z-10">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Modern interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Pop-out Office Desk PNG */}
            <div className="absolute -right-0 sm:-right-8 lg:-right-12 bottom-0 w-[60%] sm:w-[50%] h-auto z-30 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] translate-y-12">
              <Image
                src="/office desk.png"
                alt="Popout Furniture"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="max-w-2xl xl:pl-10 z-40 relative mt-16 lg:mt-0 bg-white/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-3xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-gray-900 leading-[1.05] mb-8 tracking-tight">
              Crafting<br />
              <span className="text-[#0b132b]">Spaces</span><br />
              That Inspire
            </h2>
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-gray-700 mb-10 leading-relaxed font-light">
              From precision-engineered modular kitchens to bespoke bedroom suites — Touchwood Furnitech shapes the spaces where life unfolds beautifully.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
