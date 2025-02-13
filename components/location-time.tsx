"use client"

import { useEffect, useState } from "react"
import { formatTime } from "@/lib/utils"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export function LocationTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    function updateTime() {
      setTime(formatTime(new Date()))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-5 left-5 z-10">
      <BackdropBlur>
        <span className="text-sm font-mono text-black dark:text-white">Stockholm, {time}</span>
      </BackdropBlur>
    </div>
  )
}

