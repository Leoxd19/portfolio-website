import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Playground - Leo Gardberg",
  description: "Explore interactive projects and experiments in Leo Gardberg's playground.",
}

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

