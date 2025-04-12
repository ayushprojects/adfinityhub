"use client"

import type React from "react"

import { useState, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ServiceCircle from "@/components/service-circle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import AnimatedText from "@/components/animated-text"
import MovingCardCarousel from "@/components/moving-card-carousel"
import FAQAccordion from "@/components/faq-accordion"
import { useDebounce } from "@/hooks/use-debounce"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const services = [
  { id: 1, name: "SEO", href: "/services/seo", icon: "🔍" },
  { id: 2, name: "Email Marketing", href: "/services/email-marketing", icon: "📧" },
  { id: 3, name: "Social Media", href: "/services/social-media", icon: "📱" },
  { id: 4, name: "Web Development", href: "/services/web-development", icon: "💻" },
  { id: 5, name: "E-commerce", href: "/services/ecommerce", icon: "🛒" },
  { id: 6, name: "Pay Per Click", href: "/services/ppc", icon: "👆" },
  { id: 7, name: "PR Handling", href: "/services/pr", icon: "📢" },
  { id: 8, name: "Influencer Marketing", href: "/services/influencer", icon: "🌟" },
  { id: 9, name: "AI Solutions", href: "/services/ai", icon: "🤖" },
]

// General FAQs for the home page
const generalFaqs = [
  {
    question: "What services does AdfinityHub offer?",
    answer:
      "AdfinityHub offers a comprehensive range of digital marketing services including SEO, social media marketing, web development, email marketing, e-commerce solutions, PPC advertising, PR handling, influencer marketing, and AI-powered marketing solutions.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing can help your business increase brand awareness, generate more leads, improve conversion rates, enhance customer engagement, and ultimately drive revenue growth. Our tailored strategies ensure you reach the right audience at the right time with the right message.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes, we work with businesses of all sizes, from startups to enterprise-level organizations. Our strategies are customized to meet your specific needs, goals, and budget, ensuring effective results regardless of your company size.",
  },
  {
    question: "How do you measure the success of your marketing campaigns?",
    answer:
      "We use advanced analytics tools to track key performance indicators (KPIs) relevant to your business goals. These may include website traffic, conversion rates, engagement metrics, lead generation, ROI, and more. We provide regular reports and insights to keep you informed about campaign performance.",
  },
  {
    question: "What makes AdfinityHub different from other marketing agencies?",
    answer:
      "AdfinityHub stands out through our unique blend of human creativity and AI-powered technology. We focus on data-driven strategies, personalized service, transparent reporting, and continuous optimization to deliver exceptional results. Our team of experts stays ahead of industry trends to ensure your marketing efforts remain cutting-edge.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "The timeline for results varies depending on the specific services and your industry. Some strategies like PPC can show immediate results, while others like SEO typically take 3-6 months to demonstrate significant improvements. We set realistic expectations and focus on both short-term wins and long-term sustainable growth.",
  },
]

export default function Home() {
  const [searchRadius, setSearchRadius] = useState(180)
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Memoize filtered services to prevent unnecessary recalculations
  const filteredServices = useMemo(() => {
    return services.filter((service) => service.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
  }, [debouncedSearchTerm])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Use intersection observer for sections to improve performance
  const { ref: heroRef, isIntersecting: heroVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: servicesRef, isIntersecting: servicesVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: whyChooseRef, isIntersecting: whyChooseVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: featuredRef, isIntersecting: featuredVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: faqRef, isIntersecting: faqVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: ctaRef, isIntersecting: ctaVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 relative" ref={heroRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300 font-jakarta">
              Next-Gen Digital Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
              Transform Your{" "}
              <AnimatedText
                text={["Digital Presence", "Online Strategy", "Brand Identity", "Marketing ROI"]}
                className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
              />{" "}
              with AI-Powered Marketing
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-jakarta leading-relaxed">
              Elevate your brand with cutting-edge strategies that combine human creativity and artificial intelligence
              for unparalleled results.
            </p>
            <div className="flex justify-center mb-16">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950 text-white font-jakarta font-medium tracking-wide"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Search Section - With animated orbital background */}
      <section
        className="pt-16 md:pt-24 pb-16 md:pb-24 bg-gradient-to-b from-transparent to-[#080810]/90 relative overflow-hidden"
        id="services-section"
        ref={servicesRef as React.RefObject<HTMLDivElement>}
      >
        {/* Animated orbital background - Only render when section is visible */}
        {servicesVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Outer orbit */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-500/20"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
              }}
            >
              <motion.div
                className="absolute -top-2 w-4 h-4 rounded-full bg-purple-500/40"
                animate={{
                  boxShadow: [
                    "0 0 10px 2px rgba(139, 92, 246, 0.3)",
                    "0 0 20px 4px rgba(139, 92, 246, 0.5)",
                    "0 0 10px 2px rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            {/* Middle orbit */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-indigo-500/20"
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 },
              }}
            >
              <motion.div
                className="absolute -bottom-2 w-4 h-4 rounded-full bg-indigo-500/40"
                animate={{
                  boxShadow: [
                    "0 0 10px 2px rgba(99, 102, 241, 0.3)",
                    "0 0 20px 4px rgba(99, 102, 241, 0.5)",
                    "0 0 10px 2px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
            </motion.div>

            {/* Inner orbit */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-blue-500/20"
              animate={{
                rotate: 360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 },
              }}
            >
              <motion.div
                className="absolute -right-2 w-4 h-4 rounded-full bg-blue-500/40"
                animate={{
                  boxShadow: [
                    "0 0 10px 2px rgba(59, 130, 246, 0.3)",
                    "0 0 20px 4px rgba(59, 130, 246, 0.5)",
                    "0 0 10px 2px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              />
            </motion.div>

            {/* Reduced number of floating particles for better performance */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-${(i % 3) + 1} h-${(i % 3) + 1} rounded-full ${
                  i % 3 === 0 ? "bg-purple-500/30" : i % 3 === 1 ? "bg-indigo-500/30" : "bg-blue-500/30"
                }`}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * 800,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * 800,
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Pulsing background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>
        )}

        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16 mt-8 relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block tracking-tight">
              Discover Our{" "}
              <span className="text-purple-400 relative">
                <AnimatedText text="Services" className="text-purple-400" />
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ width: 0 }}
                  animate={servicesVisible ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
              {/* Glow effect behind text */}
              <motion.div
                className="absolute -inset-x-10 -inset-y-4 bg-purple-500/10 rounded-full blur-xl -z-10"
                animate={
                  servicesVisible
                    ? {
                        opacity: [0.4, 0.7, 0.4],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-jakarta leading-relaxed relative z-10">
              Explore our comprehensive range of digital marketing services designed to boost your online presence and
              drive growth.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto mb-12 relative">
            {/* Glow effect behind search bar */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-md -z-10"
              animate={
                servicesVisible
                  ? {
                      opacity: [0.4, 0.8, 0.4],
                    }
                  : {}
              }
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <div className="relative">
              <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-[#120820]/70 border-purple-700/50 pl-10 py-6 text-lg backdrop-blur-sm font-jakarta"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="relative" ref={containerRef}>
            <div className="service-search-container">
              {/* Animated search radius circle with enhanced glow */}
              <motion.div
                className="search-circle"
                animate={{
                  width: searchRadius * 2,
                  height: searchRadius * 2,
                  boxShadow: [
                    "0 0 20px 5px rgba(139, 92, 246, 0.1)",
                    "0 0 30px 10px rgba(139, 92, 246, 0.15)",
                    "0 0 20px 5px rgba(139, 92, 246, 0.1)",
                  ],
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Service items */}
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <ServiceCircle
                    key={service.id}
                    service={service}
                    index={index}
                    totalItems={filteredServices.length}
                    radius={searchRadius}
                  />
                ))}
              </AnimatePresence>

              {/* Center search icon with enhanced glow */}
              <motion.div
                className="absolute z-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-4 shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 20px 5px rgba(139, 92, 246, 0.4)",
                    "0 0 35px 10px rgba(139, 92, 246, 0.6)",
                    "0 0 20px 5px rgba(139, 92, 246, 0.4)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Search className="h-6 w-6" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - With Moving Card Carousel */}
      <section className="py-16 md:py-24" ref={whyChooseRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyChooseVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Why Choose <AnimatedText text="AdfinityHub" className="text-purple-400" />
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-jakarta leading-relaxed mb-8">
              We combine cutting-edge technology with creative expertise to deliver exceptional results.
            </p>

            {/* Moving Card Carousel - Only render when visible */}
            {whyChooseVisible && <MovingCardCarousel />}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-[#050508]/70" ref={featuredRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuredVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <AnimatedText text="Featured Services" className="text-purple-400" />
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-jakarta leading-relaxed">
              Explore our most popular services that help businesses thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SEO Optimization",
                description: "Improve your search engine rankings and drive organic traffic to your website.",
                icon: "🔍",
                href: "/services/seo",
              },
              {
                title: "Social Media Marketing",
                description: "Build a strong social presence and engage with your audience across platforms.",
                icon: "📱",
                href: "/services/social-media",
              },
              {
                title: "Web Development",
                description: "Create stunning, responsive websites that convert visitors into customers.",
                icon: "💻",
                href: "/services/web-development",
              },
              {
                title: "E-commerce Solutions",
                description: "Optimize your online store for maximum sales and customer satisfaction.",
                icon: "🛒",
                href: "/services/ecommerce",
              },
              {
                title: "Content Marketing",
                description: "Develop compelling content that resonates with your target audience.",
                icon: "📝",
                href: "/services/content",
              },
              {
                title: "AI Integration",
                description: "Harness the power of AI to automate and enhance your marketing efforts.",
                icon: "🤖",
                href: "/services/ai",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuredVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className="bg-gradient-to-br from-[#0c0515] to-[#1a1030] border-purple-900/50 overflow-hidden h-full hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4 font-jakarta">{service.description}</p>
                      <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-jakarta">
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Added above the CTA */}
      <section className="py-16 md:py-24" ref={faqRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Got Questions?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Frequently Asked <AnimatedText text="Questions" className="text-purple-400" />
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-jakarta leading-relaxed">
              Find answers to common questions about our digital marketing services and approach.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24" ref={ctaRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-purple-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to <AnimatedText text="Transform" /> Your Digital Strategy?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-jakarta leading-relaxed">
              Get in touch with our experts today and discover how we can help you achieve your business goals.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950 text-white font-jakarta font-medium tracking-wide"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
