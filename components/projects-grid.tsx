"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// HARDCODED DATA WITH CORRECT LINKS AND DESCRIPTIONS
const projects = [
  {
    id: "1",
    title: "ARIA MARKET",
    description:
      "Trade musical artists like stocks! View artist portfolios, track AMTRAC prices, and invest in the future of music.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-market-homepage-mk26a2GFNZEJepAJ8iLHtzWEBSnVZj.png",
    project_url: "https://app.ariatrader.com/",
  },
  {
    id: "2",
    title: "ARIA DASHBOARDS",
    description:
      "Empowering Artists Through Market-Driven Music. ARIA Dashboards give musicians and labels access to a groundbreaking new model of exposure, valuation, and revenue.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-dashboards-NI55O4wJ8EZXWgjn20VztqAEHWhllv.png",
    project_url: "https://dashboards.ariatrader.com/",
  },
  {
    id: "3",
    title: "ARIA LANDING PAGE",
    description:
      "Love The Music... Trade The Artist! ARIA is the first decentralized marketplace where you can invest in musical artists using AMTRAC cryptocurrency.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-landing-page-T5SyHAf0KHH6kLckclEmaLiuT0BTgh.png",
    project_url: "https://ariatrader.com/",
  },
  {
    id: "4",
    title: "AMTRAC TOKEN",
    description:
      "The Sound of the Future. Traded Today. AMTRAC is the native token of the ARIA platform — a groundbreaking marketplace where fans can invest in music artists like stocks.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amtrac-token-homepage-Ewvl7v1U5Edd0FxEcYh1OMr0W3TLY3.png",
    project_url: "https://v0-aria-music-website.vercel.app/",
  },
  {
    id: "5",
    title: "MARLEY QR GENERATOR",
    description:
      "Generate custom QR codes for your Eventbrite posters with MARLEY's vibrant styling and professional print options.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-qr-homepage-e73PR18TA0VCYd7iBzbdQ8wspmR5qs.png",
    project_url: "https://v0-marley-qr-app.vercel.app/",
  },
  {
    id: "6",
    title: "MARLEY TRAILER GENERATOR",
    description:
      "Create cinematic trailers for artists and marketers with drag & drop media assets, text overlays, and audio integration.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-trailer-generator-homepage-Fh7EZwAg1vtNRSUlRIojsf5JYVf9BC.png",
    project_url: "https://v0-marley-trailer-design.vercel.app/",
  },
  {
    id: "7",
    title: "MARLEY IMAGE OPTIMISER",
    description:
      "Compress and convert your images to optimize your website performance. Reduce file sizes by up to 80% while preserving visual quality.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-image-optimiser-homepage-flmC0MaRiZnPQQ36QKVM2AvskHdZRw.png",
    project_url: "https://v0-marley-image-optimiser.vercel.app/",
  },
  {
    id: "8",
    title: "MARLEY JINGLE MACHINE",
    description: "Create your perfect 39-second jingle by recording your voice, adding music, and applying effects.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-jingle-machine-homepage-gTEIllKNWmdjFAzNUJLQFBMQus4S9t.png",
    project_url: "https://deluxe-kelpie-3745d0.netlify.app/",
  },
]

export default function ProjectsGrid() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for 1 second then show projects
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-8 sm:py-12 lg:py-16 overflow-x-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="mb-6 sm:mb-8 lg:mb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F97316]">
            Explore Our Creative Tools
          </h2>
          <div className="flex items-center justify-center py-8 sm:py-12">
            <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-[#F97316]" />
            <span className="ml-2 text-[#F97316] text-sm sm:text-base">Loading projects...</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="mb-6 sm:mb-8 lg:mb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F97316]">
          Explore Our Creative Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-full"
            >
              <Card className="h-full overflow-hidden bg-[#1C2526] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30 border border-purple-900/20 rounded-lg">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden border-b-2 border-[#3B82F6] rounded-t-lg">
                    {/* Special styling for ARIA and AMTRAC projects */}
                    {project.title.includes("ARIA") || project.title.includes("AMTRAC") ? (
                      <div className="relative">
                        {/* MARLEY Logo Overlay */}
                        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 z-20 opacity-20">
                          <Image
                            src="/marley-logo-512.png"
                            alt="MARLEY Logo"
                            width={20}
                            height={20}
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                          />
                        </div>
                        {/* Main Image - FORCED TO SHOW */}
                        <div className="relative">
                          <Image
                            src={project.image_url || "/placeholder.svg"}
                            alt={`${project.title} - ${
                              project.title === "ARIA MARKET"
                                ? "Artist Trading Platform"
                                : project.title === "ARIA DASHBOARDS"
                                  ? "Empowering Artists Through Market-Driven Music"
                                  : project.title === "AMTRAC TOKEN"
                                    ? "The Sound of the Future Traded Today"
                                    : "Love The Music Trade The Artist"
                            }`}
                            width={400}
                            height={225}
                            className="h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="eager"
                            priority
                            unoptimized
                          />
                          {/* Orange to Purple Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/30 to-[#4C1D95]/30 mix-blend-overlay"></div>
                          {/* Green Glow Border */}
                          <div className="absolute inset-0 border-2 border-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.5)] rounded-t-lg"></div>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={project.image_url || "/placeholder.svg"}
                        alt={`Screenshot of ${project.title}`}
                        width={400}
                        height={200}
                        className="h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 lg:p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#F97316] line-clamp-2 flex-1 pr-2">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-[#22C55E] flex-shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="p-3 sm:p-4 lg:p-5 pt-0">
                  <Button
                    asChild
                    className="w-full bg-[#4C1D95] text-white transition-all duration-300 hover:bg-[#22C55E] text-xs sm:text-sm py-2 sm:py-3 focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 focus:ring-offset-[#1C2526]"
                  >
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} (opens in new tab)`}
                    >
                      Visit Site
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
