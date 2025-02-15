import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Transition } from "@/components/transition"
import { FloatingNavButton } from "@/components/floating-nav-button"
import "./globals.css"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Leo Gardberg - Portfolio",
  description: "Personal portfolio of Leo Gardberg",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
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