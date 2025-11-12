"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Change color when scrolled past hero section (approximately 100vh)
      setIsScrolled(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = (isScrolled || isAboutPage) ? 'text-blue-600' : 'text-white';
  const hoverColor = (isScrolled || isAboutPage) ? 'hover:text-blue-800' : 'hover:text-blue-300';
  const bgColor = (isScrolled || isAboutPage) ? 'bg-white/95' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] backdrop-blur-sm transition-all duration-300 ${bgColor}`}>
      <div className='container mx-auto px-4 sm:px-6 py-0.5 sm:py-1'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center ml-4 sm:ml-6 md:ml-8 lg:ml-12' style={{ border: 'none', outline: 'none' }}>
            <Image
              src='/touchwoodlogo.png'
              alt='Touchwood Logo'
              width={200}
              height={200}
              className='w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain'
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
            <button 
              onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
              className={`${textColor} ${hoverColor} transition-colors flex items-center gap-1.5 sm:gap-2`}
            >
              <User className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Account</span>
            </button>
            <button 
              onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
              className={`${textColor} ${hoverColor} transition-colors flex items-center gap-1.5 sm:gap-2`}
            >
              <ImageIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
