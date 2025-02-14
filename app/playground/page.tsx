import { ConstantsVariablesGame } from "@/components/constants-variables-game"
import FeaturedProject from "@/components/featured-project"
import Image from "next/image"

export default function Playground() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Featured Projects Section */}
        <section className="space-y-8">
          <FeaturedProject
            description="Revolutionizing password and key storage with AI. Coming soon!"
            logoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sugarv2.jpg-oAy5uLorllZOXRF5qDuUHg63td2GV5.jpeg"
          />

          <div className="flex items-start justify-center gap-4">
            <div className="w-60 h-60 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Espresso-Xoc-logo-neg-KsmT5k8qXxMWmbKoOlfkukiK8uCEll.png"
                alt="Espresso-Xoc logo"
                width={240}
                height={240}
                className="w-full h-full object-contain dark:invert-0 invert rounded-lg"
              />
            </div>
            <a
              href="https://espresso-xoc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 self-center"
            >
              Espresso-Xoc
            </a>
          </div>
        </section>

        {/* Interactive Elements Section */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
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
              <ConstantsVariablesGame />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

