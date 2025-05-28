import Link from "next/link"
import { ArrowLeft, Layout, Palette, Code, Smartphone, Zap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AriaLandingPage() {
  const features = [
    {
      icon: Layout,
      title: "Professional Templates",
      description: "Choose from dozens of stunning, conversion-optimized landing page templates.",
    },
    {
      icon: Palette,
      title: "Custom Design System",
      description: "Powerful design tools with custom color schemes, typography, and branding options.",
    },
    {
      icon: Code,
      title: "No-Code Builder",
      description: "Drag-and-drop interface that requires zero coding knowledge to create beautiful pages.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "All landing pages are automatically optimized for mobile, tablet, and desktop devices.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with CDN delivery and performance monitoring built-in.",
    },
    {
      icon: Users,
      title: "A/B Testing",
      description: "Built-in split testing tools to optimize conversion rates and maximize results.",
    },
  ]

  const templates = [
    {
      title: "SaaS Startup",
      description: "Perfect for software companies and tech startups launching new products",
      image: "/placeholder.svg?height=300&width=400&query=modern SaaS landing page with blue gradient",
      category: "Technology",
    },
    {
      title: "E-commerce Store",
      description: "Showcase products with beautiful galleries and conversion-focused layouts",
      image: "/placeholder.svg?height=300&width=400&query=ecommerce landing page with product showcase",
      category: "Retail",
    },
    {
      title: "Creative Agency",
      description: "Portfolio-style layouts perfect for agencies and creative professionals",
      image: "/placeholder.svg?height=300&width=400&query=creative agency landing page with portfolio",
      category: "Creative",
    },
    {
      title: "Event Landing",
      description: "Drive registrations with event-focused designs and countdown timers",
      image: "/placeholder.svg?height=300&width=400&query=event landing page with registration form",
      category: "Events",
    },
  ]

  const stats = [
    { label: "Templates", value: "50+" },
    { label: "Active Users", value: "25K+" },
    { label: "Pages Created", value: "100K+" },
    { label: "Conversion Rate", value: "15%" },
  ]

  return (
    <div className="min-h-screen bg-[#1C2526] text-white">
      {/* Header */}
      <header className="border-b border-purple-900/20 bg-[#1C2526]/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-[#F97316] hover:text-[#3B82F6] transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Dashboard
          </Link>
          <h1 className="text-xl font-bold text-[#F97316]">ARIA Landing Page</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-[#3B82F6] text-white">Landing Page Builder</Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#22C55E] bg-clip-text text-transparent">
                  ARIA Landing Page
                </span>
              </h1>
              <p className="mb-8 text-lg text-gray-300 md:text-xl">
                Create stunning, high-converting landing pages in minutes with our intuitive drag-and-drop builder. No
                coding required, just beautiful results that drive conversions and grow your business.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-[#3B82F6] text-white hover:bg-[#22C55E]" size="lg">
                  Start Building
                </Button>
                <Button
                  variant="outline"
                  className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                  size="lg"
                >
                  View Templates
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&query=modern landing page builder interface with drag and drop elements blue theme"
                alt="ARIA Landing Page Builder Interface"
                className="rounded-xl border-2 border-[#3B82F6] shadow-lg shadow-blue-900/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-[#1C2526] border-[#3B82F6]/20 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#3B82F6] md:text-4xl">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316] md:text-4xl">
            Everything You Need to Convert
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1C2526] border-[#3B82F6]/20 transition-all duration-300 hover:border-[#3B82F6] hover:shadow-lg hover:shadow-blue-900/20"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-[#3B82F6] mb-4" />
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

      {/* Templates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316] md:text-4xl">Professional Templates</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {templates.map((template, index) => (
              <Card
                key={index}
                className="bg-[#1C2526] border-[#3B82F6]/20 overflow-hidden transition-all duration-300 hover:border-[#3B82F6] hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#F97316]">{template.title}</CardTitle>
                    <Badge className="bg-[#22C55E] text-white">{template.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{template.description}</p>
                  <Button className="w-full bg-[#3B82F6] text-white hover:bg-[#22C55E]">Use Template</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316] md:text-4xl">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechStart Inc.",
                quote:
                  "ARIA Landing Page helped us increase our conversion rate by 40% in just two weeks. The templates are beautiful and the builder is incredibly intuitive.",
              },
              {
                name: "Mike Chen",
                role: "Founder",
                company: "GrowthLab",
                quote:
                  "As a non-technical founder, I was able to create professional landing pages that rival those made by expensive agencies. Game changer!",
              },
              {
                name: "Emily Rodriguez",
                role: "Digital Marketer",
                company: "Creative Solutions",
                quote:
                  "The A/B testing features are fantastic. We've been able to optimize our pages continuously and see real improvements in our metrics.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#1C2526] border-[#3B82F6]/20">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-[#22C55E]">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Build Your Perfect Landing Page?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Join thousands of businesses using ARIA Landing Page to convert more visitors into customers.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button className="bg-[#3B82F6] text-white hover:bg-[#22C55E]" size="lg">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
              size="lg"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
