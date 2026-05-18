"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ end, suffix, label }: { end: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <div ref={ref} className="group p-4 sm:p-5 rounded-[24px] bg-white/60 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]">
      <div className="flex items-end gap-1 mb-1 sm:mb-2">
        <span className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{count}</span>
        <span className="text-amber-500 font-bold text-xl sm:text-2xl mb-0.5">{suffix}</span>
      </div>
      <p className="text-xs sm:text-sm font-medium text-gray-500">{label}</p>
    </div>
  );
}

export function InspirationSection() {
  return (
    <section className="bg-[#fcfbf9] relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 lg:items-stretch items-center">

          {/* Left Side: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[450px] sm:min-h-[550px] lg:min-h-[600px] lg:h-full w-full group py-4 lg:py-0"
          >
            {/* Back tall image */}
            <div className="absolute left-0 top-0 lg:top-2 w-[85%] h-[90%] lg:h-[96%] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              <Image
                src="/modular kitchen.png"
                alt="Premium Modular Kitchen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute top-[10%] right-[25%] w-20 h-px bg-amber-500/30 z-30" />
            <div className="absolute bottom-[15%] left-[-5%] w-10 h-10 rounded-full border border-amber-500/20 z-0" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="relative z-10 flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-amber-500" />
                <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">Our Craft</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Crafting Spaces<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b132b] to-gray-600">That Inspire</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-lg mb-10">
                From precision-engineered modular kitchens to bespoke bedroom suites, Touchwood Furnitech shapes the spaces where life unfolds beautifully.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-[#0b132b] rounded-full hover:bg-amber-500 hover:text-[#0b132b] transition-all duration-300 shadow-[0_8px_20px_rgba(11,19,43,0.15)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.3)]"
                >
                  Explore Collections
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=917722008401&text=Hi,%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[#0b132b] bg-transparent border border-[#0b132b]/20 rounded-full hover:bg-[#0b132b]/5 hover:border-[#0b132b]/40 transition-all duration-300"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>

            {/* Trust Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 sm:gap-5"
            >
              <AnimatedCounter end={15} suffix="+" label="Years of Experience" />
              <AnimatedCounter end={500} suffix="+" label="Projects Completed" />
              <AnimatedCounter end={1000} suffix="+" label="Happy Clients" />
              <AnimatedCounter end={50} suffix="+" label="Design Experts" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
