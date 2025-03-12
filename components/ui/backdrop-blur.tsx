"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BackdropBlurProps {
  children: ReactNode
  className?: string
}

/**
 * BackdropBlur component for creating a blurred backdrop effect
 * Used across the site for consistent styling
 */
export function BackdropBlur({ children, className = "" }: BackdropBlurProps) {
  return (
    <motion.div
      className={`backdrop-blur-md rounded-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

