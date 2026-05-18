"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ruler, Diamond, Hammer, ListChecks, Clock, HeartHandshake, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Fully Customized Designs",
    desc: "Tailored solutions crafted to fit your space and requirements.",
    icon: Ruler
  },
  {
    title: "Premium Materials",
    desc: "High-quality plywood, laminates, hardware, and finishes.",
    icon: Diamond
  },
  {
    title: "Expert Craftsmanship",
    desc: "Precision manufacturing with meticulous attention to detail.",
    icon: Hammer
  },
  {
    title: "End-to-End Execution",
    desc: "Consultation, design, manufacturing, installation, and support.",
    icon: ListChecks
  },
  {
    title: "On-Time Delivery",
    desc: "Structured workflows that ensure timely project completion.",
    icon: Clock
  },
  {
    title: "After-Sales Support",
    desc: "Reliable assistance and warranty-backed service.",
    icon: HeartHandshake
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-[#fcfbf9] py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] lg:aspect-square rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <Image 
                src="/island kitchen.png" 
                alt="Premium Island Kitchen" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-6 sm:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center justify-center min-w-[160px] sm:min-w-[200px]"
            >
              <span className="text-4xl sm:text-5xl font-bold text-[#0b132b] mb-1 tracking-tight">15+</span>
              <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-widest text-center leading-tight">
                Years of<br />Excellence
              </span>
            </motion.div>

            {/* Accent Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Side: Content & Features */}
          <div className="relative z-10 flex flex-col pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-amber-500" />
                <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b132b] mb-4 tracking-tight leading-[1.1]">
                Built on Craftsmanship,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Designed for Life</span>
              </h2>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                From concept to installation, we deliver thoughtfully designed furniture and interiors tailored to your space and lifestyle.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-4 sm:p-5 rounded-[16px] sm:rounded-[20px] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-amber-200 transition-all duration-300 group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-amber-50 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0b132b] mb-1 text-sm sm:text-base">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0b132b] text-white font-bold rounded-full hover:bg-amber-500 hover:text-[#0b132b] transition-all duration-300 shadow-md group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
