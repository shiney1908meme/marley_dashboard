"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { testSupabaseConnection, getProjects, type Project } from "@/lib/supabase-fixed"
import EnvDebug from "@/components/env-debug"

export default function TestDatabasePage() {
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "testing" | "success" | "error">("idle")
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)
  const [connectionDetails, setConnectionDetails] = useState<any>(null)

  const runFullTest = async () => {
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

  useEffect(() => {
    // Auto-test on component mount
    runFullTest()
  }, [])

  return (
    <div className="min-h-screen bg-[#1C2526] text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-[#F97316] mb-8 text-center">Supabase Integration Diagnostics</h1>

        {/* Environment Variables Debug */}
        <EnvDebug />

        {/* Connection Test */}
        <Card className="bg-[#1C2526] border-[#6B21A8]/20 mb-6">
          <CardHeader>
            <CardTitle className="text-[#F97316]">Connection Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={runFullTest}
              disabled={connectionStatus === "testing"}
              className="w-full bg-[#6B21A8] hover:bg-[#22C55E]"
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
                    <li>Check if your .env.local file exists in the project root</li>
                    <li>Restart your development server after adding environment variables</li>
                    <li>Verify your Supabase project is active and accessible</li>
                    <li>Check if your API keys are correct in Supabase dashboard</li>
                    <li>Ensure environment variables start with NEXT_PUBLIC_ for client-side access</li>
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
