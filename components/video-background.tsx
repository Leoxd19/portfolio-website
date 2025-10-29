"use client"

import { useEffect, useState } from "react"

interface VideoBackgroundProps {
  videoUrl: string
}

/**
 * Video background component that displays a single looping video.
 * Only displays on desktop and handles SSR properly.
 */
export function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render video on server to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <div className="absolute inset-0 hidden sm:block">
      <video
        key={videoUrl}
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
        onError={(e) => {
          console.error("[v0] Video failed to load:", e)
        }}
      />
    </div>
  )
}
