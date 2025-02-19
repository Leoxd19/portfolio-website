"use client"

import { useState, useEffect, type ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
}

export function ResponsiveContainer({ children, className = "" }: ResponsiveContainerProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function handleResize() {
      try {
        const viewportHeight = window.innerHeight
        const contentHeight = document.body.scrollHeight
        const newScale = Math.min(viewportHeight / contentHeight, 1)
        setScale(newScale)
      } catch (error) {
        console.error("Error in ResponsiveContainer handleResize:", error)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
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

