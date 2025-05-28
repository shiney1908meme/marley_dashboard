"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function EnhancedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Enhanced animated background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || 600
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    let time = 0
    const particles: Array<{ x: number; y: number; vx: number; vy: number; life: number }> = []

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random(),
      })
    }

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient waves
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(107, 33, 168, 0.3)") // Purple
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.2)") // Blue
      gradient.addColorStop(1, "rgba(28, 37, 38, 0.4)") // Black

      ctx.fillStyle = gradient

      // Multiple wave layers
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x < canvas.width; x += 15) {
          const y =
            Math.sin(x * 0.008 + time + i * 0.5) * 30 +
            Math.sin(x * 0.015 + time * 1.2) * 20 +
            Math.cos(x * 0.005 + time * 0.8) * 15 +
            canvas.height -
            120 -
            i * 25
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.globalAlpha = 0.6 - i * 0.1
        ctx.fill()
      }

      // Draw floating particles
      ctx.globalAlpha = 0.8
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life += 0.01

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Fix: Ensure particle size is always positive
        const size = Math.max(0.5, Math.abs(Math.sin(particle.life) * 2) + 1)
        const alpha = Math.max(0.1, Math.min(1, Math.abs(Math.sin(particle.life * 0.5)) * 0.5 + 0.5))

        ctx.globalAlpha = alpha * 0.6
        ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 min-h-[80vh] flex items-center">
      {/* Enhanced animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C2526]/80 via-transparent to-[#6B21A8]/20 z-10" />

      <div className="container relative z-20 mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Floating sparkles */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-10 left-1/4 text-[#22C55E] opacity-60"
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            className="absolute top-20 right-1/4 text-[#3B82F6] opacity-60"
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8 lg:mb-10 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#6B21A8] bg-clip-text text-transparent drop-shadow-lg">
              Welcome to the MARLEY Dashboard—Unleash Creativity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-10 lg:mb-12 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#22C55E] px-2 font-medium drop-shadow-md"
          >
            Explore our innovative tools built for you
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="group flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#F97316] hover:from-[#3B82F6] hover:to-[#6B21A8] text-white transition-all duration-500 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 shadow-2xl hover:shadow-[#3B82F6]/25 border border-[#F97316]/20 hover:border-[#3B82F6]/40"
              size="lg"
            >
              <span className="font-semibold">Discover Projects</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </Button>
          </motion.div>

          {/* Enhanced hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 sm:mt-16 lg:mt-20 w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl overflow-hidden rounded-2xl border-2 border-[#3B82F6] shadow-2xl shadow-[#6B21A8]/20 transition-all duration-500 hover:shadow-[#6B21A8]/40 hover:border-[#22C55E] group"
          >
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=900&query=MARLEY Projects Collage retro futuristic dashboard interface with neon colors"
                alt="MARLEY Projects Collage"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#22C55E]/10 via-transparent to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
