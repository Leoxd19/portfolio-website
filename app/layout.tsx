import { Inter } from "next/font/google"
import "./globals.css"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Transition } from "@/components/transition"
import { FloatingNavButton } from "@/components/floating-nav-button"
import { Analytics } from "@vercel/analytics/react"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Leo Gardberg - Portfolio",
  description: "Personal portfolio of Leo Gardberg",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-pVFN1uArEEIDU8eWrZMpDHqYSd9y87.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-pVFN1uArEEIDU8eWrZMpDHqYSd9y87.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased`}>
        <Transition>
          <LocationTime />
          <Navigation />
          <ThemeToggle />
          <FloatingNavButton />
          <main className="min-h-screen">{children}</main>
        </Transition>
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'