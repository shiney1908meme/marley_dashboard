import Link from "next/link"
import { ArrowLeft, Package, MapPin, BarChart, Shield, Smartphone, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AmtracPage() {
  const features = [
    {
      icon: Package,
      title: "Asset Tracking",
      description: "Track all your assets in real-time with barcode and RFID integration.",
    },
    {
      icon: MapPin,
      title: "Location Monitoring",
      description: "GPS tracking and geofencing for mobile assets and equipment.",
    },
    {
      icon: BarChart,
      title: "Inventory Analytics",
      description: "Detailed reports and analytics on asset utilization and performance.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure asset management with audit trails and compliance reporting.",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Manage assets on-the-go with our mobile app for iOS and Android.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline processes with automated maintenance schedules and alerts.",
    },
  ]

  const useCases = [
    {
      title: "Manufacturing",
      description: "Track equipment, tools, and inventory across production facilities",
      icon: "🏭",
      benefits: ["Reduce downtime", "Optimize maintenance", "Improve efficiency"],
    },
    {
      title: "Healthcare",
      description: "Manage medical equipment and supplies with compliance tracking",
      icon: "🏥",
      benefits: ["Patient safety", "Regulatory compliance", "Cost reduction"],
    },
    {
      title: "Construction",
      description: "Monitor tools, vehicles, and materials across job sites",
      icon: "🏗️",
      benefits: ["Prevent theft", "Track utilization", "Manage inventory"],
    },
    {
      title: "Education",
      description: "Manage IT equipment, furniture, and educational resources",
      icon: "🎓",
      benefits: ["Asset accountability", "Budget optimization", "Maintenance tracking"],
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
          <h1 className="text-xl font-bold text-[#F97316]">AMTRAC</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-[#22C55E] text-white">Asset Management</Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-[#22C55E] to-[#3B82F6] bg-clip-text text-transparent">
                  AMTRAC
                </span>
              </h1>
              <p className="mb-8 text-lg text-gray-300 md:text-xl">
                Comprehensive asset management and tracking system designed to optimize your inventory, reduce costs,
                and improve operational efficiency across your organization.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-[#22C55E] text-white hover:bg-[#3B82F6]" size="lg">
                  Start Tracking
                </Button>
                <Button
                  variant="outline"
                  className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                  size="lg"
                >
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&query=asset tracking management system interface with green theme"
                alt="AMTRAC Interface"
                className="rounded-xl border-2 border-[#22C55E] shadow-lg shadow-green-900/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316] md:text-4xl">
            Complete Asset Management Solution
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1C2526] border-[#22C55E]/20 transition-all duration-300 hover:border-[#22C55E] hover:shadow-lg hover:shadow-green-900/20"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-[#22C55E] mb-4" />
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

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316] md:text-4xl">Industry Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="bg-[#1C2526] border-[#22C55E]/20 transition-all duration-300 hover:border-[#22C55E] hover:shadow-lg hover:shadow-green-900/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{useCase.icon}</span>
                    <CardTitle className="text-[#F97316]">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">{useCase.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#22C55E]">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <Card className="bg-[#1C2526] border-[#22C55E]/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#22C55E] md:text-4xl">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </CardContent>
            </Card>
            <Card className="bg-[#1C2526] border-[#22C55E]/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#22C55E] md:text-4xl">10M+</div>
                <div className="text-sm text-gray-400">Assets Tracked</div>
              </CardContent>
            </Card>
            <Card className="bg-[#1C2526] border-[#22C55E]/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#22C55E] md:text-4xl">500+</div>
                <div className="text-sm text-gray-400">Organizations</div>
              </CardContent>
            </Card>
            <Card className="bg-[#1C2526] border-[#22C55E]/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#22C55E] md:text-4xl">30%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Optimize Your Assets?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Start tracking and managing your assets more efficiently with AMTRAC.
          </p>
          <Button className="bg-[#22C55E] text-white hover:bg-[#3B82F6]" size="lg">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  )
}
