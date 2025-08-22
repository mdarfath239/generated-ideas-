"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Rocket,
  Target,
  DollarSign,
  Lock,
  Check,
  Users,
  Lightbulb,
  TrendingUp,
  Briefcase,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Brain,
  ArrowRight,
  Play,
  Download,
  Share2,
  BookOpen,
  Award,
  Clock,
  Layers,
} from "lucide-react"

const exampleKeywords = [
  "AI",
  "E-commerce",
  "Healthcare",
  "Fintech",
  "Education",
  "SaaS",
  "Climate",
  "Gaming",
  "Blockchain",
  "IoT",
  "AR/VR",
  "Robotics",
]

const autocompleteSuggestions = [
  // Technology
  "AI-powered healthcare solutions",
  "Machine learning for finance",
  "Blockchain for supply chain",
  "IoT smart home devices",
  "AR/VR education platforms",
  "Robotics automation",
  "Cybersecurity for SMBs",
  "Cloud computing services",
  "Mobile app development",
  "Web3 applications",

  // Industries
  "Sustainable fashion marketplace",
  "Food delivery optimization",
  "Remote work productivity tools",
  "Mental health support apps",
  "Fitness tracking wearables",
  "Pet care services",
  "Elder care technology",
  "Real estate management",
  "Travel planning platforms",
  "Event management software",

  // Problems
  "Reduce food waste",
  "Improve team collaboration",
  "Automate customer service",
  "Streamline hiring process",
  "Enhance online learning",
  "Optimize energy consumption",
  "Simplify tax preparation",
  "Connect local communities",
  "Manage personal finances",
  "Track carbon footprint",

  // Trending
  "Sustainable packaging solutions",
  "Remote team building",
  "Digital wellness tools",
  "Creator economy platforms",
  "Micro-mobility services",
  "Plant-based alternatives",
  "Social commerce apps",
  "Personalized nutrition",
  "Virtual event platforms",
  "Circular economy marketplace",
]

const sampleIdeas = [
  {
    name: "EcoTrack AI",
    pitch: "AI-powered carbon footprint tracker for small businesses",
    description:
      "Help small businesses automatically track and reduce their carbon footprint using AI analysis of their operations, purchases, and energy usage with real-time insights.",
    businessModel: "SaaS subscription with tiered pricing based on company size",
    targetAudience: "Small to medium businesses focused on sustainability",
    marketSize: "$2.4B",
    difficulty: "Medium",
    timeToMarket: "6-8 months",
    locked: false, // Free idea
  },
  {
    name: "MindfulMeet",
    pitch: "AI meeting assistant that promotes mental wellness",
    description:
      "An AI tool that analyzes meeting patterns and suggests optimal scheduling to reduce burnout and improve team mental health with personalized recommendations.",
    businessModel: "B2B SaaS with per-seat pricing",
    targetAudience: "HR departments and team managers",
    marketSize: "$1.8B",
    difficulty: "High",
    timeToMarket: "8-12 months",
    locked: false, // Free idea
  },
  {
    name: "CodeMentor AI",
    pitch: "Personalized AI coding tutor for beginners",
    description:
      "AI-powered platform that adapts to individual learning styles and provides personalized coding challenges, explanations, and career guidance.",
    businessModel: "Freemium with premium features and 1-on-1 AI sessions",
    targetAudience: "Coding bootcamp students and self-taught developers",
    marketSize: "$3.2B",
    difficulty: "Medium",
    timeToMarket: "4-6 months",
    locked: false, // Free idea
  },
  {
    name: "FoodWaste Zero",
    pitch: "Smart inventory management for restaurants to reduce food waste",
    description:
      "AI-powered system that predicts demand, optimizes ordering, and suggests menu modifications to minimize food waste while maximizing profits.",
    businessModel: "Monthly SaaS subscription + percentage of savings",
    targetAudience: "Restaurant owners and food service businesses",
    marketSize: "$1.5B",
    difficulty: "Medium",
    timeToMarket: "5-7 months",
    locked: false, // Free idea
  },
  {
    name: "PetHealth Monitor",
    pitch: "Wearable health tracker for pets with AI diagnostics",
    description:
      "Smart collar that monitors pet vital signs, activity levels, and behavior patterns to detect health issues early and provide veterinary recommendations.",
    businessModel: "Hardware sales + subscription for AI health insights",
    targetAudience: "Pet owners and veterinary clinics",
    marketSize: "$4.1B",
    difficulty: "High",
    timeToMarket: "12-18 months",
    locked: true, // Pro idea
  },
  {
    name: "StudyBuddy AI",
    pitch: "Personalized AI study companion for students",
    description:
      "AI tutor that creates custom study plans, generates practice questions, and adapts to learning styles to improve academic performance.",
    businessModel: "Freemium with premium AI tutoring sessions",
    targetAudience: "High school and college students",
    marketSize: "$2.8B",
    difficulty: "Medium",
    timeToMarket: "4-6 months",
    locked: true, // Pro idea
  },
]

