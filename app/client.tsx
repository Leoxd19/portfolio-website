"use client"

import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { NavigationButtons } from "@/components/navigation-buttons"
import { Footer } from "@/components/footer"
import "./globals.css"
import type { ReactNode } from "react"

// Load Inter font with Latin subset
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

/**
 * Main layout content component that wraps all pages
 * Handles the overall page structure and navigation elements
 *
 * @param children - The page content to be rendered
 */
function RootLayoutContent({ children }: { children: ReactNode }) {
  return (
    <body
      className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased flex flex-col min-h-screen`}
    >
      {/* Mobile navigation - only visible on small screens */}
      <div className="sm:hidden flex flex-col items-center w-full p-4">
        <Navigation />
      </div>

      {/* Desktop navigation and time display - hidden on mobile */}
      <div className="hidden sm:block">
        <LocationTime />
        <Navigation />
      </div>

      {/* Floating navigation button - visible on all screen sizes */}
      <div className="relative z-[100]">
        <NavigationButtons />
      </div>

      {/* Main content area */}
      <main className="flex-grow flex flex-col">{children}</main>

      {/* Footer - appears at the bottom of every page */}
      <Footer />

      {/* Analytics tracking */}
      <Analytics />
    </body>
  )
}

/**
 * Root layout component that sets up the HTML document
 * Configures theme, favicon, and wraps the content
 *
 * @param children - The page content to be rendered
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-LvDMA5oGLTogDLMCnzaDmtdDsRaye7.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-LvDMA5oGLTogDLMCnzaDmtdDsRaye7.png"
        />
      </head>
      <RootLayoutContent>{children}</RootLayoutContent>
    </html>
  )
}
