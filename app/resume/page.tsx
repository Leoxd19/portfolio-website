"use client"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function ResumePage() {
  const [isHovered, setIsHovered] = useState(false)
  const progressControls = useAnimation()

  const handleMouseEnter = () => {
    setIsHovered(true)
    progressControls.start({ width: "100%", transition: { duration: 1, ease: "easeInOut" } })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    progressControls.start({ width: "0%", transition: { duration: 0.3 } })
  }

  return (
    <ResponsiveContainer>
      <motion.a
        href="/Leo_Gardberg_Resume.pdf"
        download="Leo_Gardberg_Resume.pdf"
        className="relative px-8 py-4 bg-transparent text-current rounded-lg overflow-hidden border border-current/20 transition-colors duration-300 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 font-mono text-sm tracking-normal">Download Resume</span>
        <motion.div
          className="absolute inset-0 bg-current/10"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute left-0 bottom-0 h-1 bg-current"
          initial={{ width: "0%" }}
          animate={progressControls}
        />
      </motion.a>
    </ResponsiveContainer>
  )
}

