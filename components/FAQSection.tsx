"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide end-to-end interior solutions, specializing in premium modular kitchens, custom bedroom furniture, office interiors, and bespoke home furniture. From initial design to final installation, we handle it all."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard modular kitchen or bedroom setup typically takes 4 to 6 weeks from design approval to final installation."
  },
  {
    question: "Can I fully customize my furniture?",
    answer: "Absolutely. We pride ourselves on creating fully bespoke solutions. You can customize dimensions, materials, finishes, and hardware to perfectly match your space and style preferences."
  },
  {
    question: "What materials do you use for manufacturing?",
    answer: "We use only premium-grade materials, including BWP (Boiling Water Proof) plywood, HDHMR boards, solid wood, and high-quality laminates and veneers. All our hardware is sourced from trusted global brands."
  },
  {
    question: "Do you provide on-site installation?",
    answer: "Yes, our expert team handles the complete delivery and on-site installation, ensuring every piece fits perfectly and is finished to our exacting quality standards."
  },
  {
    question: "Do you offer warranties on your products?",
    answer: "Yes, we stand behind our craftsmanship. We offer comprehensive warranties on our materials and hardware to ensure your complete peace of mind."
  }
];

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-[#fcfbf9] py-20 sm:py-28 lg:py-32 relative border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Header & Search */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-600/40" />
              <span className="text-amber-600 font-bold text-xs tracking-[0.25em] uppercase">FAQ</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0b132b] mb-6 tracking-tight">
              Frequently<br />Asked Questions
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Find answers to common questions about our custom furniture, interior design process, and installation services.
            </p>

            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(null); // Close accordion on search for better UX
                }}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
              />
            </div>

            {/* Ask Question Button */}
            <div className="mt-auto pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 font-medium mb-4">
                Still have questions? We're here to help.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=917722008401&text=Hi,%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#0b132b] text-white font-bold rounded-full hover:bg-amber-500 hover:text-[#0b132b] transition-all duration-300 shadow-[0_4px_15px_rgba(11,19,43,0.1)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                Ask a Question
              </a>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  // If we are searching and there's exactly 1 result, auto-open it
                  const isOpen = (openIndex === index) || (searchQuery !== "" && filteredFaqs.length === 1);
                  return (
                    <div 
                      key={index}
                      className={`border rounded-[20px] transition-all duration-300 overflow-hidden ${
                        isOpen ? 'bg-[#faf8f5] shadow-sm border-amber-200/50' : 'bg-white border-gray-100 hover:border-amber-200'
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full px-6 py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                      >
                        <span className={`font-bold text-lg sm:text-xl transition-colors ${isOpen ? 'text-[#0b132b]' : 'text-gray-700'}`}>
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-amber-500 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-0">
                              <p className="text-gray-600 text-base leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center bg-gray-50 rounded-[24px] border border-gray-100">
                <Search className="w-12 h-12 text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">No questions found matching "{searchQuery}"</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setOpenIndex(0);
                  }}
                  className="mt-4 text-amber-600 font-bold hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
