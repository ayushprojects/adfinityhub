"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function OptimizedImage({ src, alt, width, height, className, priority = false }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "200px", // Start loading when image is 200px from viewport
      },
    )

    const currentElement = document.getElementById(`image-${src.replace(/\W/g, "")}`)
    if (currentElement) observer.observe(currentElement)

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [src, priority])

  return (
    <div
      id={`image-${src.replace(/\W/g, "")}`}
      className={cn("overflow-hidden relative", className)}
      style={{ width, height }}
    >
      {(isInView || priority) && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
        />
      )}
      {(!isLoaded || !isInView) && (
        <div className="absolute inset-0 bg-gray-800/20 animate-pulse" style={{ width, height }} />
      )}
    </div>
  )
}
