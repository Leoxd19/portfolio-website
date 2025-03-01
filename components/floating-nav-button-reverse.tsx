"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { NAVIGATION_LINKS } from "@/lib/constants"

export function FloatingNavButtonReverse() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const index = NAVIGATION_LINKS.findIndex((link) => link.href === pathname)
    setCurrentIndex(index !== -1 ? index : 0)
  }, [pathname])

  const handleClick = useCallback(() => {
    const prevIndex = (currentIndex - 1 + NAVIGATION_LINKS.length) % NAVIGATION_LINKS.length
    setCurrentIndex(prevIndex)
    router.push(NAVIGATION_LINKS[prevIndex].href)
  }, [currentIndex, router])

  const buttonVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
    hover: { x: -5, boxShadow: "0 0 15px rgba(0,0,0,0.2)" },
  }

  return (
    <AnimatePresence>
      <motion.button
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-24 flex items-center justify-center focus:outline-none group bg-orange-500 rounded-r-full border-2 border-black"
        onClick={handleClick}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
      >
        <span className="sr-only">Previous Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-8 h-8 text-black transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
    </AnimatePresence>
  )
}

