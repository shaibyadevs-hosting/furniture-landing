"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function AboutPage() {

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const imageScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="krona-one-regular min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Large Hero Image Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageScale}
          className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden"
        >
          <Image
            src="/aboutus1.webp"
            alt="Touchwood Factory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <motion.div
            variants={fadeInUp}
            className="absolute bottom-10 left-0 right-0 text-center px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              ABOUT US
            </h1>
          </motion.div>
        </motion.section>

        {/* First Text Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-12 sm:py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8"
            >
              We are <span className="text-blue-500">Touchwood</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 uppercase"
            >
              INDIA'S LEADING MANUFACTURER OF MODULAR FURNITURE FOR LAST 3 DECADES.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4"
            >
              We are a perfect combination of quality, expertise and experience. We use the best of raw materials and apply engineered solutions and processes to produce durable, premium stylish and comfortable solutions with immaculate finishing.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              Established in 1996, we've played a key role in enhancing and enriching a lifestyle of dreams through our evolving furniture concepts. The state-of-the-art factory spreads over 15 acres of land and is located in Nagpur, the logistics hub of India. We are equipped with the most sophisticated European and Japanese technology and machines.
            </motion.p>
          </div>
        </motion.section>

        {/* Right Image Left Text Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 sm:py-16 md:py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Text */}
              <motion.div
                variants={fadeInLeft}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  <span className="text-blue-500">Few Words</span>
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 uppercase">
                  ABOUT SPACEWOOD
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Our commitment to excellence has made us a trusted name in the furniture industry. With decades of experience, we continue to innovate and deliver furniture solutions that combine functionality with aesthetic appeal.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our team of skilled craftsmen and designers work together to create furniture pieces that not only meet but exceed customer expectations. We take pride in our attention to detail and our dedication to quality.
                </p>
              </motion.div>

              {/* Right Image */}
              <motion.div
                variants={fadeInRight}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2"
              >
                <Image
                  src="/aboutus1.webp"
                  alt="Touchwood Manufacturing"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* The Team Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 sm:py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                <span className="text-yellow-500">The Team</span>
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 uppercase">
                OUR DIRECTORS
              </h3>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {/* Director 1 - Kirit Joshi */}
            <motion.div
              variants={fadeInLeft}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative mb-6"
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                          pathLength: 1,
                          opacity: 1,
                          transition: { duration: 1.5, ease: "easeInOut" }
                        }
                      }}
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                          pathLength: 1,
                          opacity: 1,
                          transition: { duration: 1.5, delay: 0.3, ease: "easeInOut" }
                        }
                      }}
                    />
                  </motion.svg>
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-white shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-700">KJ</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.h4
                variants={fadeInUp}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase"
              >
                KIRIT JOSHI
              </motion.h4>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-sm sm:text-base"
              >
                Founder Director
              </motion.p>
            </motion.div>

            {/* Director 2 - Vivek Deshpande */}
            <motion.div
              variants={fadeInRight}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative mb-6"
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                          pathLength: 1,
                          opacity: 1,
                          transition: { duration: 1.5, ease: "easeInOut" }
                        }
                      }}
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                          pathLength: 1,
                          opacity: 1,
                          transition: { duration: 1.5, delay: 0.3, ease: "easeInOut" }
                        }
                      }}
                    />
                  </motion.svg>
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-white shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-700">VD</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.h4
                variants={fadeInUp}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase"
              >
                VIVEK DESHPANDE
              </motion.h4>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-sm sm:text-base"
              >
                Founder Director
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 sm:py-16 md:py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                <span className="text-yellow-500">Timeline</span>
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 uppercase">
                OUR JOURNEY
              </h3>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">1996</h4>
                <p className="text-gray-700">Company Established - Beginning of our journey</p>
              </div>
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">2000s</h4>
                <p className="text-gray-700">Expansion and Growth - Setting new standards in furniture manufacturing</p>
              </div>
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">2010s</h4>
                <p className="text-gray-700">ISO Certifications - Achieving international quality standards</p>
              </div>
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">2020s</h4>
                <p className="text-gray-700">Innovation & Excellence - Leading the industry with cutting-edge solutions</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ISO Certification Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 sm:py-16 md:py-20 bg-gray-50"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <motion.div
              variants={fadeInUp}
              className="mb-8 sm:mb-12"
            >
              <p className="text-gray-600 text-sm sm:text-base mb-2">Quality Assurance</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ISO - CERTIFICATION
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
                We maintain the highest quality standards which includes certifications of
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {/* ISO 9001:2015 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/isocert.png"
                    alt="ISO 9001:2015"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  ISO 9001:2015 from IR Class Approved By NABCB
                </p>
              </motion.div>

              {/* ISO 50001:2018 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/isocert2.png"
                    alt="ISO 50001:2018"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  ISO 50001:2018 from IR Class Approved By NABCB
                </p>
              </motion.div>

              {/* ISO 45001:2018 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/isocert3.png"
                    alt="ISO 45001:2018"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  ISO 45001:2018 from IR Class Approved By NABCB
                </p>
              </motion.div>

              {/* ISO 14001:2015 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/isocert4.png"
                    alt="ISO 14001:2015"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  ISO 14001:2015 from IR Class Approved By NABCB
                </p>
              </motion.div>

              {/* BIFMA */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/bifmacert.png"
                    alt="BIFMA"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  Membership & Compliance for Manufacturing of Furniture
                </p>
              </motion.div>

              {/* FIRA */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/firacert.png"
                    alt="FIRA"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  Certified by furniture industry research association
                </p>
              </motion.div>

              {/* GRIHA */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/girhacert.png"
                    alt="GRIHA"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  Green Rating For Integrated Habitat Assessment
                </p>
              </motion.div>

              {/* ISO 13485:2016 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-32 sm:h-40 mb-4 flex items-center justify-center">
                  <Image
                    src="/certifications/isocertlast.png"
                    alt="ISO 13485:2016"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                  ISO 13485 - CERTIFICATION OF COMPLIANCE FOR MEDICAL DEVICES
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}