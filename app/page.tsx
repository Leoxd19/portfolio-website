/**
 * Home page component.
 * Displays a hero section with a background image, animated content, and a privacy message.
 */

"use client"

import Image from "next/image"
import Link from "next/link"
import { StyledEmail } from "@/components/ui/styled-email"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL } from "@/lib/constants"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { motion, AnimatePresence } from "framer-motion"
import { Poppins } from "next/font/google"
import { useState, useEffect } from "react"

// Initialize Poppins font
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function Home() {
  // State to control visibility of privacy message
  const [showPrivacyMessage, setShowPrivacyMessage] = useState(true)

  // Effect to hide privacy message after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrivacyMessage(false)
    }, 4000)

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
          <h1 className={`text-5xl font-bold mb-4 text-white ${poppins.className} text-shadow-sm`}>
            Hi there, I'm Leo.
          </h1>
          <p className={`text-3xl mb-6 text-white ${poppins.className} text-shadow-sm`}>Let's build together!</p>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-block no-underline hover:underline"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = `mailto:${EMAIL_ADDRESS}`
            }}
          >
            <StyledEmail email={EMAIL_ADDRESS} />
          </a>
        </motion.div>

        {/* Animated privacy message */}
        {showPrivacyMessage && (
          <motion.div
            className="absolute bottom-20 left-0 right-0 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              <motion.div
                key="privacy-message"
                initial={{ opacity: 1, scale: 1, rotateX: 0 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotateX: 90,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                style={{ transformOrigin: "bottom" }}
              >
                <BackdropBlur>
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2"
                    initial={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        delay: 0.4,
                      },
                    }}
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
            </AnimatePresence>
          </motion.div>
        )}
      </ResponsiveContainer>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-5">
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <BackdropBlur>
            <p className="text-sm font-mono text-black dark:text-white px-4 py-2">
              Built and Maintained by{" "}
              <Link
                href="https://github.com/Leoxd19"
                className="underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leo Gardberg
              </Link>
            </p>
          </BackdropBlur>
        </motion.div>
      </div>
    </div>
  )
}

