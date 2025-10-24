"use client"

import { Armchair, Sofa, Table, Bed, Lamp } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function FeaturedCollections() {
  const collections = [
    { icon: Armchair, name: 'Chair', count: '200 Item Available', active: true },
    { icon: Sofa, name: 'Sofa', count: '240 Item Available', active: false },
    { icon: Table, name: 'Table', count: '140 Item Available', active: false },
    { icon: Bed, name: 'Bed', count: '340 Item Available', active: false },
    { icon: Lamp, name: 'Lamp', count: '440 Item Available', active: false },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Featured <span className="text-blue-500">Collections</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            The best of our craftsmanship, curated for your home. Quality furniture, simplified.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {collections.map((collection, index) => {
            const Icon = collection.icon
            return (
              <Card
                key={index}
                className={`p-4 sm:p-6 lg:p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  collection.active
                    ? 'bg-blue-600 text-white shadow-lg sm:transform sm:scale-105'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${collection.active ? 'text-white' : 'text-gray-700'}`} />
                </div>
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 ${collection.active ? 'text-white' : 'text-gray-900'}`}>
                  {collection.name}
                </h3>
                <p className={`text-xs sm:text-sm ${collection.active ? 'text-blue-100' : 'text-gray-600'}`}>
                  {collection.count}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
