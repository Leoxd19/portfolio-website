import type { Metadata, ReactNode } from "react"
import ClientRootLayout from "./client"

export const metadata: Metadata = {
  title: {
    default: "Leo Gardberg",
    template: "%s | Leo Gardberg",
  },
  description: "Personal portfolio of Leo Gardberg, Full-Stack Web Developer",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png",
        sizes: "32x32",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png",
        sizes: "192x192",
      },
    ],
    apple: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png",
      sizes: "180x180",
    },
    shortcut: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}



import './globals.css'