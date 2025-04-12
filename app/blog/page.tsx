"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedText from "@/components/animated-text"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt:
      "Discover the latest SEO techniques that are driving real results in today's algorithm-driven search landscape.",
    category: "SEO",
    date: "April 2, 2025",
    author: "Sarah Williams",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    readTime: "8 min read",
    tags: ["SEO", "Digital Marketing", "Google Algorithm"],
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Email Marketing Campaigns",
    excerpt:
      "Explore how artificial intelligence is transforming email marketing with personalization, timing optimization, and content generation.",
    category: "Email Marketing",
    date: "March 28, 2025",
    author: "Michael Chen",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    readTime: "6 min read",
    tags: ["AI", "Email Marketing", "Automation"],
  },
  {
    id: 3,
    title: "The Complete Guide to Social Media Marketing in 2025",
    excerpt:
      "Learn how to create a comprehensive social media strategy that builds brand awareness and drives engagement.",
    category: "Social Media",
    date: "March 21, 2025",
    author: "Alex Johnson",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "10 min read",
    tags: ["Social Media", "Strategy", "Content Creation"],
  },
  {
    id: 4,
    title: "Web Development Trends That Will Dominate This Year",
    excerpt:
      "Stay ahead of the curve with these cutting-edge web development trends that are shaping the digital landscape.",
    category: "Web Development",
    date: "March 15, 2025",
    author: "Priya Sharma",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "7 min read",
    tags: ["Web Development", "Design", "Technology"],
  },
  {
    id: 5,
    title: "E-commerce Optimization: Boosting Your Conversion Rate",
    excerpt: "Practical strategies to optimize your e-commerce store and significantly increase your conversion rates.",
    category: "E-commerce",
    date: "March 10, 2025",
    author: "David Wilson",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "9 min read",
    tags: ["E-commerce", "Conversion Rate", "UX Design"],
  },
  {
    id: 6,
    title: "The Future of PPC Advertising: What You Need to Know",
    excerpt:
      "Explore the evolving landscape of pay-per-click advertising and how to stay competitive in a changing market.",
    category: "PPC",
    date: "March 5, 2025",
    author: "Emma Rodriguez",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "5 min read",
    tags: ["PPC", "Advertising", "Google Ads"],
  },
  {
    id: 7,
    title: "Building a Strong PR Strategy in the Digital Age",
    excerpt:
      "How to craft a public relations strategy that resonates with modern audiences and leverages digital channels.",
    category: "PR",
    date: "February 28, 2025",
    author: "James Thompson",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "8 min read",
    tags: ["PR", "Communication", "Brand Management"],
  },
  {
    id: 8,
    title: "Influencer Marketing: Finding the Right Partners for Your Brand",
    excerpt:
      "A comprehensive guide to identifying, approaching, and collaborating with influencers that align with your brand values.",
    category: "Influencer Marketing",
    date: "February 22, 2025",
    author: "Sophia Lee",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "7 min read",
    tags: ["Influencer Marketing", "Partnerships", "Brand Awareness"],
  },
  {
    id: 9,
    title: "Leveraging AI for Predictive Analytics in Marketing",
    excerpt:
      "How artificial intelligence is enabling marketers to predict trends, customer behavior, and campaign performance.",
    category: "AI",
    date: "February 15, 2025",
    author: "Robert Zhang",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "9 min read",
    tags: ["AI", "Analytics", "Data Science"],
  },
  {
    id: 10,
    title: "Content Marketing Strategies That Drive Engagement",
    excerpt:
      "Learn how to create content that not only attracts visitors but keeps them engaged and coming back for more.",
    category: "Content Marketing",
    date: "February 10, 2025",
    author: "Olivia Parker",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "6 min read",
    tags: ["Content Marketing", "Engagement", "Strategy"],
  },
  {
    id: 11,
    title: "The Psychology of Color in Digital Marketing",
    excerpt:
      "Understanding how color choices influence consumer perception and behavior in your digital marketing efforts.",
    category: "Design",
    date: "February 5, 2025",
    author: "Nathan Brooks",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "5 min read",
    tags: ["Design", "Psychology", "Branding"],
  },
  {
    id: 12,
    title: "Voice Search Optimization: Preparing for the Future",
    excerpt: "How to optimize your digital content for voice search as this technology becomes increasingly prevalent.",
    category: "SEO",
    date: "January 30, 2025",
    author: "Sarah Williams",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "7 min read",
    tags: ["SEO", "Voice Search", "Technology"],
  },
]

// All unique categories from blog posts
const allCategories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [displayedPosts, setDisplayedPosts] = useState<typeof blogPosts>([])
  const postsPerPage = 6

  // Filter posts based on search term and active category
  useEffect(() => {
    let filtered = blogPosts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((post) => post.category === activeCategory)
    }

    setFilteredPosts(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, activeCategory])

  // Update displayed posts based on pagination
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    setDisplayedPosts(filteredPosts.slice(indexOfFirstPost, indexOfLastPost))
  }, [filteredPosts, currentPage])

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Handle page change
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Featured posts (top 2)
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2)

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
            Our Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            <AnimatedText
              text={["Insights & Strategies", "Marketing Trends", "Digital Solutions", "Expert Advice"]}
              className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Explore the latest trends, strategies, and insights in digital marketing to help your business thrive.
          </p>
        </motion.div>

        {/* Featured Posts Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <AnimatedText text="Featured Articles" />
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`} className="group">
                  <Card className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 border-purple-900/50 overflow-hidden h-full hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[16/9]">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-purple-600 hover:bg-purple-700 text-white">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                        <span className="mr-2">Read more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3 relative">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#120820]/70 border-purple-700/50 pl-10 py-6 text-base backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <Tabs
              defaultValue="All"
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full md:w-auto"
            >
              <TabsList className="bg-[#120820]/70 border border-purple-700/50 p-1 overflow-x-auto flex-nowrap max-w-full md:max-w-none">
                {allCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          {displayedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`} className="group">
                    <Card className="bg-[#0c0515]/70 border-purple-900/50 overflow-hidden h-full hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <div className="aspect-[16/9]">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-600 hover:bg-purple-700 text-white">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-1 text-gray-400" />
                          <span className="text-gray-400">{post.author}</span>
                        </div>
                        <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                          <span className="mr-1 text-sm">Read</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-[#0c0515]/50 rounded-xl border border-purple-900/30"
            >
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
              <Button
                variant="outline"
                className="mt-4 border-purple-500 text-white hover:bg-purple-900/20"
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("All")
                }}
              >
                Reset filters
              </Button>
            </motion.div>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center space-x-2"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-purple-700 text-white hover:bg-purple-900/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <Button
                key={number}
                variant={currentPage === number ? "default" : "outline"}
                onClick={() => paginate(number)}
                className={
                  currentPage === number
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-700 text-white hover:bg-purple-900/20"
                }
              >
                {number}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-purple-700 text-white hover:bg-purple-900/20"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-purple-500/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Stay updated with the latest insights, trends, and strategies in digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[#120820]/70 border-purple-700/50 py-6 text-base backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
