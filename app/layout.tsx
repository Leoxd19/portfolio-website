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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-LvDMA5oGLTogDLMCnzaDmtdDsRaye7.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-LvDMA5oGLTogDLMCnzaDmtdDsRaye7.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-LvDMA5oGLTogDLMCnzaDmtdDsRaye7.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-LvDMA5oGLTogDLMCnzaDmtdDsRaye7.png",
      sizes: "180x180",
    },
    shortcut: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-LvDMA5oGLTogDLMCnzaDmtdDsRaye7.png",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}


import './globals.css'