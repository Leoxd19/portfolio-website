"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

const startupIdeas = [
  "Nimbus for cloud-based pet care?",
  "Zephyr: Uber for wind energy?",
  "Lumina: Netflix for interactive holograms?",
  "EchoSphere: Spotify for ambient soundscapes?",
  "Quantum Quill: Medium for interdimensional blogging?",
  "Nebula Nosh: Airbnb for zero-gravity dining?",
  "Chrono Capsule: Instagram for time travelers?",
  "Synapse: Tinder for AI matchmaking?",
  "Gaia's Whisper: Shazam for identifying plants?",
  "Nexus Nap: Airbnb for power napping pods?",
  "Stellar Streaks: Uber for low-orbit space tours?",
  "Mindscape: Minecraft for building mental landscapes?",
  "Aether Academy: Coursera for psychic abilities?",
  "Quantum Quench: DoorDash for molecular gastronomy?",
  "Ethereal Echoes: Clubhouse for communicating with spirits?",
  "Biome Buddy: Tamagotchi for personal microbiome pets?",
  "Neuron Nexus: LinkedIn for brain cell networking?",
  "Dreamweaver: Etsy for commissioned lucid dreams?",
  "Flux Fitness: Peloton for antigravity workouts?",
  "Cipher: Duolingo for learning alien languages?",
]

export function AnimatedSearchBox() {
  const [state, setState] = useState({
    displayText: "",
    currentIdeaIndex: 0,
    isTyping: true,
    charIndex: 0,
  })

  const typeText = useCallback(() => {
    setState((prevState) => {
      const currentIdea = startupIdeas[prevState.currentIdeaIndex]
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
  }, [])

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
          currentIdeaIndex: (prevState.currentIdeaIndex + 1) % startupIdeas.length,
          charIndex: 0,
        }
      }
    })
  }, [])

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
          className="text-2xl md:text-3xl text-gray-900 dark:text-white font-mono h-16 flex items-center justify-center overflow-hidden font-semibold bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg px-4 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {state.displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="ml-1 inline-block w-0.5 h-8 bg-gray-900 dark:bg-white"
          />
        </motion.div>
        {/* Remove the following div and its contents */}
        {/* <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div> */}
      </div>
    </div>
  )
}

