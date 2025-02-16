"use client"

import { useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

const DynamicFeaturedProject = dynamic(() => import("@/components/featured-project"), { ssr: false })
const DynamicConstantsVariablesGame = dynamic(() => import("@/components/constants-variables-game"), { ssr: false })

export default function Playground() {
  const controls = useAnimation()

  const startAnimation = useCallback(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }))
  }, [controls])

  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 transition-colors duration-300 overflow-y-auto pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        <motion.section className="space-y-16" initial={{ opacity: 0, y: 20 }} animate={controls} custom={0}>
          <BackdropBlur className="p-8 rounded-2xl shadow-lg bg-white/50 dark:bg-black/50">
            <DynamicFeaturedProject
              title="Secure AI-Powered Password Management"
              description="Revolutionizing how we store and access sensitive information with advanced AI integration."
              mediaSource="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nimbus-uEnlPxZn53IBY6WwZgBT7beLFZWpJS.mp4"
              mediaType="video"
              mediaClassName="w-full md:w-2/5"
            />
          </BackdropBlur>

          <BackdropBlur className="p-8 rounded-2xl shadow-lg bg-white/50 dark:bg-black/50">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Espresso-Xoc</h2>
                <p className="text-base md:text-lg text-black dark:text-white mb-6">
                  Explore the fascinating world of dark chocolate with Espresso-Xoc. - Discover unique flavors and learn
                  about the rich history of chocolate, - from ancient Aztec traditions to modern artisanal creations.
                </p>
                <a
                  href="https://espresso-xoc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300 text-sm font-mono hover:scale-105"
                >
                  Visit Espresso-Xoc
                </a>
              </div>
              <div className="w-full md:w-2/5">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Espresso-Xoc-logo-neg-KsmT5k8qXxMWmbKoOlfkukiK8uCEll.png"
                    alt="Espresso-Xoc logo"
                    width={240}
                    height={240}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-black mix-blend-difference pointer-events-none dark:hidden" />
                </div>
              </div>
            </div>
          </BackdropBlur>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={controls} custom={1}>
          <BackdropBlur className="p-8 rounded-2xl shadow-lg bg-white/50 dark:bg-black/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
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
              <div className="w-full md:w-1/2">
                <DynamicConstantsVariablesGame buttonClassName="bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:scale-105" />
              </div>
            </div>
          </BackdropBlur>
        </motion.section>
      </div>
    </div>
  )
}

