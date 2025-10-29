"use client"

import { useEffect, useState } from "react"

interface VideoBackgroundProps {
  videoUrl: string
}

export function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <video
      src={videoUrl}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      className="w-full h-full object-cover pointer-events-none"
      style={{
        filter: "brightness(1.12) contrast(1.05)",
      }}
    />
  )
}
