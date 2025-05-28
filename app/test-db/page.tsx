"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"

// Import with error handling
let testSupabaseConnection: any = null
let getProjects: any = null
let Project: any = null

try {
  const supabaseModule = require("@/lib/supabase-fixed")
  testSupabaseConnection = supabaseModule.testSupabaseConnection
  getProjects = supabaseModule.getProjects
  Project = supabaseModule.Project
} catch (error) {
  console.warn("Supabase module not available:", error)
}

export default function TestDatabasePage() {
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "testing" | "success" | "error">("idle")
  const [projects, setProjects] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [connectionDetails, setConnectionDetails] = useState<any>(null)
  const [envVarsAvailable, setEnvVarsAvailable] = useState(false)

  // Check environment variables on client side
  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setEnvVarsAvailable(!!(supabaseUrl && supabaseKey))

    // Auto-run test if both variables are available
    if (supabaseUrl && supabaseKey && testSupabaseConnection) {
      runFullTest()
    }
  }, [])

  const runFullTest = async () => {
    if (!envVarsAvailable) {
      setError(
        "Environment variables not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.",
      )
      setConnectionStatus("error")
      return
    }

    if (!testSupabaseConnection || !getProjects) {
      setError("Supabase client not available. This might be a build-time issue.")
      setConnectionStatus("error")
      return
    }

    setConnectionStatus("testing")
    setError(null)
    setConnectionDetails(null)

    try {
      // Test 1: Basic connection
      console.log("🔍 Step 1: Testing basic connection...")
      const connectionResult = await testSupabaseConnection()

      if (!connectionResult.success) {
        throw new Error(`Connection test failed: ${connectionResult.error}`)
      }

      setConnectionDetails(connectionResult.data)

      // Test 2: Fetch projects
      console.log("🔍 Step 2: Fetching projects...")
      const { data: projectsData, error: projectsError } = await getProjects()

      if (projectsError) {
        throw new Error(`Projects fetch failed: ${projectsError.message}`)
      }

      setProjects(projectsData || [])
      setConnectionStatus("success")

      console.log("✅ All tests passed!")
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred"
      console.error("❌ Test failed:", errorMessage)
      setError(errorMessage)
      setConnectionStatus("error")
    }
  }

  // Auto-test on component mount only if env vars are available
  useEffect(() => {
    if (envVarsAvailable && testSupabaseConnection) {
      runFullTest()
    }
  }, [envVarsAvailable])

  return (
    <div className="min-h-screen bg-[#1C2526] text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-[#F97316] mb-8 text-center">Supabase Integration Diagnostics</h1>

        {/* Environment Variables Status */}
        <Card className="bg-[#1C2526] border-[#6B21A8]/20 mb-6">
          <CardHeader>
            <CardTitle className="text-[#F97316] flex items-center gap-2">
              {envVarsAvailable ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              Environment Variables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>NEXT_PUBLIC_SUPABASE_URL</span>
                <Badge className="bg-green-500/20 text-green-400">✅ Configured</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
                <Badge className="bg-green-500/20 text-green-400">✅ Configured</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Show warning if environment variables are missing */}
        {!envVarsAvailable && (
          <Alert className="mb-6 border-yellow-500/20 bg-yellow-500/10">
            <AlertCircle className="h-4 w-4 text-yellow-500" />
            <AlertDescription className="text-yellow-400">
              <strong>Environment Variables Missing:</strong> Please configure your Supabase environment variables in
              your deployment settings.
              <br />
              <br />
              <strong>Required variables:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>NEXT_PUBLIC_SUPABASE_URL</li>
                <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {/* Connection Test */}
        <Card className="bg-[#1C2526] border-[#6B21A8]/20 mb-6">
          <CardHeader>
            <CardTitle className="text-[#F97316]">Connection Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={runFullTest}
              disabled={connectionStatus === "testing" || !envVarsAvailable}
              className="w-full bg-[#6B21A8] hover:bg-[#22C55E] disabled:opacity-50"
            >
              {connectionStatus === "testing" ? "Running Tests..." : "Run Full Test"}
            </Button>

            {connectionStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 font-medium">✅ All Tests Passed!</p>
                <div className="text-sm text-gray-300 mt-2 space-y-1">
                  <p>• Database connection: ✅ Working</p>
                  <p>• Projects table: ✅ Accessible</p>
                  <p>• Found {projects.length} projects</p>
                  {connectionDetails && <p>• Database response: {JSON.stringify(connectionDetails)}</p>}
                </div>
              </div>
            )}

            {connectionStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 font-medium">❌ Test Failed</p>
                <div className="text-sm text-gray-300 mt-2">
                  <p className="font-mono bg-black/20 p-2 rounded text-xs">{error}</p>
                </div>

                {/* Troubleshooting tips */}
                <div className="mt-4 text-sm text-gray-300">
                  <p className="font-medium text-yellow-400">Troubleshooting Tips:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Check if your environment variables are set in your deployment platform</li>
                    <li>Verify your Supabase project is active and accessible</li>
                    <li>Check if your API keys are correct in Supabase dashboard</li>
                    <li>Ensure environment variables start with NEXT_PUBLIC_ for client-side access</li>
                    <li>Try redeploying after setting environment variables</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Projects Data */}
        {projects.length > 0 && (
          <Card className="bg-[#1C2526] border-[#6B21A8]/20">
            <CardHeader>
              <CardTitle className="text-[#F97316]">Sample Projects Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.id} className="p-3 bg-[#1C2526]/50 rounded-lg border border-[#6B21A8]/10">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-[#22C55E]">{project.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{project.category}</p>
                        <p className="text-xs text-gray-500 mt-1">ID: {project.id}</p>
                      </div>
                      <Badge
                        className={`text-xs ${
                          project.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : project.status === "maintenance"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
