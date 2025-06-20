"use client"

import { useEffect, useState } from "react"
import { Building2, Star, Zap, Shield, Award, Target } from "lucide-react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const icons = [Building2, Star, Zap, Shield, Award, Target]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute opacity-5 dark:opacity-10"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
            transform: `translate(${mousePosition.x * (20 + index * 5)}px, ${mousePosition.y * (15 + index * 3)}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <Icon
            className={`w-16 h-16 text-blue-500 animate-float`}
            style={{
              animationDuration: `${4 + index}s`,
              animationDelay: `${index * 0.8}s`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
