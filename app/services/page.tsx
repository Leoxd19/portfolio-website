"use client"

import { ServicesSection } from "@/components/services-section"
import { AnimatedSearchBox } from "@/components/animated-search-box"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <ServicesSection>
        <AnimatedSearchBox />
      </ServicesSection>
    </div>
  )
}

