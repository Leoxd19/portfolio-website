"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Loading() {
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    setIsFirstLoad(false)
  }, [])

  if (!isFirstLoad) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={(definition) => {
        if (definition === "opacity: 0") {
          document.body.style.overflow = "unset"
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-16 w-16 rounded-full border-2 border-[#0066FF]"
      />
    </motion.div>
  )
}

