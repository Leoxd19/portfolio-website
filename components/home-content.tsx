"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL } from "@/lib/constants"
import { StyledEmail } from "@/components/ui/styled-email"
import { AnimatedSearchBox } from "@/components/animated-search-box"

export default function HomeContent() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/80 -z-10" />

      {/* Animated Search Box */}
      <AnimatedSearchBox />

      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center p-8 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Picture */}
        <motion.div
          className="relative rounded-full overflow-hidden mb-6 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/49694934?v=4"
            alt="Leo Gardberg"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-3xl font-bold text-white text-shadow-sm mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Leo Gardberg
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 text-shadow-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Full-Stack Web Developer
        </motion.p>

        {/* Contact Button */}
        <motion.a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out hover:scale-105 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          Contact Me
        </motion.a>

        {/* Styled Email */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <StyledEmail email={EMAIL_ADDRESS} />
        </motion.div>
      </motion.div>
    </div>
  )
}
