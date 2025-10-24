"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Product {
  name: string
  price: string
  image: string
}

export function ProductSection() {
  const popularProducts: Product[] = [
    { name: 'Armless Solid Dining Chair', price: '₹1,250.00', image: '#C8B8A0' },
    { name: 'Elle Decor Roux Arm Chair', price: '₹1,250.00', image: '#D4A5A5' },
    { name: 'Elle Decor Roux Arm Chair', price: '₹1,250.00', image: '#E8C4B8' },
    { name: 'Elle Decor Roux Arm Chair', price: '₹1,250.00', image: '#8B4513' },
  ]

  const latestProducts: Product[] = [
    { name: 'Uelvet Midnight Natural Sofa', price: '₹5,000.00', image: '#4A6B7C' },
    { name: 'Modern Furniture', price: '₹5,000.00', image: '#5F7F8F' },
    { name: 'Modern Furniture Set', price: '₹5,000.00', image: '#D2691E' },
    { name: 'Furniture Sofa Set', price: '₹5,000.00', image: '#7B96A8' },
  ]

  const ProductCard = ({ product, featured = false }: { product: Product; featured?: boolean }) => (
    <Card className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${featured ? 'border-2 border-blue-500' : ''}`}>
      <div className="aspect-square bg-gray-100 relative overflow-hidden" style={{ backgroundColor: product.image }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      <div className="p-3 sm:p-4 bg-white">
        <h3 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base line-clamp-2">{product.name}</h3>
        <p className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Price: {product.price}</p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
          Add to Cart
        </Button>
      </div>
    </Card>
  )

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Popular Product</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">See all</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {popularProducts.map((product, index) => (
            <ProductCard key={index} product={product} featured={index === 1} />
          ))}
        </div>

        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Latest Product</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">See all</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {latestProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
