"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="w-full py-3 bg-black text-white text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggcorner-bJRqJvYvhVYc0es9EoVqLAqMA6bLGl.png"
              alt="Red Panda Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <p className="font-mono">
              Built by{" "}
              <Link
                href="https://github.com/Leoxd19"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Leo Gardberg
              </Link>{" "}
              © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-end">
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:leo.gardberg@gmail.com" className="font-mono hover:text-blue-400 transition-colors">
                leo.gardberg@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Github className="w-4 h-4 text-gray-400" />
              <Link
                href="https://github.com/Leoxd19"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-blue-400 transition-colors"
              >
                GitHub
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

