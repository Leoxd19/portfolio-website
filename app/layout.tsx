import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-cd8saEAW1XxUlkXFCZoNBNJfNglI7d.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-bDPv6OXoiKs29Dyl9PKSEYf240Teii.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-kWWS5gnuGYrR11jgH9Sza96Oq4aBR1.png",
    },
    shortcut: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-bDPv6OXoiKs29Dyl9PKSEYf240Teii.png",
    },
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-bDPv6OXoiKs29Dyl9PKSEYf240Teii.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-cd8saEAW1XxUlkXFCZoNBNJfNglI7d.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-kWWS5gnuGYrR11jgH9Sza96Oq4aBR1.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased`}>
        <div className="sm:hidden flex flex-col items-end space-y-2 p-4">
          <ThemeToggle />
          <Navigation />
        </div>
        <div className="hidden sm:block">
          <LocationTime />
          <Navigation />
          <ThemeToggle />
        </div>
        <FloatingNavButton />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'