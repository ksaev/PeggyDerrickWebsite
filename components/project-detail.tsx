"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, MapPin, Users, Clock, CheckCircle, Eye, Share2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface ProjectDetailProps {
  projectId: string
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Mock project data - in real app, this would come from API
  const projects = {
    "1": {
      id: "1",
      title: "Résidence Les Palmiers",
      category: "Résidentiel",
      location: "Cocody, Abidjan",
      date: "2024",
      duration: "18 mois",
      client: "Groupe Immobilier Palmiers",
      budget: "2.5 milliards FCFA",
      status: "Terminé",
      description:
        "Construction d'un complexe résidentiel moderne de 24 appartements avec piscine et espaces verts luxuriants. Ce projet ambitieux combine architecture contemporaine et respect de l'environnement.",
      longDescription: `
        La Résidence Les Palmiers représente l'excellence en matière de construction résidentielle moderne en Côte d'Ivoire. 
        Ce complexe de 24 appartements haut de gamme a été conçu pour offrir un cadre de vie exceptionnel à ses résidents.

        Le projet intègre des technologies durables, des matériaux de qualité supérieure et des finitions luxueuses. 
        Chaque appartement bénéficie d'une vue panoramique et d'espaces optimisés pour le confort moderne.

        Les espaces communs incluent une piscine olympique, un centre de fitness, des jardins paysagers et un parking souterrain sécurisé.
      `,
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      features: [
        "24 appartements de standing",
        "Piscine olympique",
        "Centre de fitness",
        "Jardins paysagers",
        "Parking souterrain",
        "Système de sécurité 24h/24",
        "Panneaux solaires",
        "Système de récupération d'eau",
      ],
      timeline: [
        { phase: "Études et conception", duration: "3 mois", status: "completed" },
        { phase: "Terrassement et fondations", duration: "4 mois", status: "completed" },
        { phase: "Gros œuvre", duration: "8 mois", status: "completed" },
        { phase: "Second œuvre", duration: "3 mois", status: "completed" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    // Add more projects here...
  }

  const project = projects[projectId as keyof typeof projects]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Chargement du projet...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projet non trouvé</h1>
          <Button onClick={() => router.push("/")} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="mb-6 hover:bg-blue-50 dark:hover:bg-blue-950"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Button>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline" className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                  {project.category}
                </Badge>
                <Badge
                  variant={project.status === "Terminé" ? "default" : "secondary"}
                  className={
                    project.status === "Terminé"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-blue-950">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-blue-950">
                <Download className="h-4 w-4" />
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Eye className="mr-2 h-4 w-4" />
                Visite virtuelle
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index ? "ring-4 ring-blue-500 scale-105" : "hover:scale-105 hover:shadow-lg"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Description détaillée</h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {project.longDescription.split("\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Caractéristiques principales</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Chronologie du projet</h3>
                <div className="space-y-6">
                  {project.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          phase.status === "completed" ? "bg-green-500" : "bg-gray-300"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{phase.phase}</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl sticky top-24">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informations du projet</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Localisation</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Année</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Durée</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Demander un devis similaire
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
