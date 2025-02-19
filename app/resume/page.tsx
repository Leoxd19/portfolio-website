"use client"
import { useState, useCallback, useMemo } from "react"
import { motion, useAnimation } from "framer-motion"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { skillItems } from "@/lib/skill-items"
import Link from "next/link"

export default function ResumePage() {
  // State for hover effect on download button
  const [isHovered, setIsHovered] = useState(false)
  // Animation control for progress bar
  const progressControls = useAnimation()

  // Handlers for mouse events on download button
  const handleMouseEnter = useCallback(() => {
    try {
      setIsHovered(true)
      progressControls.start({ width: "100%", transition: { duration: 1, ease: "easeInOut" } })
    } catch (error) {
      console.error("Error in handleMouseEnter:", error)
    }
  }, [progressControls])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    progressControls.start({ width: "0%", transition: { duration: 0.3 } })
  }, [progressControls])

  // Animation variants for container and items
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

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    [],
  )

  return (
    <ResponsiveContainer className="z-0">
      <div className="flex flex-col items-center space-y-8 py-12">
        {/* Text above the download button with arrow */}
        <div className="flex flex-col items-center mb-4">
          <p className="text-base font-semibold text-blue-600 dark:text-blue-400 text-center mb-2">
            This button only works for integrated users. Please contact me for my latest resume.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Download resume button with hover effect and progress bar */}
        <motion.a
          href="/Leo_Gardberg_Resume.pdf"
          download="Leo_Gardberg_Resume.pdf"
          className="relative px-8 py-4 bg-transparent text-current rounded-lg overflow-hidden border border-current/20 transition-colors duration-300 ease-in-out"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 font-mono text-sm tracking-normal">Download Resume</span>
          <motion.div
            className="absolute inset-0 bg-current/10"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute left-0 bottom-0 h-1 bg-current"
            initial={{ width: "0%" }}
            animate={progressControls}
          />
        </motion.a>

        {/* Discord button */}
        <Link
          href="https://discord.com/users/118335304926101506"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-8 py-4 bg-[#5865F2] text-white rounded-lg overflow-hidden border border-[#5865F2] transition-all duration-300 ease-in-out flex items-center justify-center"
        >
          <span className="relative z-10 font-mono text-sm tracking-normal flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Add me on Discord
          </span>
        </Link>

        {/* Technologies grid */}
        <BackdropBlur className="w-full max-w-4xl p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Technologies I've Worked With So Far</h2>
          {/* Grid of technology icons and names */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillItems.map((item) => (
              <motion.div
                key={item.name}
                className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200/30 dark:hover:bg-gray-700/30 transition-all duration-200 bg-white/30 dark:bg-gray-800/30 shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2 transition-all duration-200 hover:scale-110">
                  <item.Icon
                    className="w-6 h-6 filter drop-shadow-md transition-transform duration-200"
                    style={{
                      color: item.color,
                    }}
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
    </ResponsiveContainer>
  )
}

