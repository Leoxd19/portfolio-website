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
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faviconxyz-an1ZHFtyMvSJIMvHvMyz6vOtmeDdDM.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faviconxyz-an1ZHFtyMvSJIMvHvMyz6vOtmeDdDM.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faviconxyz-an1ZHFtyMvSJIMvHvMyz6vOtmeDdDM.png",
        sizes: "180x180",
        type: "image/png",
        rel: "apple-touch-icon",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faviconxyz-an1ZHFtyMvSJIMvHvMyz6vOtmeDdDM.png",
        color: "#E86A33", // Color matching the red panda's fur
      },
    ],
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