"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Image as ImageIcon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <>
      <header 
        className={`fixed left-1/2 -translate-x-1/2 z-[9999] transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
          ${isAtTop ? 'top-0 w-full' : 'top-4 w-[95vw] lg:w-[850px] xl:w-[1000px]'}
        `}
      >
        <div 
          className={`transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between border overflow-hidden
            ${isAtTop 
              ? 'bg-[#0b132b] shadow-md rounded-none px-6 sm:px-12 md:px-16 py-4 sm:py-5 border-transparent border-b-white/10 gap-6 lg:gap-12' 
              : 'bg-[#0b132b]/95 backdrop-blur-md shadow-2xl rounded-full p-2.5 sm:p-3 border-white/10 gap-4 lg:gap-8'
            }
          `}
        >
          
          {/* Leftmost: Logo inside a white circle */}
          <Link href='/' className='bg-white rounded-full p-2 sm:p-3 flex-shrink-0 flex items-center justify-center shadow-inner aspect-square' onClick={closeMobileMenu}>
            <Image
              src='/logo.png'
              alt='Touchwood Logo'
              width={80}
              height={80}
              className='w-10 h-10 sm:w-14 sm:h-14 object-contain'
              unoptimized
            />
          </Link>

          {/* Center Navigation */}
          <nav className='hidden lg:flex items-center gap-8 xl:gap-12'>
            <Link href='/#home' className='text-gray-300 hover:text-white transition-colors font-medium text-base lg:text-lg'>Home</Link>
            <Link href='/#products' className='text-gray-300 hover:text-white transition-colors font-medium text-base lg:text-lg'>Products</Link>
            <Link href='/about' className='text-gray-300 hover:text-white transition-colors font-medium text-base lg:text-lg'>About</Link>
            <Link href='/#contact' className='text-gray-300 hover:text-white transition-colors font-medium text-base lg:text-lg'>Contact</Link>
          </nav>

          {/* Rightmost: Icons & Mobile Menu Toggle */}
          <div className='flex items-center gap-4 sm:gap-6 pr-3 sm:pr-6'>
            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className='lg:hidden text-gray-200 hover:text-white transition-colors p-1' aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
            </button>

            {/* Desktop Icons */}
            <button 
              onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech', '_blank')}
              className='hidden lg:flex text-gray-300 hover:text-white transition-colors items-center'
            >
              <User className='w-6 h-6 lg:w-7 lg:h-7' />
            </button>
            <button 
              onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech', '_blank')}
              className='hidden lg:flex text-gray-300 hover:text-white transition-colors items-center'
            >
              <ImageIcon className='w-6 h-6 lg:w-7 lg:h-7' />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm' onClick={closeMobileMenu}>
          <div 
            className='absolute top-24 left-1/2 -translate-x-1/2 bg-[#0b132b] border border-white/10 rounded-3xl p-6 shadow-2xl w-[90vw] max-w-sm flex flex-col gap-4 animate-in slide-in-from-top-4'
            onClick={(e) => e.stopPropagation()}
          >
            <Link href='/#home' onClick={closeMobileMenu} className='text-gray-200 hover:text-white transition-colors font-medium text-lg'>Home</Link>
            <Link href='/#products' onClick={closeMobileMenu} className='text-gray-200 hover:text-white transition-colors font-medium text-lg'>Products</Link>
            <Link href='/about' onClick={closeMobileMenu} className='text-gray-200 hover:text-white transition-colors font-medium text-lg'>About</Link>
            <Link href='/#contact' onClick={closeMobileMenu} className='text-gray-200 hover:text-white transition-colors font-medium text-lg'>Contact</Link>
            <div className='flex items-center gap-4 pt-4 border-t border-white/10'>
              <button onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech', '_blank')} className='text-gray-200 hover:text-white'>
                <User className='w-6 h-6' />
              </button>
              <button onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech', '_blank')} className='text-gray-200 hover:text-white'>
                <ImageIcon className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
