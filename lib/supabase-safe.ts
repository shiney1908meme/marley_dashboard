// Safe Supabase client that handles missing environment variables gracefully

export interface Project {
  id: string
  title: string
  description: string
  image_url: string
  project_url: string
  is_external: boolean
  category: string
  order_index: number
  status: "active" | "maintenance" | "coming_soon"
  featured: boolean
  tags: string[]
  view_count: number
  created_at: string
  updated_at: string
}

// Fallback projects data
const fallbackProjects: Project[] = [
  {
    id: "1",
    title: "ARIA MARKET",
    description:
      "Trade musical artists like stocks! View artist portfolios, track AMTRAC prices, and invest in the future of music.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-market-homepage-mk26a2GFNZEJepAJ8iLHtzWEBSnVZj.png",
    project_url: "https://app.ariatrader.com/",
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
    title: "ARIA DASHBOARDS",
    description:
      "Empowering Artists Through Market-Driven Music. ARIA Dashboards give musicians and labels access to a groundbreaking new model of exposure, valuation, and revenue.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-dashboards-NI55O4wJ8EZXWgjn20VztqAEHWhllv.png",
    project_url: "https://dashboards.ariatrader.com/",
    is_external: true,
    category: "aria",
    order_index: 2,
    status: "active",
    featured: true,
    tags: ["analytics", "music", "dashboard"],
    view_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "ARIA LANDING PAGE",
    description:
      "Love The Music... Trade The Artist! ARIA is the first decentralized marketplace where you can invest in musical artists using AMTRAC cryptocurrency.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-landing-page-T5SyHAf0KHH6kLckclEmaLiuT0BTgh.png",
    project_url: "https://ariatrader.com/",
    is_external: true,
    category: "aria",
    order_index: 3,
    status: "active",
    featured: true,
    tags: ["landing", "music", "investment"],
    view_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "AMTRAC TOKEN",
    description:
      "The Sound of the Future. Traded Today. AMTRAC is the native token of the ARIA platform — a groundbreaking marketplace where fans can invest in music artists like stocks.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amtrac-token-homepage-Ewvl7v1U5Edd0FxEcYh1OMr0W3TLY3.png",
    project_url: "https://v0-aria-music-website.vercel.app/",
    is_external: true,
    category: "amtrac",
    order_index: 4,
    status: "active",
    featured: false,
    tags: ["token", "cryptocurrency", "music"],
    view_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "MARLEY QR GENERATOR",
    description:
      "Generate custom QR codes for your Eventbrite posters with MARLEY's vibrant styling and professional print options.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-qr-homepage-e73PR18TA0VCYd7iBzbdQ8wspmR5qs.png",
    project_url: "https://v0-marley-qr-app.vercel.app/",
    is_external: true,
    category: "marley",
    order_index: 5,
    status: "active",
    featured: false,
    tags: ["qr-code", "branding", "marketing"],
    view_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "MARLEY TRAILER GENERATOR",
    description:
      "Create cinematic trailers for artists and marketers with drag & drop media assets, text overlays, and audio integration.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-trailer-generator-homepage-Fh7EZwAg1vtNRSUlRIojsf5JYVf9BC.png",
    project_url: "https://v0-marley-trailer-design.vercel.app/",
    is_external: true,
    category: "marley",
    order_index: 6,
    status: "active",
    featured: false,
    tags: ["video", "trailer", "marketing"],
    view_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "7",
    title: "MARLEY IMAGE OPTIMISER",
    description:
      "Compress and convert your images to optimize your website performance. Reduce file sizes by up to 80% while preserving visual quality.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-image-optimiser-homepage-flmC0MaRiZnPQQ36QKVM2AvskHdZRw.png",
    project_url: "https://v0-marley-image-optimiser.vercel.app/",
    is_external: true,
    category: "marley",
    order_index: 7,
    status: "active",
    featured: false,
    tags: ["image", "optimization", "web"],
    view_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "8",
    title: "MARLEY JINGLE MACHINE",
    description: "Create your perfect 39-second jingle by recording your voice, adding music, and applying effects.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marley-jingle-machine-homepage-gTEIllKNWmdjFAzNUJLQFBMQus4S9t.png",
    project_url: "https://deluxe-kelpie-3745d0.netlify.app/",
    is_external: true,
    category: "marley",
    order_index: 8,
    status: "active",
    featured: false,
    tags: ["music", "jingle", "audio"],
    view_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

// Safe function that always returns projects
export async function getProjects(options?: {
  category?: string
  featured?: boolean
  status?: string
  limit?: number
}): Promise<{ data: Project[] | null; error: any }> {
  try {
    // Check if we're in a browser environment and have environment variables
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      // Try to use the real Supabase client
      try {
        const { getProjects: realGetProjects } = await import("@/lib/supabase-fixed")
        return await realGetProjects(options)
      } catch (error) {
        console.warn("Supabase client failed, using fallback data:", error)
      }
    }

    // Apply filters to fallback data
    let filteredProjects = [...fallbackProjects]

    if (options?.category && options.category !== "all") {
      filteredProjects = filteredProjects.filter((p) => p.category === options.category)
    }

    if (options?.featured !== undefined) {
      filteredProjects = filteredProjects.filter((p) => p.featured === options.featured)
    }

    if (options?.status) {
      filteredProjects = filteredProjects.filter((p) => p.status === options.status)
    }

    if (options?.limit) {
      filteredProjects = filteredProjects.slice(0, options.limit)
    }

    return { data: filteredProjects, error: null }
  } catch (error) {
    console.warn("Error in getProjects, returning fallback data:", error)
    return { data: fallbackProjects, error: null }
  }
}

// Safe test function
export async function testSupabaseConnection(): Promise<{ success: boolean; error?: string; data?: any }> {
  try {
    if (typeof window === "undefined") {
      return { success: false, error: "Not available during server-side rendering" }
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return { success: false, error: "Environment variables not configured" }
    }

    const { testSupabaseConnection: realTest } = await import("@/lib/supabase-fixed")
    return await realTest()
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
