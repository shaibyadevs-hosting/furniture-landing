"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

interface ReelData {
  reelLink: string;
  thumbnail: string;
}

export function FollowUsSection() {
  const [instagramReels, setInstagramReels] = useState<ReelData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await fetch('/instagram-reels.json');
        const data = await response.json();
        setInstagramReels(data);
      } catch (error) {
        console.error('Error fetching Instagram reels:', error);
        setInstagramReels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  const titles = [
    "Modern Furniture Showcase",
    "Interior Design Tips",
    "Customer Reviews",
    "Behind the Scenes",
    "New Collection Launch",
    "Living Room Ideas",
    "Bedroom Makeover",
    "Office Setup",
    "Dining Room Design",
    "Home Decor Tips",
    "Premium Collection",
    "Luxury Designs"
  ];

  const instagramReelsWithTitles = instagramReels.map((reel, index) => ({
    id: index + 1,
    thumbnail: reel.thumbnail,
    reelUrl: reel.reelLink,
    title: titles[index] || `Reel ${index + 1}`
  }));

  const handleVideoClick = (reelUrl: string) => {
    window.open(reelUrl, '_blank');
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden mt-8 sm:mt-12">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-20 h-20 sm:w-32 sm:h-32 opacity-5">
        <div className="grid grid-cols-4 gap-1 sm:gap-2">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-3">
            <span className="text-blue-400">FOLLOW US</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            @touchwood_furnitures
          </p>
        </div>

        {/* Video Grid - Responsive columns with little padding */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 w-full px-2 sm:px-3 md:px-4">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">Loading reels...</p>
            </div>
          ) : (
            instagramReelsWithTitles.map((reel, index) => (
            <div
              key={reel.id}
              className="group relative aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => handleVideoClick(reel.reelUrl)}
            >
              {/* Video Thumbnail */}
              <div className="relative w-full h-full">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover"
                />
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg group-hover:scale-110 transition-all duration-300" fill="currentColor" />
                </div>

                {/* Video number badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full">
                  {index + 1}
                </div>
              </div>

              {/* Hover title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm font-medium truncate">
                  {reel.title}
                </p>
              </div>
            </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24 sm:mt-24 px-4 sm:px-6">
        
          <button
            onClick={() => window.open('https://www.instagram.com/touchwood_furnitures', '_blank')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Follow on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
