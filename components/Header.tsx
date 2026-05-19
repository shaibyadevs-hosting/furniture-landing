"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at the very top
      if (currentScrollY < 20) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      // Hide if scrolling down and past 100px. Show if scrolling up.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed left-1/2 -translate-x-1/2 z-[9999] transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
          ${isAtTop ? 'top-0 w-full' : 'top-4 w-[95vw] lg:w-[850px] xl:w-[1000px]'}
        `}
      >
        <div 
          className={`transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between border
            ${isAtTop 
              ? 'bg-[#0b132b]/95 backdrop-blur-md shadow-md rounded-none px-6 sm:px-12 py-4 border-transparent border-b-white/10' 
              : 'bg-[#0b132b]/90 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full px-4 sm:px-6 py-2.5 border-white/10'
            }
          `}
        >
          
          {/* Brand Logo & Name */}
          <Link href='/' className='flex items-center gap-3 group flex-shrink-0' onClick={closeMobileMenu}>
            <div className={`flex items-center justify-center overflow-hidden transition-all duration-300 rounded-full bg-white shadow-inner
              ${isAtTop ? 'w-12 h-12 p-2' : 'w-10 h-10 p-1.5'}`}
            >
              <Image
                src='/logo.png'
                alt='Touchwood Logo'
                width={48}
                height={48}
                className={`object-contain transition-transform duration-300 group-hover:scale-110 w-full h-full`}
                unoptimized
              />
            </div>
            <span className={`text-white font-bold leading-none tracking-wide hidden sm:block ${!isAtTop && 'md:hidden lg:block'}`}>
              <span className={`block transition-all ${isAtTop ? 'text-base' : 'text-sm'}`}>Touchwood</span>
              <span className={`text-amber-400 font-medium uppercase tracking-[0.2em] block transition-all
                ${isAtTop ? 'text-xs mt-1' : 'text-[10px] mt-0.5'}`}>
                Furnitech
              </span>
            </span>
          </Link>

          {/* Center Navigation (Desktop) */}
          <nav className='hidden lg:flex items-center gap-8 xl:gap-12'>
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className='relative text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase group py-2'
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Rightmost: Mobile Menu Toggle */}
          <div className='flex items-center gap-3 sm:gap-4'>
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu} 
              className='lg:hidden text-gray-200 hover:text-amber-400 transition-colors p-2 bg-white/5 rounded-full border border-white/10 active:scale-95' 
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className='w-5 h-5 sm:w-6 sm:h-6' /> : <Menu className='w-5 h-5 sm:w-6 sm:h-6' />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md' onClick={closeMobileMenu}>
          <div 
            className='absolute top-24 left-1/2 -translate-x-1/2 bg-[#0b132b]/95 border border-white/10 rounded-3xl p-8 shadow-2xl w-[90vw] max-w-sm flex flex-col gap-6 animate-in slide-in-from-top-8 duration-300'
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-5 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  onClick={closeMobileMenu} 
                  className='text-gray-300 hover:text-amber-400 transition-colors font-medium text-lg uppercase tracking-wider'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
