"use client"

import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Check, Users, Coffee, Heart, Zap, Award, Briefcase, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import AnimatedText from "@/components/animated-text"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

// Benefits of working at the company
const benefits = [
  {
    icon: <Users className="h-10 w-10 text-purple-400" />,
    title: "Collaborative Culture",
    description: "Work with a diverse team of experts who are passionate about digital marketing and innovation.",
  },
  {
    icon: <Coffee className="h-10 w-10 text-purple-400" />,
    title: "Flexible Work",
    description: "Enjoy remote and hybrid work options with flexible hours to maintain a healthy work-life balance.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-400" />,
    title: "Professional Growth",
    description: "Access to continuous learning opportunities, conferences, workshops, and certification programs.",
  },
  {
    icon: <Heart className="h-10 w-10 text-purple-400" />,
    title: "Comprehensive Benefits",
    description: "Competitive salary, health insurance, retirement plans, and generous paid time off.",
  },
  {
    icon: <Award className="h-10 w-10 text-purple-400" />,
    title: "Recognition Programs",
    description: "Regular recognition for outstanding work and contributions to the company's success.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-purple-400" />,
    title: "Challenging Projects",
    description: "Work on diverse and challenging projects across various industries and digital marketing channels.",
  },
]

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  // Intersection observers for animations
  const { ref: heroRef, isIntersecting: heroVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: cultureRef, isIntersecting: cultureVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: benefitsRef, isIntersecting: benefitsVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: applicationRef, isIntersecting: applicationVisible } = useIntersectionObserver({ threshold: 0.1 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Scroll to top of form to show success message
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }, 1500)
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section ref={heroRef as React.RefObject<HTMLDivElement>} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Build Your Career at{" "}
              <AnimatedText
                text={["AdfinityHub", "Our Agency", "The Future"]}
                className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent"
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join our team of digital marketing experts and help transform the online presence of businesses worldwide.
              We're looking for passionate individuals who thrive on creativity, innovation, and results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="#application">Apply Now</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Company Culture Section */}
        <section
          ref={cultureRef as React.RefObject<HTMLDivElement>}
          className="py-16 bg-[#050508]/70 rounded-2xl mb-20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={cultureVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
                Our Culture
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Makes <span className="text-purple-400">AdfinityHub</span> Special
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We've built a culture that values innovation, collaboration, and personal growth. Here's what you can
                expect when you join our team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={cultureVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  To empower businesses with innovative digital marketing solutions that drive growth, enhance brand
                  visibility, and create meaningful connections with their audience.
                </p>
                <p className="text-gray-300">
                  We combine human creativity with artificial intelligence to deliver strategies that are both
                  innovative and effective, helping our clients stay ahead in a rapidly evolving digital landscape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={cultureVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Innovation</span> - We constantly push boundaries and
                      explore new technologies
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Excellence</span> - We strive for excellence in
                      everything we do
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Integrity</span> - We operate with transparency and
                      honesty
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Results-Driven</span> - We focus on delivering measurable
                      results
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef as React.RefObject<HTMLDivElement>} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Why Work With Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Working at <span className="text-purple-400">AdfinityHub</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We believe in taking care of our team and providing an environment where you can thrive both
              professionally and personally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#0c0515]/70 border-purple-900/50 h-full hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-4 rounded-full inline-block mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section id="application" ref={applicationRef as React.RefObject<HTMLDivElement>} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={applicationVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Apply Now
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your <span className="text-purple-400">Application</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Fill out the form below to apply for a position at AdfinityHub. We'll review your application and get back
              to you soon.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto" ref={formRef}>
            <Card className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 border-purple-900/50 overflow-hidden">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-6 rounded-full inline-flex mb-6"
                      animate={{ scale: [0.8, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="h-12 w-12 text-purple-400" />
                    </motion.div>
                    <motion.h3
                      className="text-3xl font-bold mb-2"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Application Submitted!
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-8 text-lg"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Thank you for your interest in joining AdfinityHub. Our team will review your application and
                      contact you soon.
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                        }}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      >
                        Submit Another Application
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">
                            Full Name <span className="text-purple-500">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            required
                            className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email Address <span className="text-purple-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">
                            Position You're Interested In <span className="text-purple-500">*</span>
                          </Label>
                          <Input
                            id="position"
                            name="position"
                            required
                            className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                            placeholder="E.g., Marketing Specialist, Web Developer, etc."
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio or LinkedIn URL</Label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          type="url"
                          placeholder="https://"
                          className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resume">
                          Resume/CV <span className="text-purple-500">*</span>
                        </Label>
                        <Input
                          id="resume"
                          name="resume"
                          type="file"
                          required
                          className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                        />
                        <p className="text-xs text-gray-400">Upload your resume (PDF, DOC, or DOCX format, max 5MB)</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter</Label>
                        <Textarea
                          id="coverLetter"
                          name="coverLetter"
                          rows={5}
                          className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all resize-none"
                          placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                        />
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row sm:justify-end">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
