"use client"

import { useEffect, useState } from "react"

interface VideoBackgroundProps {
  videoUrl: string
}

/**
 * Video background component that displays a single looping video.
 * Only displays on desktop and after client-side mount to prevent hydration issues.
 */
export function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="absolute inset-0 hidden sm:block z-10" />
  }

  return (
    <div className="absolute inset-0 hidden sm:block z-10">
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
    </div>
  )
}
