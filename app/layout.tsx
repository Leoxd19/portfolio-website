import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type { ReactNode } from "react"

import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Transition } from "@/components/transition"
import { FloatingNavButton } from "@/components/floating-nav-button"
import "./globals.css"

// Initialize the Inter font with Latin subset
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

// Metadata for the application
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

// Root layout component
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      {/* suppressHydrationWarning is used to prevent warnings caused by client-side theme switching */}
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