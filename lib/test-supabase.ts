import { supabase } from "./supabase"

export async function testSupabaseConnection() {
  try {
    console.log("🔍 Testing Supabase connection...")

    // Test basic connection
    const { data, error } = await supabase.from("projects").select("count(*)").single()

    if (error) {
      console.error("❌ Supabase connection failed:", error.message)
      return false
    }

    console.log("✅ Supabase connection successful!")
    console.log("📊 Projects in database:", data)
    return true
  } catch (err) {
    console.error("❌ Unexpected error:", err)
    return false
  }
}

// Test function you can call in your app
export async function debugSupabaseConfig() {
  console.log("🔧 Supabase Configuration:")
  console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing")
  console.log("Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing")
  console.log("Service Key:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅ Set" : "❌ Missing")

  await testSupabaseConnection()
}
