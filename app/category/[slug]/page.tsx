import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Product {
  name: string;
  price: string;
  image: string;
}

export function generateStaticParams() {
  return [
    { slug: 'modular-kitchen' },
    { slug: 'bedroom-furniture' },
    { slug: 'office-furniture' },
    { slug: 'hotel-furniture' },
    { slug: 'home-furniture' }
  ];
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Convert slug to Title Case (e.g. modular-kitchen -> Modular Kitchen)
  const categoryTitle = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Expanded product data for the specific category pages
  const spacesData: Record<string, Product[]> = {
    "Modular Kitchen": [
      { name: "Modern L-Shape Kitchen", price: "₹1,50,000", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop" },
      { name: "Island Kitchen Setup", price: "₹2,00,000", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop" },
      { name: "Compact Modular Kitchen", price: "₹90,000", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop" },
      { name: "Premium Wood Kitchen", price: "₹2,50,000", image: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=800&h=800&fit=crop" },
      { name: "U-Shape Luxury Kitchen", price: "₹3,10,000", image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=800&fit=crop" },
      { name: "Minimalist White Kitchen", price: "₹1,80,000", image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&h=800&fit=crop" },
      { name: "Classic Italian Kitchen", price: "₹2,80,000", image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=800&fit=crop" },
      { name: "Smart Urban Kitchen", price: "₹1,20,000", image: "https://images.unsplash.com/photo-1556910110-a5a63dfd3938?w=800&h=800&fit=crop" }
    ],
    "Bedroom Furniture": [
      { name: "Master Bedroom Set", price: "₹85,000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" },
      { name: "Modern Wardrobe", price: "₹45,000", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Bedside Table Set", price: "₹12,000", image: "https://images.unsplash.com/photo-1532372576444-eea8880fa138?w=800&h=800&fit=crop" },
      { name: "Dressing Unit", price: "₹25,000", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop" },
      { name: "King Size Platform Bed", price: "₹55,000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" },
      { name: "Sliding Door Wardrobe", price: "₹65,000", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Cozy Bedroom Chair", price: "₹18,000", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop" },
      { name: "Bedroom Vanity Set", price: "₹38,000", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&h=800&fit=crop" }
    ],
    "Office Furniture": [
      { name: "Executive Desk", price: "₹35,000", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
      { name: "Ergonomic Chair", price: "₹15,000", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop" },
      { name: "Conference Table", price: "₹65,000", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&h=800&fit=crop" },
      { name: "Storage Cabinet", price: "₹22,000", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&h=800&fit=crop" },
      { name: "L-Shaped Manager Desk", price: "₹45,000", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop" },
      { name: "Reception Counter", price: "₹55,000", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" },
      { name: "Visitor Chairs Set", price: "₹28,000", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=800&fit=crop" },
      { name: "Bookshelf Display", price: "₹19,000", image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=800&h=800&fit=crop" }
    ],
    "Hotel Furniture": [
      { name: "Lobby Seating Array", price: "₹1,20,000", image: "https://images.unsplash.com/photo-1582719478250-c894e4dc24cb?w=800&h=800&fit=crop" },
      { name: "Premium Suite Bed", price: "₹75,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop" },
      { name: "Banquet Chairs Set", price: "₹40,000", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=800&fit=crop" },
      { name: "Reception Desk", price: "₹85,000", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" },
      { name: "Lounge Armchairs", price: "₹45,000", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop" },
      { name: "Hotel Dining Tables", price: "₹95,000", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop" },
      { name: "Suite Wardrobe", price: "₹60,000", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Outdoor Pool Loungers", price: "₹55,000", image: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?w=800&h=800&fit=crop" }
    ],
    "Home Furniture": [
      { name: "Complete Living Room Set", price: "₹1,10,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop" },
      { name: "Dining Room Package", price: "₹65,000", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop" },
      { name: "Entertainment Unit", price: "₹35,000", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=800&fit=crop" },
      { name: "Balcony Setup", price: "₹18,000", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop" },
      { name: "Premium Leather Sofa", price: "₹85,000", image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop" },
      { name: "Coffee Table Minimalist", price: "₹14,000", image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&h=800&fit=crop" },
      { name: "Home Office Desk", price: "₹28,000", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
      { name: "Study Room Bookshelf", price: "₹22,000", image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=800&h=800&fit=crop" }
    ]
  };

  // Fallback to empty array if category not found
  const activeProducts = spacesData[categoryTitle] || [];

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
    <div className="krona-one-regular min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-16 sm:pt-40 lg:pt-48 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header Section */}
          <div className="mb-8 sm:mb-12">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-500">{categoryTitle}</span> Collection
            </h1>
            <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
              Explore our premium range of {categoryTitle.toLowerCase()} solutions, crafted to elevate your space with superior quality and contemporary design.
            </p>
          </div>

          {/* Product Grid */}
          {activeProducts.length > 0 ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
              {activeProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500 text-lg">No products found for this category yet.</p>
              <Link href="/">
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  Browse Other Categories
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
