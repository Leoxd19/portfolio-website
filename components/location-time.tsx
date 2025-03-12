"use client"

import { useEffect, useState } from "react"
import { formatTime } from "@/lib/utils"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

/**
 * Component to display current location and time
 * Only visible on desktop screens
 */
export function LocationTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    // Update time every second
    function updateCurrentTime() {
      setTime(formatTime(new Date()))
    }

    updateCurrentTime()
    const interval = setInterval(updateCurrentTime, 1000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-5 left-5 z-50 hidden sm:block">
      <BackdropBlur className="bg-white/90 dark:bg-black/90 border border-gray-200/50 dark:border-gray-800/50">
        <span className="text-sm font-mono font-bold text-black dark:text-white p-2 inline-block">
          Stockholm {time}
        </span>
      </BackdropBlur>
    </div>
  )
}

