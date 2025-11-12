"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneOrEmail: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp number from contact info (with country code for India: +91)
    const whatsappNumber = "917722008401";
    
    // Format the message
    let formattedMessage = `Hello Touchwood Furnitech! 👋\n\n`;
    formattedMessage += `*Name:* ${formData.fullName}\n`;
    
    if (formData.phoneOrEmail) {
      // Check if it's an email or phone
      const isEmail = formData.phoneOrEmail.includes('@');
      if (isEmail) {
        formattedMessage += `*Email:* ${formData.phoneOrEmail}\n`;
      } else {
        formattedMessage += `*Phone:* ${formData.phoneOrEmail}\n`;
      }
    }
    
    formattedMessage += `\n*Message:*\n${formData.message || 'No message provided'}`;
    
    // Encode the message for URL (using encodeURIComponent for proper encoding)
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    // Create WhatsApp URL - try api.whatsapp.com first for better desktop app support
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    // Open WhatsApp (will open in app if installed, otherwise web)
    // Using location.href for better desktop app support
    window.location.href = whatsappUrl;
  };

  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='text-center mb-10 sm:mb-12 lg:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 px-4'>
            Get in <span className='text-blue-500'>Touch</span> With Us
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto'>
          <div>
            <form onSubmit={handleSubmit} className='border-2 border-gray-200 rounded-lg p-6 space-y-4 sm:space-y-6'>
              <div>
                <Label
                  htmlFor='fullName'
                  className='text-gray-900 font-medium text-sm sm:text-base'
                >
                  Full Name*
                </Label>
                <Input
                  id='fullName'
                  placeholder='Enter your full name'
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className='mt-1.5 sm:mt-2'
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor='phoneOrEmail'
                  className='text-gray-900 font-medium text-sm sm:text-base'
                >
                  Phone Number or Email
                </Label>
                <Input
                  id='phoneOrEmail'
                  type='text'
                  placeholder='Enter your phone number or email'
                  value={formData.phoneOrEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneOrEmail: e.target.value })
                  }
                  className='mt-1.5 sm:mt-2'
                />
              </div>

              <div>
                <Label
                  htmlFor='message'
                  className='text-gray-900 font-medium text-sm sm:text-base'
                >
                  Message*
                </Label>
                <Textarea
                  id='message'
                  placeholder='Enter your message here...'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className='mt-1.5 sm:mt-2 min-h-[100px] sm:min-h-[120px]'
                  required
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-gray-900 hover:bg-gray-800 text-white py-4 sm:py-6 text-sm sm:text-base'
              >
                Send via WhatsApp
              </Button>
            </form>
          </div>

          <div>
            <div className='bg-blue-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6'>
              <div className='flex items-start gap-2 sm:gap-3'>
                <MapPin className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-1 flex-shrink-0' />
                <div>
                  <h3 className='text-blue-400 font-semibold mb-1 sm:mb-2 text-sm sm:text-base'>
                    Our Location
                  </h3>
                  <p className='text-gray-900 font-medium text-xs sm:text-sm'>
                    Touchwood Furnitures, Paradsinga,
                    <br />
                    Nagpur - 440016
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
              <h3 className="text-blue-600 font-semibold text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <p className='text-gray-900 font-medium text-xs sm:text-sm'>
                      Email: <a href="mailto:Touchwoodfurnitech225@gmail.com" className='hover:text-blue-600 hover:underline'>Touchwoodfurnitech225@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <p className='text-gray-900 font-medium text-xs sm:text-sm'>
                      Phone: <a href="tel:7722008401" className='hover:text-blue-600 hover:underline'>7722008401</a> / <a href="tel:7722001171" className='hover:text-blue-600 hover:underline'>7722001171</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Map Container */}
            <div className='bg-gray-200 rounded-lg overflow-hidden aspect-[9/6] border-2 border-blue-300 relative group cursor-pointer'
                 onClick={() => window.open('https://www.google.com/maps/place/Touchwood+Furnitech/@21.1376805,78.9978922,1194m/data=!3m1!1e3!4m6!3m5!1s0x3bd4eb34a17e59a7:0x61f82a1a75768ec8!8m2!3d21.1378608!4d78.9979687!16s%2Fg%2F11t7m2cx46?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D', '_blank')}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.123456789!2d78.9978922!3d21.1376805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb34a17e59a7%3A0x61f82a1a75768ec8!2sTouchwood%20Furnitech!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&output=embed&iwloc=near&t=m"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Touchwood Furnitech Location - Nagpur"
                className="w-full h-full"
              ></iframe>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    View on larger map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
