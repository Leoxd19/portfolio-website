"use client"

import { useEffect, useState } from "react"
import { formatTime } from "@/lib/utils"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export function LocationTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    function updateCurrentTime() {
      setTime(formatTime(new Date()))
    }

    updateCurrentTime()
    const interval = setInterval(updateCurrentTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-5 left-5 z-50">
      <BackdropBlur className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-gray-800/50">
        <span className="text-sm font-mono font-bold text-black dark:text-white p-2 inline-block">
          Stockholm, {time}
        </span>
      </BackdropBlur>
    </div>
  )
}

