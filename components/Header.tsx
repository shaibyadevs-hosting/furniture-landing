"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Image as ImageIcon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] sm:backdrop-blur-sm transition-all duration-300 ${bgColor} ${isMobileMenuOpen ? 'backdrop-blur-md bg-white/95' : ''} mt-0 sm:mt-0`}>
      <div className='container mx-auto px-4 sm:px-6 py-0 sm:py-1'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center ml-4 sm:ml-6 md:ml-8 lg:ml-12' style={{ border: 'none', outline: 'none' }} onClick={closeMobileMenu}>
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

          {/* Desktop Navigation */}
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
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden ${textColor} ${hoverColor} transition-colors p-2`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>

            {/* Desktop Icons */}
            <button 
              onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
              className={`hidden lg:flex ${textColor} ${hoverColor} transition-colors items-center gap-1.5 sm:gap-2`}
            >
              <User className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Account</span>
            </button>
            <button 
              onClick={() => window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank')}
              className={`hidden lg:flex ${textColor} ${hoverColor} transition-colors items-center gap-1.5 sm:gap-2`}
            >
              <ImageIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Gallery</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='lg:hidden mt-2 pb-4 border-t border-gray-200/20 sm:border-gray-300/30'>
            <nav className='flex flex-col gap-4 pt-4'>
              <Link
                href='/#home'
                onClick={closeMobileMenu}
                className='text-gray-900 hover:text-blue-600 transition-colors font-medium text-lg py-2 px-4'
              >
                Home
              </Link>
              <Link
                href='/#products'
                onClick={closeMobileMenu}
                className='text-gray-900 hover:text-blue-600 transition-colors font-medium text-lg py-2 px-4'
              >
                Products
              </Link>
              <Link
                href='/about'
                onClick={closeMobileMenu}
                className='text-gray-900 hover:text-blue-600 transition-colors font-medium text-lg py-2 px-4'
              >
                About
              </Link>
              <Link
                href='/#contact'
                onClick={closeMobileMenu}
                className='text-gray-900 hover:text-blue-600 transition-colors font-medium text-lg py-2 px-4'
              >
                Contact
              </Link>
              <div className='flex items-center gap-4 pt-2 border-t border-gray-200/20 sm:border-gray-300/30'>
                <button 
                  onClick={() => {
                    window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank');
                    closeMobileMenu();
                  }}
                  className='text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2 text-lg py-2 px-4'
                >
                  <User className='w-5 h-5' />
                  <span>Account</span>
                </button>
                <button 
                  onClick={() => {
                    window.open('https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr', '_blank');
                    closeMobileMenu();
                  }}
                  className='text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2 text-lg py-2 px-4'
                >
                  <ImageIcon className='w-5 h-5' />
                  <span>Gallery</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
