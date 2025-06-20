"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Users, Award, Shield, Zap, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
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

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en respectant les normes les plus élevées de qualité.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour réaliser leurs visions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et méthodes de construction pour des résultats optimaux.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Notre engagement envers la ponctualité et la qualité fait de nous un partenaire de confiance.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Optimisation des processus pour des délais respectés et une productivité maximale.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Durabilité",
      description: "Engagement pour des constructions respectueuses de l'environnement et durables.",
      color: "from-teal-500 to-green-500",
    },
  ]

  return (
    <section ref={sectionRef} id="apropos" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 dark:from-gray-900/50 dark:to-blue-900/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
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
                À propos de nous
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              PEGGY DERRICK SARL est une entreprise ivoirienne d'exception, spécialisée dans la construction,
              l'entretien et les services divers, basée à Cocody II Plateaux, Abidjan.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Notre Mission
                </span>
              </h3>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Nous nous engageons à fournir des services de construction et d'entretien de haute qualité, en
                  respectant les délais et en dépassant les attentes de nos clients. Notre équipe expérimentée met son
                  savoir-faire au service de vos projets, qu'ils soient résidentiels, commerciaux ou industriels.
                </p>
                <p>
                  Depuis notre création, nous avons bâti notre réputation sur la confiance, la qualité et l'innovation.
                  Chaque projet est une opportunité de démontrer notre expertise et notre engagement envers
                  l'excellence.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src="/homme.jpg"
                alt="Équipe PEGGY DERRICK SARL au travail"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500`}
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    ></div>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {value.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
