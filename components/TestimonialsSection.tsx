"use client";

import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    { 
      id: 1, 
      image: "/testimonials/p1.png",
      name: "ASHWIN SATHWANE",
      date: "a month ago",
      message: "I got best Modular kitchen manufacturers in Nagpur. Very good experience in Best Modular furniture in town.",
      reviewsCount: "5 reviews",
      photosCount: "4 photos",
      ownerResponse: "We're so glad you liked your modular kitchen! At Touchwood Furnitech, we specialize in premium modular kitchen with modern designs and long-lasting durability. Your appreciation encourages us to keep crafting functional and stylish interiors."
    },
    { 
      id: 2, 
      image: "/testimonials/p2.png",
      name: "Prasenjit Mallick",
      date: "a year ago",
      message: "Absolutely brilliant service from Touchwood Furnitech. From ordering to delivery it was so easy and we are delighted with the quality as well. The Staff's were very professional and pleasant, I myself am very satisfied with the quality",
      reviewsCount: "2 reviews",
      photosCount: "1 photo"
    },
    { 
      id: 3, 
      image: "/testimonials/p3.png",
      name: "Nikhil Tidke",
      date: "8 months ago",
      message: "Best bedroom set Design and Good Wardrobe design option here",
      reviewsCount: "8 reviews",
      photosCount: "6 photos",
      ownerResponse: "Thank you sir 🙏🏻"
    },
    { 
      id: 4, 
      image: "/testimonials/p4.png",
      name: "Vijay",
      date: "3 years ago",
      message: "We smiply love all you furniture. I bought a wardrobe and bed from touchwood furnitech. I am very happy with the product, their delivery and assembly. Compliment for the range that they offer and the service that they provide.",
      reviewsCount: "1 review",
      photosCount: "2 photos"
    },
    { 
      id: 5, 
      image: "/testimonials/p5.png",
      name: "suraj gaidhane",
      date: "a year ago",
      message: "I would highly recommend Touchwood Furnitech LLP to anyone looking for top-notch interior furniture work. Their dedication to excellence and customer satisfaction is truly commendable.",
      reviewsCount: "3 reviews"
    },
    { 
      id: 6, 
      image: "/testimonials/p6.png",
      name: "amit yadav",
      date: "3 years ago",
      message: "Best customized furniture with new designs on time delivery",
      reviewsCount: "4 reviews",
      photosCount: "2 photos"
    },
    { 
      id: 7, 
      image: "/testimonials/p7.png",
      name: "Amit mallick",
      date: "a year ago",
      message: "Excellent Modular furnitures at very competitive Prices. Great services from Touchwood Team, the Staff are courteous and helpful. Definitely should go with the Touchwood company for their amazing modular kitchen and furnitures.",
      reviewsCount: "1 review",
      ownerResponse: "Thank you for sharing your experience! At Touchwood Furnitech, we specialise in premium modular kitchen and modular wardrobes .we take pride not just in high-quality modular furniture but also in timely delivery and professional service. We look forward to furnishing more of your spaces with our custom designs."
    },
  ];

  return (
    <section className="relative bg-gray-200 py-20 overflow-hidden">
      <div className="text-center mb-4  px-4  mt-60">
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-900">
          What our <span className="text-blue-400">Clients Say</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Nothing makes us happier than seeing our clients love their new spaces.
          Here’s what they have to say about their journey with us and how our
          designs made a difference.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full max-w-[1600px] h-[45vw] mx-auto">
        {testimonials.map((t, i) => {
          let style = "";
          let size = "";
          let z = "";
          let blur = false;

          switch (i) {
            case 0:
              style = "left-[0.5%]";
              size = "w-[14vw] h-[25vw]";
              z = "z-[5]";
              blur = true;
              break;
            case 1:
              style = "left-[16%]";
              size = "w-[14vw] h-[25vw]";
              z = "z-[10]";
              blur = true;
              break;
            case 2:
              style = "left-[22%]";
              size = "w-[18vw] h-[30vw]";
              z = "z-[15]";
              blur = false;
              break;
            case 3:
              style = "left-1/2 -translate-x-1/2";
              size = "w-[26vw] h-[38vw]";
              z = "z-[30]";
              blur = false;
              break;
            case 4:
              style = "right-[22%]";
              size = "w-[18vw] h-[30vw]";
              z = "z-[15]";
              blur = false;
              break;
            case 5:
              style = "right-[16%]";
              size = "w-[14vw] h-[25vw]";
              z = "z-[10]";
              blur = true;
              break;
            case 6:
              style = "right-[0.5%]";
              size = "w-[14vw] h-[25vw]";
              z = "z-[5]";
              blur = true;
              break;
          }

          return (
            <div
              key={t.id}
              className={`absolute top-1/2 -translate-y-1/2 ${style} ${z} ${size}
                overflow-hidden rounded-md shadow-xl transition-all duration-500
                hover:scale-110 hover:z-[40] hover:shadow-2xl group`}
            >
              {/* Background Image */}
              <Image
                src={t.image}
                alt={`testimonial-${t.id}`}
                fill
                className={`object-cover transition-all duration-500 ${
                  blur
                    ? "blur-[2px] opacity-80 group-hover:blur-0 group-hover:opacity-100"
                    : "opacity-100"
                }`}
              />
              
              {/* Blur overlay for bottom 30% */}
              <div className="absolute bottom-0 left-0 right-0 h-[30%] backdrop-blur-md z-10"></div>
              
              {/* Review Card Overlay - Bottom Section Only */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col p-3 sm:p-4 rounded-b-md">
                {/* Reviewer Info */}
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-medium text-[9px] sm:text-[10px]">{t.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-[10px] sm:text-xs truncate drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.7)' }}>{t.name}</h4>
                    {(t.reviewsCount || t.photosCount) && (
                      <p className="text-gray-800 text-[9px] sm:text-[10px] drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.6)' }}>
                        {t.reviewsCount && t.photosCount ? `${t.reviewsCount} · ${t.photosCount}` : t.reviewsCount || t.photosCount}
                      </p>
                    )}
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current drop-shadow-lg" viewBox="0 0 20 20" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))' }}>
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="text-gray-800 text-[9px] sm:text-[10px] ml-1 drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.6)' }}>{t.date}</span>
                </div>

                {/* Review Message */}
                <p className="text-gray-900 text-[10px] sm:text-xs leading-relaxed mb-2 flex-1 overflow-y-auto line-clamp-3 sm:line-clamp-4 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.7)' }}>
                  {t.message}
                </p>

                {/* Owner Response */}
                {t.ownerResponse && (
                  <div className="mt-auto bg-white/80 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border-l-4 border-green-500 shadow-lg">
                    <p className="text-green-700 font-medium text-[10px] sm:text-xs mb-0.5 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Response from the owner</p>
                    <p className="text-gray-800 text-[10px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                      {t.ownerResponse}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile & Tablet Scrollable Carousel */}
      <div className="lg:hidden flex space-x-6 overflow-x-auto px-6 pb-4 snap-x snap-mandatory">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="relative flex-shrink-0 w-[80%] sm:w-[60%] md:w-[45%] h-[500px] snap-center rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <Image
              src={t.image}
              alt={`testimonial-${t.id}`}
              fill
              className="object-cover"
            />
            
            {/* Blur overlay for bottom 30% */}
            <div className="absolute bottom-0 left-0 right-0 h-[30%] backdrop-blur-md z-10"></div>
            
            {/* Review Card Overlay for Mobile - Bottom Section Only */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col p-4 rounded-b-xl">
              {/* Reviewer Info */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-medium text-xs">{t.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-xs truncate drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.7)' }}>{t.name}</h4>
                  {(t.reviewsCount || t.photosCount) && (
                    <p className="text-gray-800 text-[10px] drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.6)' }}>
                      {t.reviewsCount && t.photosCount ? `${t.reviewsCount} · ${t.photosCount}` : t.reviewsCount || t.photosCount}
                    </p>
                  )}
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current drop-shadow-lg" viewBox="0 0 20 20" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))' }}>
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
                <span className="text-gray-800 text-[10px] ml-1 drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.6)' }}>{t.date}</span>
              </div>

              {/* Review Message */}
              <p className="text-gray-900 text-xs leading-relaxed mb-3 flex-1 overflow-y-auto line-clamp-4 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.7)' }}>
                {t.message}
              </p>

              {/* Owner Response */}
              {t.ownerResponse && (
                <div className="mt-auto bg-white/80 backdrop-blur-sm rounded-lg p-2 border-l-4 border-green-500 shadow-lg">
                  <p className="text-green-700 font-medium text-xs mb-1 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Response from the owner</p>
                  <p className="text-gray-800 text-xs leading-relaxed line-clamp-3 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                    {t.ownerResponse}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
