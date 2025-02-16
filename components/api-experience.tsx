import type React from "react"
import { motion } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { SiOpenai, SiGithub, SiTwitter, SiSpotify } from "react-icons/si"

interface APIExperienceProps {
  className?: string
}

const APIExperience: React.FC<APIExperienceProps> = ({ className = "" }) => {
  const apis = [
    { name: "OpenAI", icon: SiOpenai, color: "#00A67E" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Twitter", icon: SiTwitter, color: "#1DA1F2" },
    { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
  ]

  return (
    <BackdropBlur className={`w-full max-w-4xl p-6 rounded-lg ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-center">API Experience</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-base md:text-lg text-center mb-6">
          Experienced in navigating and utilizing popular APIs, with a focus on effective prompting and seamless
          integration.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {apis.map((api) => (
            <motion.div
              key={api.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <api.icon className="w-8 h-8 mb-2" style={{ color: api.color }} />
              <span className="text-sm font-medium">{api.name}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-sm md:text-base text-center mt-6">
          Proficient in crafting effective API requests, handling responses, and implementing error handling for robust
          applications.
        </p>
      </motion.div>
    </BackdropBlur>
  )
}

export default APIExperience

