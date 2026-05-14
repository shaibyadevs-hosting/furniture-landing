"use client";

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Bed, Briefcase, Building, Home } from "lucide-react";

interface Product {
  name: string;
  price: string;
  image: string;
}

export function SpacesSection() {
  const [activeSpace, setActiveSpace] = useState("Modular Kitchen");

  const spaceCategories = [
    { name: "Modular Kitchen", icon: Utensils, count: "120 Designs" },
    { name: "Bedroom Furniture", icon: Bed, count: "340 Items" },
    { name: "Office Furniture", icon: Briefcase, count: "150 Items" },
    { name: "Hotel Furniture", icon: Building, count: "80 Sets" },
    { name: "Home Furniture", icon: Home, count: "450 Items" },
  ];

  const spacesData: Record<string, Product[]> = {
    "Modular Kitchen": [
      { name: "Modern L-Shape Kitchen", price: "₹1,50,000", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop" },
      { name: "Island Kitchen Setup", price: "₹2,00,000", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop" },
      { name: "Compact Modular Kitchen", price: "₹90,000", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop" },
      { name: "Premium Wood Kitchen", price: "₹2,50,000", image: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=800&h=800&fit=crop" }
    ],
    "Bedroom Furniture": [
      { name: "Master Bedroom Set", price: "₹85,000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" },
      { name: "Modern Wardrobe", price: "₹45,000", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Bedside Table Set", price: "₹12,000", image: "https://images.unsplash.com/photo-1532372576444-eea8880fa138?w=800&h=800&fit=crop" },
      { name: "Dressing Unit", price: "₹25,000", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop" }
    ],
    "Office Furniture": [
      { name: "Executive Desk", price: "₹35,000", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
      { name: "Ergonomic Chair", price: "₹15,000", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop" },
      { name: "Conference Table", price: "₹65,000", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&h=800&fit=crop" },
      { name: "Storage Cabinet", price: "₹22,000", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&h=800&fit=crop" }
    ],
    "Hotel Furniture": [
      { name: "Lobby Seating Array", price: "₹1,20,000", image: "https://images.unsplash.com/photo-1582719478250-c894e4dc24cb?w=800&h=800&fit=crop" },
      { name: "Premium Suite Bed", price: "₹75,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop" },
      { name: "Banquet Chairs Set", price: "₹40,000", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=800&fit=crop" },
      { name: "Reception Desk", price: "₹85,000", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" }
    ],
    "Home Furniture": [
      { name: "Complete Living Room Set", price: "₹1,10,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop" },
      { name: "Dining Room Package", price: "₹65,000", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop" },
      { name: "Entertainment Unit", price: "₹35,000", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=800&fit=crop" },
      { name: "Balcony Setup", price: "₹18,000", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop" }
    ]
  };

  const activeProducts = spacesData[activeSpace] || spacesData["Modular Kitchen"];

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="overflow-hidden group hover:shadow-xl hover:border-2 hover:border-blue-500 transition-all duration-300 flex flex-col">
      <div className='aspect-square bg-gray-100 relative overflow-hidden flex-shrink-0'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
      <div className='p-3 text-center sm:p-4 bg-white flex flex-col flex-1'>
        <h3 className='font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base line-clamp-2 flex-shrink-0'>
          {product.name}
        </h3>
        <div className='mt-auto pt-2 sm:pt-3'>
          <Button className='w-full bg-cyan-700 hover:bg-cyan-800 text-white text-sm py-2'>
            Enquire Now
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="py-12 sm:py-16">
      {/* Category Selection Row */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
          Explore by <span className="text-blue-300">Space</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
          Discover furniture collections designed perfectly for every room.
        </p>
      </div>

      <div className="mx-1 sm:mx-4 lg:mx-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-12">
        {spaceCategories.map((category, index) => {
          const Icon = category.icon;
          const isActive = activeSpace === category.name;
          return (
            <Card
              key={index}
              onClick={() => setActiveSpace(category.name)}
              className={`p-4 sm:p-6 lg:p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-xl ${
                isActive
                  ? 'bg-blue-800 text-white shadow-lg sm:transform sm:scale-105'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${isActive ? 'text-white' : 'text-gray-700'}`} />
              </div>
              <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                {category.name}
              </h3>
              <p className={`text-xs sm:text-sm ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
                {category.count}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Product Grid for Active Space */}
      <div className='flex items-center justify-between mb-6 sm:mb-8'>
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900'>
          {activeSpace} Collection
        </h2>
        <Link href={`/category/${activeSpace.toLowerCase().replace(/ /g, '-')}`}>
          <span className='text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base cursor-pointer'>
            See all
          </span>
        </Link>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6'>
        {activeProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
