import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { spacesData } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { MessageCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "All Products | Touchwood Furnitech",
  description: "Browse our complete collection of premium modular furniture for kitchens, bedrooms, offices, and more.",
};

export default function ProductsPage() {
  const categories = Object.keys(spacesData);

  return (
    <div className="min-h-screen bg-[#f9f7f4] flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-[#0b132b] pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-amber-500">Collection</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our complete range of premium furniture, meticulously crafted to elevate every space in your home and office.
          </p>
        </div>
      </div>

      <main className="flex-grow py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {categories.map((categoryTitle, idx) => {
            const category = spacesData[categoryTitle];
            const products = category.products;

            if (products.length === 0) return null;

            return (
              <section key={categoryTitle} className={`mb-20 ${idx !== 0 ? 'pt-10 border-t border-gray-200' : ''}`} id={categoryTitle.toLowerCase().replace(/\s+/g, '-')}>
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-px w-8 bg-amber-600/40" />
                      <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">{categoryTitle}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {categoryTitle} Collection
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {products.map((product, index) => (
                    <ProductCard key={index} product={product} index={index} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA strip */}
          <div className="mt-20 rounded-3xl bg-[#0b132b] px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">Custom Order</p>
              <h3 className="text-white text-2xl sm:text-3xl font-bold">Don't see what you need?</h3>
              <p className="text-white/50 text-sm mt-1">We build fully bespoke — just describe your vision.</p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=917722008401&text=${encodeURIComponent(`Hello! I need a custom furniture solution. Can you help?`)}`}
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
