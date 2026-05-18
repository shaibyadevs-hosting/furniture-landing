"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    desc: "Understanding your space, requirements, and design preferences.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    maxWidth: "max-w-[280px] sm:max-w-[340px] md:max-w-[380px]",
    titleClass: "text-xl sm:text-2xl",
    descClass: "text-xs sm:text-sm",
  },
  {
    id: "02",
    title: "Design & Planning",
    desc: "Creating tailored layouts, material selections, and detailed concepts.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    maxWidth: "max-w-[300px] sm:max-w-[380px] md:max-w-[440px]",
    titleClass: "text-2xl sm:text-3xl",
    descClass: "text-sm sm:text-base",
  },
  {
    id: "03",
    title: "Manufacturing",
    desc: "Precision fabrication using premium materials and expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1565058223635-c350e93de853?w=1200&q=80",
    maxWidth: "max-w-[320px] sm:max-w-[440px] md:max-w-[500px]",
    titleClass: "text-3xl sm:text-4xl",
    descClass: "text-base sm:text-lg",
  },
  {
    id: "04",
    title: "Installation",
    desc: "Professional installation and meticulous finishing.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    maxWidth: "max-w-[340px] sm:max-w-[500px] md:max-w-[580px]",
    titleClass: "text-4xl sm:text-5xl",
    descClass: "text-lg sm:text-xl",
  },
  {
    id: "05",
    title: "Support",
    desc: "Ongoing assistance and after-sales service to ensure lasting satisfaction.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    maxWidth: "max-w-full sm:max-w-[580px] md:max-w-[680px]",
    titleClass: "text-5xl sm:text-6xl",
    descClass: "text-xl sm:text-2xl",
  }
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For the central line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#f7f5f2] py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-28"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber-600/40" />
            <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">Our Process</span>
            <div className="h-px w-8 bg-amber-600/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b132b] mb-6 tracking-tight">
            From Concept to Completion
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A seamless, end-to-end journey that transforms your ideas into beautifully crafted spaces with precision and care.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full flex flex-col items-center">
          
          {/* Central Background Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-gray-200 -translate-x-1/2" />
          
          {/* Animated Gold Line */}
          <motion.div 
            className="absolute top-0 left-6 md:left-1/2 w-[2px] bg-amber-500 -translate-x-1/2 origin-top z-0"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0; // Left on desktop
            return (
              <div 
                key={step.id} 
                className="relative w-full flex flex-col md:flex-row mb-16 sm:mb-24 lg:mb-32 last:mb-0"
              >
                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute left-6 md:left-1/2 top-[60px] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-[3px] sm:border-[4px] border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] z-10 flex items-center justify-center"
                >
                  <span className="text-amber-600 font-bold text-sm sm:text-base">{step.id}</span>
                </motion.div>

                {/* Left Spacer (for right items on desktop) */}
                {!isLeft && <div className="hidden md:block md:w-1/2" />}

                {/* Card Container */}
                <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} pl-16 md:pl-0 z-10`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`
                      relative group w-full flex ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}
                      ${isLeft ? 'md:pr-12 lg:pr-20' : 'md:pl-12 lg:pl-20'}
                    `}
                  >
                    <div className={`bg-white rounded-[28px] sm:rounded-[36px] p-3 sm:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden w-full ${step.maxWidth}`}>
                      {/* Image */}
                      <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[28px] overflow-hidden mb-5 sm:mb-6">
                        <Image 
                          src={step.image} 
                          alt={step.title} 
                          fill 
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" 
                        />
                      </div>
                      
                      {/* Text */}
                      <div className="px-2 pb-2">
                        <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                          Phase {step.id}
                        </span>
                        <h3 className={`font-bold text-[#0b132b] mb-2 sm:mb-3 tracking-tight ${step.titleClass}`}>
                          {step.title}
                        </h3>
                        <p className={`text-gray-600 font-light leading-relaxed ${step.descClass}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Spacer (for left items on desktop) */}
                {isLeft && <div className="hidden md:block md:w-1/2" />}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
