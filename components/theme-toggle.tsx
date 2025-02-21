"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    const savedTheme = localStorage.getItem("theme") || "dark"
    setIsDark(savedTheme === "dark")
    root.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    root.classList.toggle("dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <BackdropBlur className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-gray-800/50">
        <button
          onClick={toggleTheme}
          className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-4 h-4 transition-transform duration-300 ease-in-out" />
          ) : (
            <Moon className="w-4 h-4 transition-transform duration-300 ease-in-out" />
          )}
        </button>
      </BackdropBlur>
    </div>
  )
}

