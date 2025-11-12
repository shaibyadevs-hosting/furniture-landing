"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Product {
  name: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  selectedCategory: string;
}

export function ProductSection({ selectedCategory }: ProductSectionProps) {
  // Product data organized by category
  const productsByCategory = {
    Chair: [
      { 
        name: "Armless Dining Chair", 
        price: "₹1,250.00", 
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop" 
      },
      { 
        name: "Elle Arm Chair", 
        price: "₹1,250.00", 
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop" 
      },
      { 
        name: "Modern  Chair", 
        price: "₹2,500.00", 
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop" 
      },
      { 
        name: "Accent Chair", 
        price: "₹1,800.00", 
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop" 
      },
    ],
    Sofa: [
      { 
        name: "Velvet Natural Sofa", 
        price: "₹5,000.00", 
        image: "/hero/Elegant_emerald_green_velvet_sofa_with_wooden_legs_in_minimalist_setting.png" 
      },
      { 
        name: "Modern 3-Seater Sofa", 
        price: "₹4,500.00", 
        image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop" 
      },
      { 
        name: "Sectional Sofa Set", 
        price: "₹6,500.00", 
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop" 
      },
      { 
        name: "L-Shaped Sofa", 
        price: "₹5,500.00", 
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop" 
      },
    ],
    Table: [
      { 
        name: "Solid Wood Dining Table", 
        price: "₹3,200.00", 
        image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800&h=800&fit=crop" 
      },
      { 
        name: "Modern Coffee Table", 
        price: "₹2,100.00", 
        image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&h=800&fit=crop" 
      },
      { 
        name: "Office Desk", 
        price: "₹2,800.00", 
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" 
      },
      { 
        name: "Side Table", 
        price: "₹1,500.00", 
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&h=800&fit=crop" 
      },
    ],
    Bed: [
      { 
        name: "King Size Bed Frame", 
        price: "₹4,500.00", 
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" 
      },
      { 
        name: "Queen Size Bed", 
        price: "₹3,800.00", 
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop" 
      },
      { 
        name: "Single Bed", 
        price: "₹2,200.00", 
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop" 
      },
      { 
        name: "Bunk Bed", 
        price: "₹3,500.00", 
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop" 
      },
    ],
    Lamp: [
      { 
        name: "Modern Table Lamp", 
        price: "₹1,200.00", 
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop" 
      },
      { 
        name: "Floor Lamp", 
        price: "₹1,800.00", 
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop" 
      },
      { 
        name: "Pendant Light", 
        price: "₹2,500.00", 
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&h=800&fit=crop" 
      },
      { 
        name: "Desk Lamp", 
        price: "₹800.00", 
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop" 
      },
    ],
  };
  
  

  const latestProducts: Product[] = [
    {
      name: "Velvet Midnight Natural Sofa",
      price: "₹5,000.00",
      image: "/hero/Elegant_emerald_green_velvet_sofa_with_wooden_legs_in_minimalist_setting.png",
    },
    { name: "Modern Furniture Sofa", price: "₹5,000.00", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop" },
    { name: "Modern Furniture Set", price: "₹5,000.00", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop" },
    { name: "Furniture Sofa Set", price: "₹5,000.00", image: "/hero/Premium_L-shaped_sectional_sofa_in_charcoal_gray_with_wooden_base.png" },
  ];

  // Get products for the selected category
  const popularProducts = productsByCategory[selectedCategory as keyof typeof productsByCategory] || productsByCategory.Chair;

  const ProductCard = ({
    product,
    featured = false,
  }: {
    product: Product;
    featured?: boolean;
  }) => (
    <Card
      className="overflow-hidden group hover:shadow-xl hover:border-2 hover:border-blue-500 transition-all duration-300 flex flex-col"
    >
      <div className='aspect-square bg-gray-100 relative overflow-hidden flex-shrink-0'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent'></div>
      </div>
      <div className='p-3 text-center sm:p-4 bg-white flex flex-col flex-1'>
        <h3 className='font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base line-clamp-2 flex-shrink-0'>
          {product.name}
        </h3>
        <p className='text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3 flex-shrink-0'>
          Price: {product.price}
        </p>
        <div className='mt-auto pt-2 sm:pt-3'>
          <Button className='w-full bg-cyan-700 hover:bg-cyan-800 text-white text-sm py-2'>
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between mb-6 sm:mb-8'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900'>
            Popular {selectedCategory}s
          </h2>
          <button 
            onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
            className='text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base'
          >
            See all
          </button>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20'>
          {popularProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className='flex items-center justify-between mb-6 sm:mb-8'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900'>
            Latest Product
          </h2>
          <button 
            onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
            className='text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base'
          >
            See all
          </button>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6'>
          {latestProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
