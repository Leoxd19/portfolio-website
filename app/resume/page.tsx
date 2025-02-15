"use client"

import type React from "react"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import {
  SiHtml5,
  SiCss3,
  SiPython,
  SiMysql,
  SiJavascript,
  SiRuby,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiFlask,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiV8,
  SiTailwindcss,
  SiFramer,
  SiMarkdown,
  SiPostgresql,
} from "react-icons/si"

// Define the structure for skill items
interface SkillItem {
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
}

export default function ResumePage() {
  const [isHovered, setIsHovered] = useState(false)
  const progressControls = useAnimation()

  // Handlers for resume download button hover effect
  const handleMouseEnter = () => {
    setIsHovered(true)
    progressControls.start({ width: "100%", transition: { duration: 1, ease: "easeInOut" } })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    progressControls.start({ width: "0%", transition: { duration: 0.3 } })
  }

  // List of skills with their respective icons and colors
  const skillItems: SkillItem[] = [
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "SQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Ruby", Icon: SiRuby, color: "#CC342D" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Flask", Icon: SiFlask, color: "#000000" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#181717" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "Vercel", Icon: SiVercel, color: "#000000" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "V0", Icon: SiV8, color: "#4B8BF5" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
    { name: "Markdown", Icon: SiMarkdown, color: "#000000" },
  ]

  return (
    <ResponsiveContainer>
      <div className="flex flex-col items-center space-y-12">
        {/* Resume download button with hover effect */}
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

        {/* Skills section */}
        <BackdropBlur className="w-full max-w-4xl p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Technologies I've Worked With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-lg">
            {skillItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 bg-white/50"
              >
                <item.Icon
                  className="w-6 h-6"
                  style={{
                    color: item.color,
                  }}
                />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </BackdropBlur>
      </div>
    </ResponsiveContainer>
  )
}

