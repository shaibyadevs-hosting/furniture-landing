"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { spacesData } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export function FeaturedProducts() {
  // Get all products
  const allProducts = Object.values(spacesData).flatMap(c => c.products);
  
  // Pick 10 mixed products consistently to avoid SSR hydration mismatch
  const featuredProducts = [];
  const step = Math.max(1, Math.floor(allProducts.length / 10));
  for (let i = 0; i < 10 && i < allProducts.length; i++) {
    featuredProducts.push(allProducts[(i * step) % allProducts.length]);
  }

  return (
    <section className="bg-[#f9f7f4] py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber-600/40" />
            <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">Featured Products</span>
            <div className="h-px w-8 bg-amber-600/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Finest Creations
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A curated selection of our most loved furniture and modular kitchen designs.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16"
        >
          {featuredProducts.map((product, index) => (
            <ProductCard key={`${product.name}-${index}`} product={product} index={index} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0b132b] text-white font-bold rounded-full hover:bg-amber-500 hover:text-[#0b132b] transition-all duration-300 shadow-[0_8px_20px_rgba(11,19,43,0.15)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.3)] group"
          >
            Explore All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
