"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { NAVIGATION_LINKS } from "@/lib/constants"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export function FloatingNavButton() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const index = NAVIGATION_LINKS.findIndex((link) => link.href === pathname)
    setCurrentIndex(index !== -1 ? index : 0)
  }, [pathname])

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % NAVIGATION_LINKS.length
    setCurrentIndex(nextIndex)
    router.push(NAVIGATION_LINKS[nextIndex].href)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  }

  const buttonVariants = {
    initial: { y: 0 },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.5, 1],
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed right-5 top-1/2 transform -translate-y-1/2 z-20"
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
            animate={hasAnimated ? "initial" : "bounce"}
            onAnimationComplete={() => setHasAnimated(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </BackdropBlur>
      </motion.div>
    </AnimatePresence>
  )
}

