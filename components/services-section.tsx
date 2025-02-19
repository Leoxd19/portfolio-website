/**
 * ServicesSection component.
 * Displays a grid of service cards with interactive animations and a call-to-action button.
 */

"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code, Globe, Server, RefreshCw } from "lucide-react"

// Array of service objects, each containing icon, title, description, and bullet points
const services = [
  {
    icon: Code,
    title: "Development",
    description: "Crafting modern websites with innovative technologies and best practices",
    bullets: ["💻 Responsive design", "🎨 Intuitive UI"],
  },
  {
    icon: Globe,
    title: "Domain & Deployment",
    description: "Streamline your online presence from domain acquisition to site launch",
    bullets: ["🌐 Domain management", "🚀 Efficient deployment"],
  },
  {
    icon: Server,
    title: "Hosting",
    description: "Ensure robust, scalable, and secure hosting solutions for your website",
    bullets: ["☁️ Cloud infrastructure", "🔧 Server maintenance"],
  },
  {
    icon: RefreshCw,
    title: "Maintenance & Updates",
    description: "Keep your website current, secure, and performing at its best",
    bullets: ["🔒 Security audits", "⚡ Performance optimization"],
  },
]

export function ServicesSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-4 pt-20 min-h-screen flex flex-col justify-between"
    >
      {/* Section title and description */}
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Launching Your Web Presence</h2>
      <p className="text-lg text-center text-gray-900 dark:text-white mb-8 max-w-3xl mx-auto">
        Comprehensive web solutions tailored to elevate your online presence and drive digital success.
      </p>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: { duration: 0.2 },
            }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover effect background */}
            <motion.div
              className="absolute inset-0 bg-blue-100 dark:bg-blue-900 opacity-0"
              whileHover={{ opacity: 0.05, transition: { duration: 0.2 } }}
            />
            {/* Service card content */}
            <motion.div initial={{ y: 0 }} whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}>
              <service.icon className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-900 dark:text-white mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.bullets.map((bullet, index) => (
                  <motion.li key={index} className="flex items-center text-sm text-gray-900 dark:text-white">
                    <span className="mr-2 text-lg">{bullet.slice(0, 2)}</span>
                    <span>{bullet.slice(2)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Animated search box (passed as children) */}
      <div className="mt-12 mb-8">{children}</div>

      {/* Call-to-action button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-center"
      >
        <a
          href="mailto:leo.gardberg@gmail.com"
          className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg overflow-hidden border border-current/20 transition-all duration-300 ease-in-out hover:scale-105 font-mono text-base tracking-normal relative"
        >
          <span className="relative z-10">Get in Touch</span>
          <motion.div
            className="absolute inset-0 bg-white dark:bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </motion.div>
    </motion.div>
  )
}

