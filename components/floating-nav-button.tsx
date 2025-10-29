"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { NAVIGATION_LINKS } from "@/lib/constants"
import { ChevronRight } from "lucide-react"

/**
 * Floating navigation button component
 * Allows users to cycle through pages with a fixed button
 */
export function FloatingNavButton() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Update current index when pathname changes
  useEffect(() => {
    const index = NAVIGATION_LINKS.findIndex((link) => link.href === pathname)
    setCurrentIndex(index !== -1 ? index : 0)
  }, [pathname])

  // Handle button click to navigate to next page
  const handleClick = useCallback(() => {
    const nextIndex = (currentIndex + 1) % NAVIGATION_LINKS.length
    setCurrentIndex(nextIndex)
    router.push(NAVIGATION_LINKS[nextIndex].href)
  }, [currentIndex, router])

  return (
    <motion.button
      className="fixed right-5 top-1/2 transform -translate-y-1/2 z-[100] p-2 focus:outline-none bg-white/90 dark:bg-black/90 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/50"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-label="Navigate to next page"
    >
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
      </motion.div>
    </motion.button>
  )
}
