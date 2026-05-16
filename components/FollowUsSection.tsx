"use client";

import { Instagram } from "lucide-react";

// Placeholder slots — replace src with real image paths when ready
// Each item also carries the Instagram post URL it should link to
const POSTS = [
  { id: 1, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
  { id: 2, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
  { id: 3, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
  { id: 4, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
  { id: 5, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
  { id: 6, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
  { id: 7, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
  { id: 8, src: "", href: "https://www.instagram.com/touchwoodfurnitech/" },
];

// Duplicate for seamless loop
const TRACK = [...POSTS, ...POSTS];

export function FollowUsSection() {
  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-12 bg-amber-600/30" />
          <span className="text-amber-600 font-bold text-xs tracking-[0.3em] uppercase">
            Instagram
          </span>
          <div className="h-px w-12 bg-amber-600/30" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Follow Our Journey
        </h2>
        <a
          href="https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors duration-300 text-base sm:text-lg"
        >
          <Instagram className="w-5 h-5" />
          @touchwoodfurnitech
        </a>
      </div>

      {/* Infinite scrolling strip */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 sm:gap-5"
          style={{
            width: "max-content",
            animation: "marquee 30s linear infinite",
          }}
        >
          {TRACK.map((post, i) => (
            <a
              key={`${post.id}-${i}`}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden group
                border border-gray-200 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {post.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.src}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Placeholder shown until real images are added */
                <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-3">
                  <Instagram className="w-10 h-10 text-gray-300" />
                  <span className="text-gray-300 text-xs font-medium">Photo {post.id}</span>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="https://www.instagram.com/touchwoodfurnitech?igsh=MTdjNmw5c3p0cWVrZw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-[#0b132b] font-bold
            px-8 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300
            hover:shadow-[0_0_30px_rgba(245,158,11,0.35)] active:scale-95"
        >
          <Instagram className="w-5 h-5" />
          Follow on Instagram
        </a>
      </div>

    </section>
  );
}
