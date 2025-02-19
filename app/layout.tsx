import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingNavButton } from "@/components/floating-nav-button"
import Watermark from "@/components/watermark"
import "./globals.css"
import type { ReactNode } from "react"

// Load Inter font
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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png",
        sizes: "16x16",
        type: "image/png",
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
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

/**
 * RootLayout wraps all pages and applies common layout elements.
 * It includes global styling, analytics, and responsive navigation.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Favicon links */}
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased`}>
        {/* Mobile navigation */}
        <div className="sm:hidden flex flex-col items-end space-y-2 p-4">
          <ThemeToggle />
          <Navigation />
        </div>
        {/* Desktop navigation */}
        <div className="hidden sm:block">
          <LocationTime />
          <Navigation />
          <ThemeToggle />
        </div>
        <FloatingNavButton />
        <main className="min-h-screen">{children}</main>
        <Watermark />
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'