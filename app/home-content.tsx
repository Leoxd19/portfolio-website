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

export default function HomeContent() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background layer - lowest z-index */}
      <div className="absolute inset-0 z-0">
        {/* Video background - desktop only */}
        <div className="hidden sm:block absolute inset-0">
          <VideoBackground videoUrl={BACKGROUND_VIDEO_URL} />
        </div>

        {/* Static background image - mobile only */}
        <div className="sm:hidden absolute inset-0">
          <Image
            src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content layer - above background */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Hero section */}
        <motion.div
          className="text-center max-w-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 text-white ${poppins.className}`}
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            Hi there, I'm Leo.
          </h1>

          <p
            className={`text-2xl sm:text-3xl mb-6 text-white ${poppins.className}`}
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Let's build together!
          </p>

          <a href={`mailto:${EMAIL_ADDRESS}`} className="inline-block">
            <StyledEmail email={EMAIL_ADDRESS} />
          </a>
        </motion.div>

        {/* Terminal message */}
        <div className="w-full max-w-md">
          <TerminalMessage message="I'm currently developing my Playground page where I'll share exciting projects and things I'm interested in. Stay tuned!" />
        </div>
      </div>
    </div>
  )
}
