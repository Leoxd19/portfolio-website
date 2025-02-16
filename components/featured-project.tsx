"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FeaturedProjectProps {
  title: string
  description: string
  mediaSource: string
  mediaType: "image" | "video"
  mediaClassName?: string
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  description,
  mediaSource,
  mediaType,
  mediaClassName = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col md:flex-row items-center md:items-start gap-8"
    >
      <motion.div
        className={`relative flex-shrink-0 overflow-hidden flex items-center justify-center ${mediaClassName}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {mediaType === "video" ? (
          // Video element for animated logo
          // No frame in light mode, rounded corners and shadow in dark mode
          <video
            src={mediaSource}
            className="w-full h-auto object-cover dark:rounded-2xl dark:shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          // Fallback to Image component if not a video
          <Image
            src={mediaSource || "/placeholder.svg"}
            alt="Project logo"
            width={300}
            height={300}
            className="w-full h-auto object-contain mx-auto"
            priority
          />
        )}
      </motion.div>
      <motion.div
        className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Project title */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
        {/* Project description */}
        <p className="text-base md:text-lg text-black dark:text-white leading-relaxed">{description}</p>
        {/* Project status */}
        <p className="text-sm md:text-base text-black dark:text-white font-semibold mt-4 mb-2">Gathering team...</p>
        {/* Contact button */}
        <a
          href="mailto:nimbusvaultai@dev"
          className="inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300 text-sm font-mono hover:scale-105"
          aria-label="Contact Nimbus Vault AI team"
        >
          nimbusvaultai@dev
        </a>
      </motion.div>
    </motion.div>
  )
}

export default FeaturedProject

