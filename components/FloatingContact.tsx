"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after scrolling down a bit to avoid cluttering the very top
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          href="https://api.whatsapp.com/send?phone=917722008401&text=Hello%20Touchwood%20Furnitech!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20custom%20furniture%20and%20interior%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[99] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 group"
          aria-label="Contact us on WhatsApp"
        >
          {/* Main Icon */}
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
          
          {/* Ping Animation Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0 transition-opacity"></span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
