"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import Link from "next/link";

interface TransformationProps {
  beforeImg: string;
  afterImg: string;
  category: string;
  title: string;
  desc: string;
  link: string;
}

function TransformationCard({ beforeImg, afterImg, category, title, desc, link }: TransformationProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    
    let clientX;
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleInteractionEnd = () => {
    setIsHovered(false);
    setSliderPosition(50);
  };

  // Animate slider briefly on mount
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const animate = () => {
      setSliderPosition(45);
      timeout = setTimeout(() => setSliderPosition(50), 300);
    };
    const initialDelay = setTimeout(animate, 1000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, []);

  return (
    <div className="flex flex-col group">
      <div 
        ref={containerRef}
        className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] rounded-[24px] sm:rounded-[32px] overflow-hidden cursor-ew-resize select-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleInteractionEnd}
        onTouchEnd={handleInteractionEnd}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image src={afterImg} alt={`${title} After`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        </div>

        {/* Before Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image src={beforeImg} alt={`${title} Before`} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" /> {/* Slight dim on before image */}
        </div>

        {/* Labels overlay */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-sm">
          Before
        </div>
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 py-1 bg-amber-500 text-[#0b132b] text-xs font-bold tracking-widest uppercase rounded-full shadow-sm">
          After
        </div>

        {/* Text Content Overlay (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 pointer-events-none">
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">{category}</p>
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 drop-shadow-md">{title}</h3>
          <p className="text-white/80 text-sm drop-shadow-sm max-w-sm line-clamp-1">{desc}</p>
        </div>

        {/* Custom Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <ArrowLeftRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center px-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
          <ArrowLeftRight className="w-3 h-3" />
          Drag to compare
        </span>
      </div>
    </div>
  );
}

export function TransformationsSection() {
  const transformations = [
    {
      category: "Modular Kitchen",
      title: "Contemporary L-Shaped Kitchen",
      desc: "Transforming a dated, cramped kitchen into an open, modern culinary space.",
      beforeImg: "/kitchen before.png",
      afterImg: "/kitchen after.png",
      link: "/category/modular-kitchen"
    },
    {
      category: "Bedroom Furniture",
      title: "Luxury Wardrobe & Bed Suite",
      desc: "A complete overhaul creating a serene, bespoke master bedroom environment.",
      beforeImg: "/bedroom before.png",
      afterImg: "/bedroom after.png",
      link: "/category/bedroom-furniture"
    },
    {
      category: "Office Interiors",
      title: "Executive Workspace Transformation",
      desc: "Upgrading a standard room into a premium, highly functional executive office.",
      beforeImg: "/office before .png",
      afterImg: "/office after.png",
      link: "/category/office-furniture"
    },
    {
      category: "Home Furniture",
      title: "Elegant Living Room Setup",
      desc: "Bringing warmth and elegance to an empty living area with custom furniture.",
      beforeImg: "/living room before.png",
      afterImg: "/living room after.png",
      link: "/category/home-furniture"
    }
  ];

  return (
    <section className="bg-[#fcfbf9] py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber-600/40" />
            <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">Before & After</span>
            <div className="h-px w-8 bg-amber-600/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            See Spaces Come to Life
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From concept to completion, witness how our custom furniture and interior solutions transform everyday spaces into beautifully crafted environments.
          </p>
        </motion.div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {transformations.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TransformationCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
