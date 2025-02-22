import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { FloatingNavButton } from "@/components/floating-nav-button"
import Watermark from "@/components/watermark"
import { Footer } from "@/components/footer"
import "./globals.css"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  icons: {
    icon: [
      { url: "/icon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
    shortcut: { url: "/shortcut-icon.png" },
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased flex flex-col min-h-screen`}
      >
        <div className="sm:hidden flex flex-col items-end space-y-2 p-4">
          <Navigation />
        </div>
        <div className="hidden sm:block">
          <LocationTime />
          <Navigation />
        </div>
        <FloatingNavButton />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <Watermark />
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'