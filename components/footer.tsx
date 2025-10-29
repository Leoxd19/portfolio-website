"use client"

import Link from "next/link"
import { Mail, Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

/**
 * Footer component that appears at the bottom of every page
 * Displays copyright information, contact links, and theme toggle
 */
export function Footer() {
  return (
    <footer className="w-full py-6 bg-black text-white text-sm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mobile layout stacks elements vertically with proper spacing */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          {/* Copyright section */}
          <div className="flex items-center justify-center w-full sm:w-auto">
            <p className="font-mono text-center sm:text-left">
              Built by{" "}
              <Link
                href="https://github.com/Leoxd19"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors underline"
              >
                Leo Gardberg
              </Link>{" "}
              © {new Date().getFullYear()}
            </p>
          </div>

          {/* Contact links and theme toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end">
            {/* Contact email */}
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href="mailto:leo.gardberg@gmail.com" className="font-mono hover:text-blue-400 transition-colors">
                leo.gardberg@gmail.com
              </a>
            </div>

            {/* GitHub link */}
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-gray-400" />
              <Link
                href="https://github.com/Leoxd19"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-blue-400 transition-colors"
              >
                GitHub
              </Link>
            </div>

            {/* Theme toggle switch */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
