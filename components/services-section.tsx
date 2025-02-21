"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Globe, Server, RefreshCw, BarChart, Palette } from "lucide-react"
import { AnimatedSearchBox } from "@/components/animated-search-box"

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatedSearchBox />
      {/* Rest of the ServicesSection component */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col items-center mr-4">
          <span className="text-4xl mb-2">💡</span>
          <span className="text-4xl">🐼</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Streamline Your Online Presence</h2>
      </div>
      <p className="text-xl text-center text-gray-900 dark:text-white mb-12 max-w-3xl mx-auto">
        Elevate your digital presence with tailored web solutions. While website creation is more accessible than ever,
        partnering with someone experienced in modern web technologies can streamline the process, saving you time and
        ensuring a polished, high-performance result.
      </p>

      {/* Service grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ease-out ${
              selectedService === index
                ? "bg-blue-100 dark:bg-blue-900 shadow-md"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm hover:shadow-md"
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedService(index === selectedService ? null : index)}
          >
            <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Service details */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {services[selectedService].title}
            </h3>
            <p className="text-base text-gray-900 dark:text-white mb-4">{services[selectedService].description}</p>
            <ul className="space-y-2">
              {services[selectedService].bullets.map((bullet, index) => (
                <li key={index} className="flex items-start text-sm text-gray-900 dark:text-white">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">{bullet.slice(0, 2)}</span>
                  <span>{bullet.slice(2)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

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
      {/* ... rest of the component ... */}
    </div>
  )
}

// Array of service objects
const services = [
  {
    icon: Code,
    title: "Advanced Development",
    description: "Building modern websites with innovative technologies",
    bullets: ["💻 Responsive, adaptive design", "🎨 User-centric interfaces"],
  },
  {
    icon: Globe,
    title: "Smooth Deployment",
    description: "Streamlining your online journey from concept to launch",
    bullets: ["🌐 Comprehensive domain handling", "🚀 Efficient site deployment"],
  },
  {
    icon: Server,
    title: "Reliable Hosting",
    description: "Providing scalable and secure infrastructure solutions",
    bullets: ["☁️ Optimized cloud architecture", "⛨ Robust security measures"],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Maintenance",
    description: "Keeping your website current and performing at its best",
    bullets: ["🔄 Regular updates and improvements", "⚡ Continuous optimization"],
  },
  {
    icon: BarChart,
    title: "Analytical Insights",
    description: "Harnessing data to enhance your online performance",
    bullets: ["📊 User behavior analysis", "🎯 Conversion rate optimization"],
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting unique visual identities that resonate and engage",
    bullets: ["🎨 Comprehensive brand development", "✨ Custom graphics and illustrations"],
  },
]

