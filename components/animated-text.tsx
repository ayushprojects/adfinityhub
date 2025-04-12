"use client"

import { useState, useEffect, useRef, memo } from "react"
import { motion } from "framer-motion"

// Update the AnimatedTextProps interface to accept an array of texts
interface AnimatedTextProps {
  text: string | string[] // Now accepts either a single string or an array of strings
  className?: string
  delay?: number
  typingSpeed?: number
  erasingSpeed?: number
  pauseDuration?: number
  cursorColor?: string
}

const AnimatedText = memo(function AnimatedText({
  text,
  className = "",
  delay = 0,
  typingSpeed = 0.18, // Ultra-slow typing speed
  erasingSpeed = 0.14, // Very slow erasing speed
  pauseDuration = 5000, // Extended pause between cycles
  cursorColor = "bg-purple-500",
}: AnimatedTextProps) {
  // Ensure the component works properly when wrapped in other elements
  const containerStyle = `relative inline-block ${className}`
  const [displayedText, setDisplayedText] = useState("")
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing" | "waiting" | "transitioning">("waiting")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0) // Track which text in the array we're currently displaying

  // Convert single text to array for consistent handling
  const textArray = Array.isArray(text) ? text : [text]

  // Use refs to maintain animation state across renders
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(true)

  // Clean up function to clear any pending timeouts
  const clearAnimationTimeout = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current)
      animationRef.current = null
    }
  }

  // Transition to a new phase with a smooth delay
  const transitionToPhase = (newPhase: "typing" | "pausing" | "erasing" | "waiting", delay = 300) => {
    setPhase("transitioning")
    animationRef.current = setTimeout(() => {
      if (mountedRef.current) setPhase(newPhase)
    }, delay)
  }

  useEffect(() => {
    // Set mounted ref to true when component mounts
    mountedRef.current = true

    // Initial delay before starting
    if (phase === "waiting") {
      animationRef.current = setTimeout(() => {
        if (mountedRef.current) setPhase("typing")
      }, delay * 1000)
      return clearAnimationTimeout
    }

    // Transitioning phase (smooth transition between states)
    if (phase === "transitioning") {
      return clearAnimationTimeout
    }

    // Get the current text to display
    const currentText = textArray[textIndex]

    // Typing phase
    if (phase === "typing") {
      if (currentIndex < currentText.length) {
        // Add significant randomness to typing speed for ultra-natural effect
        // Some characters type faster, some slower, like human typing
        const characterComplexity = currentText[currentIndex] === " " ? 0.7 : 1.0
        const randomFactor = 0.6 + Math.random() * 0.8 // 60% to 140% variation
        const randomDelay = typingSpeed * characterComplexity * randomFactor * 1000

        animationRef.current = setTimeout(() => {
          if (!mountedRef.current) return

          setDisplayedText((prev) => prev + currentText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, randomDelay)
      } else {
        // Finished typing, move to pausing phase with a smooth transition
        transitionToPhase("pausing", 400)
      }
    }

    // Pausing phase (text fully typed, waiting before erasing)
    else if (phase === "pausing") {
      animationRef.current = setTimeout(() => {
        if (mountedRef.current) transitionToPhase("erasing", 400)
      }, pauseDuration)
    }

    // Erasing phase
    else if (phase === "erasing") {
      if (displayedText.length > 0) {
        // Add randomness to erasing speed
        const randomDelay = erasingSpeed * (0.7 + Math.random() * 0.6) * 1000

        animationRef.current = setTimeout(() => {
          if (!mountedRef.current) return

          setDisplayedText((prev) => prev.slice(0, -1))
        }, randomDelay)
      } else {
        // Finished erasing, move to next text in the array
        setTextIndex((prev) => (prev + 1) % textArray.length)
        setCurrentIndex(0) // Reset current index for the new text

        // Wait before typing the next text
        transitionToPhase("typing", 1500) // Longer pause before restarting
      }
    }

    // Cleanup function
    return clearAnimationTimeout
  }, [text, delay, typingSpeed, erasingSpeed, pauseDuration, phase, currentIndex, displayedText, textIndex, textArray])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false
      clearAnimationTimeout()
    }
  }, [])

  // Determine cursor animation state
  const getCursorAnimation = () => {
    switch (phase) {
      case "typing":
        return {
          opacity: [0, 1],
          transition: { duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        }
      case "erasing":
        return {
          opacity: [0, 1],
          transition: { duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        }
      case "pausing":
        return { opacity: 1, transition: { duration: 0.3 } }
      case "transitioning":
        return { opacity: 0.7, transition: { duration: 0.3 } }
      default:
        return { opacity: 0, transition: { duration: 0.3 } }
    }
  }

  const cursorAnimation = getCursorAnimation()

  return (
    <span className={containerStyle}>
      {displayedText}
      <motion.span
        animate={cursorAnimation}
        className={`absolute -right-[2px] top-0 h-full w-[2px] ${cursorColor} transition-opacity duration-300`}
      />
    </span>
  )
})

export default AnimatedText
