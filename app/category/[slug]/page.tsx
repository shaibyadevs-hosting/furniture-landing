import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { ProductCard } from "./ProductCard";

interface Product {
  name: string;
  image: string;
  desc: string;
}

const spacesData: Record<string, { hero: string; tagline: string; products: Product[] }> = {
  "Modular Kitchen": {
    hero: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80",
    tagline: "Precision-engineered kitchens built around how you live, cook, and gather.",
    products: [
      { name: "Modern L-Shape Kitchen", price: "₹1,50,000", desc: "Efficient corner utilisation with sleek cabinetry and premium countertop finish.", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop" },
      { name: "Island Kitchen Setup", price: "₹2,00,000", desc: "Open-plan island layout ideal for contemporary homes and entertaining spaces.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop" },
      { name: "Compact Modular Kitchen", price: "₹90,000", desc: "Smart, space-saving design without compromising on storage or aesthetics.", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop" },
      { name: "Premium Wood Kitchen", price: "₹2,50,000", desc: "Warm hardwood finishes paired with modern hardware for a timeless look.", image: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=800&h=800&fit=crop" },
      { name: "U-Shape Luxury Kitchen", price: "₹3,10,000", desc: "Maximum counter space in a three-wall layout for serious home chefs.", image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=800&fit=crop" },
      { name: "Minimalist White Kitchen", price: "₹1,80,000", desc: "Handle-less cabinets and pure white surfaces for a clean, airy feel.", image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&h=800&fit=crop" },
      { name: "Classic Italian Kitchen", price: "₹2,80,000", desc: "Old-world Italian craftsmanship meets contemporary Indian living standards.", image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=800&fit=crop" },
      { name: "Smart Urban Kitchen", price: "₹1,20,000", desc: "Tech-integrated kitchen with soft-close drawers and smart storage solutions.", image: "https://images.unsplash.com/photo-1556910110-a5a63dfd3938?w=800&h=800&fit=crop" },
    ],
  },
  "Bedroom Furniture": {
    hero: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    tagline: "Sanctuaries crafted for rest, comfort, and personal expression.",
    products: [
      { name: "Master Bedroom Set", price: "₹85,000", desc: "Complete bedroom ensemble with bed frame, side tables, and wardrobe.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" },
      { name: "Modern Wardrobe", price: "₹45,000", desc: "Floor-to-ceiling wardrobe with customisable shelf and hanging configurations.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Bedside Table Set", price: "₹12,000", desc: "Pair of slim bedside tables with soft-close drawers and cable management.", image: "https://images.unsplash.com/photo-1532372576444-eea8880fa138?w=800&h=800&fit=crop" },
      { name: "Dressing Unit", price: "₹25,000", desc: "Full-length mirror dressing unit with illuminated surround and storage.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop" },
      { name: "King Size Platform Bed", price: "₹55,000", desc: "Low-profile platform bed with upholstered headboard in premium fabric.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" },
      { name: "Sliding Door Wardrobe", price: "₹65,000", desc: "Space-saving sliding doors with mirrored panels and interior lighting.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Cozy Bedroom Chair", price: "₹18,000", desc: "Upholstered accent chair perfect for a reading corner or dressing area.", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop" },
      { name: "Bedroom Vanity Set", price: "₹38,000", desc: "Hollywood-style vanity with tabletop mirror, cushioned stool, and storage.", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&h=800&fit=crop" },
    ],
  },
  "Office Furniture": {
    hero: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80",
    tagline: "Workspaces that command presence and inspire productivity.",
    products: [
      { name: "Executive Desk", price: "₹35,000", desc: "Large-format executive desk with modesty panel and built-in cable tray.", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
      { name: "Ergonomic Chair", price: "₹15,000", desc: "Lumbar-support ergonomic seating with breathable mesh back and armrests.", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop" },
      { name: "Conference Table", price: "₹65,000", desc: "12-seater boardroom table with integrated power modules and wire management.", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&h=800&fit=crop" },
      { name: "Storage Cabinet", price: "₹22,000", desc: "Lockable multi-drawer cabinet in powder-coated steel finish.", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&h=800&fit=crop" },
      { name: "L-Shaped Manager Desk", price: "₹45,000", desc: "Corner workstation with overhead hutch and pedestals for ample storage.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop" },
      { name: "Reception Counter", price: "₹55,000", desc: "Curved reception desk with back panel cladding and integrated lighting.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" },
      { name: "Visitor Chairs Set", price: "₹28,000", desc: "Set of 4 upholstered visitor chairs in premium leatherette.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=800&fit=crop" },
      { name: "Bookshelf Display", price: "₹19,000", desc: "Open-shelf display unit in warm walnut veneer, ideal for offices and lobbies.", image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=800&h=800&fit=crop" },
    ],
  },
  "Hotel Furniture": {
    hero: "https://images.unsplash.com/photo-1582719478250-c894e4dc24cb?w=1600&q=80",
    tagline: "Hospitality interiors that leave lasting impressions on every guest.",
    products: [
      { name: "Lobby Seating Array", price: "₹1,20,000", desc: "Modular lobby seating in premium fabric with solid wood legs and arm panels.", image: "https://images.unsplash.com/photo-1582719478250-c894e4dc24cb?w=800&h=800&fit=crop" },
      { name: "Premium Suite Bed", price: "₹75,000", desc: "King-size hotel bed with tufted headboard and pull-out trundle option.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop" },
      { name: "Banquet Chairs Set", price: "₹40,000", desc: "Stackable banquet chairs in gold or silver frame with padded seat covers.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=800&fit=crop" },
      { name: "Reception Desk", price: "₹85,000", desc: "Curved hotel reception with stone top and brass or chrome accent detailing.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" },
      { name: "Lounge Armchairs", price: "₹45,000", desc: "Deep-seat barrel armchairs in velvet upholstery for premium hotel lounges.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop" },
      { name: "Hotel Dining Tables", price: "₹95,000", desc: "Restaurant-grade dining tables with laminate tops and metal or wood bases.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop" },
      { name: "Suite Wardrobe", price: "₹60,000", desc: "Hotel wardrobe with safe compartment, trouser press area, and mirror door.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Outdoor Pool Loungers", price: "₹55,000", desc: "Weather-resistant teak or aluminium sun loungers for pool and terrace areas.", image: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?w=800&h=800&fit=crop" },
    ],
  },
  "Home Furniture": {
    hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
    tagline: "Every corner of your home, elevated with purposeful design.",
    products: [
      { name: "Complete Living Room Set", price: "₹1,10,000", desc: "3+1+1 sofa arrangement with matching coffee table and side tables.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop" },
      { name: "Dining Room Package", price: "₹65,000", desc: "6-seater dining table with upholstered chairs in coordinated fabric.", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop" },
      { name: "Entertainment Unit", price: "₹35,000", desc: "Wall-mounted TV unit with open shelves, closed cabinets, and LED backlight.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=800&fit=crop" },
      { name: "Balcony Setup", price: "₹18,000", desc: "Compact outdoor bistro set in rust-proof aluminium for balcony or patio.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop" },
      { name: "Premium Leather Sofa", price: "₹85,000", desc: "Full-grain leather 3-seater with solid wood frame and recliner option.", image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop" },
      { name: "Coffee Table Minimalist", price: "₹14,000", desc: "Hairpin-leg coffee table with solid wood top in walnut or oak finish.", image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&h=800&fit=crop" },
      { name: "Home Office Desk", price: "₹28,000", desc: "Compact home office desk with integrated shelves and cable routing.", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
      { name: "Study Room Bookshelf", price: "₹22,000", desc: "Floor-to-ceiling bookshelf with adjustable shelves and ladder rail system.", image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=800&h=800&fit=crop" },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "modular-kitchen" },
    { slug: "bedroom-furniture" },
    { slug: "office-furniture" },
    { slug: "hotel-furniture" },
    { slug: "home-furniture" },
  ];
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryTitle = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const category = spacesData[categoryTitle];
  const products = category?.products ?? [];

  return (
    <div className="min-h-screen bg-[#f9f7f4] flex flex-col">
      <Header />

      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        {category?.hero && (
          <Image src={category.hero} alt={categoryTitle} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/70 via-[#0b132b]/50 to-[#0b132b]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-400/50" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.28em] uppercase">Collection</span>
            <div className="h-px w-8 bg-amber-400/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {categoryTitle}
          </h1>
          {category?.tagline && (
            <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed">
              {category.tagline}
            </p>
          )}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Products */}
      <main className="flex-grow py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-8 bg-amber-600/40" />
              <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">Our Range</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {products.length} Products in{" "}
              <span className="text-[#0b132b]">{categoryTitle}</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl">
              Hover over any product to explore details and enquire directly via WhatsApp.
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-400 text-lg mb-6">No products in this category yet.</p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#0b132b] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0b132b]/90 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Browse Other Categories
              </Link>
            </div>
          )}

          {/* CTA strip */}
          <div className="mt-20 rounded-3xl bg-[#0b132b] px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">Custom Order</p>
              <h3 className="text-white text-2xl sm:text-3xl font-bold">Don't see what you need?</h3>
              <p className="text-white/50 text-sm mt-1">We build fully bespoke — just describe your vision.</p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=917722008401&text=${encodeURIComponent(`Hello! I need a custom ${categoryTitle} solution. Can you help?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-[#0b132b] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
