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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex flex-col md:flex-row items-center md:items-start gap-8"
    >
      <div className={`relative flex-shrink-0 overflow-hidden flex items-center justify-center ${mediaClassName}`}>
        {mediaType === "video" ? (
          <video
            src={mediaSource}
            className="w-full h-auto object-cover dark:rounded-2xl dark:shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={mediaSource || "/placeholder.svg"}
            alt="Project logo"
            width={300}
            height={300}
            className="w-full h-auto object-contain mx-auto"
            priority
          />
        )}
      </div>
      <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-base md:text-lg text-black dark:text-white leading-relaxed">{description}</p>
        <p className="text-sm md:text-base text-black dark:text-white font-semibold mt-4 mb-2">Gathering team...</p>
        <a
          href="mailto:nimbusvaultai@dev"
          className="inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300 text-sm font-mono hover:scale-105"
          aria-label="Contact Nimbus Vault AI team"
          rel="noopener noreferrer"
        >
          nimbusvaultai@dev
        </a>
      </div>
    </motion.div>
  )
}

export default FeaturedProject

