"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Loading component displays a loading animation on the first load
export function Loading() {
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Set isInitialLoad to false after the component mounts
    setIsInitialLoad(false)
  }, [])

  // Don't render anything if it's not the initial load
  if (!isInitialLoad) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={(definition) => {
        if (definition === "opacity: 0") {
          // Re-enable scrolling after the animation completes
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

