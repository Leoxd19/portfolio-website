"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TerminalMessageProps {
  message: string
}

/**
 * Terminal-style message component
 * Displays text with a typing animation in a terminal-like window
 */
export function TerminalMessage({ message }: TerminalMessageProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  // Typing animation effect
  useEffect(() => {
    if (displayedText.length < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(message.substring(0, displayedText.length + 1))
      }, 40)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, message])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-700">
        {/* Terminal header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs mx-auto font-mono">terminal</div>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-sm sm:text-base">
          <div className="flex">
            <span className="text-green-500 mr-2 flex-shrink-0">$</span>
            <div className="text-green-400 break-words">
              {displayedText}
              {cursorVisible && <span className="inline-block w-2 h-4 bg-green-400 ml-0.5"></span>}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

