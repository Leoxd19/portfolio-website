"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

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
    <button
      onClick={toggleTheme}
      className="fixed top-5 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 z-50 transition-all duration-300 ease-in-out hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-white transition-transform duration-300 ease-in-out" />
      ) : (
        <Moon className="w-4 h-4 text-black transition-transform duration-300 ease-in-out" />
      )}
    </button>
  )
}