const useCases = [
  {
    title: "For Entrepreneurs",
    description:
      "Validate new business opportunities and discover untapped markets with AI-generated insights and market analysis.",
    icon: Briefcase,
    gradient: "from-primary/10 to-secondary/10",
    features: ["Market validation", "Competitor analysis", "Revenue projections"],
  },
  {
    title: "For Students",
    description:
      "Get project and hackathon ideas that stand out and showcase your technical skills with implementation guides.",
    icon: Lightbulb,
    gradient: "from-secondary/10 to-primary/10",
    features: ["Project ideas", "Technical guides", "Portfolio building"],
  },
  {
    title: "For Product Managers",
    description: "Brainstorm innovative features and product extensions to drive user engagement and business growth.",
    icon: TrendingUp,
    gradient: "from-primary/10 to-secondary/10",
    features: ["Feature ideation", "User research", "Growth strategies"],
  },
  {
    title: "For Creators",
    description: "Discover new content angles and monetization strategies for your audience with trend analysis.",
    icon: Users,
    gradient: "from-primary/10 to-secondary/10",
    features: ["Content ideas", "Monetization", "Audience insights"],
  },
]

const features = [
  {
    title: "AI-Powered Generation",
    description:
      "Advanced machine learning algorithms analyze market trends and generate unique startup ideas tailored to your interests.",
    icon: Brain,
    color: "text-primary",
  },
  {
    title: "Market Analysis",
    description: "Get comprehensive market size, competition analysis, and growth potential for every generated idea.",
    icon: BarChart3,
    color: "text-primary",
  },
  {
    title: "Business Model Canvas",
    description:
      "Automatically generate complete business model canvases with revenue streams, key partnerships, and cost structures.",
    icon: Layers,
    color: "text-primary",
  },
  {
    title: "Export & Share",
    description:
      "Export your ideas to PDF, Notion, or share them directly with your team for collaborative development.",
    icon: Share2,
    color: "text-primary",
  },
  {
    title: "Trend Tracking",
    description: "Stay ahead with real-time trend analysis and emerging market opportunities in your industry.",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    title: "Implementation Roadmap",
    description: "Get step-by-step implementation guides with timelines, milestones, and resource requirements.",
    icon: BookOpen,
    color: "text-primary",
  },
]

