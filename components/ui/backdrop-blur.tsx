"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BackdropBlurProps {
  children: ReactNode
  className?: string
}

export function BackdropBlur({ children, className = "" }: BackdropBlurProps) {
  return (
    <motion.div
      className={`backdrop-blur-sm rounded-lg px-3 py-1 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

