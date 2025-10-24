"use client";

import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      type: "profile",
      name: "Frame 14",
      position: "Customer",
      image: "#E5E7EB",
      rating: 0,
    },
    {
      type: "profile",
      name: "Frame 15",
      position: "Customer",
      image: "#F3F4F6",
      rating: 0,
    },
    {
      type: "testimonial",
      name: "Simon Agaul",
      position: "Customer",
      image: "#374151",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim ad minim veniam.",
    },
    {
      type: "featured",
      name: "James Brown",
      position: "Customer",
      image: "#3B82F6",
      rating: 5,
      text: "I barely digest texts on such small interfaces, but this time was really different. Great job!",
      quote: true,
    },
    {
      type: "profile",
      name: "Customer",
      position: "Happy Client",
      image: "#1E40AF",
      rating: 0,
    },
    {
      type: "profile",
      name: "Customer",
      position: "Happy Client",
      image: "#3B82F6",
      rating: 5,
    },
  ];

  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-gray-100 relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='text-center mb-10 sm:mb-12 lg:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4'>
            What our <span className='text-blue-400'>Clients Say</span>
          </h2>
          <p className='text-sm sm:text-base text-gray-600 max-w-5xl mx-auto px-4'>
            Nothing makes us happier than seeing our clients love their new
            spaces. Here's what they have to say about their journey with us and
            how our designs made a difference.
          </p>
        </div>

        <div className='relative'>
          <div className='flex justify-center items-center perspective-1000'>
            {/* Grid of testimonial cards with 3D perspective */}
            <div className='relative w-full max-w-6xl h-[500px] sm:h-[600px]'>
              {/* Back Left Card - Frame 14 */}
              <div className='absolute left-0 top-12 w-48 sm:w-56 bg-white rounded-lg shadow-lg p-6 transform -rotate-6 scale-90 opacity-40'>
                <div className='flex items-center gap-2 mb-4'>
                  <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                  <span className='text-xs text-gray-600'>Testimonial</span>
                </div>
                <div className='text-xs text-gray-500 mb-4 leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur. Ut enim ad minim
                  veniam quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
                <div className='mt-6'>
                  <div className='w-20 h-20 bg-gray-200 rounded-lg mb-3'></div>
                  <h4 className='font-semibold text-sm'>Marilyn Stone</h4>
                  <div className='flex gap-1 mt-2'>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className='w-2 h-2 bg-blue-600 rounded-full'
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back Left Middle Card - Frame 15 */}
              <div className='absolute left-24 sm:left-32 top-8 w-56 sm:w-64 bg-white rounded-lg shadow-xl p-6 transform -rotate-3 scale-95 opacity-60'>
                <div className='w-full h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden'>
                  <div className='w-full h-full bg-gradient-to-br from-gray-700 to-gray-900'></div>
                </div>
                <p className='text-xs text-gray-600 mb-4 leading-relaxed'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <h4 className='font-semibold text-sm'>Simon Agdul</h4>
              </div>

              {/* Center Main Card - Featured */}
              <div className='absolute left-1/2 top-0 -translate-x-1/2 w-64 sm:w-80 bg-white rounded-lg shadow-2xl p-8 z-10 transform scale-100'>
                <div className='flex items-center gap-2 mb-6'>
                  <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                  <span className='text-xs text-gray-600 font-medium'>
                    Testimonial
                  </span>
                </div>

                <div className='relative mb-6'>
                  <div className='w-32 h-32 bg-gray-200 rounded-lg mx-auto overflow-hidden'>
                    <div className='w-full h-full bg-gradient-to-br from-gray-300 to-gray-400'></div>
                  </div>
                </div>

                <div className='flex justify-center gap-1 mb-6'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5 text-blue-600 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                  ))}
                </div>

                <div className='bg-blue-600 text-white rounded-lg p-6 mb-6'>
                  <p className='text-sm leading-relaxed mb-4'>
                    Lorem ipsum dolor sit amet consectetur. Consequat auctor
                    consectetur nunc vitae dolor blandit. Elit enim massa enim
                    neque laoreet lorem sed.
                  </p>
                  <p className='text-xs font-medium'>Anthony Martingez</p>
                </div>
              </div>

              {/* Back Right Card - Quote */}
              <div className='absolute right-24 sm:right-32 top-16 w-56 sm:w-64 bg-white rounded-lg shadow-xl p-6 transform rotate-3 scale-95 opacity-60'>
                <div className='text-6xl text-gray-800 font-serif mb-4'>"</div>
                <div className='flex items-center gap-2 mb-4'>
                  <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                  <span className='text-xs text-gray-600'>Testimonial</span>
                </div>
                <p className='text-xs text-gray-600 mb-4 leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing ut eu leo
                  tellam pino ti. Sed nulla velit imperdiet posuere vitae
                  fringilla massa facilisis sollicitudin. Id felis imperdiet
                  dolor nisi sit mauris.
                </p>
                <h4 className='font-semibold text-sm'>Franck Deniel</h4>
              </div>

              {/* Back Right Far Card */}
              <div className='absolute right-0 top-20 w-48 sm:w-56 bg-white rounded-lg shadow-lg p-6 transform rotate-6 scale-90 opacity-40'>
                <div className='relative mb-4'>
                  <div className='w-full h-48 bg-blue-600 rounded-lg overflow-hidden'>
                    <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent'>
                      <h4 className='text-white font-semibold text-sm'>
                        Gleason
                      </h4>
                    </div>
                  </div>
                </div>
                <p className='text-xs text-white bg-blue-600 p-3 rounded-lg leading-relaxed mb-3'>
                  I barely digest texts on such small interfaces, but this time
                  was really different. Great job!
                </p>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className='w-2 h-2 bg-blue-600 rounded-full'
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
