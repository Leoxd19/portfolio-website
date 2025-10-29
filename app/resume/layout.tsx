import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume - Leo Gardberg",
  description: "View Leo Gardberg's professional resume and skills.",
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
