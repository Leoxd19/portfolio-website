import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { Transition } from "@/components/transition"

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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <LocationTime />
        <Navigation />
        <Transition>{children}</Transition>
      </body>
    </html>
  )
}



import './globals.css'