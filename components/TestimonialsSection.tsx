"use client"

import { Card } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      type: 'profile',
      name: 'Frame 14',
      position: 'Customer',
      image: '#E5E7EB',
      rating: 0,
    },
    {
      type: 'profile',
      name: 'Frame 15',
      position: 'Customer',
      image: '#F3F4F6',
      rating: 0,
    },
    {
      type: 'testimonial',
      name: 'Simon Agaul',
      position: 'Customer',
      image: '#374151',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim ad minim veniam.',
    },
    {
      type: 'featured',
      name: 'James Brown',
      position: 'Customer',
      image: '#3B82F6',
      rating: 5,
      text: 'I barely digest texts on such small interfaces, but this time was really different. Great job!',
      quote: true,
    },
    {
      type: 'profile',
      name: 'Customer',
      position: 'Happy Client',
      image: '#1E40AF',
      rating: 0,
    },
    {
      type: 'profile',
      name: 'Customer',
      position: 'Happy Client',
      image: '#3B82F6',
      rating: 5,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            What our <span className="text-blue-500">Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
            Nothing makes us happier than seeing our clients love their new spaces. Here's what they have to say about their journey with us and how our designs made a difference.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 perspective-1000">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-300 hover:scale-105 ${
                  testimonial.type === 'featured' ? 'sm:col-span-2 xl:col-span-2 xl:row-span-2' : ''
                }`}
                style={{
                  transform: index === 3 ? 'translateZ(40px)' : 'translateZ(0)',
                }}
              >
                {testimonial.type === 'featured' ? (
                  <Card className="bg-white p-6 sm:p-8 h-full shadow-2xl rounded-xl sm:rounded-2xl relative overflow-hidden">
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-gray-900 mb-3 sm:mb-4" />
                      <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="flex gap-1 mb-4 sm:mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-600 text-blue-600"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
                        style={{ backgroundColor: testimonial.image }}
                      ></div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </Card>
                ) : testimonial.type === 'testimonial' ? (
                  <Card className="bg-white p-4 sm:p-6 h-full shadow-lg rounded-lg sm:rounded-xl">
                    <div
                      className="w-full h-24 sm:h-32 rounded-lg mb-3 sm:mb-4"
                      style={{ backgroundColor: testimonial.image }}
                    ></div>
                    <p className="text-xs text-gray-600 mb-2 sm:mb-3 line-clamp-3">{testimonial.text}</p>
                    {testimonial.rating > 0 && (
                      <div className="flex gap-1 mb-2 sm:mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    )}
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.position}</p>
                  </Card>
                ) : (
                  <Card className="bg-white p-3 sm:p-4 h-full shadow-md rounded-lg">
                    <div
                      className="w-full h-24 sm:h-32 rounded-lg mb-2 sm:mb-3"
                      style={{ backgroundColor: testimonial.image }}
                    ></div>
                    {testimonial.rating > 0 && (
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-blue-600 text-blue-600"
                          />
                        ))}
                      </div>
                    )}
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.position}</p>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
