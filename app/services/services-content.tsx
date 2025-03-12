"use client"

import { Code, Globe, Server, RefreshCw, BarChart, Palette } from "lucide-react"
import { AnimatedSearchBox } from "@/components/animated-search-box"

/**
 * Services page content component
 * Displays a list of services offered with icons and descriptions
 */
export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        {/* Header section with title and description */}
        <div className="flex flex-col items-center mb-12 text-center">
          {/* Decorative emoji icons */}
          <div className="flex flex-col items-center justify-center mb-4">
            <span className="text-4xl mb-2">💡</span>
            <span className="text-4xl">🐼</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Streamline Your Online Presence
          </h1>

          {/* Description text */}
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mb-8 leading-relaxed">
            Elevate your digital presence with my tailored web solutions. While website creation is more accessible than
            ever, partnering with someone experienced in modern web technologies can streamline the process, saving you
            time and ensuring a polished, high-performance result.
          </p>

          {/* Animated search box component */}
          <AnimatedSearchBox />
        </div>

        {/* Services grid - responsive layout for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="h-full p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md">
              <div className="flex flex-col h-full">
                {/* Service header with icon and title */}
                <div className="flex items-center mb-4">
                  <service.icon
                    className="w-7 h-7 mr-3 flex-shrink-0"
                    style={{ color: service.iconColor }}
                    aria-hidden="true"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h2>
                </div>

                {/* Service description */}
                <p className="text-base text-gray-900 dark:text-white leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact button */}
        <div className="text-center mt-16">
          <a
            href="mailto:leo.gardberg@gmail.com"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300 text-base font-mono hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * Services data array
 * Each service has an icon, title, description, and color
 */
const services = [
  {
    icon: Code,
    title: "Advanced Development",
    description: "Modern, responsive websites with advanced technologies.",
    iconColor: "#3B82F6", // Blue
  },
  {
    icon: Globe,
    title: "Smooth Deployment",
    description: "Seamless transition from concept to live website.",
    iconColor: "#10B981", // Green
  },
  {
    icon: Server,
    title: "Reliable Hosting",
    description: "Secure and scalable infrastructure solutions.",
    iconColor: "#6366F1", // Indigo
  },
  {
    icon: RefreshCw,
    title: "Ongoing Maintenance",
    description: "Regular updates to ensure optimal performance.",
    iconColor: "#F59E0B", // Amber
  },
  {
    icon: BarChart,
    title: "Analytical Insights",
    description: "Data-driven strategies to enhance your presence.",
    iconColor: "#EC4899", // Pink
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Unique visuals that captivate your audience.",
    iconColor: "#8B5CF6", // Purple
  },
]

