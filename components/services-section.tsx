"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Globe, Server, RefreshCw, BarChart, Palette } from "lucide-react"
import { AnimatedSearchBox } from "@/components/animated-search-box"

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setSelectedService(selectedService === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatedSearchBox />
      {/* Header section */}
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <span className="text-4xl mb-2">💡</span>
          <span className="text-4xl">🐼</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Streamline Your Online Presence
        </h2>
      </div>
      <p className="text-lg sm:text-xl text-center text-gray-900 dark:text-white mb-12 max-w-3xl mx-auto">
        Elevate your digital presence with tailored web solutions. While website creation is more accessible than ever,
        partnering with someone experienced in modern web technologies can streamline the process, saving you time and
        ensuring a polished, high-performance result.
      </p>

      {/* Service grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ease-out h-[180px] overflow-hidden ${
              selectedService === index
                ? "bg-blue-100 dark:bg-blue-900 shadow-md"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm hover:shadow-md"
            }`}
            onClick={() => toggleService(index)}
            layout
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start mb-2">
                <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <AnimatePresence>
                {selectedService === index ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow overflow-y-auto"
                  >
                    <p className="text-base text-gray-900 dark:text-gray-100 mb-2 font-medium leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-xs text-gray-700 dark:text-gray-300">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">{bullet.slice(0, 2)}</span>
                          <span>{bullet.slice(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-base text-gray-900 dark:text-gray-100 font-medium leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call-to-action button */}
      <div className="text-center mt-8">
        <a
          href="mailto:leo.gardberg@gmail.com"
          className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg overflow-hidden border border-current/20 transition-all duration-300 ease-in-out hover:scale-105 font-mono text-base tracking-normal relative"
        >
          <span className="relative z-10">Get in Touch</span>
          <div className="absolute inset-0 bg-white dark:bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
        </a>
      </div>
    </div>
  )
}

// Array of service objects with updated descriptions
const services = [
  {
    icon: Code,
    title: "Advanced Development",
    description: "Modern, responsive websites with the latest technologies",
    bullets: ["💻 Adaptive design", "🎨 User-centric UIs"],
  },
  {
    icon: Globe,
    title: "Smooth Deployment",
    description: "Streamlined launch from concept to live site",
    bullets: ["🌐 Domain setup", "🚀 Efficient deployment"],
  },
  {
    icon: Server,
    title: "Reliable Hosting",
    description: "Scalable and secure infrastructure solutions",
    bullets: ["☁️ Optimized architecture", "⛨ Robust security"],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Maintenance",
    description: "Keep your site current and high-performing",
    bullets: ["🔄 Regular updates", "⚡ Continuous optimization"],
  },
  {
    icon: BarChart,
    title: "Analytical Insights",
    description: "Data-driven enhancements for your online presence",
    bullets: ["📊 User behavior analysis", "🎯 Conversion optimization"],
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Unique visual identities that captivate users",
    bullets: ["🎨 Brand development", "✨ Custom graphics"],
  },
]

