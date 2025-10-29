import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Leo Gardberg",
  description: "Explore the web development services offered by Leo Gardberg.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

