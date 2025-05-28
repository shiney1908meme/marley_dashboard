"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || 500
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    let time = 0
    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient waves
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(107, 33, 168, 0.2)") // Purple
      gradient.addColorStop(1, "rgba(28, 37, 38, 0.3)") // Black

      ctx.fillStyle = gradient

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x < canvas.width; x += 20) {
          const y =
            Math.sin(x * 0.01 + time + i) * 20 + Math.sin(x * 0.02 + time * 1.5) * 15 + canvas.height - 100 - i * 30
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 sm:mb-6 lg:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#F97316] to-[#6B21A8] bg-clip-text text-transparent">
              Welcome to the MARLEY Dashboard—Unleash Creativity
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 lg:mb-10 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-[#22C55E] px-2">
            Explore our innovative tools built for you
          </p>

          <Button
            className="group flex items-center gap-2 bg-[#F97316] text-white transition-all duration-300 hover:bg-[#3B82F6] text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2 sm:py-3"
            size="lg"
          >
            Discover Projects
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          {/* Hero image placeholder */}
          <div className="mt-8 sm:mt-10 lg:mt-12 w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl overflow-hidden rounded-lg sm:rounded-xl border-2 border-[#3B82F6] shadow-lg shadow-purple-900/20 transition-all duration-500 hover:shadow-purple-900/40">
            <img
              src="/placeholder.svg?height=400&width=800&query=MARLEY Projects Collage dashboard interface"
              alt="MARLEY Projects Collage"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
