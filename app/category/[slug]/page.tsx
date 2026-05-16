import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

import { spacesData, Product } from "@/lib/data";

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
