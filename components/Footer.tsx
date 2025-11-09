"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className='bg-slate-100 mx-8 mb-8 rounded-3xl py-6 sm:py-8 border-t border-slate-200'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700'>
          <div className='flex items-start gap-2 w-full lg:w-auto'>
            <MapPin className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Address:</span>
              <span className='break-words'>
                Touchwood Furnitures, Paradsinga, Nagpur - 440016
              </span>
            </div>
          </div>

          <div className='flex items-start gap-2 w-full lg:w-auto'>
            <Phone className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Phone:</span>
              <span className='break-words'>+91 7722008401 / +91 7722001171</span>
            </div>
          </div>

          <div className='flex items-start gap-2 w-full lg:w-auto'>
            <Mail className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Email:</span>
              <span className='break-words'>info@touchwoodfurnitures.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
