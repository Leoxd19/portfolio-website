"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FeaturedProjectProps {
  description: string
  logoSrc: string
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ description, logoSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-60 h-60 relative flex-shrink-0">
          <Image
            src={logoSrc || "/placeholder.svg"}
            alt="Project logo"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
        <div className="flex-1 flex items-center">
          <p className="text-xl md:text-2xl text-gray-800 dark:text-white leading-relaxed font-medium">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default FeaturedProject

