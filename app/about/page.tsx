"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Award, Users, MapPin, Calendar, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const STATS = [
  { icon: Calendar, value: "8+", label: "Years of Excellence" },
  { icon: Factory, value: "15 Acres", label: "State-of-the-Art Factory" },
  { icon: MapPin, value: "Nagpur", label: "Logistics Hub of India" },
  { icon: Award, value: "8+", label: "International Certifications" },
];

const TIMELINE = [
  { year: "2017", title: "Founded", desc: "Touchwood Furnitech was established in Nagpur with a vision to redefine modular furniture in India." },
  { year: "2019–20", title: "Expansion & Growth", desc: "Rapid scaling of operations, setting new benchmarks in furniture manufacturing across India." },
  { year: "2021–23", title: "ISO Certifications", desc: "Achieved multiple international ISO certifications, validating world-class quality standards." },
  { year: "2024–25", title: "Innovation & Excellence", desc: "Pioneering cutting-edge European and Japanese manufacturing technologies for the Indian market." },
];

const CERTS = [
  { src: "/certifications/isocert.png", alt: "ISO 9001:2015", label: "ISO 9001:2015", sub: "Quality Management" },
  { src: "/certifications/isocert2.png", alt: "ISO 50001:2018", label: "ISO 50001:2018", sub: "Energy Management" },
  { src: "/certifications/isocert3.png", alt: "ISO 45001:2018", label: "ISO 45001:2018", sub: "OH&S Management" },
  { src: "/certifications/isocert4.png", alt: "ISO 14001:2015", label: "ISO 14001:2015", sub: "Environmental Management" },
  { src: "/certifications/bifmacert.png", alt: "BIFMA", label: "BIFMA", sub: "Furniture Manufacturing Compliance" },
  { src: "/certifications/firacert.png", alt: "FIRA", label: "FIRA", sub: "Furniture Industry Research" },
  { src: "/certifications/girhacert.png", alt: "GRIHA", label: "GRIHA", sub: "Green Habitat Assessment" },
  { src: "/certifications/isocertlast.png", alt: "ISO 13485", label: "ISO 13485", sub: "Medical Devices Compliance" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] overflow-x-hidden">
      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
          <Image
            src="/aboutus1.webp"
            alt="Touchwood Factory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/60 via-[#0b132b]/40 to-[#0b132b]/90" />

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 sm:pb-24 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-amber-400/60" />
                <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">Our Story</span>
                <div className="h-px w-10 bg-amber-400/60" />
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-4 tracking-tight">
                About Us
              </h1>
              <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                India&apos;s leading manufacturer of modular furniture, crafting spaces since 2017.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-20 sm:py-28 bg-white"
        >
          <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-amber-600/40" />
              <span className="text-amber-600 font-bold text-xs tracking-[0.28em] uppercase">Who We Are</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b132b] leading-tight mb-8"
            >
              We are{" "}
              <span className="text-amber-500">Touchwood</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl font-semibold text-gray-900 uppercase tracking-wide mb-6"
            >
              India&apos;s Leading Manufacturer of Modular Furniture for Last 8 Years.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
              We are a perfect combination of quality, expertise and experience. We use the best of raw
              materials and apply engineered solutions and processes to produce durable, premium, stylish
              and comfortable solutions with immaculate finishing.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Established in 2017, we&apos;ve played a key role in enhancing and enriching a lifestyle of
              dreams through our evolving furniture concepts. The state-of-the-art factory spreads over
              15 acres of land and is located in Nagpur, the logistics hub of India. We are equipped with
              the most sophisticated European and Japanese technology and machines.
            </motion.p>
          </div>
        </motion.section>

        {/* ── STATS STRIP ── */}
        <section className="bg-[#0b132b] py-14 sm:py-16">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPLIT — FEW WORDS ── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-20 sm:py-28 bg-[#f9f7f4] overflow-hidden"
        >
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div variants={fadeLeft} className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px w-8 bg-amber-600/40" />
                  <span className="text-amber-600 font-bold text-xs tracking-[0.28em] uppercase">Our Commitment</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b132b] mb-6 leading-tight">
                  A Few Words<br />About Touchwood
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                  Our commitment to excellence has made us a trusted name in the furniture industry.
                  With years of experience, we continue to innovate and deliver furniture solutions
                  that combine functionality with aesthetic appeal.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  Our team of skilled craftsmen and designers work together to create furniture pieces
                  that not only meet but exceed customer expectations. We take pride in our attention
                  to detail and our dedication to quality.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=917722008401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0b132b] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#0b132b]/80 transition-all duration-300 group"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                variants={fadeRight}
                className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/aboutus1.webp"
                  alt="Touchwood Manufacturing Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b132b]/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ── DIRECTOR ── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-20 sm:py-28 bg-white"
        >
          <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-8 bg-amber-600/40" />
                <span className="text-amber-600 font-bold text-xs tracking-[0.28em] uppercase">Leadership</span>
                <div className="h-px w-8 bg-amber-600/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b132b]">Our Director</h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 bg-[#f9f7f4] rounded-3xl p-8 sm:p-12"
            >
              <div className="flex-shrink-0">
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-amber-400/20">
                  <Image
                    src="/aboutustouchwoodperson.jpg"
                    alt="Pratik Sathawane"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-amber-500" />
                  <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">Director</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0b132b] mb-2 uppercase tracking-wide">
                  Pratik Sathawane
                </h3>
                <p className="text-amber-700 font-semibold text-sm mb-1">B.Tech (Civil), MBA</p>
                <p className="text-gray-500 text-sm mb-5">8+ Years Experience in the Industry</p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Pratik leads Touchwood Furnitech with a visionary approach to design and manufacturing,
                  combining deep industry knowledge with a passion for creating spaces that inspire.
                  His engineering background and business acumen drive Touchwood&apos;s continuous growth and innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── TIMELINE ── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-20 sm:py-28 bg-[#0b132b] overflow-hidden"
        >
          <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-8 bg-amber-400/40" />
                <span className="text-amber-400 font-bold text-xs tracking-[0.28em] uppercase">Milestones</span>
                <div className="h-px w-8 bg-amber-400/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Our Journey</h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-amber-500/20 -translate-x-1/2" />

              <div className="space-y-12">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className={`relative flex items-start gap-8 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <span className="text-amber-400 font-bold text-xl sm:text-2xl">{item.year}</span>
                      <h4 className="text-white font-bold text-lg sm:text-xl mt-1 mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-500/20 flex-shrink-0 mt-1.5" />

                    {/* Spacer for alternating */}
                    <div className="hidden sm:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── ISO CERTIFICATIONS ── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="py-20 sm:py-28 bg-white"
        >
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <motion.div variants={fadeUp} className="mb-14">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8 bg-amber-600/40" />
                <span className="text-amber-600 font-bold text-xs tracking-[0.28em] uppercase">Quality Assurance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b132b] mb-4">
                ISO Certifications
              </h2>
              <p className="text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
                We maintain the highest quality standards backed by internationally recognised certifications
                across quality, energy, safety, and environmental management.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {CERTS.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(11,19,43,0.1)" }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#f9f7f4] border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center group cursor-default"
                >
                  <div className="relative h-24 w-24 mb-5 flex items-center justify-center">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-[#0b132b] text-sm mb-1">{cert.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{cert.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── CTA STRIP ── */}
        <section className="bg-[#0b132b] py-16 sm:py-20">
          <div className="container mx-auto px-6 sm:px-8 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-8 bg-amber-400/40" />
              <span className="text-amber-400 text-xs font-bold tracking-[0.28em] uppercase">Work With Us</span>
              <div className="h-px w-8 bg-amber-400/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to transform your space?
            </h2>
            <p className="text-white/50 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Let&apos;s collaborate to build furniture that&apos;s crafted around your vision.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=917722008401"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-[#0b132b] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] text-base"
            >
              <Users className="w-5 h-5" />
              Connect on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}