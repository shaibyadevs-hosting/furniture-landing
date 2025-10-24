"use client"

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function InteriorDesignSection() {
  const features = [
    'Modern, Elegant Furniture Designs',
    'Tailored to Your Space',
    'Crafted for Comfort & Style',
    'Premium Quality, Lasting Durability',
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-10 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 opacity-5">
        <div className="grid grid-cols-4 gap-1 sm:gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gradient-to-br from-amber-300 to-amber-400 rounded-lg aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="w-full h-full bg-orange-800/20 rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                <div className="bg-gray-100 rounded-lg aspect-[3/4] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                </div>
                <div className="bg-blue-200 rounded-lg aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300"></div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 sm:-right-8 top-1/2 transform -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 z-10">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full transform rotate-12"></div>
                <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="relative z-20 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              We help you make<br />
              <span className="text-gray-900">Modern Interior Design</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Transform your space into a reflection of your style. Our modern interior design approach brings harmony, texture, and creativity together to make every corner feel fresh, inviting, and uniquely yours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg text-sm sm:text-base">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
