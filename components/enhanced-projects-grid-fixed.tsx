"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Star, Eye, Clock, Wrench, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Use the fixed Supabase client
import { getProjects, type Project } from "@/lib/supabase-fixed"

interface EnhancedProjectsGridProps {
  searchQuery?: string
  selectedCategory?: string
  showFeaturedOnly?: boolean
}

export default function EnhancedProjectsGridFixed({
  searchQuery = "",
  selectedCategory = "all",
  showFeaturedOnly = false,
}: EnhancedProjectsGridProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Fallback projects data in case of database issues
  const fallbackProjects: Project[] = [
    {
      id: "1",
      title: "ARIA Landing Page",
      description: "Love The Music... Trade The Artist! This is our landing page where we introduce you to ARIA.",
      image_url: "/placeholder.svg?height=200&width=400&query=ARIA Landing Page music investment platform",
      project_url: "https://www.ariatrader.com/",
      is_external: true,
      category: "aria",
      order_index: 1,
      status: "active",
      featured: true,
      tags: ["music", "investment", "cryptocurrency"],
      view_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "ARIA Market",
      description:
        "Revolutionise Music Investment. ARIA Market enables you to discover, invest, and grow with emerging musical talent.",
      image_url: "/placeholder.svg?height=200&width=400&query=ARIA Market cryptocurrency trading platform",
      project_url: "https://app.ariatrader.com/",
      is_external: true,
      category: "aria",
      order_index: 2,
      status: "active",
      featured: true,
      tags: ["trading", "music", "investment"],
      view_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    // Add more fallback projects as needed
  ]

  // Fetch projects with error handling
  const fetchProjects = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const { data, error: fetchError } = await getProjects({
        category: selectedCategory,
        featured: showFeaturedOnly || undefined,
      })

      if (fetchError) {
        console.warn("Database fetch error, using fallback data:", fetchError.message)
        setProjects(fallbackProjects)
        setError(`Database connection issue: ${fetchError.message}`)
      } else {
        setProjects(data || fallbackProjects)
      }
    } catch (err) {
      console.warn("Unexpected error, using fallback data:", err)
      setProjects(fallbackProjects)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }, [selectedCategory, showFeaturedOnly])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) => {
    if (!searchQuery.trim()) return true

    const searchLower = searchQuery.toLowerCase()
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <div className="w-2 h-2 bg-green-500 rounded-full" />
      case "maintenance":
        return <Wrench className="w-3 h-3 text-yellow-500" />
      case "coming_soon":
        return <Clock className="w-3 h-3 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Live"
      case "maintenance":
        return "Maintenance"
      case "coming_soon":
        return "Coming Soon"
      default:
        return status
    }
  }

  if (loading) {
    return (
      <section id="projects" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 sm:mb-10 lg:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F97316]">
            Explore Our Creative Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-[#1C2526] border border-purple-900/20 rounded-lg h-80">
                  <div className="h-48 bg-gray-700 rounded-t-lg"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 sm:mb-10 lg:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F97316]">
          Explore Our Creative Tools
        </h2>

        {/* Show error message if there's a database issue */}
        {error && (
          <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <p className="text-yellow-400 font-medium">Database Connection Issue</p>
            </div>
            <p className="text-sm text-gray-300 mt-1">Showing cached data. Some features may be limited.</p>
            <Button
              onClick={fetchProjects}
              className="mt-2 bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
              size="sm"
            >
              Retry Connection
            </Button>
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">No projects found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="w-full"
                >
                  <Card className="h-full overflow-hidden bg-[#1C2526] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30 border border-purple-900/20 rounded-lg relative">
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className="bg-gradient-to-r from-[#F97316] to-[#6B21A8] text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="p-0">
                      <div className="overflow-hidden border-b-2 border-[#3B82F6] rounded-t-lg relative">
                        <Image
                          src={project.image_url || "/placeholder.svg"}
                          alt={`Screenshot of ${project.title}`}
                          width={400}
                          height={200}
                          className="h-32 sm:h-40 lg:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />

                        {/* Status overlay */}
                        {project.status !== "active" && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <Badge variant="secondary" className="bg-black/80 text-white">
                              {getStatusIcon(project.status)}
                              <span className="ml-1">{getStatusText(project.status)}</span>
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="p-4 lg:p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#F97316] line-clamp-2 flex-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                          {project.is_external && <ExternalLink className="h-4 w-4 text-[#22C55E]" />}
                          {getStatusIcon(project.status)}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm lg:text-base text-gray-300 line-clamp-3 mb-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-[#6B21A8]/30 text-[#22C55E]">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs border-[#6B21A8]/30 text-gray-400">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* View count */}
                      {project.view_count > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Eye className="w-3 h-3" />
                          <span>{project.view_count} views</span>
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="p-4 lg:p-5 pt-0">
                      {project.status === "active" ? (
                        project.is_external ? (
                          <Button
                            asChild
                            className="w-full bg-[#6B21A8] text-white transition-all duration-300 hover:bg-[#22C55E] text-xs sm:text-sm lg:text-base py-2 sm:py-3"
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
                        ) : (
                          <Button
                            className="w-full bg-[#6B21A8] text-white transition-all duration-300 hover:bg-[#22C55E] text-xs sm:text-sm lg:text-base py-2 sm:py-3"
                            aria-label={`Try ${project.title}`}
                          >
                            Try Now
                          </Button>
                        )
                      ) : (
                        <Button
                          disabled
                          className="w-full bg-gray-600 text-gray-300 text-xs sm:text-sm lg:text-base py-2 sm:py-3 cursor-not-allowed"
                        >
                          {getStatusText(project.status)}
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}
