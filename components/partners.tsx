"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Factory, Home, Store, Briefcase, Globe } from "lucide-react"
import Image from "next/image"

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)
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

  const partners = [
    {
      name: "FILITSAC",
      category: "Industrie",
      description: "Cabinet d'architecture de renom spécialisé dans les projets commerciaux et résidentiels.",
      icon: Building2,
      image: "filtisac2.png",
      color: "from-blue-500 to-cyan-500",
      projects: "100+ projets",
    },
    {
      name: "SDCI",
      category: "Industrie",
      description: "Société de Développement du Caoutchouc Ivoirien.",
      icon: Factory,
      image: "SDCI.jpg",
      color: "from-green-500 to-emerald-500",
      projects: "8+ projets",
    },
    {
      name: "ASSI Architecture",
      category: "Design",
      description: "Cabinet spécialisé dans l'architecture moderne et durable.",
      icon: Home,
      image: "filtisac1.png",
      color: "from-purple-500 to-pink-500",
      projects: "12+ projets",
    },
    {
      name: "MENSAH Logistics",
      category: "Logistique",
      description: "Solutions logistiques intégrées pour l'Afrique de l'Ouest.",
      icon: Store,
      image: "filtisac1.png",
      color: "from-orange-500 to-red-500",
      projects: "6+ projets",
    },
    {
      name: "Banque Atlantique",
      category: "Finance",
      description: "Institution financière de référence en Afrique de l'Ouest.",
      icon: Briefcase,
      image: "filtisac1.png",
      color: "from-indigo-500 to-purple-500",
      projects: "4+ projets",
    },
    {
      name: "Orange Côte d'Ivoire",
      category: "Télécoms",
      description: "Leader des télécommunications et services numériques.",
      icon: Globe,
      image: "filtisac1.png",
      color: "from-teal-500 to-green-500",
      projects: "10+ projets",
    },
  ]

  return (
    <section ref={sectionRef} id="partenaires" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Nos Partenaires
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nous collaborons avec les leaders de l'industrie pour offrir des solutions exceptionnelles et innovantes à
              nos clients en Côte d'Ivoire et en Afrique de l'Ouest.
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl h-full">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${partner.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
                    >
                      <partner.icon className="h-8 w-8 text-white" />

                      <Image
                        src={partner.image}
                        alt="Logo partenaire"
                        width={1000} // ou la taille souhaitée
                        height={900}
                        className="object-contain rounded-full h-15 w-15"
                      />


                    </div>
                    <Badge variant="outline" className={`bg-gradient-to-r ${partner.color} text-white border-0`}>
                      {partner.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {partner.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{partner.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{partner.projects}</span>
                    <div className={`w-3 h-3 bg-gradient-to-r ${partner.color} rounded-full animate-pulse`}></div>
                  </div>
                </CardContent>

                {/* Decorative Element */}
                <div
                  className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r ${partner.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "50+", label: "Partenaires actifs", color: "from-blue-500 to-cyan-500" },
            { value: "200+", label: "Projets collaboratifs", color: "from-purple-500 to-pink-500" },
            { value: "15+", label: "Années de partenariat", color: "from-green-500 to-emerald-500" },
            { value: "98%", label: "Taux de satisfaction", color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
