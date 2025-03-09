"use client"

import { useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

// Dynamically import the game component to improve initial load performance
const DynamicConstantsVariablesGame = dynamic(() => import("@/components/constants-variables-game"), { ssr: false })

/**
 * Playground page content component
 * Displays various interactive elements and projects
 */
export default function PlaygroundContent() {
  // Animation controls for staggered section animations
  const controls = useAnimation()

  /**
   * Start the staggered animation sequence for sections
   */
  const startAnimation = useCallback(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }))
  }, [controls])

  // Trigger animations when component mounts
  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-y-auto pt-20 relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pandasleep2.jpg-6DvUUKVl4HxkPqxsRSNgtx1PqhC0fJ.jpeg"
          alt="Sleeping red panda on a tree branch"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        {/* Overlay with different opacity for light/dark modes */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
      </div>

      {/* Content Sections */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 space-y-16 sm:space-y-24">
        {/* Section 1: AI Prompting Approach */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={controls} custom={0} className="mb-12">
          <BackdropBlur className="p-6 sm:p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80">
            <div className="space-y-6">
              {/* Section title with decorative styling */}
              <h2
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 underline decoration-2 decoration-gray-900 dark:decoration-white pb-1 inline-block"
                style={{
                  textShadow: "1px 1px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(255,255,255,0.1)",
                  WebkitTextStroke: "0.5px rgba(0,0,0,0.2)",
                  WebkitTextFillColor: "currentColor",
                }}
              >
                My Approach to AI Prompting for Reasoning Models
              </h2>

              {/* Section description */}
              <p className="text-base md:text-lg text-black dark:text-white leading-relaxed">
                This example illustrates how I structure my prompts specifically for AI reasoning models. By following
                this format, you can create more effective and targeted prompts, leading to better and more accurate
                responses from models designed for complex reasoning tasks. The key elements include a clear goal,
                specific return format, important warnings or constraints, and relevant context to guide the model's
                understanding and output.
              </p>

              {/* Image with responsive aspect ratio */}
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prompting.png-8Sau5lyKbF14kCdFvzKmncfNznrWf1.jpeg"
                  alt="Structured AI prompt example for reasoning models showing goal, return format, warnings, and context sections"
                  width={1200}
                  height={675}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </BackdropBlur>
        </motion.section>

        {/* Section 2: Espresso-Xoc Project */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={controls} custom={1}>
          <BackdropBlur className="p-6 sm:p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Project description */}
              <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Project title with decorative styling */}
                <h2
                  className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 underline decoration-2 decoration-gray-900 dark:decoration-white pb-1 inline-block"
                  style={{
                    textShadow: "1px 1px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(255,255,255,0.1)",
                    WebkitTextStroke: "0.5px rgba(0,0,0,0.2)",
                    WebkitTextFillColor: "currentColor",
                  }}
                >
                  Espresso-Xoc
                </h2>

                {/* Project description */}
                <p className="text-base md:text-lg text-black dark:text-white mb-6 leading-relaxed">
                  Explore the fascinating world of dark chocolate with Espresso-Xoc. Discover unique flavors and learn
                  about the rich history of chocolate, from ancient Aztec traditions to modern artisanal creations.
                </p>

                {/* Project link */}
                <a
                  href="https://espresso-xoc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300 text-sm font-mono hover:scale-105"
                >
                  Visit Espresso-Xoc
                </a>
              </div>

              {/* Project logo */}
              <div className="w-full md:w-2/5">
                <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Espresso-Xoc-logo-neg-KsmT5k8qXxMWmbKoOlfkukiK8uCEll.png"
                    alt="Espresso-Xoc logo"
                    width={240}
                    height={240}
                    className="w-full h-auto object-contain"
                  />
                  {/* Blend mode effect for light mode only */}
                  <div className="absolute inset-0 bg-black mix-blend-difference pointer-events-none dark:hidden" />
                </div>
              </div>
            </div>
          </BackdropBlur>
        </motion.section>

        {/* Section 3: Constants and Variables Game */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={controls} custom={2}>
          <BackdropBlur className="p-6 sm:p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image with decorative styling */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <div className="relative p-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 opacity-50 rounded-lg"></div>
                    <div className="relative">
                      <div className="absolute inset-0 border-4 border-yellow-300 rounded-lg pointer-events-none"></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lutece(s)-Tralv8RWwnuSr6KBKSKwBkvNfRZrMx.webp"
                        alt="The Lutece twins from BioShock Infinite flipping a coin"
                        width={800}
                        height={450}
                        className="w-full h-auto rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive game component */}
              <div className="w-full md:w-1/2">
                <DynamicConstantsVariablesGame buttonClassName="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:scale-105" />
              </div>
            </div>
          </BackdropBlur>
        </motion.section>
      </div>
    </div>
  )
}

