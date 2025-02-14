"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { NAVIGATION_LINKS } from "@/lib/constants"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export function FloatingNavButtonReverse() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const index = NAVIGATION_LINKS.findIndex((link) => link.href === pathname)
    setCurrentIndex(index !== -1 ? index : 0)
    setIsVisible(index > 0)
  }, [pathname])

  const handleClick = useCallback(() => {
    const prevIndex = (currentIndex - 1 + NAVIGATION_LINKS.length) % NAVIGATION_LINKS.length
    setCurrentIndex(prevIndex)
    router.push(NAVIGATION_LINKS[prevIndex].href)
  }, [currentIndex, router])

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  }

  const buttonVariants = {
    initial: { y: 0 },
    bounce: {
      y: [0, -10, 0],
      transition: { duration: 0.5, times: [0, 0.5, 1], ease: "easeInOut" },
    },
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed left-5 top-1/2 transform -translate-y-1/2 z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <BackdropBlur>
          <motion.button
            onClick={handleClick}
            className="p-3 rounded-full text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            initial="initial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        </BackdropBlur>
      </motion.div>
    </AnimatePresence>
  )
}

