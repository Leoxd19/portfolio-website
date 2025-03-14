"use client"

import Image from "next/image"
import { StyledEmail } from "@/components/ui/styled-email"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL } from "@/lib/constants"
import { motion } from "framer-motion"
import { Poppins } from "next/font/google"
import { TerminalMessage } from "@/components/terminal-message"

// Load Poppins font with specific weights
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

/**
 * Home page content component
 * Displays a hero section with background image, title, and contact information
 */
export default function HomeContent() {
  return (
    <div className="relative w-screen h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* Full-screen background image */}
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
        {/* Overlay with different opacity for light/dark modes */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 transition-colors duration-300" />
      </div>

      {/* Main content container with responsive scaling */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* Animated hero section */}
        <motion.div
          className="relative z-10 text-center max-w-lg px-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Main heading with text shadow for better visibility */}
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 text-white ${poppins.className} text-shadow-sm`}
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

          {/* Subheading with text shadow */}
          <p
            className={`text-2xl sm:text-3xl mb-6 text-white ${poppins.className} text-shadow-sm`}
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

          {/* Contact email with animated styling */}
          <a href={`mailto:${EMAIL_ADDRESS}`} className="inline-block">
            <StyledEmail email={EMAIL_ADDRESS} />
          </a>
        </motion.div>

        {/* Terminal message about Playground page */}
        <div className="relative z-10 px-6 w-full max-w-md">
          <TerminalMessage message="I'm currently developing my Playground page where I'll share exciting projects and things I'm interested in. Stay tuned!" />
        </div>
      </div>
    </div>
  )
}

