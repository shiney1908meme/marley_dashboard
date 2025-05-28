"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Sparkles, Zap, Shield, Gauge, Eye, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import RefinedHeader from "@/components/refined-header"
import RefinedFooter from "@/components/refined-footer"

const projects = [
  {
    id: "1",
    title: "ARIA MARKET",
    description:
      "A marketplace for creative assets with a retro-futuristic flair. Features secure payments via AMTRAC TOKEN.",
    features: ["Secure Payments", "Creative Assets", "Retro-Futuristic Design"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-market-homepage-mk26a2GFNZEJepAJ8iLHtzWEBSnVZj.png",
    project_url: "https://app.ariatrader.com/",
  },
  {
    id: "2",
    title: "ARIA DASHBOARDS",
    description:
      "Dashboards for managing ARIA projects with real-time insights. Features customizable widgets and Supabase integration.",
    features: ["Real-time Insights", "Customizable Widgets", "Supabase Integration"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-dashboards-NI55O4wJ8EZXWgjn20VztqAEHWhllv.png",
    project_url: "https://dashboards.ariatrader.com/",
  },
  {
    id: "3",
    title: "ARIA LANDING PAGE",
    description:
      "A sleek, modern landing page for ARIA projects. Features high-converting layout and SEO optimization.",
    features: ["High-Converting Layout", "SEO Optimization", "Modern Design"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-landing-page-T5SyHAf0KHH6kLckclEmaLiuT0BTgh.png",
    project_url: "https://ariatrader.com/",
  },
  {
    id: "4",
    title: "AMTRAC TOKEN",
    description:
      "A tokenized platform for AMTRAC assets and transactions. Features blockchain-based security and wallet integration.",
    features: ["Blockchain Security", "Wallet Integration", "Asset Management"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amtrac-token-homepage-Ewvl7v1U5Edd0FxEcYh1OMr0W3TLY3.png",
    project_url: "https://v0-aria-music-website.vercel.app/",
  },
  {
    id: "5",
    title: "MARLEY QR GENERATOR",
    description:
      "Generate custom QR codes with MARLEY's vibrant styling. Features customizable designs and PNG/SVG downloads.",
    features: ["Customizable Designs", "PNG/SVG Downloads", "Vibrant Styling"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-qr-homepage-e73PR18TA0VCYd7iBzbdQ8wspmR5qs.png",
    project_url: "https://v0-marley-qr-app.vercel.app/",
  },
  {
    id: "6",
    title: "MARLEY TRAILER GENERATOR",
    description:
      "Create stunning trailers with retro-futuristic effects. Features a drag-and-drop editor and MP4 export.",
    features: ["Drag-and-Drop Editor", "MP4 Export", "Retro-Futuristic Effects"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-trailer-generator-homepage-Fh7EZwAg1vtNRSUlRIojsf5JYVf9BC.png",
    project_url: "https://v0-marley-trailer-design.vercel.app/",
  },
  {
    id: "7",
    title: "MARLEY IMAGE OPTIMISER",
    description: "Optimize images while preserving quality. Features AI-driven compression and batch processing.",
    features: ["AI-Driven Compression", "Batch Processing", "Quality Preservation"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-image-optimiser-homepage-flmC0MaRiZnPQQ36QKVM2AvskHdZRw.png",
    project_url: "https://v0-marley-image-optimiser.vercel.app/",
  },
  {
    id: "8",
    title: "MARLEY JINGLE MACHINE",
    description: "Create catchy jingles with unique sound design. Features AI-generated melodies and MP3/WAV export.",
    features: ["AI-Generated Melodies", "MP3/WAV Export", "Unique Sound Design"],
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-jingle-machine-homepage-gTEIllKNWmdjFAzNUJLQFBMQus4S9t.png",
    project_url: "https://deluxe-kelpie-3745d0.netlify.app/",
  },
]

const enhancements = [
  {
    icon: Zap,
    title: "AI-Driven Design",
    description:
      "Used v0.dev to generate UI components (e.g., projects grid, hero section) and a hero image combining all eight projects.",
    color: "#F97316",
  },
  {
    icon: Gauge,
    title: "Real-Time Data",
    description:
      "Integrated Supabase for real-time updates, secure data management with Row Level Security (RLS), and efficient queries.",
    color: "#3B82F6",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized images (e.g., hero image under 200KB), lazy-loaded assets, and ensured responsive design.",
    color: "#22C55E",
  },
  {
    icon: Eye,
    title: "Accessibility",
    description: "Added alt text, ARIA labels, and WCAG-compliant contrast for inclusivity.",
    color: "#4C1D95",
  },
  {
    icon: Shield,
    title: "Deployment",
    description: "Automated updates via Vercel, ensuring a smooth launch without local development.",
    color: "#F97316",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1C2526] text-white overflow-x-hidden">
      <RefinedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C2526]/90 via-[#1C2526]/80 to-[#4C1D95]/30 z-10" />

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
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
              <span
                className="text-white drop-shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #F97316 0%, #4C1D95 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                About MARLEY Dashboard—Where Creativity Meets Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 sm:mb-10 lg:mb-12 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#22C55E] px-2 font-medium drop-shadow-md"
            >
              A suite of tools to unleash your creative potential with a retro-futuristic vibe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/#projects">
                <Button
                  className="group flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#4C1D95] hover:from-[#3B82F6] hover:to-[#22C55E] text-white transition-all duration-500 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 shadow-2xl hover:shadow-[#22C55E]/25 border border-[#F97316]/20 hover:border-[#22C55E]/40 font-medium"
                  size="lg"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F97316]"
          >
            Our Creative Tools
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full">
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
                      <div className="relative">
                        {/* MARLEY Logo Overlay */}
                        <div className="absolute top-2 left-2 z-20 opacity-20">
                          <Image
                            src="/marley-logo-512.png"
                            alt="MARLEY Logo"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                        {/* Main Image */}
                        <div className="relative">
                          <Image
                            src={project.image_url || "/placeholder.svg"}
                            alt={`${project.title} project screenshot`}
                            width={400}
                            height={225}
                            className="h-32 sm:h-40 lg:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                            unoptimized
                          />
                          {/* Orange to Purple Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/30 to-[#4C1D95]/30 mix-blend-overlay"></div>
                          {/* Green Glow Border */}
                          <div className="absolute inset-0 border-2 border-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.5)] rounded-t-lg"></div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 lg:p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#F97316] line-clamp-2 flex-1">
                        {project.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-[#22C55E] ml-2 flex-shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-300 line-clamp-3 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#4C1D95]/20 text-[#22C55E] px-2 py-1 rounded-full border border-[#22C55E]/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 lg:p-5 pt-0">
                    <Button
                      asChild
                      className="w-full bg-[#3B82F6] text-white transition-all duration-300 hover:bg-[#22C55E] hover:shadow-lg hover:shadow-[#22C55E]/25 text-xs sm:text-sm lg:text-base py-2 sm:py-3 focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 focus:ring-offset-[#1C2526]"
                    >
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} (opens in new tab)`}
                      >
                        Visit Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhancements Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#1C2526] to-[#0F1419]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F97316]"
          >
            Built with AI and Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-lg sm:text-xl text-[#22C55E] mb-12 max-w-3xl mx-auto"
          >
            We leveraged AI tools and software skills to create a seamless, vibrant experience:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
            {enhancements.map((enhancement, index) => (
              <motion.div
                key={enhancement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <Card className="h-full bg-[#1C2526] border-2 border-[#4C1D95]/30 rounded-lg transition-all duration-300 hover:border-[#22C55E]/50 hover:shadow-lg hover:shadow-[#22C55E]/20 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className="p-3 rounded-full mr-4 transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${enhancement.color}20`,
                          border: `2px solid ${enhancement.color}40`,
                        }}
                      >
                        <enhancement.icon
                          className="h-6 w-6 transition-all duration-300"
                          style={{ color: enhancement.color }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#F97316]">{enhancement.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{enhancement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RefinedFooter />
    </div>
  )
}
