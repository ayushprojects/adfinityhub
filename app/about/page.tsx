"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      icon: "💡",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from strategy development to execution.",
      icon: "🏆",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency and honesty, building trust with our clients and partners.",
      icon: "🤝",
    },
    {
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that drive real business growth.",
      icon: "📈",
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            About AdfinityHub
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            We're a team of digital marketing experts passionate about helping
            businesses thrive in the digital landscape through innovative
            strategies and cutting-edge technology.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-3xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To empower businesses with innovative digital marketing solutions
              that drive growth, enhance brand visibility, and create meaningful
              connections with their audience.
            </p>
            <p className="text-gray-300">
              We combine human creativity with artificial intelligence to
              deliver strategies that are both innovative and effective, helping
              our clients stay ahead in a rapidly evolving digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-3xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              To be the leading digital marketing agency that bridges the gap
              between traditional marketing and advanced technology, setting new
              standards for what's possible in the industry.
            </p>
            <p className="text-gray-300">
              We envision a future where every business, regardless of size, can
              harness the power of AI and digital innovation to achieve
              extraordinary results and sustainable growth.
            </p>
          </motion.div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              What Drives Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with
              our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="bg-[#0c0515]/70 border-purple-900/50 h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Start-up to Industry Leader
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our growth story and key milestones along the way
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2024",
                title: "The Beginning",
                description:
                  "AdfinityHub was founded with a vision to revolutionize digital marketing through innovation and technology.",
              },
              {
                year: "2025",
                title: "Expansion",
                description:
                  "Expanded our service offerings to include comprehensive digital marketing solutions and grew our team of experts.",
              },
              {
                year: "2025",
                title: "AI Integration",
                description:
                  "Pioneered the integration of artificial intelligence into our marketing strategies, setting us apart from competitors.",
              },
              {
                year: "2025",
                title: "Global Reach",
                description:
                  "Expanded our client base internationally, serving businesses across multiple industries and continents.",
              },
              {
                year: "2025",
                title: "Industry Recognition",
                description:
                  "Received multiple industry awards for our innovative approaches and exceptional client results.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-12 last:mb-0">
                <div className="mr-6 flex flex-col items-center">
                  <div className="bg-purple-600 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center">
                    {milestone.year}
                  </div>
                  <div className="h-full w-0.5 bg-purple-600/30 my-2"></div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of businesses that have transformed their
              digital presence with AdfinityHub.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
