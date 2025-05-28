import Link from "next/link"
import { ArrowLeft, ShoppingCart, Users, Shield, Zap, Globe, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AriaMarketPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Digital Asset Marketplace",
      description: "Buy and sell digital assets including templates, graphics, code snippets, and more.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with creators and buyers in a vibrant community marketplace.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "End-to-end encrypted payments with buyer and seller protection.",
    },
    {
      icon: Zap,
      title: "Instant Downloads",
      description: "Get your purchased assets immediately with our fast delivery system.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access creators and buyers from around the world with multi-currency support.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track your sales, revenue, and market trends with detailed analytics.",
    },
  ]

  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Digital Assets", value: "100K+" },
    { label: "Transactions", value: "1M+" },
    { label: "Countries", value: "150+" },
  ]

  return (
    <div className="min-h-screen bg-[#1C2526] text-white">
      {/* Header */}
      <header className="border-b border-purple-900/20 bg-[#1C2526]/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
          <Link href="/" className="flex items-center gap-2 text-[#F97316] hover:text-[#3B82F6] transition-colors">
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Back to Dashboard</span>
          </Link>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#F97316]">ARIA Market</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <Badge className="mb-3 sm:mb-4 bg-[#3B82F6] text-white text-xs sm:text-sm">Digital Marketplace</Badge>
              <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#6B21A8] bg-clip-text text-transparent">
                  ARIA Market
                </span>
              </h1>
              <p className="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                The premier marketplace for digital assets and creative services. Connect with talented creators,
                discover unique digital products, and grow your business with our comprehensive platform.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                <Button
                  className="bg-[#3B82F6] text-white hover:bg-[#6B21A8] text-sm sm:text-base px-6 sm:px-8 py-3"
                  size="lg"
                >
                  Start Selling
                </Button>
                <Button
                  variant="outline"
                  className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white text-sm sm:text-base px-6 sm:px-8 py-3"
                  size="lg"
                >
                  Browse Assets
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="/placeholder.svg?height=500&width=600&query=modern digital marketplace interface with blue and purple theme"
                alt="ARIA Market Interface"
                className="rounded-lg sm:rounded-xl border-2 border-[#3B82F6] shadow-lg shadow-blue-900/20 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-[#1C2526] border-[#3B82F6]/20 text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B82F6]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F97316]">
            Powerful Features for Creators & Buyers
          </h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1C2526] border-[#3B82F6]/20 transition-all duration-300 hover:border-[#3B82F6] hover:shadow-lg hover:shadow-blue-900/20"
              >
                <CardHeader className="pb-3">
                  <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#3B82F6] mb-3 sm:mb-4" />
                  <CardTitle className="text-[#F97316] text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Ready to Join ARIA Market?
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Start selling your digital assets or discover amazing products from creators worldwide.
          </p>
          <Button
            className="bg-[#3B82F6] text-white hover:bg-[#6B21A8] text-sm sm:text-base px-6 sm:px-8 py-3"
            size="lg"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
