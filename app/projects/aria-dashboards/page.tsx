import Link from "next/link"
import { ArrowLeft, BarChart3, PieChart, LineChart, Activity, Database, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AriaDashboardsPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with real-time insights and predictive modeling.",
    },
    {
      icon: PieChart,
      title: "Interactive Visualizations",
      description: "Dynamic charts and graphs that respond to user interactions and filters.",
    },
    {
      icon: LineChart,
      title: "Trend Analysis",
      description: "Identify patterns and trends in your data with advanced statistical tools.",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Live data feeds and instant notifications for critical business metrics.",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect multiple data sources and create unified reporting dashboards.",
    },
    {
      icon: Settings,
      title: "Custom Dashboards",
      description: "Build personalized dashboards tailored to your specific business needs.",
    },
  ]

  const dashboardTypes = [
    {
      title: "Executive Dashboard",
      description: "High-level KPIs and strategic metrics for leadership teams",
      image: "/placeholder.svg?height=300&width=400&query=executive dashboard with KPI charts",
    },
    {
      title: "Sales Analytics",
      description: "Track sales performance, pipeline, and revenue forecasting",
      image: "/placeholder.svg?height=300&width=400&query=sales analytics dashboard with charts",
    },
    {
      title: "Marketing Insights",
      description: "Campaign performance, customer acquisition, and ROI analysis",
      image: "/placeholder.svg?height=300&width=400&query=marketing analytics dashboard",
    },
    {
      title: "Operations Monitor",
      description: "Real-time operational metrics and performance indicators",
      image: "/placeholder.svg?height=300&width=400&query=operations monitoring dashboard",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1C2526] text-white">
      {/* Header */}
      <header className="border-b border-purple-900/20 bg-[#1C2526]/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-[#F97316] hover:text-[#3B82F6]">
            <ArrowLeft className="h-5 w-5" />
            Back to Dashboard
          </Link>
          <h1 className="text-xl font-bold text-[#F97316]">ARIA Dashboards</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-[#6B21A8] text-white">Business Intelligence</Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-[#6B21A8] to-[#3B82F6] bg-clip-text text-transparent">
                  ARIA Dashboards
                </span>
              </h1>
              <p className="mb-8 text-lg text-gray-300 md:text-xl">
                Transform your data into actionable insights with our advanced analytics and visualization platform.
                Create stunning dashboards that drive informed decision-making across your organization.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-[#6B21A8] text-white hover:bg-[#3B82F6]" size="lg">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                  size="lg"
                >
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&query=advanced analytics dashboard with charts and graphs purple theme"
                alt="ARIA Dashboards Interface"
                className="rounded-xl border-2 border-[#6B21A8] shadow-lg shadow-purple-900/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316] md:text-4xl">
            Powerful Analytics Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1C2526] border-[#6B21A8]/20 transition-all duration-300 hover:border-[#6B21A8] hover:shadow-lg hover:shadow-purple-900/20"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-[#6B21A8] mb-4" />
                  <CardTitle className="text-[#F97316]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316] md:text-4xl">Dashboard Templates</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {dashboardTypes.map((dashboard, index) => (
              <Card
                key={index}
                className="bg-[#1C2526] border-[#6B21A8]/20 overflow-hidden transition-all duration-300 hover:border-[#6B21A8] hover:shadow-lg hover:shadow-purple-900/20"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={dashboard.image || "/placeholder.svg"}
                    alt={dashboard.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#F97316]">{dashboard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{dashboard.description}</p>
                  <Button className="mt-4 bg-[#6B21A8] text-white hover:bg-[#22C55E]">Use Template</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Visualize Your Data?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Start creating powerful dashboards and unlock insights from your data today.
          </p>
          <Button className="bg-[#6B21A8] text-white hover:bg-[#3B82F6]" size="lg">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  )
}
