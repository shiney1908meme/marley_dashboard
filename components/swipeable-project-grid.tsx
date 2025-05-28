"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useSwipe } from "@/hooks/use-swipe"

// Project data - Add ARIA Landing Page as project #13
const projects = [
  {
    id: 1,
    title: "ARIA Landing Page",
    description:
      "Love The Music... Trade The Artist! This is our landing page where we introduce you to ARIA is the first decentralized marketplace where you can invest in musical artists using AMTRAC (AMTRC) cryptocurrency.",
    image:
      "/placeholder.svg?height=200&width=400&query=ARIA Landing Page music investment platform with purple and blue theme",
    url: "https://www.ariatrader.com/",
    isExternal: true,
    category: "aria",
  },
  {
    id: 2,
    title: "ARIA Market",
    description:
      "Revolutionise Music Investment. ARIA Market enables you to discover, invest, and grow with emerging musical talent. Use blockchain technology to build a portfolio of promising artists and earn as they rise! Truly Ground-breaking!",
    image:
      "/placeholder.svg?height=200&width=400&query=ARIA Market cryptocurrency trading platform with charts and artist profiles",
    url: "https://app.ariatrader.com/",
    isExternal: true,
    category: "aria",
  },
  {
    id: 3,
    title: "ARIA Dashboards",
    description:
      "Empowering Artists Through Market-Driven Music. ARIA Dashboards give Musicians and Record Labels access to a ground-breaking new model of exposure, valuation, and revenue.",
    image:
      "/placeholder.svg?height=200&width=400&query=ARIA Dashboards analytics interface for musicians and record labels",
    url: "https://dashboards.ariatrader.com/",
    isExternal: true,
    category: "aria",
  },
  {
    id: 4,
    title: "AMTRAC Digital Token",
    description:
      "The Sound of the Future. Traded Today. AMTRAC is the native token of the ARIA platform — a groundbreaking marketplace where fans can invest in music artists like stocks.",
    image: "/placeholder.svg?height=200&width=400&query=AMTRAC cryptocurrency token interface with blockchain elements",
    url: "https://v0-aria-music-website.vercel.app/",
    isExternal: true,
    category: "amtrac",
  },
  {
    id: 5,
    title: "MARLEY QR App",
    description: "Generate custom QR codes with your brand colors and logo for enhanced engagement.",
    image: "/placeholder.svg?height=200&width=400&query=QR code generator app with orange theme and custom branding",
    url: "#",
    isExternal: false,
    category: "marley",
  },
  {
    id: 6,
    title: "MARLEY Image Optimiser",
    description: "An Image Optimiser",
    image: "/placeholder.svg?height=200&width=400&query=Image optimization tool with compression and format conversion",
    url: "#",
    isExternal: false,
    category: "marley",
  },
  {
    id: 7,
    title: "MARLEY Trailer Generator",
    description: "Create stunning video trailers for your projects with AI-powered editing tools.",
    image: "/placeholder.svg?height=200&width=400&query=video trailer generator app with purple theme and AI elements",
    url: "#",
    isExternal: false,
    category: "marley",
  },
  {
    id: 8,
    title: "MARLEY Jingle Maker",
    description: "Create catchy jingles and audio branding with AI-powered music composition tools.",
    image: "/placeholder.svg?height=200&width=400&query=music jingle maker app with sound waves and orange theme",
    url: "#",
    isExternal: false,
    category: "marley",
  },
]

export default function SwipeableProjectGrid() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Calculate items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 4
    if (window.innerWidth < 640) return 1 // Mobile: 1 item
    if (window.innerWidth < 768) return 2 // Small tablet: 2 items
    if (window.innerWidth < 1024) return 3 // Tablet: 3 items
    if (window.innerWidth < 1280) return 4 // Desktop: 4 items
    return 5 // Large desktop: 5 items
  }

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage())

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage())
      setCurrentPage(0) // Reset to first page on resize
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const currentProjects = projects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Swipe handlers
  const swipeHandlers = useSwipe({
    onSwipeLeft: nextPage,
    onSwipeRight: prevPage,
    threshold: 50,
  })

  // Add touch event listeners
  useEffect(() => {
    const element = containerRef.current
    if (!element || !isMobile) return

    element.addEventListener("touchstart", swipeHandlers.onTouchStart, { passive: true })
    element.addEventListener("touchmove", swipeHandlers.onTouchMove, { passive: true })
    element.addEventListener("touchend", swipeHandlers.onTouchEnd, { passive: true })

    return () => {
      element.removeEventListener("touchstart", swipeHandlers.onTouchStart)
      element.removeEventListener("touchmove", swipeHandlers.onTouchMove)
      element.removeEventListener("touchend", swipeHandlers.onTouchEnd)
    }
  }, [swipeHandlers, isMobile])

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="mb-8 sm:mb-10 lg:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F97316]">
          Explore Our Creative Tools
        </h2>

        {/* Mobile swipe indicator */}
        {isMobile && (
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-400">Swipe left or right to browse projects</p>
          </div>
        )}

        {/* Project grid container */}
        <div className="relative">
          {/* Navigation arrows for desktop */}
          {!isMobile && totalPages > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#1C2526]/80 text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]/20"
                onClick={prevPage}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#1C2526]/80 text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]/20"
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Swipeable container */}
          <div ref={containerRef} className="overflow-hidden" style={{ touchAction: isMobile ? "pan-y" : "auto" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ x: isMobile ? 300 : 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: isMobile ? -300 : 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Card className="h-full overflow-hidden bg-[#1C2526] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-purple-900/30 border border-purple-900/20">
                      <CardHeader className="p-0">
                        <div className="overflow-hidden border-b-2 border-[#3B82F6]">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-32 sm:h-40 lg:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-4 lg:p-5">
                        <h3 className="mb-2 text-base sm:text-lg lg:text-xl font-bold text-[#F97316] line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-300 line-clamp-3">
                          {project.description}
                        </p>
                      </CardContent>
                      <CardFooter className="p-3 sm:p-4 lg:p-5 pt-0">
                        {project.isExternal ? (
                          <Button
                            asChild
                            className="w-full bg-[#6B21A8] text-white transition-all duration-300 hover:bg-[#22C55E] text-xs sm:text-sm lg:text-base py-2 sm:py-3"
                          >
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit ${project.title} (opens in new tab)`}
                            >
                              Visit Site
                            </a>
                          </Button>
                        ) : (
                          <Button
                            className="w-full bg-[#6B21A8] text-white transition-all duration-300 hover:bg-[#22C55E] text-xs sm:text-sm lg:text-base py-2 sm:py-3"
                            aria-label={`Try ${project.title}`}
                          >
                            Try Now
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Page indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? "bg-[#F97316] scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile swipe hint animation */}
        {isMobile && currentPage === 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-4"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: 3, duration: 1 }}
              className="text-[#22C55E] text-sm flex items-center gap-2"
            >
              <span>Swipe to explore</span>
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
