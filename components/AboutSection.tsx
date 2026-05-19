"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-[#fcfbf9] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-8 sm:w-12 bg-amber-500/50" />
            <span className="text-amber-600 font-bold text-[11px] sm:text-xs tracking-[0.25em] uppercase">Behind the Brand</span>
            <div className="h-[1px] w-8 sm:w-12 bg-amber-500/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b132b] tracking-tight">
            Our Director
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#faf8f5] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            
            {/* Image Section */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] flex-shrink-0 mx-auto lg:mx-0">
              {/* Amber Background Offset */}
              <div className="absolute -inset-3 sm:-inset-4 bg-[#eecb9b] rounded-[24px] sm:rounded-[28px] shadow-sm" />
              
              {/* Actual Image container */}
              <div className="relative aspect-[4/5] w-full rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-white">
                <Image
                  src="/aboutustouchwoodperson.jpg"
                  alt="Pratik Sathawane"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left lg:pt-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="h-[2px] w-8 bg-amber-500" />
                <span className="text-amber-600 font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase">Director</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b132b] mb-3 uppercase tracking-wide">
                Pratik Sathawane
              </h3>
              
              <div className="mb-6 space-y-1">
                <p className="text-amber-600 font-bold text-sm sm:text-base">
                  B.Tech (Civil), MBA
                </p>
                <p className="text-gray-500 text-sm sm:text-base font-medium">
                  8+ Years Experience in the Industry
                </p>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Pratik leads Touchwood Furnitech with a visionary approach to design and manufacturing, combining deep industry knowledge with a passion for creating spaces that inspire. His engineering background and business acumen drive Touchwood's continuous growth and innovation.
              </p>

              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0b132b] text-white font-bold rounded-full hover:bg-amber-500 hover:text-[#0b132b] transition-all duration-300 shadow-[0_8px_20px_rgba(11,19,43,0.15)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.3)] group"
              >
                More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
