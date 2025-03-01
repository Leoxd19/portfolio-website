"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Globe, Server, RefreshCw, BarChart, Palette } from "lucide-react"
import { AnimatedSearchBox } from "@/components/animated-search-box"

const MotionCard = motion.div

export default function ServicesContent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleService = useCallback((index: number) => {
    setExpandedCard((prevIndex) => (prevIndex === index ? null : index))
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <span className="text-4xl mb-2">💡</span>
            <span className="text-4xl">🐼</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
            Streamline Your Online Presence
          </h1>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mb-8">
            Elevate your digital presence with tailored web solutions. While website creation is more accessible than
            ever, partnering with someone experienced in modern web technologies can streamline the process, saving you
            time and ensuring a polished, high-performance result.
          </p>
          <AnimatedSearchBox />
        </div>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <MotionCard
              key={service.title}
              layout
              transition={{
                layout: { duration: 0.3, ease: "easeOut" },
              }}
              className={`cursor-pointer p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 ${
                expandedCard === index ? "shadow-lg" : "shadow-md hover:shadow-lg"
              }`}
              onClick={() => toggleService(index)}
            >
              <motion.div layout className="flex items-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h2>
              </motion.div>
              <AnimatePresence mode="wait">
                {expandedCard === index ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-base text-gray-900 dark:text-white mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-sm text-gray-900 dark:text-white">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">{bullet.slice(0, 2)}</span>
                          <span>{bullet.slice(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.p
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-base text-gray-900 dark:text-white"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </MotionCard>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <a
            href="mailto:leo.gardberg@gmail.com"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300 text-sm font-mono hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

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

