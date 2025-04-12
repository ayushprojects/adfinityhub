"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, memo } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface ServiceCircleProps {
  service: {
    id: number
    name: string
    href: string
    icon: string
  }
  index: number
  totalItems: number
  radius: number
}

const ServiceCircle = memo(function ServiceCircle({ service, index, totalItems, radius }: ServiceCircleProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const size = 60 // Size of the service circle
  const { ref, isIntersecting } = useIntersectionObserver({ rootMargin: "200px" })

  useEffect(() => {
    // Calculate position in a circle
    const angle = (index / totalItems) * 2 * Math.PI
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    setPosition({ x, y })
  }, [index, totalItems, radius])

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="service-item"
      style={{
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={
        isIntersecting
          ? {
              opacity: 1,
              scale: 1,
              x: position.x,
              y: position.y,
            }
          : {}
      }
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05,
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      <Link href={service.href} className="flex items-center justify-center w-full h-full">
        <div className="text-center">
          <div className="text-xl">{service.icon}</div>
          <div className="text-xs font-medium mt-1 whitespace-nowrap">{service.name}</div>
        </div>
      </Link>
    </motion.div>
  )
})

export default ServiceCircle
