"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ResumePage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.a
        href="/Leo_Gardberg_Resume.pdf"
        download
        className="relative px-8 py-4 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 font-semibold text-lg">Download Resume</span>
        <motion.div
          className="absolute inset-0 bg-blue-600"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </main>
  )
}

