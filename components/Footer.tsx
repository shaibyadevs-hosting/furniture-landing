"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const handleMapClick = () => {
    const address = 'Touchwood Furnitures, Paradsinga, Nagpur - 440016, Maharashtra, India';
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <footer className='bg-slate-100 mx-8 mb-8 rounded-3xl py-6 sm:py-8 border-t border-slate-200'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700 mb-6'>
          
          {/* Address */}
          <div 
            className='flex items-start gap-2 w-full lg:w-auto cursor-pointer hover:text-blue-600 transition-colors'
            onClick={handleMapClick}
            title="Click to view on Google Maps"
          >
            <MapPin className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Address:</span>
              <span className='break-words hover:underline'>
                Touchwood Furnitures, Paradsinga, Nagpur - 440016
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className='flex items-start gap-2 w-full lg:w-auto'>
            <Phone className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Phone:</span>
              <div className='flex flex-wrap gap-2'>
                <a 
                  href="tel:7722008401"
                  className='break-words cursor-pointer hover:text-blue-600 hover:underline transition-colors'
                >
                  7722008401
                </a>
                <span className='text-gray-400'>|</span>
                <a 
                  href="tel:7722001171"
                  className='break-words cursor-pointer hover:text-blue-600 hover:underline transition-colors'
                >
                  7722001171
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-start gap-2 w-full lg:w-auto'>
            <Mail className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Email:</span>
               <a
                 href="mailto:Touchwoodfurnitech225@gmail.com"
                 className='break-words hover:underline cursor-pointer hover:text-blue-600 transition-colors'
               >
                Touchwoodfurnitech225@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
