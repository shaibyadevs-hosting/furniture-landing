"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, User, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Change color when scrolled past hero section (approximately 100vh)
      setIsScrolled(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-blue-600' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-blue-800' : 'hover:text-blue-300';
  const bgColor = isScrolled ? 'bg-white/95' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${bgColor}`}>
      <div className='container mx-auto px-4 sm:px-6 py-3 sm:py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center' style={{ border: 'none', outline: 'none' }}>
            <Image
              src='/touchwoodlogo.png'
              alt='Touchwood Logo'
              width={120}
              height={120}
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain'
              style={{ border: 'none', outline: 'none', boxShadow: 'none', borderWidth: 0 }}
              unoptimized
            />
          </Link>

          <nav className='hidden lg:flex items-center gap-6 xl:gap-8'>
            <Link
              href='/#home'
              className={`${textColor} ${hoverColor} transition-colors font-medium`}
            >
              Home
            </Link>
            <Link
              href='/#products'
              className={`${textColor} ${hoverColor} transition-colors font-medium`}
            >
              Products
            </Link>
            <Link
              href='/about'
              className={`${textColor} ${hoverColor} transition-colors font-medium`}
            >
              About
            </Link>
            <Link
              href='/#contact'
              className={`${textColor} ${hoverColor} transition-colors font-medium`}
            >
              Contact
            </Link>
          </nav>

          <div className='flex items-center gap-3 sm:gap-4 md:gap-6'>
            <button className={`${textColor} ${hoverColor} transition-colors flex items-center gap-1.5 sm:gap-2`}>
              <Search className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Search</span>
            </button>
            <button 
              onClick={() => window.open('https://www.instagram.com/touchwood_furnitures', '_blank')}
              className={`${textColor} ${hoverColor} transition-colors flex items-center gap-1.5 sm:gap-2`}
            >
              <User className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Account</span>
            </button>
            <button className={`${textColor} ${hoverColor} transition-colors flex items-center gap-1.5 sm:gap-2`}>
              <ImageIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
