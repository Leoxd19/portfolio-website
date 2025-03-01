"use client"

import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LocationTime } from "@/components/location-time"
import { Navigation } from "@/components/navigation"
import { NavigationButtons } from "@/components/navigation-buttons"
import { Footer } from "@/components/footer"
import "./globals.css"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Head from "next/head"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

function RootLayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
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
      <div className="relative z-[100]">
        <NavigationButtons />
      </div>
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
      <Analytics />
    </body>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
        />
      </Head>
      <RootLayoutContent>{children}</RootLayoutContent>
    </html>
  )
}

