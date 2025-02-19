"use client"

import { useState, useEffect, type ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
}

export function ResponsiveContainer({ children, className = "" }: ResponsiveContainerProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    // Function to handle resizing and calculate the appropriate scale
    function handleResize() {
      const viewportHeight = window.innerHeight
      const contentHeight = document.body.scrollHeight
      const newScale = Math.min(viewportHeight / contentHeight, 1)
      setScale(newScale)
    }

    // Initial call to set the scale
    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  )
}

