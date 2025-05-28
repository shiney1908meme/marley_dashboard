import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Project {
  id: string
  title: string
  description: string
  image_url: string
  project_url: string
  created_at: string
}

const fallbackProjects: Project[] = [
  {
    id: "1",
    title: "ARIA MARKET",
    description: "A marketplace for creative assets with a retro-futuristic flair.",
    image_url: "/placeholder.svg?height=200&width=400&query=ARIA Market creative marketplace",
    project_url: "https://aria-market.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "ARIA DASHBOARDS",
    description: "Dashboards for managing ARIA projects with real-time insights.",
    image_url: "/placeholder.svg?height=200&width=400&query=ARIA Dashboards analytics interface",
    project_url: "https://aria-dashboards.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "ARIA LANDING PAGE",
    description:
      "Love The Music... Trade The Artist! ARIA is the first decentralized marketplace where you can invest in musical artists using AMTRAC cryptocurrency.",
    image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aria-landing-page-T5SyHAf0KHH6kLckclEmaLiuT0BTgh.png",
    project_url: "https://aria-landing.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "AMTRAC TOKEN",
    description: "A tokenized platform for AMTRAC assets and transactions.",
    image_url: "/placeholder.svg?height=200&width=400&query=AMTRAC Token blockchain platform",
    project_url: "https://amtrac-token.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "MARLEY QR GENERATOR",
    description: "Generate custom QR codes with MARLEY's vibrant styling.",
    image_url: "/placeholder.svg?height=200&width=400&query=MARLEY QR Generator tool",
    project_url: "https://qr.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "MARLEY TRAILER GENERATOR",
    description: "Create stunning trailers with MARLEY's retro-futuristic effects.",
    image_url: "/placeholder.svg?height=200&width=400&query=MARLEY Trailer Generator video tool",
    project_url: "https://trailer.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
  {
    id: "7",
    title: "MARLEY IMAGE OPTIMISER",
    description: "Optimize images while preserving MARLEY's vibrant quality.",
    image_url: "/placeholder.svg?height=200&width=400&query=MARLEY Image Optimizer tool",
    project_url: "https://image-optimiser.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
  {
    id: "8",
    title: "MARLEY JINGLE CREATOR",
    description: "Create catchy jingles with MARLEY's unique sound design.",
    image_url: "/placeholder.svg?height=200&width=400&query=MARLEY Jingle Creator music tool",
    project_url: "https://jingle.marleydashboard.co.uk/",
    created_at: new Date().toISOString(),
  },
]

export async function getProjects(): Promise<{ data: Project[] | null; error: any }> {
  try {
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

    if (error) {
      return { data: fallbackProjects, error: null }
    }

    return { data: data || fallbackProjects, error: null }
  } catch {
    return { data: fallbackProjects, error: null }
  }
}

export async function searchProjects(query: string): Promise<{ data: Project[] | null; error: any }> {
  if (!query.trim()) {
    return getProjects()
  }

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
      .order("created_at", { ascending: false })

    if (error) {
      const filtered = fallbackProjects.filter(
        (project) =>
          project.title.toLowerCase().includes(query.toLowerCase()) ||
          project.description.toLowerCase().includes(query.toLowerCase()),
      )
      return { data: filtered, error: null }
    }

    return { data: data || fallbackProjects, error: null }
  } catch {
    const filtered = fallbackProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()),
    )
    return { data: filtered, error: null }
  }
}

export function subscribeToProjects(callback: (payload: any) => void) {
  try {
    return supabase
      .channel("projects-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "projects",
        },
        callback,
      )
      .subscribe()
  } catch {
    return { unsubscribe: () => {} }
  }
}
