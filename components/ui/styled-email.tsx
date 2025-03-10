"use client"

import { motion } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

interface StyledEmailProps {
  email: string
}

export function StyledEmail({ email }: StyledEmailProps) {
  return (
    <BackdropBlur className="inline-flex items-center p-2 bg-black/80 dark:bg-black/80">
      <motion.div
        className="font-mono text-xl tracking-wide text-white"
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

