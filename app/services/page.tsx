"use client"

import { ServicesSection } from "@/components/services-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-24 sm:pt-32">
        {" "}
        {/* Added padding-top here */}
        <ServicesSection />
      </div>
    </div>
  )
}

