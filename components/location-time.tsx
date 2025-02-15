"use client"

import { useEffect, useState } from "react"
import { formatTime } from "@/lib/utils"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

// LocationTime component displays the current time in Stockholm
export function LocationTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    // Update the time every second
    function updateCurrentTime() {
      setTime(formatTime(new Date()))
    }

    updateCurrentTime() // Initial update
    const interval = setInterval(updateCurrentTime, 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-5 left-5 z-10">
      <BackdropBlur className="bg-white/30 dark:bg-black/30">
        <span className="text-sm font-mono font-bold text-gray-800 dark:text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] dark:drop-shadow-none">
          Stockholm, {time}
        </span>
      </BackdropBlur>
    </div>
  )
}

