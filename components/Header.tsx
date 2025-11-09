"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, User, Image as ImageIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm'>
      <div className='container mx-auto px-4 sm:px-6 py-3 sm:py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2 sm:gap-3'>
            <Image
              src='/touchwoodlogo.png'
              alt='Touchwood Logo'
              width={50}
              height={50}
              className='w-10 h-10 sm:w-12 sm:h-12 object-contain'
            />
            <span className='text-white text-lg sm:text-xl font-semibold'>
              Touchwood
            </span>
          </Link>

          <nav className='hidden lg:flex items-center gap-6 xl:gap-8'>
            <Link
              href='/'
              className='text-white hover:text-blue-300 transition-colors font-medium'
            >
              Home
            </Link>
            <Link
              href='/products'
              className='text-white hover:text-blue-300 transition-colors font-medium'
            >
              Products
            </Link>
            <Link
              href='/about'
              className='text-white hover:text-blue-300 transition-colors font-medium'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-white hover:text-blue-300 transition-colors font-medium'
            >
              Contact
            </Link>
          </nav>

          <div className='flex items-center gap-3 sm:gap-4 md:gap-6'>
            <button className='text-white hover:text-blue-300 transition-colors flex items-center gap-1.5 sm:gap-2'>
              <Search className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Search</span>
            </button>
            <button className='text-white hover:text-blue-300 transition-colors flex items-center gap-1.5 sm:gap-2'>
              <User className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Account</span>
            </button>
            <button className='text-white hover:text-blue-300 transition-colors flex items-center gap-1.5 sm:gap-2'>
              <ImageIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden xl:inline text-sm'>Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
