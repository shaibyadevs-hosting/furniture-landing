"use client";

import { motion } from "framer-motion";
import { Building2, Hotel, Briefcase, GraduationCap, Building, PencilRuler, ShieldCheck, Gem } from "lucide-react";

const RowData = [
  { name: "Akash Furnitures", icon: ShieldCheck },
  { name: "Premium Hotels", icon: Hotel },
  { name: "Corporate Workspaces", icon: Briefcase },
  { name: "Educational Institutions", icon: GraduationCap },
  { name: "Residential Developers", icon: Building },
  { name: "Architecture Firms", icon: PencilRuler },
  { name: "Boutique Resorts", icon: Gem },
  { name: "Real Estate Groups", icon: Building2 },
];

// Duplicate array to ensure seamless infinite scroll
const scrollItems = [...RowData, ...RowData, ...RowData, ...RowData];

export function ClientsSection() {
  return (
    <section className="bg-[#fcfbf9] py-20 sm:py-28 lg:py-32 overflow-hidden relative border-t border-gray-100">
      {/* Inline styles for marquee animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-left {
            animation: scroll-left 45s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber-600/40" />
            <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">Trusted By</span>
            <div className="h-px w-8 bg-amber-600/40" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b132b] mb-6 tracking-tight">
            Our Clients & Partners
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Proudly delivering custom furniture and interior solutions for homes, offices, hospitality, and commercial spaces.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex flex-col w-full max-w-[100vw]">
        
        {/* Fade gradients on left and right edges */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#fcfbf9] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#fcfbf9] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolls Left (Right to Left) */}
        <div className="flex overflow-hidden w-full">
          <div className="flex w-max animate-marquee-left pause-on-hover">
            {scrollItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={`row1-${index}`} 
                  className="px-3 sm:px-4 flex-shrink-0 py-4"
                >
                  <div className="flex items-center gap-4 h-16 sm:h-20 px-6 sm:px-10 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors text-gray-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-600 group-hover:text-[#0b132b] tracking-wide text-sm sm:text-base uppercase transition-colors">
                      {item.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
