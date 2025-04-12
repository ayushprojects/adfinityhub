"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, User, Tag, ArrowLeft, MessageCircle, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Sample blog data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt:
      "Discover the latest SEO techniques that are driving real results in today's algorithm-driven search landscape.",
    content: `
      <p>Search Engine Optimization continues to evolve at a rapid pace, with Google's algorithms becoming increasingly sophisticated. In 2025, the focus has shifted dramatically from traditional keyword-centric approaches to a more holistic strategy that prioritizes user experience, content quality, and technical excellence.</p>
      
      <h2>1. User Experience Signals</h2>
      <p>Google's Core Web Vitals have become even more critical in 2025. Sites that offer exceptional loading speeds, interactivity, and visual stability are seeing significant ranking boosts. Investing in performance optimization is no longer optional—it's essential for competitive SEO.</p>
      
      <h2>2. AI-Generated Content Optimization</h2>
      <p>While AI content generation has become mainstream, the key differentiator is how you optimize and enhance this content. Successful SEO strategies now involve using AI as a starting point, then adding unique insights, original research, and brand-specific perspectives that machines cannot replicate.</p>
      
      <h2>3. Entity-Based SEO</h2>
      <p>Google's Knowledge Graph has expanded dramatically, making entity-based SEO crucial. Building connections between your brand and related entities helps search engines understand your content's context and relevance to specific queries.</p>
      
      <h2>4. Voice Search Optimization</h2>
      <p>With voice search accounting for over 30% of all searches in 2025, optimizing for conversational queries has become essential. This means focusing on natural language patterns, question-based content, and featured snippet optimization.</p>
      
      <h2>5. Video Search Optimization</h2>
      <p>Video content now appears in over 70% of search results. Implementing comprehensive video SEO—including transcripts, structured data, and engaging thumbnails—provides a significant competitive advantage.</p>
      
      <h2>6. Mobile-First Indexing 2.0</h2>
      <p>Google has further refined its mobile-first approach, now prioritizing sites that offer app-like mobile experiences with intuitive navigation and minimal friction. Progressive Web App features have become standard for top-ranking sites.</p>
      
      <h2>7. E-E-A-T Signals</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) signals have gained even more weight. Creating content from genuine first-hand experience and demonstrating clear expertise is now essential, particularly in YMYL (Your Money Your Life) niches.</p>
      
      <h2>8. Semantic Search Optimization</h2>
      <p>As search engines better understand context and user intent, comprehensive topic coverage has become more important than keyword density. Creating content clusters that address all aspects of a topic signals topical authority to search engines.</p>
      
      <h2>9. Local SEO Enhancements</h2>
      <p>Local search has become hyper-competitive, with Google prioritizing businesses that demonstrate consistent engagement with customers through reviews, Q&A, and local content. Implementing a robust review strategy and local content plan is essential for local visibility.</p>
      
      <h2>10. Technical SEO Automation</h2>
      <p>Leveraging AI-powered tools to automatically identify and fix technical SEO issues has become standard practice. These tools can now predict potential issues before they impact rankings, allowing for proactive optimization.</p>
      
      <h2>Conclusion</h2>
      <p>The most successful SEO strategies in 2025 combine technical excellence with exceptional content quality and user experience. By focusing on these ten areas, businesses can build sustainable search visibility that drives meaningful traffic and conversions.</p>
    `,
    category: "SEO",
    date: "April 2, 2025",
    author: "Sarah Williams",
    authorRole: "Head of SEO",
    authorBio: "SEO expert specializing in technical optimization and content strategy for maximum visibility.",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
    readTime: "8 min read",
    tags: ["SEO", "Digital Marketing", "Google Algorithm"],
    relatedPosts: [3, 12, 4],
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Email Marketing Campaigns",
    excerpt:
      "Explore how artificial intelligence is transforming email marketing with personalization, timing optimization, and content generation.",
    content: `
      <p>Artificial Intelligence has fundamentally transformed email marketing, turning what was once a relatively static channel into a dynamic, personalized communication medium. In 2025, AI capabilities have matured to the point where they're accessible to businesses of all sizes, not just enterprise organizations with massive budgets.</p>
      
      <h2>Hyper-Personalization at Scale</h2>
      <p>Today's AI systems can analyze thousands of data points about each subscriber, including past purchase behavior, browsing history, email engagement patterns, and even social media activity. This enables marketers to create truly individualized email experiences that go far beyond simple name personalization.</p>
      
      <p>The most advanced systems can now dynamically generate entire email content blocks based on individual user preferences and behaviors. This means two subscribers might receive completely different versions of the same campaign, with unique product recommendations, content topics, and even writing styles that resonate with their specific preferences.</p>
      
      <h2>Predictive Send-Time Optimization</h2>
      <p>AI has solved one of email marketing's most persistent challenges: determining when to send messages to maximize engagement. Modern AI systems analyze individual opening patterns to identify precisely when each subscriber is most likely to engage with an email.</p>
      
      <p>This has led to the widespread adoption of "time-warping" technology, where a single campaign is delivered to different subscribers at different times based on their personal habits. The result is significantly higher open and click-through rates compared to traditional batch sending.</p>
      
      <h2>AI-Generated Content That Converts</h2>
      <p>The quality of AI-generated email content has improved dramatically. Today's systems can create compelling subject lines, body copy, and calls-to-action that match a brand's voice while optimizing for conversion.</p>
      
      <p>More impressively, these systems can now generate content that adapts based on where a customer is in their journey. For example, the AI might create educational content for new subscribers, product recommendations for engaged browsers, and win-back incentives for lapsed customers—all automatically.</p>
      
      <h2>Predictive Analytics and Churn Prevention</h2>
      <p>Perhaps the most valuable application of AI in email marketing is its ability to predict future customer behavior. Modern systems can identify subscribers who are likely to make a purchase, as well as those who are showing signs of disengagement.</p>
      
      <p>This predictive capability allows marketers to implement proactive retention strategies, targeting at-risk subscribers with special offers or re-engagement content before they actually churn. Some advanced systems can even recommend the specific type of content or offer most likely to resonate with each at-risk subscriber.</p>
      
      <h2>Automated Testing and Optimization</h2>
      <p>A/B testing has evolved into continuous multivariate testing powered by AI. Rather than testing a few variables at a time, today's systems can simultaneously test dozens of elements—from subject lines and preview text to images, copy blocks, and CTAs—and automatically implement the winning combinations.</p>
      
      <p>These systems learn over time, building sophisticated models of what works for different subscriber segments and continuously refining email content to maximize performance.</p>
      
      <h2>The Future: Conversational Email Marketing</h2>
      <p>The next frontier in AI-powered email marketing is the emergence of truly conversational capabilities. Advanced natural language processing is enabling emails that can respond to subscriber queries and actions in real-time, blurring the line between email marketing and chatbot functionality.</p>
      
      <p>Some pioneering brands are already implementing emails that allow subscribers to ask questions about products, request more information, or even complete purchases—all without leaving their inbox. This interactive approach is showing significantly higher engagement rates than traditional static emails.</p>
      
      <h2>Conclusion</h2>
      <p>AI has transformed email marketing from a relatively blunt instrument into one of the most sophisticated and effective channels in the digital marketing arsenal. By leveraging these AI-powered capabilities, marketers can create more relevant, timely, and engaging email experiences that drive measurable business results.</p>
      
      <p>As these technologies continue to evolve, the gap between brands that embrace AI and those that stick with traditional approaches will only widen. For forward-thinking marketers, now is the time to fully leverage artificial intelligence to revolutionize their email marketing strategies.</p>
    `,
    category: "Email Marketing",
    date: "March 28, 2025",
    author: "Michael Chen",
    authorRole: "Creative Director",
    authorBio: "Award-winning designer with a passion for creating memorable brand experiences.",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
    readTime: "6 min read",
    tags: ["AI", "Email Marketing", "Automation"],
    relatedPosts: [9, 3, 10],
  },
  {
    id: 3,
    title: "The Complete Guide to Social Media Marketing in 2025",
    excerpt:
      "Learn how to create a comprehensive social media strategy that builds brand awareness and drives engagement.",
    category: "Social Media",
    date: "March 21, 2025",
    author: "Alex Johnson",
    authorRole: "CEO & Founder",
    authorBio: "Digital marketing veteran with 15+ years of experience in building successful online strategies.",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "10 min read",
    tags: ["Social Media", "Strategy", "Content Creation"],
    relatedPosts: [8, 2, 10],
  },
  {
    id: 4,
    title: "Web Development Trends That Will Dominate This Year",
    excerpt:
      "Stay ahead of the curve with these cutting-edge web development trends that are shaping the digital landscape.",
    category: "Web Development",
    date: "March 15, 2025",
    author: "Priya Sharma",
    authorRole: "AI Solutions Lead",
    authorBio: "AI specialist with expertise in implementing cutting-edge technology for marketing applications.",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: "7 min read",
    tags: ["Web Development", "Design", "Technology"],
    relatedPosts: [5, 9, 11],
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
    relatedPosts: [4, 6, 2],
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
    relatedPosts: [1, 5, 9],
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
    relatedPosts: [8, 3, 10],
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
    relatedPosts: [7, 3, 10],
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
    relatedPosts: [2, 4, 6],
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
    relatedPosts: [3, 7, 8],
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
    relatedPosts: [4, 10, 5],
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
    relatedPosts: [1, 4, 9],
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Get post data based on the ID
    const postId = Number.parseInt(params.id)
    const currentPost = blogPosts.find((p) => p.id === postId)

    if (currentPost) {
      setPost(currentPost)

      // Get related posts if available
      if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
        const related = blogPosts.filter((p) => currentPost.relatedPosts.includes(p.id))
        setRelatedPosts(related)
      } else {
        // Fallback to posts with same category
        const related = blogPosts.filter((p) => p.id !== postId && p.category === currentPost.category).slice(0, 3)
        setRelatedPosts(related)
      }
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-32 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/blog">Return to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => router.push("/blog")}
            className="text-gray-400 hover:text-white hover:bg-transparent p-0"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 text-white">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="rounded-xl overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        </motion.div>

        {/* Article Content and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="prose prose-invert prose-purple max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags &&
                post.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="outline" className="border-purple-500/50 text-gray-300">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
            </div>

            {/* Social Sharing */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="border-purple-500/50 text-gray-300">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/50 text-gray-300">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/50 text-gray-300">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="sm" className="text-gray-300">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comments (12)
                </Button>
              </div>
            </div>

            <Separator className="my-8 bg-gray-800" />

            {/* Author Bio */}
            {post.authorBio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#0c0515]/70 border border-purple-900/50 rounded-xl p-6 mb-8"
              >
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
                    <AvatarFallback>
                      {post.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">{post.author}</h3>
                    <p className="text-purple-400 text-sm mb-2">{post.authorRole}</p>
                    <p className="text-gray-400 text-sm">{post.authorBio}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            {/* Related Posts */}
            <div className="bg-[#0c0515]/70 border border-purple-900/50 rounded-xl p-6 mb-8 sticky top-32">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group block">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-400 text-xs mt-1">{relatedPost.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Separator className="my-6 bg-gray-800" />

              {/* Categories */}
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {Array.from(new Set(blogPosts.map((p) => p.category))).map((category, index) => (
                  <Link key={index} href={`/blog?category=${category}`}>
                    <Badge className="bg-[#1a1030] hover:bg-purple-900/50 text-gray-300">{category}</Badge>
                  </Link>
                ))}
              </div>

              <Separator className="my-6 bg-gray-800" />

              {/* Popular Tags */}
              <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap((p) => p.tags || [])))
                  .slice(0, 10)
                  .map((tag, index) => (
                    <Link key={index} href={`/blog?tag=${tag}`}>
                      <Badge variant="outline" className="border-purple-500/50 text-gray-300">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    </Link>
                  ))}
              </div>

              {/* Newsletter Signup */}
              <Card className="mt-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get the latest articles and insights delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 bg-[#120820]/70 border border-purple-700/50 rounded-md text-sm"
                    />
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* More Articles Section */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">More Articles</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
