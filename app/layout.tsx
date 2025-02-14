import { Inter } from "next/font/google"
import "./globals.css"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Transition } from "@/components/transition"
import { FloatingNavButton } from "@/components/floating-nav-button"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Leo Gardberg - Portfolio",
  description: "Personal portfolio of Leo Gardberg",
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
      </body>
    </html>
  )
}



import './globals.css'