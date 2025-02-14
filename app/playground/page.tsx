"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

const DynamicFeaturedProject = dynamic(() => import("@/components/featured-project"), { ssr: false })
const DynamicConstantsVariablesGame = dynamic(() => import("@/components/constants-variables-game"), { ssr: false })

// Improved Separator component
const Separator = () => (
  <div className="w-full my-12">
    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-2/3 mx-auto"></div>
  </div>
)

export default function Playground() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }))
  }, [controls])

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        {/* Featured Projects Section */}
        <motion.section className="space-y-8" initial={{ opacity: 0, y: 20 }} animate={controls} custom={0}>
          <BackdropBlur className="p-8 rounded-lg">
            <DynamicFeaturedProject
              description="Revolutionizing password and key storage with AI. Coming soon!"
              logoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sugarv2.jpg-oAy5uLorllZOXRF5qDuUHg63td2GV5.jpeg"
            />
          </BackdropBlur>

          <Separator />

          <BackdropBlur className="p-8 rounded-lg">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              custom={1}
            >
              <div className="w-60 h-60 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Espresso-Xoc-logo-neg-KsmT5k8qXxMWmbKoOlfkukiK8uCEll.png"
                  alt="Espresso-Xoc logo"
                  width={240}
                  height={240}
                  className="w-full h-full object-contain dark:invert-0 invert rounded-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Espresso-Xoc</h2>
                <p className="text-black dark:text-white mb-4">
                  Explore the fascinating world of dark chocolate with Espresso-Xoc.
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
            </motion.div>
          </BackdropBlur>
        </motion.section>

        <Separator />

        {/* Interactive Elements Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={controls} custom={2}>
          <BackdropBlur className="p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lutece(s)-Tralv8RWwnuSr6KBKSKwBkvNfRZrMx.webp"
                  alt="The Lutece twins from BioShock Infinite flipping a coin"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <DynamicConstantsVariablesGame buttonClassName="bg-black dark:bg-white text-white dark:text-black hover:scale-105" />
              </div>
            </div>
          </BackdropBlur>
        </motion.section>
      </div>
    </div>
  )
}

