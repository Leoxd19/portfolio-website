"use client"

import { motion } from "framer-motion"
import type React from "react"
import { useEffect, useState } from "react"

export function Transition({ children }: { children: React.ReactNode }) {
  const [isFirstMount, setIsFirstMount] = useState(true)

  useEffect(() => {
    setIsFirstMount(false)
  }, [])

  return (
    <motion.div
      initial={isFirstMount ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

