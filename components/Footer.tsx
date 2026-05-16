"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Modular Kitchen", href: "#products" },
    { label: "Bedroom Furniture", href: "#products" },
    { label: "Office Furniture", href: "#products" },
    { label: "Home Furniture", href: "#products" },
    { label: "Hotel Furniture", href: "#products" },
    { label: "Our Clients", href: "#about" },
    { label: "Reviews", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [
    { label: "L-Shaped Kitchen", href: "#products" },
    { label: "U-Shaped Kitchen", href: "#products" },
    { label: "Island Kitchen", href: "#products" },
    { label: "Modular Wardrobes", href: "#products" },
    { label: "Study Furniture", href: "#products" },
    { label: "Conference Tables", href: "#products" },
    { label: "Hotel Suites", href: "#products" },
    { label: "Custom Interiors", href: "#products" },
  ];

  const socials = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/touchwoodfurnitech",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/touchwoodfurnitech",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@touchwoodfurnitech",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#111111] text-gray-400">
      {/* Main footer grid */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Touchwood Furnitech"
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    // fallback if logo missing
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <span className="text-white font-bold text-base leading-tight">
                Touchwood<br />
                <span className="text-amber-400 font-normal text-sm">Furnitech</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6 text-gray-500">
              Crafting luxury spaces across India since 2009.{" "}
              <span className="text-amber-500/80">Where vision meets craftsmanship.</span>
            </p>

            {/* Contact details */}
            <div className="space-y-3 text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Touchwood+Furnitures+Paradsinga+Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-amber-400 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-amber-500/60 mt-0.5 flex-shrink-0 group-hover:text-amber-400" />
                <span>Paradsinga, Nagpur — 440016</span>
              </a>
              <a
                href="tel:7722008401"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-500/60 flex-shrink-0 group-hover:text-amber-400" />
                <span>+91 7722 008401 / 001171</span>
              </a>
              <a
                href="mailto:Touchwoodfurnitech225@gmail.com"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-amber-500/60 flex-shrink-0 group-hover:text-amber-400" />
                <span className="break-all">Touchwoodfurnitech225@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Our Products */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide mb-5">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="text-sm text-gray-500 hover:text-amber-400 transition-colors duration-200"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Stay Connected */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide mb-3">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Subscribe for design inspiration and new collection{" "}
              <span className="text-amber-500/80">announcements.</span>
            </p>

            {/* Email subscribe */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex gap-0 mb-6"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-amber-500/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-[#111] font-bold px-4 py-2.5 rounded-r-lg text-sm transition-colors duration-200"
              >
                Go
              </button>
            </form>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                    hover:bg-amber-500/15 hover:border-amber-500/30 hover:text-amber-400 transition-all duration-200 text-gray-500"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Touchwood Furnitech Pvt. Ltd. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made and managed by 
              <a href="https://www.shaibyasolutions.com" target="_blank" rel="noopener noreferrer" className="text-amber-500/80 hover:text-amber-400 transition-colors">
                Shaibya Solutions
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
