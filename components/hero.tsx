"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Building2, Star, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [bubbles, setBubbles] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >([])
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Générer les bulles uniquement côté client
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 6 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${i * 0.5}s`,
      duration: `${3 + Math.random() * 2}s`,
    }))
    setBubbles(generatedBubbles)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollProject = () =>{
    const element = document.getElementById("realisations")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
      <div
        className="absolute inset-0 
          bg-gradient-to-br 
          from-blue-100/40 via-blue-200/40 to-blue-300/40 
          dark:from-blue-900/20 dark:via-purple-900/20 dark:to-blue-800/20 
          transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      <div
        className="absolute inset-0 
          bg-gradient-to-tl 
          from-white via-white to-blue-100/15 
          dark:from-purple-900/10 dark:via-blue-900/10 dark:to-indigo-900/10 
          transition-all duration-1000"
        style={{
          transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
        }}
      />
    </div>


      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                <div className="justify-center align-center">
                  <h1 className="text-5xl md:text-7xl font-bold">
                    <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-800 bg-clip-text text-transparent animate-gradient">
                      PEGGY DERRICK 
                      <br />
                      <span className="text-2xl font-light text-black dark:text-blue-400 mt-2"> SARL,</span>
                      </span>
                  </h1>
                </div>
              </div>

              <div className="relative">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Votre partenaire de confiance pour la{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      construction
                    </span>
                    <span>
                      , l'entretien et les services divers en Côte d'Ivoire
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              {[
                { icon: Users, value: "500+", label: "Clients satisfaits" },
                { icon: Building2, value: "200+", label: "Projets réalisés" },
                { icon: Award, value: "15+", label: "Années d'expérience" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-3">
                    <stat.icon className="h-8 w-8 mx-auto text-blue-500 group-hover:text-purple-500 transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>  

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group border-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                onClick={scrollProject}
                variant="outline"
                size="lg"
                className="relative overflow-hidden border-2 border-blue-500 text-blue-600 hover:text-white px-8 py-4 text-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Nos réalisations</span>
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className="relative">
            <div
              className="relative group perspective-1000"
              style={{
                transform: `rotateY(${mousePosition.x * 10 - 5}deg) rotateX(${mousePosition.y * 10 - 5}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

                <img
                  src="/ingenieur-en-batiment.jpg"
                  alt="Chantier de construction PEGGY DERRICK SARL"
                  className="w-full h-96 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
