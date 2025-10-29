"use client"

import { motion } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

interface StyledEmailProps {
  email: string
}

/**
 * Styled email component
 * Displays an email address with animated characters and a backdrop blur
 */
export function StyledEmail({ email }: StyledEmailProps) {
  return (
    <BackdropBlur className="inline-flex items-center p-3 bg-black/80 dark:bg-black/80 rounded-2xl">
      <motion.div
        className="font-mono text-lg sm:text-xl tracking-wide text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {email.split("").map((char, index) => (
          <motion.span
            key={index}
            className="font-bold inline-block"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </BackdropBlur>
  )
}
