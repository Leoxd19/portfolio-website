"use client"

import { motion } from "framer-motion"
import { Code, Globe, Server, RefreshCw } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Development",
    description: "Crafting modern websites with innovative technologies and best practices",
    bullets: ["💻 Responsive design for all devices", "🎨 Intuitive user interfaces"],
  },
  {
    icon: Globe,
    title: "Domain & Deployment",
    description: "Streamline your online presence from domain acquisition to site launch",
    bullets: ["🌐 Strategic domain management", "🚀 Efficient deployment pipelines"],
  },
  {
    icon: Server,
    title: "Hosting",
    description: "Ensure robust, scalable, and secure hosting solutions for your website",
    bullets: ["☁️ Reliable cloud infrastructure", "🔧 Proactive server maintenance"],
  },
  {
    icon: RefreshCw,
    title: "Maintenance & Updates",
    description: "Keep your website current, secure, and performing at its best",
    bullets: ["🔒 Regular security audits", "⚡ Continuous performance enhancements"],
  },
]

export function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col justify-center items-center h-full max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Website Design Services</h2>
      <p className="text-center mb-8 text-lg text-gray-900 dark:text-white leading-relaxed max-w-2xl">
        I offer comprehensive website design services, handling every aspect of your online presence. From concept to
        deployment, I ensure a seamless and professional web solution.
      </p>
      <div className="grid grid-cols-2 gap-6 mb-8 w-full">
        {services.map((service) => (
          <div key={service.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <service.icon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">{service.description}</p>
            <ul className="text-sm text-gray-900 dark:text-gray-100 space-y-2">
              {service.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">{bullet.slice(0, 2)}</span>
                  <span className="font-medium">{bullet.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a
        href="mailto:leo.gardberg@gmail.com"
        className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg overflow-hidden border border-current/20 transition-all duration-300 ease-in-out hover:scale-105 font-mono text-sm tracking-normal relative"
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
  )
}

