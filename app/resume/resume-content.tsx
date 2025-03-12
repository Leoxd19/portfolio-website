"use client"

import { useState, useCallback, useMemo } from "react"
import { motion, useAnimation } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { skillItems } from "@/lib/skill-items"
import { Linkedin } from "lucide-react"
import { FaDiscord } from "react-icons/fa"

/**
 * Resume page content component
 * Displays professional skills and a download button for the resume
 */
export default function ResumeContent() {
  // State for download button hover effect
  const [isHovered, setIsHovered] = useState(false)
  const progressControls = useAnimation()

  /**
   * Handle mouse enter event for the download button
   * Animates the progress bar to fill
   */
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    progressControls.start({ width: "100%", transition: { duration: 1, ease: "easeInOut" } })
  }, [progressControls])

  /**
   * Handle mouse leave event for the download button
   * Animates the progress bar to empty
   */
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    progressControls.start({ width: "0%", transition: { duration: 0.3 } })
  }, [progressControls])

  // Animation variants for the skills container
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }),
    [],
  )

  // Animation variants for individual skill items
  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    [],
  )

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center space-y-8">
          {/* Download instructions */}
          <div className="flex flex-col items-center mb-4 text-center">
            <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              This button only works for integrated users. Please contact me for my latest resume.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900 dark:text-white animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Download button with progress animation */}
          <motion.a
            href="/Leo_Gardberg_Resume.pdf"
            download="Leo_Gardberg_Resume.pdf"
            className="relative px-8 py-4 bg-transparent text-gray-900 dark:text-white rounded-2xl overflow-hidden border border-current/20 transition-colors duration-300 ease-in-out"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-mono text-base tracking-normal">Download Resume</span>
            {/* Background fill animation */}
            <motion.div
              className="absolute inset-0 bg-current/10"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? 0 : "-100%" }}
              transition={{ duration: 0.3 }}
            />
            {/* Progress bar animation */}
            <motion.div
              className="absolute left-0 bottom-0 h-1 bg-current"
              initial={{ width: "0%" }}
              animate={progressControls}
            />
          </motion.a>

          {/* Contact information */}
          <div className="w-full flex flex-col items-center gap-4 my-6">
            {/* Contact buttons container - centered with max width */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs">
              {/* Discord button - now with official Discord logo */}
              <motion.div
                className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-2xl shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDiscord className="w-4 h-4 text-[#5865F2]" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-[#5865F2]">Leoxd</span>
                </span>
              </motion.div>

              {/* LinkedIn link - smaller size */}
              <motion.a
                href="https://www.linkedin.com/in/leo-gardberg-027a2b165/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-2xl shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-[#0A66C2]">Leo Gardberg</span>
                </span>
              </motion.a>
            </div>
          </div>

          {/* Skills section */}
          <BackdropBlur className="w-full max-w-4xl p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Technologies I've Worked With So Far
            </h2>
            {/* Skills grid with responsive layout */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-gray-200/20 dark:border-gray-700/20 shadow-lg"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="flex items-center justify-center p-3 rounded-xl hover:bg-gray-200/30 dark:hover:bg-gray-700/30 transition-all duration-200 bg-white/30 dark:bg-gray-800/30 shadow-md overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-2 transition-all duration-200 hover:scale-110">
                    <item.Icon
                      className="w-6 h-6 filter drop-shadow-md transition-transform duration-200"
                      style={{
                        color: item.color,
                      }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-all duration-200 hover:font-semibold">
                      {item.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </BackdropBlur>
        </div>
      </div>
    </div>
  )
}

