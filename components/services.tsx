"use client"

import { useEffect, useRef, useState } from "react"
import { Building, Wrench, Settings, Home, Factory, Paintbrush, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Building,
      title: "Construction",
      description:
        "Construction de bâtiments résidentiels, commerciaux et industriels avec des matériaux de qualité supérieure.",
      features: ["Maisons individuelles", "Immeubles", "Bureaux", "Entrepôts"],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]",
    },
    {
      icon: Wrench,
      title: "Entretien",
      description: "Services d'entretien et de maintenance pour préserver la valeur de vos biens immobiliers.",
      features: ["Maintenance préventive", "Réparations", "Rénovations", "Mise aux normes"],
      color: "from-purple-500 to-pink-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]",
    },
    {
      icon: Settings,
      title: "Services Divers",
      description: "Une gamme complète de services pour répondre à tous vos besoins en bâtiment.",
      features: ["Plomberie", "Électricité", "Climatisation", "Aménagement"],
      color: "from-green-500 to-emerald-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]",
    },
    {
      icon: Home,
      title: "Rénovation",
      description: "Transformation et modernisation de vos espaces existants selon vos goûts et besoins.",
      features: ["Rénovation complète", "Aménagement intérieur", "Extension", "Modernisation"],
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]",
    },
    {
      icon: Factory,
      title: "Industriel",
      description: "Solutions spécialisées pour les projets industriels et commerciaux de grande envergure.",
      features: ["Usines", "Hangars", "Infrastructures", "Équipements"],
      color: "from-indigo-500 to-purple-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]",
    },
    {
      icon: Paintbrush,
      title: "Finitions",
      description: "Travaux de finition et de décoration pour sublimer vos espaces avec élégance.",
      features: ["Peinture", "Carrelage", "Menuiserie", "Décoration"],
      color: "from-teal-500 to-green-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]",
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 animate-float"
            style={{
              background: `linear-gradient(45deg, ${i % 2 === 0 ? "#3B82F6" : "#8B5CF6"}, ${i % 2 === 0 ? "#06B6D4" : "#EC4899"})`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Nos Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services de construction, d'entretien et de services divers pour tous
              vos projets en Côte d'Ivoire.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl h-full">
                {/* Animated Background Pattern */}
                <div
                  className={`absolute inset-0 ${service.bgPattern} transition-opacity duration-500 ${hoveredCard === index ? "opacity-100" : "opacity-0"}`}
                ></div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500`}
                    ></div>
                  </div>

                  <CardTitle className="text-2xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
