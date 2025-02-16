"use client"
import { useState, useCallback, useMemo } from "react"
import { motion, useAnimation } from "framer-motion"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { skillItems } from "@/lib/skill-items"

export default function ResumePage() {
  const [isHovered, setIsHovered] = useState(false)
  const progressControls = useAnimation()

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    progressControls.start({ width: "100%", transition: { duration: 1, ease: "easeInOut" } })
  }, [progressControls])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    progressControls.start({ width: "0%", transition: { duration: 0.3 } })
  }, [progressControls])

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
      <div className="flex flex-col items-center space-y-12">
        <motion.a
          href="/Leo_Gardberg_Resume.pdf"
          download="Leo_Gardberg_Resume.pdf"
          className="relative px-8 py-4 bg-transparent text-current rounded-lg overflow-hidden border border-current/20 transition-colors duration-300 ease-in-out mt-8"
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

        <BackdropBlur className="w-full max-w-4xl p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Technologies I've Worked With</h2>
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

