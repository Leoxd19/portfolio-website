"use client"

import Image from "next/image"

export default function Watermark() {
  return (
    <div className="fixed bottom-4 left-4 z-10">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
        alt="Red Panda Logo"
        width={64}
        height={64}
        className="w-16 h-16"
      />
    </div>
  )
}

