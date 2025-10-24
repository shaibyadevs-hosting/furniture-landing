"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className='hero-bg relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800'>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydi0yaC0ydjJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTR2Mmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptMC00aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className='container mx-auto px-4 sm:px-6 relative z-10 text-center pt-20 pb-12'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-7xl mx-auto font-bold text-white mb-6 leading-tight px-4'>
          Crafting <span className='text-blue-400'>Comfort</span>{" "}
          <span className='text-white'>&</span>{" "}
          <span className='text-blue-400'>Elegance</span>
          <br className='hidden sm:block' />
          <span className='text-white'>with Every Piece</span>
        </h1>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 mb-12 sm:mb-16 px-4'>
          <Button
            size='lg'
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-md transition-all w-full sm:w-auto'
          >
            Shop Now →
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-t-2 border-white text-white bg-slate-800 hover:bg-white hover:text-slate-800 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-md transition-all w-full sm:w-auto'
          >
            Contact Us
          </Button>
        </div>

        {/* <div className='mt-12 sm:mt-20 relative px-4'>
          <div className='absolute left-4 sm:left-10 top-20 hidden lg:block'>
            <div className='w-24 h-32 lg:w-32 lg:h-40 bg-white/10 rounded-lg backdrop-blur-sm p-3 lg:p-4'>
              <div className='w-full h-full bg-green-600/30 rounded'></div>
            </div>
          </div>

          <div className='flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap'>
            <div className='w-64 h-40 sm:w-80 sm:h-44 md:w-96 md:h-48 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl sm:rounded-3xl shadow-2xl transform -rotate-2'></div>
            <div className='w-64 h-40 sm:w-80 sm:h-44 md:w-96 md:h-48 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl sm:rounded-3xl shadow-2xl transform rotate-2 hidden sm:block'></div>
          </div>

          <div className='absolute right-4 sm:right-10 top-0 hidden lg:block'>
            <div className='w-24 h-36 lg:w-32 lg:h-48 bg-white/5 rounded-lg backdrop-blur-sm'></div>
          </div>

          <div className='absolute right-12 sm:right-20 bottom-10 hidden xl:block'>
            <div className='w-32 h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full backdrop-blur-sm'></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
