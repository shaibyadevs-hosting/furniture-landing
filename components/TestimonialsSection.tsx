"use client";

import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    { id: 1, image: "/Instagram story - 1.png" },
    { id: 2, image: "/Instagram story - 2.png" },
    { id: 3, image: "/Instagram story - 1.png" },
    { id: 4, image: "/Instagram story - 3.png" },
    { id: 5, image: "/Instagram story - 4.png" },
    { id: 6, image: "/Instagram story - 9.png" },
    { id: 7, image: "/Instagram story - 8.png" },
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
              {i === 3 && <div className="absolute inset-0 bg-white"></div>}

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
          </div>
        ))}
      </div>
    </section>
  );
}
