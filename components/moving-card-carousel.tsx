"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users, TrendingUp, Database, Target, Award } from "lucide-react"
import { memo } from "react"

interface CardData {
  icon: React.ReactNode
  title: string
  description: string
  stat: string
  color: string
}

const MovingCardCarousel = memo(function MovingCardCarousel() {
  const cards: CardData[] = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Growth",
      description: "Expanding your customer base with targeted acquisition strategies",
      stat: "+45%",
      color: "from-purple-500/20 to-purple-700/20",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Marketing Campaigns",
      description: "Optimized multi-channel campaigns that drive engagement",
      stat: "12x",
      color: "from-indigo-500/20 to-indigo-700/20",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ROI Increase",
      description: "Measurable return on investment through data-driven strategies",
      stat: "+78%",
      color: "from-blue-500/20 to-blue-700/20",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Comprehensive insights from advanced data processing",
      stat: "10TB+",
      color: "from-cyan-500/20 to-cyan-700/20",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Conversion Rate",
      description: "Higher conversion through optimized user journeys",
      stat: "+63%",
      color: "from-violet-500/20 to-violet-700/20",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Brand Recognition",
      description: "Increased brand awareness and market positioning",
      stat: "5x",
      color: "from-fuchsia-500/20 to-fuchsia-700/20",
    },
  ]

  // Reduced number of duplicated cards for better performance
  const allCards = [...cards, ...cards]

  return (
    <div className="relative overflow-hidden">
      {/* First carousel - continuously moving forward */}
      <div className="relative">
        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: [0, -1800], // Reduced distance for better performance
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 60, // Slower speed for better readability
              ease: "linear",
            },
          }}
          style={{
            width: "fit-content", // Ensure the container fits all cards
          }}
        >
          {allCards.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[350px]"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
                zIndex: 10,
              }}
            >
              <Card
                className={`bg-gradient-to-br ${card.color} border-purple-900/50 h-full overflow-hidden hover:border-purple-500/50 transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-purple-900/30 p-3 rounded-lg">{card.icon}</div>
                    <div className="text-2xl font-bold text-purple-400">{card.stat}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-gray-400 font-jakarta mb-4">{card.description}</p>
                  <div className="h-2"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add gradient overlays to create a fade effect at the edges */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#080810] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#080810] to-transparent z-10"></div>
    </div>
  )
})

export default MovingCardCarousel
