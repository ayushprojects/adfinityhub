"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Users,
  FileText,
  Phone,
  Settings,
  Mail,
  ShoppingCart,
  Search,
  MessageSquare,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import AnimatedText from "@/components/animated-text"

// Define the site structure
const siteStructure = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
      { name: "About Us", href: "/about", icon: <Users className="h-4 w-4" /> },
      { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" /> },
      { name: "Contact", href: "/contact", icon: <Phone className="h-4 w-4" /> },
      { name: "Careers", href: "/careers", icon: <Zap className="h-4 w-4" /> },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "SEO Optimization", href: "/services/seo", icon: <Search className="h-4 w-4" /> },
      { name: "Email Marketing", href: "/services/email-marketing", icon: <Mail className="h-4 w-4" /> },
      { name: "Social Media Marketing", href: "/services/social-media", icon: <MessageSquare className="h-4 w-4" /> },
      { name: "Web Development", href: "/services/web-development", icon: <Settings className="h-4 w-4" /> },
      { name: "E-commerce Solutions", href: "/services/ecommerce", icon: <ShoppingCart className="h-4 w-4" /> },
      { name: "Pay Per Click", href: "/services/ppc", icon: <Zap className="h-4 w-4" /> },
      { name: "PR Handling", href: "/services/pr", icon: <Users className="h-4 w-4" /> },
      { name: "Influencer Marketing", href: "/services/influencer", icon: <Users className="h-4 w-4" /> },
      { name: "AI Solutions", href: "/services/ai", icon: <Zap className="h-4 w-4" /> },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy", icon: <FileText className="h-4 w-4" /> },
      { name: "Terms of Service", href: "/terms", icon: <FileText className="h-4 w-4" /> },
    ],
  },
]

export default function SitemapPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
            Navigation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            <AnimatedText
              text="Sitemap"
              className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-lg text-gray-300 mb-8">Find all pages and resources available on our website</p>
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {/* Sitemap Content */}
        <div className="max-w-5xl mx-auto">
          {siteStructure.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                {section.title}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + sectionIndex * 0.1 }}
                />
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link href={link.href} className="block">
                      <Card className="bg-[#0c0515]/70 border-purple-900/50 hover:border-purple-500/50 transition-colors duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="mr-3 bg-purple-900/30 p-2 rounded-full">{link.icon}</div>
                              <span className="font-medium">{link.name}</span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Visual Sitemap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Visual Site Structure</h2>
            <div className="bg-[#0c0515]/70 border border-purple-900/50 rounded-xl p-8 overflow-auto">
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-3 text-white font-medium">
                    Home
                  </div>
                  <div className="w-px h-8 bg-purple-500/50"></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-[#1a1030] rounded-lg p-3 text-white font-medium w-32 text-center">
                        About Us
                      </div>
                      <div className="w-px h-8 bg-purple-500/50"></div>
                      <div className="bg-[#1a1030] rounded-lg p-3 text-white font-medium w-32 text-center">Careers</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#1a1030] rounded-lg p-3 text-white font-medium w-32 text-center">
                        Services
                      </div>
                      <div className="w-px h-8 bg-purple-500/50"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">SEO</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Email</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Social</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Web</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">E-com</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">PPC</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">PR</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Influencer</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">AI</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#1a1030] rounded-lg p-3 text-white font-medium w-32 text-center">
                        Resources
                      </div>
                      <div className="w-px h-8 bg-purple-500/50"></div>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Blog</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Contact</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Privacy Policy</div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">
                          Terms of Service
                        </div>
                        <div className="bg-[#120820] rounded-lg p-2 text-white text-xs text-center">Sitemap</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
