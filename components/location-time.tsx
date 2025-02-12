"use client"

import { useEffect, useState } from "react"

export function LocationTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-5 left-5 text-sm font-mono">
      <span className="opacity-80">Stockholm, {time}</span>
    </div>
  )
}

