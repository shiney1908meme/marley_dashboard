"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function RefinedHero() {
  const [imageError, setImageError] = useState(false)

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 min-h-[70vh] sm:min-h-[80vh] flex items-center w-full">
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C2526]/90 via-[#1C2526]/80 to-[#4C1D95]/30 z-10" />

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-6 lg:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight px-2"
          >
            <span
              className="text-white drop-shadow-lg block"
              style={{
                background: "linear-gradient(135deg, #F97316 0%, #4C1D95 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Welcome to the MARLEY Dashboard—Unleash Creativity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base md:text-lg lg:text-xl text-[#22C55E] px-4 font-medium drop-shadow-md max-w-2xl"
          >
            Explore our innovative tools built for you
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 sm:mb-12 lg:mb-16"
          >
            <Button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#F97316] to-[#F97316] hover:from-[#3B82F6] hover:to-[#4C1D95] text-white transition-all duration-500 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 shadow-2xl hover:shadow-[#3B82F6]/25 border border-[#F97316]/20 hover:border-[#3B82F6]/40 font-medium"
              size="lg"
            >
              <span>Discover Projects</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </Button>
          </motion.div>

          {/* Hero Image - Completely Fixed for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full max-w-full overflow-hidden rounded-xl sm:rounded-2xl border-2 border-[#22C55E] shadow-2xl shadow-[#4C1D95]/30 transition-all duration-500 hover:shadow-[#4C1D95]/50 hover:border-[#3B82F6] group"
          >
            <div className="relative w-full">
              {!imageError ? (
                <Image
                  src="/hero-image.webp"
                  alt="MARLEY Dashboard Hero Image showcasing all projects"
                  width={1920}
                  height={600}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => setImageError(true)}
                  sizes="100vw"
                />
              ) : (
                <div className="w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] bg-gradient-to-br from-[#1C2526] via-[#4C1D95]/20 to-[#F97316]/20 flex items-center justify-center">
                  <div className="text-center px-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        filter: [
                          "drop-shadow(0 0 20px #22C55E)",
                          "drop-shadow(0 0 30px #22C55E)",
                          "drop-shadow(0 0 20px #22C55E)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-2 sm:mb-4"
                      style={{
                        background: "linear-gradient(135deg, #F97316 0%, #4C1D95 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      M
                    </motion.div>
                    <p className="text-[#22C55E] text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                      MARLEY Dashboard - All Projects Connected
                    </p>
                  </div>
                </div>
              )}

              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#22C55E]/10 via-transparent to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* MARLEY Logo overlay */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 opacity-20">
                <Image
                  src="/marley-logo-512.png"
                  alt="MARLEY Logo"
                  width={32}
                  height={32}
                  className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
