"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
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

  const projects = [
    {
      id: 1,
      title: "Résidence Les Palmiers",
      category: "Résidentiel",
      location: "Cocody, Abidjan",
      date: "2024",
      description:
        "Construction d'un complexe résidentiel moderne de 24 appartements avec piscine et espaces verts luxuriants.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Terminé",
      color: "from-blue-500 to-cyan-500",
      budget: "2.5M FCFA",
      duration: "18 mois",
    },
    {
      id: 2,
      title: "Centre Commercial Plateau",
      category: "Commercial",
      location: "Plateau, Abidjan",
      date: "2023",
      description:
        "Rénovation complète d'un centre commercial avec modernisation des façades et des espaces intérieurs.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Terminé",
      color: "from-purple-500 to-pink-500",
      budget: "1.8M FCFA",
      duration: "12 mois",
    },
    {
      id: 3,
      title: "Usine Agroalimentaire",
      category: "Industriel",
      location: "Zone Industrielle, Yopougon",
      date: "2024",
      description: "Construction d'une usine de transformation agroalimentaire avec équipements spécialisés de pointe.",
      image: "/placeholder.svg?height=300&width=400",
      status: "En cours",
      color: "from-green-500 to-emerald-500",
      budget: "4.2M FCFA",
      duration: "24 mois",
    },
    {
      id: 4,
      title: "Villa Moderne Riviera",
      category: "Résidentiel",
      location: "Riviera, Abidjan",
      date: "2023",
      description: "Construction d'une villa contemporaine avec piscine, jardin paysager et domotique intégrée.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Terminé",
      color: "from-orange-500 to-red-500",
      budget: "800K FCFA",
      duration: "10 mois",
    },
    {
      id: 5,
      title: "Bureaux Corporate",
      category: "Commercial",
      location: "Marcory, Abidjan",
      date: "2024",
      description:
        "Aménagement de bureaux modernes pour une entreprise internationale avec espaces collaboratifs innovants.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Terminé",
      color: "from-indigo-500 to-purple-500",
      budget: "1.2M FCFA",
      duration: "8 mois",
    },
    {
      id: 6,
      title: "Entrepôt Logistique",
      category: "Industriel",
      location: "Port-Bouët, Abidjan",
      date: "2023",
      description:
        "Construction d'un entrepôt logistique de 5000m² avec quais de chargement et bureaux administratifs.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Terminé",
      color: "from-teal-500 to-green-500",
      budget: "3.5M FCFA",
      duration: "16 mois",
    },
  ]

  const categories = ["Tous", "Résidentiel", "Commercial", "Industriel"]

  const filteredProjects =
    selectedCategory === "Tous" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section ref={sectionRef} id="realisations" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 dark:from-gray-900/50 dark:to-blue-900/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Nos Réalisations
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise et de notre engagement
              envers la qualité exceptionnelle.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      : "border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{category}</span>
                  {selectedCategory !== category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Terminé" ? "default" : "secondary"}
                      className={`${
                        project.status === "Terminé"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                          : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      } text-white border-0 shadow-lg`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Link href={`/projet/${project.id}`}>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white/90 hover:bg-white text-gray-900 transform scale-90 group-hover:scale-100 transition-transform duration-300"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Voir détails
                        </Button>
                      </Link>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-blue-600/90 hover:bg-blue-700 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mr-2`}></div>
                        <span className="text-gray-500 dark:text-gray-400">Budget: {project.budget}</span>
                      </div>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mr-2`}></div>
                        <span className="text-gray-500 dark:text-gray-400">Durée: {project.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                        {project.date}
                      </div>
                    </div>
                  </div>

                  <Link href={`/projet/${project.id}`} className="mt-auto">
                    <Button
                      variant="ghost"
                      className="w-full mt-4 group-hover:bg-gradient-to-r group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"
                    >
                      Voir le projet complet
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              Voir tous nos projets
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
