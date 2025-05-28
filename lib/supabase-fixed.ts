import { createClient } from "@supabase/supabase-js"

// Debug function to check environment variables
function debugEnvironmentVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log("🔍 Environment Variables Check:")
  console.log("- NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✅ Set" : "❌ Missing")
  console.log("- NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey ? "✅ Set" : "❌ Missing")
  console.log("- NODE_ENV:", process.env.NODE_ENV)
  console.log("- VERCEL_ENV:", process.env.VERCEL_ENV || "local")

  if (supabaseUrl) {
    console.log("- URL starts with:", supabaseUrl.substring(0, 30) + "...")
  }

  if (supabaseAnonKey) {
    console.log("- Key starts with:", supabaseAnonKey.substring(0, 30) + "...")
  }

  return { supabaseUrl, supabaseAnonKey }
}

// Get environment variables with fallbacks and validation
function getSupabaseConfig() {
  const { supabaseUrl, supabaseAnonKey } = debugEnvironmentVariables()

  // Check if we're in development and provide helpful error messages
  if (!supabaseUrl) {
    const errorMsg = "Missing NEXT_PUBLIC_SUPABASE_URL environment variable"
    console.error("❌", errorMsg)

    if (typeof window !== "undefined") {
      // Client-side error
      throw new Error(`${errorMsg}. Please check your .env.local file.`)
    } else {
      // Server-side error
      throw new Error(`${errorMsg}. Please check your environment variables.`)
    }
  }

  if (!supabaseAnonKey) {
    const errorMsg = "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable"
    console.error("❌", errorMsg)

    if (typeof window !== "undefined") {
      throw new Error(`${errorMsg}. Please check your .env.local file.`)
    } else {
      throw new Error(`${errorMsg}. Please check your environment variables.`)
    }
  }

  // Validate URL format
  if (!supabaseUrl.startsWith("https://") || !supabaseUrl.includes(".supabase.co")) {
    throw new Error("Invalid Supabase URL format. Should be https://your-project.supabase.co")
  }

  return { supabaseUrl, supabaseAnonKey }
}

// Create Supabase client with error handling
let supabaseClient: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    try {
      const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig()

      supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true,
        },
        realtime: {
          params: {
            eventsPerSecond: 10,
          },
        },
      })

      console.log("✅ Supabase client created successfully")
    } catch (error) {
      console.error("❌ Failed to create Supabase client:", error)
      throw error
    }
  }

  return supabaseClient
}

// Export the client (will throw error if env vars are missing)
export const supabase = getSupabaseClient()

// Types remain the same
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

// Enhanced function with better error handling
export async function getProjects(options?: {
  category?: string
  featured?: boolean
  status?: string
  limit?: number
}): Promise<{ data: Project[] | null; error: any }> {
  try {
    const client = getSupabaseClient()
    let query = client.from("projects").select("*")

    // Apply filters
    if (options?.category && options.category !== "all") {
      query = query.eq("category", options.category)
    }

    if (options?.featured !== undefined) {
      query = query.eq("featured", options.featured)
    }

    if (options?.status) {
      query = query.eq("status", options.status)
    }

    // Apply ordering and limit
    query = query.order("order_index", { ascending: true })

    if (options?.limit) {
      query = query.limit(options.limit)
    }

    const { data, error } = await query

    if (error) {
      console.error("Database query error:", error)
    }

    return { data, error }
  } catch (error) {
    console.error("Supabase client error:", error)
    return { data: null, error }
  }
}

// Test connection function
export async function testSupabaseConnection(): Promise<{ success: boolean; error?: string; data?: any }> {
  try {
    console.log("🔍 Testing Supabase connection...")

    const client = getSupabaseClient()
    const { data, error } = await client.from("projects").select("count(*)").single()

    if (error) {
      console.error("❌ Supabase connection test failed:", error.message)
      return { success: false, error: error.message }
    }

    console.log("✅ Supabase connection test successful!")
    return { success: true, data }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error"
    console.error("❌ Unexpected error during connection test:", errorMessage)
    return { success: false, error: errorMessage }
  }
}
