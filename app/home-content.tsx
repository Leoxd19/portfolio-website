"use client"

import Image from "next/image"
import { StyledEmail } from "@/components/ui/styled-email"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL, BACKGROUND_VIDEO_URL } from "@/lib/constants"
import { motion } from "framer-motion"
import { Poppins } from "next/font/google"
import { TerminalMessage } from "@/components/terminal-message"
import { VideoBackground } from "@/components/video-background"

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

/**
 * Home page content component
 * Displays a hero section with background video/image, title, and contact information
 */
export default function HomeContent() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background with video on desktop, image on mobile */}
      <div className="absolute inset-0 z-0">
        {/* Video background - desktop only */}
        <VideoBackground videoUrl={BACKGROUND_VIDEO_URL} />

        {/* Static background image - mobile only fallback */}
        <Image
          src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
          alt="Background image"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover sm:hidden"
          style={{
            objectPosition: "center",
          }}
        />
      </div>

      {/* Main content container with responsive scaling */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Animated hero section */}
        <motion.div
          className="text-center max-w-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Main heading with text shadow for better visibility */}
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 text-white ${poppins.className}`}
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
            className={`text-2xl sm:text-3xl mb-6 text-white ${poppins.className}`}
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
        <div className="w-full max-w-md">
          <TerminalMessage message="I'm currently developing my Playground page where I'll share exciting projects and things I'm interested in. Stay tuned!" />
        </div>
      </div>
    </div>
  )
}
