"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { FloatingNavButton } from "./floating-nav-button"

export function NavigationButtons() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.5, delay: 0.5 } })
  }, [controls])

  return (
    <motion.div animate={controls} initial={{ opacity: 0 }}>
      <FloatingNavButton />
    </motion.div>
  )
}
