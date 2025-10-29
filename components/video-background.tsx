"use client"

interface VideoBackgroundProps {
  videoUrl: string
}

/**
 * Video background component that displays a single looping video.
 * Only displays on desktop.
 */
export function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 hidden sm:block">
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
