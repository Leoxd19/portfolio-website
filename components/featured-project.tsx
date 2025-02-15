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
      className="w-full"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="w-full md:w-1/3 relative flex-shrink-0 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={logoSrc || "/placeholder.svg"}
            alt="Project logo"
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded-full"
            priority
          />
        </motion.div>
        <motion.div
          className="w-full md:w-2/3 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed font-semibold">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default FeaturedProject

