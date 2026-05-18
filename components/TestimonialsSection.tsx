"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ashwin Sathwane",
    title: "Homeowner",
    message:
      "I got best Modular kitchen manufacturers in Nagpur. Very good experience in Best Modular furniture in town. Touchwood Furnitech specializes in premium modular kitchens with modern designs and long-lasting durability.",
    theme: "light",
  },
  {
    id: 2,
    name: "Prasenjit Mallick",
    title: "Homeowner",
    message:
      "Absolutely brilliant service from Touchwood Furnitech. From ordering to delivery it was so easy and we are delighted with the quality as well. The staff were very professional and pleasant, I myself am very satisfied.",
    theme: "dark",
  },
  {
    id: 3,
    name: "Nikhil Tidke",
    title: "Interior Enthusiast",
    message:
      "Best bedroom set design and good wardrobe design options here. The craftsmanship is top-notch and fits perfectly with our modern aesthetics.",
    theme: "light",
  },
  {
    id: 4,
    name: "Vijay",
    title: "Homeowner",
    message:
      "We simply love all your furniture. I bought a wardrobe and bed from Touchwood Furnitech. I am very happy with the product, their delivery and assembly. Compliments for the range that they offer and the service.",
    theme: "dark",
  },
  {
    id: 5,
    name: "Suraj Gaidhane",
    title: "Homeowner",
    message:
      "I would highly recommend Touchwood Furnitech LLP to anyone looking for top-notch interior furniture work. Their dedication to excellence and customer satisfaction is truly commendable.",
    theme: "light",
  },
  {
    id: 6,
    name: "Amit Yadav",
    title: "Homeowner",
    message:
      "Best customized furniture with new designs and on-time delivery. Excellent Modular furnitures at very competitive prices. Great services from the Touchwood Team.",
    theme: "dark",
  },
];

// Tilt in degrees for each card — alternating, applied via inline styles so Tailwind purge can't strip them
const TILTS = [-2, 2, -1.5, 1.5, -2.5, 2.5];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,          // no loop so we can detect the end
    align: "start",
    dragFree: false,
  });

  const [completedOnce, setCompletedOnce] = useState(false);
  const wheelCooldown = useRef(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Track when user reaches the last slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      if (!emblaApi.canScrollNext()) {
        setCompletedOnce(true);
      }
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Mouse-wheel scroll handler
  useEffect(() => {
    if (!emblaApi) return;

    const onWheel = (e: WheelEvent) => {
      // If user has already seen all cards, let normal page scroll happen
      if (completedOnce && e.deltaY > 0) return;

      // Intercept vertical scroll to drive the carousel
      e.preventDefault();

      if (wheelCooldown.current) return;

      if (e.deltaY > 0) {
        emblaApi.scrollNext();
      } else if (e.deltaY < 0) {
        emblaApi.scrollPrev();
      }

      wheelCooldown.current = true;
      setTimeout(() => {
        wheelCooldown.current = false;
      }, 450);
    };

    const viewport = emblaApi.rootNode();
    viewport.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [emblaApi, completedOnce]);

  return (
    <section className="bg-[#fcfbf9] py-16 sm:py-24 lg:py-32 overflow-hidden mt-[8vw] sm:mt-[6vw] lg:mt-[4vw]">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-8 sm:w-16 bg-amber-600/30" />
          <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
            Testimonials
          </span>
          <div className="h-px w-8 sm:w-16 bg-amber-600/30" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          What Our Customers Say
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={emblaRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div className="flex gap-6 sm:gap-8 px-4 sm:px-10 lg:px-20 py-12">
            {testimonials.map((t, index) => {
              const isDark = t.theme === "dark";
              const tiltDeg = TILTS[index % TILTS.length];
              return (
                <div
                  key={t.id}
                  style={{
                    transform: `rotate(${tiltDeg}deg)`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "rotate(0deg) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      `rotate(${tiltDeg}deg)`;
                  }}
                  className={`flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col
                    ${isDark ? "bg-[#0b132b] text-white" : "bg-white text-gray-900"}
                  `}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Message */}
                  <p
                    className={`text-base sm:text-lg leading-relaxed mb-10 font-medium flex-1 ${isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                  >
                    "{t.message}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/5">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg
                        ${isDark ? "bg-white/10 text-white" : "bg-[#0b132b] text-white"}
                      `}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)
                        .toUpperCase()}
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {t.name}
                      </h4>
                      <p
                        className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                      >
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prev / Next buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center
              text-gray-700 hover:bg-[#0b132b] hover:text-white hover:border-[#0b132b] hover:shadow-lg
              transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="w-14 h-14 rounded-full bg-[#0b132b] border border-[#0b132b] shadow-md flex items-center justify-center
              text-white hover:bg-white hover:text-[#0b132b] hover:border-gray-200 hover:shadow-lg
              transition-all duration-300 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Hint shown until completed */}
        {!completedOnce && (
          <p className="text-center text-xs text-gray-400 mt-6 animate-pulse">
            Scroll down to browse testimonials ↓
          </p>
        )}
      </div>
    </section>
  );
}
