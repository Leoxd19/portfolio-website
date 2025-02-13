"use client"

import { useEffect, useState } from "react"
import { formatTime } from "@/lib/utils"

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
    <div className="fixed top-5 left-5 text-sm font-mono z-10">
      <span className="opacity-80">Stockholm, {time}</span>
    </div>
  )
}

