/**
 * Services page component.
 * Displays a list of services offered using the ServicesSection component.
 */
"use client"

import { ServicesSection } from "@/components/services-section"

/**
 * Renders the services page with a white background in light mode
 * and a dark background in dark mode.
 */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center p-4">
      <ServicesSection />
    </div>
  )
}

