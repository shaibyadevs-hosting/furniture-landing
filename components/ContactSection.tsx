"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneOrEmail: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "917722008401";
    let msg = `Hello Touchwood Furnitech! 👋\n\n`;
    msg += `*Name:* ${formData.fullName}\n`;
    if (formData.phoneOrEmail) {
      const isEmail = formData.phoneOrEmail.includes("@");
      msg += isEmail
        ? `*Email:* ${formData.phoneOrEmail}\n`
        : `*Phone:* ${formData.phoneOrEmail}\n`;
    }
    msg += `\n*Message:*\n${formData.message || "No message provided"}`;
    window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(msg)}`;
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Touchwood Furnitures, Paradsinga, Nagpur — 440016",
      href: "https://www.google.com/maps/place/Touchwood+Furnitech/@21.1376805,78.9978922",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "7722008401 / 7722001171",
      href: "tel:7722008401",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "touchwoodfurnitech225@gmail.com",
      href: "mailto:touchwoodfurnitech225@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#0b132b] overflow-hidden py-24 sm:py-32"
    >
      {/* Decorative background circles */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.02] pointer-events-none" />
      <div className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full bg-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-amber-500/40" />
            <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase">
              Contact Us
            </span>
            <div className="h-px w-12 bg-amber-500/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let's Build Something
            <br />
            <span className="text-amber-400">Beautiful Together</span>
          </h2>
          <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Drop us a
            message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 max-w-6xl mx-auto items-start">
          {/* Left: Contact info + map */}
          <div className="lg:col-span-2 space-y-5">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10
                  hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/25 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-white text-sm sm:text-base font-medium leading-snug">
                    {value}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 ml-auto self-center group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}

            {/* Embedded Map */}
            <div
              className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] cursor-pointer group relative mt-2"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Touchwood+Furnitech/@21.1376805,78.9978922",
                  "_blank"
                )
              }
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.123456789!2d78.9978922!3d21.1376805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb34a17e59a7%3A0x61f82a1a75768ec8!2sTouchwood%20Furnitech!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&output=embed&iwloc=near&t=m"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Touchwood Furnitech Location"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-800 flex items-center gap-1.5 shadow-lg">
                <MapPin className="w-3 h-3 text-red-500" />
                Open in Maps
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6"
            >
              <div className="space-y-1">
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-gray-400 uppercase tracking-widest"
                >
                  Full Name <span className="text-amber-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  onFocus={() => setFocused("fullName")}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full bg-white/8 border rounded-xl px-5 py-4 text-white placeholder-gray-600 text-sm outline-none transition-all duration-300
                    ${focused === "fullName" ? "border-amber-500 bg-white/10" : "border-white/10 bg-white/5"}`}
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="phoneOrEmail"
                  className="block text-xs font-semibold text-gray-400 uppercase tracking-widest"
                >
                  Phone or Email
                </label>
                <input
                  id="phoneOrEmail"
                  type="text"
                  placeholder="Your phone number or email address"
                  value={formData.phoneOrEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneOrEmail: e.target.value })
                  }
                  onFocus={() => setFocused("phoneOrEmail")}
                  onBlur={() => setFocused(null)}
                  className={`w-full border rounded-xl px-5 py-4 text-white placeholder-gray-600 text-sm outline-none transition-all duration-300
                    ${focused === "phoneOrEmail" ? "border-amber-500 bg-white/10" : "border-white/10 bg-white/5"}`}
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-400 uppercase tracking-widest"
                >
                  Message <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project, budget, or requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full border rounded-xl px-5 py-4 text-white placeholder-gray-600 text-sm outline-none transition-all duration-300 resize-none
                    ${focused === "message" ? "border-amber-500 bg-white/10" : "border-white/10 bg-white/5"}`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-[#0b132b] font-bold py-4 rounded-xl text-sm sm:text-base
                  flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]
                  active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-center text-gray-600 text-xs">
                You'll be redirected to WhatsApp to complete your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
