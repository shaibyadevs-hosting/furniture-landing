"use client";

import { Button } from "@/components/ui/button";

export function PromotionBanner() {
  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
          <div
            className='relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 p-6 sm:p-8 lg:p-12 min-h-[250px] sm:min-h-[300px] flex flex-col justify-center'
            style={{
              backgroundImage: "url(/promo2.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className='absolute right-0 top-0 w-1/2 h-full opacity-20'>
              <div className='absolute right-6 sm:right-10 top-6 sm:top-10 w-16 h-24 sm:w-24 sm:h-32 bg-white/40 rounded-lg transform rotate-12'></div>
              <div className='absolute right-12 sm:right-20 top-24 sm:top-32 w-16 sm:w-20 h-16 sm:h-20 bg-white/30 rounded-full'></div>
            </div>
            <div className='relative z-10'>
              <p className='text-xs sm:text-sm font-semibold text-blue-800 mb-2'>
                Up to 25% Discount
              </p>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Explore Our Luxurious Sofa
                <br />
                Set Collection
              </h3>
              <Button className='bg-gray-900 hover:bg-gray-800 text-white text-sm py-2'>
                Shop Now
              </Button>
            </div>
          </div>

          <div
            className='relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 p-6 sm:p-8 lg:p-12 min-h-[250px] sm:min-h-[300px] flex flex-col justify-center'
            style={{
              backgroundImage: "url(/promo1.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className='absolute right-0 top-0 w-1/2 h-full opacity-20'>
              <div className='absolute right-10 sm:right-16 top-6 sm:top-8 w-12 h-20 sm:w-16 sm:h-24 bg-white/20 rounded-lg transform -rotate-12'></div>
              <div className='absolute right-6 sm:right-10 bottom-16 sm:bottom-20 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full'></div>
            </div>
            <div className='relative z-10'>
              <p className='text-xs sm:text-sm font-semibold text-green-400 mb-2'>
                20% Diwali Discount
              </p>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4'>
                New Combo Collection
              </h3>
              <Button className='bg-white hover:bg-gray-100 text-gray-900 text-sm py-2'>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
