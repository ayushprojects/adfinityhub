"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import AnimatedText from "@/components/animated-text";

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

  const differentiators = [
    {
      title: "Founders with Skin in the Game",
      description:
        "We're not just managing your campaigns — we're building your business like it's ours.",
    },
    {
      title: "Tech-First, Strategy-Driven",
      description:
        "We leverage automation, AI, and deep analytics to make better, faster, smarter decisions.",
    },
    {
      title: "Transparent & Result-Focused",
      description:
        "No fluff. Only data, execution, and outcomes that speak for themselves.",
    },
    {
      title: "Global Clients, Local Excellence",
      description:
        "We deliver international-level quality, rooted in a deep understanding of local market needs.",
    },
  ];

  const results = [
    {
      stat: "+63%",
      title: "Conversion Rates",
      description:
        "Optimized user journeys that turn traffic into real customers.",
    },
    {
      stat: "5X",
      title: "Brand Recognition",
      description:
        "From unknown to unforgettable — we position your brand where it matters.",
    },
    {
      stat: "+45%",
      title: "Client Growth",
      description: "Scalable acquisition systems to expand your customer base.",
    },
    {
      stat: "12X",
      title: "Campaign Efficiency",
      description:
        "High-performing, multi-channel campaigns with measurable ROI.",
    },
  ];

  const services = [
    "Search Engine Optimization (SEO)",
    "Performance Ads (Google & Meta)",
    "Email Marketing Automation",
    "Custom Web Design & Development",
    "Conversion-Focused Sales Funnels",
    "Brand Strategy & Positioning",
    "AI-Based Campaign Optimization",
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
            About{" "}
            <AnimatedText
              text="ADFINITYHUB"
              className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Where AI Meets Digital, and Growth Finds a Home
          </p>
        </motion.div>

        {/* Who We Are */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 mb-6">
              ADFINITYHUB is a full-service digital growth agency, born from the
              powerful collaboration between a skilled web developer with a
              flair for sales strategy and a digital marketing expert with over
              5 years of experience in SEO, email marketing, and high-performing
              funnels. Together, they’ve built more than just an agency —
              they’ve created a hub where ideas, AI, and strategy converge to
              help businesses grow globally.
            </p>
            <p className="text-gray-300">
              We serve small to medium-sized businesses across India, USA, UK,
              and Canada, helping them unlock their full potential with smart,
              performance-led digital marketing solutions. Whether you're a
              local service brand or an international eCommerce store, we tailor
              strategies that align with your goals and deliver real, measurable
              growth.
            </p>
          </motion.div>
        </section>

        {/* What We Stand For */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Our Identity
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our name reflects more than identity — it reflects our mindset
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-2 text-purple-400">A</h3>
              <p className="text-gray-300">
                Stands for AI — smart automation, modern web, and future-ready
                thinking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-2 text-indigo-400">D</h3>
              <p className="text-gray-300">
                Stands for Digital Marketing — data-driven campaigns that
                deliver.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-2 text-blue-400">AD</h3>
              <p className="text-gray-300">
                Symbolizes Advertising — our core service and the engine of our
                clients' success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-2 text-purple-400">FINITY</h3>
              <p className="text-gray-300">
                Represents infinite possibilities — scalable strategies,
                unlimited growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-2 text-indigo-400">HUB</h3>
              <p className="text-gray-300">
                Is our commitment — a centralized partner for everything digital
                and performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-3xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              To become the most trusted digital growth partner for businesses
              seeking clarity, creativity, and conversions. We aim to build a
              premium global brand that transforms digital marketing into a
              growth ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To help businesses compete globally by offering data-driven
              digital marketing strategies, ROI-focused paid campaigns, powerful
              SEO and email automation, website design that converts,
              funnel-based lead generation systems, and AI-powered solutions to
              future-proof growth.
            </p>
            <p className="text-gray-300">
              We don't just run ads — we build brand engines that run on
              intelligence, creativity, and results.
            </p>
          </motion.div>
        </section>

        {/* Our Approach */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              How We Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At ADFINITYHUB, every service is tailored, every campaign is
              tracked, and every result is optimized.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-2 text-purple-400">
                Creative + Tech
              </h3>
              <p className="text-gray-300">
                Creative strategy + Tech execution
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-2 text-indigo-400">
                Global + Local
              </h3>
              <p className="text-gray-300">Global vision + Local precision</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                AI + Human
              </h3>
              <p className="text-gray-300">AI tools + Human insight</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8">
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're not here to give you generic services. We're here to create
              a performance system around your business — one that attracts,
              converts, and retains.
            </p>
          </motion.div>
        </section>

        {/* Who We Serve */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Our Clients
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start">
              <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">
                  Local Business Owners
                </h3>
                <p className="text-gray-400">
                  Looking for visibility, leads, and stronger positioning
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start">
              <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">SMBs & Startups</h3>
                <p className="text-gray-400">
                  Needing structured, scalable, and cost-effective marketing
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start">
              <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">
                  International Agencies & Clients
                </h3>
                <p className="text-gray-400">
                  Seeking performance partners with consistent delivery
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start">
              <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">E-commerce Brands</h3>
                <p className="text-gray-400">
                  Wanting to scale sales and streamline user journeys
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              What We Do
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center">
                  <div className="mr-4 bg-purple-500/20 p-2 rounded-full">
                    <Check className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-medium">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Our Difference
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="bg-[#0c0515]/70 border-purple-900/50 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                        <Check className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Client Success
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ADFINITYHUB
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Here's what our clients gain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="bg-[#0c0515]/70 border-purple-900/50 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {result.stat}
                    </div>
                    <h3 className="font-medium text-lg mb-2">{result.title}</h3>
                    <p className="text-gray-400">{result.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0c0515]/90 to-[#1a1030]/90 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
            <p className="text-gray-300 mb-6">
              At ADFINITYHUB, your business is more than a project — it's a
              partnership. We promise:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-gray-300">
                    Strategic focus, not just service execution
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-gray-300">
                    Regular reporting and clear KPIs
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-gray-300">
                    Personal attention and founder involvement
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-purple-500/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-gray-300">
                    Adaptability as you scale
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
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
              digital presence with ADFINITYHUB.
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
