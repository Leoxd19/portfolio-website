import { Inter } from "next/font/google"
import "./globals.css"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Transition } from "@/components/transition"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased transition-colors duration-300`}
      >
        <LocationTime />
        <Navigation />
        <ThemeToggle />
        <Transition>{children}</Transition>
      </body>
    </html>
  )
}



import './globals.css'