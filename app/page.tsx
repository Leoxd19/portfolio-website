"use client"

import Image from "next/image"
import Link from "next/link"
import { StyledEmail } from "@/components/ui/styled-email"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL } from "@/lib/constants"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
          alt="Background image"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover transition-opacity duration-500 ease-in-out"
          style={{
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 transition-colors duration-300" />
      </div>

      <ResponsiveContainer>
        <motion.div
          className="relative z-10 text-center max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Hi there, I'm Leo.</h1>
          <p className="text-2xl mb-4 text-white">Let's build together!</p>
          <Link href={`mailto:${EMAIL_ADDRESS}`} className="inline-block">
            <StyledEmail email={EMAIL_ADDRESS} />
          </Link>
        </motion.div>
      </ResponsiveContainer>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-5">
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <BackdropBlur>
            <p className="text-sm font-mono text-black dark:text-white px-4 py-2">
              Built and Maintained by{" "}
              <Link
                href="https://github.com/Leoxd19"
                className="underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leo Gardberg
              </Link>
            </p>
          </BackdropBlur>
        </motion.div>
      </div>
    </div>
  )
}

