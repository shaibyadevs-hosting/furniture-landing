"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show preloader for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    
    // Animate counter from 0 to 100 over 3.8 seconds
    const duration = 3800;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setProgress(Math.floor((currentStep / steps) * 100));
      } else {
        setProgress(100);
        clearInterval(interval);
      }
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#fcfbf9] overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative"
            >
              <Image 
                src="/logo.png" 
                alt="Touchwood Furnitech Logo" 
                fill 
                className="object-contain"
                priority
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-4xl sm:text-5xl font-light text-[#0b132b] tracking-widest tabular-nums"
            >
              {progress}%
            </motion.div>
          </div>

          {/* Loading Bar */}
          <motion.div 
            className="w-48 sm:w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="h-full bg-amber-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.8, ease: "linear" }}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-gray-500"
          >
            Crafting Spaces
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
