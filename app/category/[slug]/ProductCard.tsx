"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface Product {
  name: string;
  image: string;
  desc: string;
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false);

  const handleEnquire = () => {
    const msg = `Hello Touchwood Furnitech! 👋\n\nI'm interested in: *${product.name}*\n\nPlease share more details.`;
    window.open(
      `https://api.whatsapp.com/send?phone=917722008401&text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        height: hovered ? 380 : 300,
        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
        style={{
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Number */}
        <div
          className="text-amber-400 text-sm font-bold mb-2 transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0.5 }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Name */}
        <h3 className="text-white font-bold text-lg leading-tight">{product.name}</h3>



        {/* Desc + CTA — slides in on hover */}
        <div
          style={{
            maxHeight: hovered ? 120 : 0,
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? 10 : 0,
            overflow: "hidden",
            transition:
              "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, margin-top 0.3s ease",
          }}
        >
          <p className="text-white/70 text-xs leading-relaxed mb-3">{product.desc}</p>
          <button
            onClick={handleEnquire}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0b132b] font-bold text-xs px-4 py-2 rounded-full transition-colors duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Enquire via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
