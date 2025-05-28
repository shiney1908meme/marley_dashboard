"use client"

import { useState, useEffect } from "react"
import RefinedHeader from "@/components/refined-header"
import RefinedHero from "@/components/refined-hero"
import RefinedFooter from "@/components/refined-footer"
import FeedbackForm from "@/components/feedback-form"
import RefinedLoading from "@/components/refined-loading"
import { AuthProvider } from "@/components/auth-provider"
import { Suspense } from "react"
import ProjectsGrid from "@/components/projects-grid"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <RefinedLoading isLoading={isLoading} />
  }

  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col bg-[#1C2526] text-white overflow-x-hidden">
        <RefinedHeader />
        <main className="flex-1 overflow-x-hidden">
          <RefinedHero />
          <Suspense
            fallback={
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F97316]"></div>
              </div>
            }
          >
            <ProjectsGrid />
          </Suspense>
        </main>
        <RefinedFooter />
        <FeedbackForm />
      </div>
    </AuthProvider>
  )
}
