"use client"

import Image from "next/image"
import { StyledEmail } from "@/components/ui/styled-email"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL } from "@/lib/constants"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { motion, AnimatePresence } from "framer-motion"
import { Poppins } from "next/font/google"
import { useState, useEffect } from "react"

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function HomeContent() {
  const [showPrivacyMessage, setShowPrivacyMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrivacyMessage(false)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
          alt="Background image"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover transition-opacity duration-500 ease-in-out"
          style={{
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 transition-colors duration-300" />
      </div>

      {/* Main content */}
      <ResponsiveContainer>
        {/* Animated hero section */}
        <motion.div
          className="relative z-10 text-center max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1
            className={`text-5xl font-bold mb-4 text-white ${poppins.className} text-shadow-sm`}
            style={{
              textShadow: `-1px -1px 0 #000, 
                 1px -1px 0 #000, 
                -1px 1px 0 #000, 
                 1px 1px 0 #000,
                 2px 2px 4px rgba(0,0,0,0.5)`,
            }}
          >
            Hi there, I'm Leo.
          </h1>
          <p
            className={`text-3xl mb-6 text-white ${poppins.className} text-shadow-sm`}
            style={{
              textShadow: `-1px -1px 0 #000, 
                 1px -1px 0 #000, 
                -1px 1px 0 #000, 
                 1px 1px 0 #000,
                 1px 1px 3px rgba(0,0,0,0.3)`,
            }}
          >
            Let's build together!
          </p>
          <a href={`mailto:${EMAIL_ADDRESS}`} className="inline-block">
            <StyledEmail email={EMAIL_ADDRESS} />
          </a>
        </motion.div>

        {/* Animated privacy message */}
        <AnimatePresence>
          {showPrivacyMessage && (
            <motion.div
              className="absolute bottom-20 left-0 right-0 flex justify-center"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <BackdropBlur>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/result-62KNlVjq44bkIJSKGGqSWrCkjhZt0j.png"
                    alt="Sleeping red panda"
                    width={48}
                    height={48}
                  />
                  <p className="text-xs font-mono text-white">
                    This website respects your privacy. No cookies or invasive tracking used.
                  </p>
                </motion.div>
              </BackdropBlur>
            </motion.div>
          )}
        </AnimatePresence>
      </ResponsiveContainer>
    </div>
  )
}