export default function StartupIdeasGenerator() {
  const [keyword, setKeyword] = useState("")
  const [ideas, setIdeas] = useState<typeof sampleIdeas>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [showIdeas, setShowIdeas] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setKeyword(value)

    if (value.length > 0) {
      const filtered = autocompleteSuggestions
        .filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 8)
      setFilteredSuggestions(filtered)
      setShowSuggestions(filtered.length > 0)
    } else {
      setFilteredSuggestions(autocompleteSuggestions.slice(0, 8))
      setShowSuggestions(true)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setKeyword(suggestion)
    setShowSuggestions(false)
    setFilteredSuggestions([])
  }

  const generateIdeas = async () => {
    if (!keyword.trim()) return

    setIsGenerating(true)
    setShowIdeas(false)
    setShowSuggestions(false)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIdeas(sampleIdeas)
    setIsGenerating(false)
    setShowIdeas(true)
  }

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden">
      {/* Enhanced Gradient Background for dark theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-2xl animate-float delay-3000" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-full blur-2xl animate-gradient-shift" />
      </div>

      <nav className="sticky top-0 z-50 glass-nav shadow-lg shadow-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2  from-primary to-secondary rounded-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text-premium">IdeaGen AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Pricing
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/10 transition-all duration-300"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://my.spline.design/retrofuturisticcircuitloop-CIfoERed5qfqQQRgEg0I514R/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full object-cover brightness-150 contrast-125 saturate-110"
          />
        </div>

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up drop-shadow-lg text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <img src="/bulb-logo.png" alt="Bulb Logo" className="h-12 md:h-16 w-auto" />
              <span className="text-white">Turn Any Idea into</span>
            </div>
            <div className="text-white mb-2">Your Next</div>
            <div className="gradient-text-premium">Startup in Seconds</div>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up delay-300 drop-shadow-sm">
            AI-powered tool that generates startup ideas, business models, and growth strategies instantly with market
            analysis.
          </p>

          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up delay-500 relative z-[60]">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative z-[70]">
                <Input
                  type="text"
                  placeholder="Enter a keyword, problem, or industry…"
                  value={keyword}
                  onChange={handleInputChange}
                  className="h-14 text-lg glass-card focus:border-primary focus:ring-primary/50 text-foreground placeholder:text-muted-foreground border-border relative z-[80]"
                  onKeyPress={(e) => e.key === "Enter" && generateIdeas()}
                  onFocus={() => {
                    if (keyword.length > 0 && filteredSuggestions.length > 0) {
                      setShowSuggestions(true)
                    } else {
                      setFilteredSuggestions(autocompleteSuggestions.slice(0, 8))
                      setShowSuggestions(true)
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowSuggestions(false), 200)
                  }}
                />

                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-primary/20 rounded-lg shadow-2xl shadow-primary/10 z-[90] max-h-64 overflow-y-auto">
                    {filteredSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-primary/10 cursor-pointer transition-colors border-b border-primary/10 last:border-b-0 text-left"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <div className="text-foreground text-sm font-medium">{suggestion}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                onClick={generateIdeas}
                disabled={isGenerating || !keyword.trim()}
                className="h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Generating...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Generate Ideas</span>
                  </div>
                )}
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up delay-700">
            <Button
              variant="outline"
              className="border-primary/50 text-muted-foreground hover:bg-secondary/10 hover:text-foreground glass-card bg-transparent"
            >
              <Play className="h-4 w-4 mr-2" />
              See How It Works
            </Button>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              <span>Trusted by 10,000+ entrepreneurs</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-1000">
            {exampleKeywords.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-4 py-2 glass-card hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-300 hover:scale-105 border-border"
                onClick={() => setKeyword(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {showIdeas && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Generated Startup Ideas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((idea, index) => (
                <Card
                  key={index}
                  className={`glass-card premium-hover animate-fade-in-up ${
                    idea.locked ? "relative overflow-hidden" : ""
                  } border-border bg-card`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {idea.locked && (
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-10 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Unlock with Pro</p>
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center space-x-2">
                      <Rocket className="h-5 w-5" />
                      <span>{idea.name}</span>
                    </CardTitle>
                    <CardDescription className="text-card-foreground font-medium">{idea.pitch}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{idea.description}</p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <BarChart3 className="h-3 w-3 mr-1" />
                        {idea.marketSize}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {idea.timeToMarket}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Target className="h-3 w-3 mr-1" />
                        {idea.difficulty}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{idea.businessModel}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{idea.targetAudience}</p>
                      </div>
                    </div>

                    {!idea.locked && (
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Download className="h-3 w-3 mr-1" />
                          Export
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Share2 className="h-3 w-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-premium animate-fade-in-up">
              Powerful Features for Every Entrepreneur
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Everything you need to turn your ideas into successful startups with AI-powered insights and analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="glass-card premium-hover animate-fade-in-up border-border hover:border-primary/30 bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4`}>
                      <IconComponent className={`h-6 w-6 text-primary`} />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-6 backdrop-blur-sm border border-primary/20">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-premium animate-fade-in-up">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Start free and scale as you grow. Every plan includes our core AI-powered idea generation with premium
              features to accelerate your startup journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card relative group border-border/50 bg-card/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl overflow-hidden">
              <CardHeader className="text-left pb-6 relative z-10">
                <CardTitle className="text-2xl font-semibold text-foreground mb-2">Free</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-foreground">$0,00</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Great for trying out Finament and for tiny teams
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 px-6 pb-6">
                <Button
                  variant="outline"
                  className="w-full h-12 mb-8 border border-border/50 text-foreground hover:bg-muted/50 transition-all duration-300 bg-muted/20 font-medium rounded-lg"
                >
                  Start for Free
                </Button>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    FEATURES
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Account Aggregation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Expense Tracking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Budgeting Tools</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Transaction Insights</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Basic Security</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card relative group border-border/50 bg-card/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 rounded-2xl overflow-hidden">
              <div className="absolute top-4 right-4 z-20">
                <Badge className="bg-gray-600 text-white px-3 py-1 text-xs font-medium rounded-full">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-left pb-6 relative z-10">
                <CardTitle className="text-2xl font-semibold text-foreground mb-2">Professional</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-foreground">$98,00</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Best for growing startups and growth companies
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 px-6 pb-6">
                <Button className="w-full h-12 mb-8 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 font-medium rounded-lg">
                  Sign Up with Professional
                </Button>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    FEATURES
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Everything in Free</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Customizable Dashboards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Advanced Budgeting</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Investment Tracking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Enhanced Security</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card relative group border-border/50 bg-card/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 rounded-2xl overflow-hidden">
              <CardHeader className="text-left pb-6 relative z-10">
                <CardTitle className="text-2xl font-semibold text-foreground mb-2">Enterprise</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-foreground">$160,00</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Best for large companies and teams requiring high security
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 px-6 pb-6">
                <Button
                  variant="outline"
                  className="w-full h-12 mb-8 border border-border/50 text-foreground hover:bg-muted/50 transition-all duration-300 bg-muted/20 font-medium rounded-lg"
                >
                  Sign Up with Enterprise
                </Button>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    FEATURES
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Financial Planning Tools</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Priority Support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Premium Widgets</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Advanced Security</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">Integration with 3rd-Party Services</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-24">
            <p className="text-sm text-muted-foreground">Every plan comes with free 30 days money back guarantee</p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-primary/5 to-secondary/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-premium animate-fade-in-up">
              About IdeaGen AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
              We're on a mission to democratize entrepreneurship by making startup ideation accessible to everyone
              through the power of artificial intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2024 by a team of serial entrepreneurs and AI researchers, IdeaGen AI was born from the
                frustration of seeing great minds struggle with the initial spark of innovation. We believe that
                everyone has the potential to build something amazing – they just need the right idea at the right time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our advanced AI models analyze millions of market data points, emerging trends, and successful business
                patterns to generate personalized startup ideas that have real market potential. We've helped over
                10,000 entrepreneurs discover their next big opportunity.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Ideas Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Startups Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$50M+</div>
                  <div className="text-sm text-muted-foreground">Funding Raised</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-500">
              <Card className="glass-card p-8 border-primary/20 bg-card">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">AI-Powered Innovation</h4>
                      <p className="text-sm text-muted-foreground">Cutting-edge machine learning algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Market Intelligence</h4>
                      <p className="text-sm text-muted-foreground">Real-time market data and trend analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Community Driven</h4>
                      <p className="text-sm text-muted-foreground">Learn from successful entrepreneurs</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-premium animate-fade-in-up">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Have questions about IdeaGen AI? Want to partner with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in-up delay-300">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">mdarfath239@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Support</div>
                      <div className="text-muted-foreground">1hk21cs087@.edu.in</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Partnerships</div>
                      <div className="text-muted-foreground">partners@ideagenai.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="glass-card p-8 animate-fade-in-up delay-500 border-primary/20 bg-card">
              <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input className="glass-card border-border bg-input" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input className="glass-card border-border bg-input" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input className="glass-card border-border bg-input" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input className="glass-card border-border bg-input" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    className="w-full h-32 px-3 py-2 glass-card border border-border bg-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all duration-300">
                  Send Message
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border glass-nav">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold gradient-text-premium">IdeaGen AI</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Turn any idea into your next startup with AI-powered generation and market analysis.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-xs border-primary/30">
                  <Shield className="h-3 w-3 mr-1" />
                  SOC 2 Compliant
                </Badge>
                <Badge variant="outline" className="text-xs border-primary/30">
                  <Globe className="h-3 w-3 mr-1" />
                  Global
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Product</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer transition-colors">Features</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Pricing</div>
                <div className="hover:text-primary cursor-pointer transition-colors">API</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Integrations</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer transition-colors">About</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Blog</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Careers</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Press</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer transition-colors">Help Center</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Contact</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Status</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Security</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <span>© 2024 IdeaGen AI. All rights reserved.</span>
              <div className="flex space-x-4">
                <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Cookies</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
