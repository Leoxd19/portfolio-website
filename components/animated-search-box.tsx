"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const startupIdeas = [
  "Portfolio: Minimalist developer showcase",
  "Foodie: Restaurant review platform",
  "Wanderlust: Travel blog template",
  "Shutter: Photography portfolio",
  "CodeShare: Developer snippet library",
  "Bookworm: Reading list tracker",
  "Palette: Color scheme generator",
  "Metrics: Analytics dashboard",
  "Greenthumb: Plant care guide",
  "Wavelength: Music discovery app",
  "Fittrack: Workout progress logger",
  "Recipes: Culinary collection",
  "Mindful: Meditation timer",
  "Petals: Flower shop storefront",
  "Artisan: Handmade marketplace",
  "Memoir: Personal journal",
  "Capture: Event photography",
  "Minimal: Clean blog template",
  "Horizon: Weather visualization",
  "Spectrum: Design portfolio",
]

/**
 * Animated search box component
 * Displays a typing animation with various startup ideas
 */
export function AnimatedSearchBox() {
  const [shuffledIdeas, setShuffledIdeas] = useState<string[]>([])
  const [state, setState] = useState({
    displayText: "",
    currentIdeaIndex: 0,
    isTyping: true,
    charIndex: 0,
  })

  useEffect(() => {
    setShuffledIdeas(shuffleArray(startupIdeas))
  }, [])

  const typeText = useCallback(() => {
    setState((prevState) => {
      const currentIdea = shuffledIdeas[prevState.currentIdeaIndex]
      if (prevState.charIndex < currentIdea.length) {
        return {
          ...prevState,
          displayText: currentIdea.slice(0, prevState.charIndex + 1),
          charIndex: prevState.charIndex + 1,
        }
      } else {
        return {
          ...prevState,
          isTyping: false,
        }
      }
    })
  }, [shuffledIdeas])

  const deleteText = useCallback(() => {
    setState((prevState) => {
      if (prevState.charIndex > 0) {
        return {
          ...prevState,
          displayText: prevState.displayText.slice(0, -1),
          charIndex: prevState.charIndex - 1,
        }
      } else {
        return {
          ...prevState,
          isTyping: true,
          currentIdeaIndex: (prevState.currentIdeaIndex + 1) % shuffledIdeas.length,
          charIndex: 0,
        }
      }
    })
  }, [shuffledIdeas])

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (state.isTyping) {
          typeText()
        } else {
          deleteText()
        }
      },
      state.isTyping ? 80 + Math.random() * 40 : 50,
    )

    return () => clearTimeout(timer)
  }, [state, typeText, deleteText])

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 pointer-events-none">
      <div className="relative">
        <motion.div
          className="text-xl md:text-3xl text-gray-900 dark:text-white font-mono h-16 flex items-center justify-center overflow-hidden font-semibold bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {state.displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="ml-1 inline-block w-1 h-8 bg-gray-900 dark:bg-white"
          />
        </motion.div>
      </div>
    </div>
  )
}
