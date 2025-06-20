"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const testimonials = [
    {
      id: 1,
      name: "Marie-Claire KOUASSI",
      position: "Directrice Générale",
      company: "KOUASSI & Associés",
      content:
        "PEGGY DERRICK SARL a réalisé la construction de nos nouveaux bureaux avec un professionnalisme exemplaire. La qualité des finitions et le respect des délais nous ont particulièrement impressionnés.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Jean-Baptiste TRAORE",
      position: "Propriétaire",
      company: "Résidence Les Palmiers",
      content:
        "Excellent travail pour la construction de ma villa. L'équipe est compétente, à l'écoute et propose des solutions innovantes. Je recommande vivement leurs services.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Fatou DIALLO",
      position: "Responsable Maintenance",
      company: "Groupe DIALLO Industries",
      content:
        "Nous faisons appel à PEGGY DERRICK SARL pour l'entretien de nos installations industrielles depuis 3 ans. Leur réactivité et leur expertise technique sont remarquables.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "Amadou KONE",
      position: "Gérant",
      company: "Centre Commercial Plateau",
      content:
        "La rénovation de notre centre commercial a été menée avec brio. PEGGY DERRICK SARL a su moderniser nos espaces tout en respectant notre budget et nos contraintes d'exploitation.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "Adjoua ASSI",
      position: "Architecte",
      company: "Cabinet ASSI Architecture",
      content:
        "Une collaboration fructueuse sur plusieurs projets. PEGGY DERRICK SARL comprend parfaitement les exigences architecturales et les traduit avec précision sur le terrain.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      name: "Kofi MENSAH",
      position: "Directeur Technique",
      company: "MENSAH Logistics",
      content:
        "Construction de notre entrepôt logistique dans les temps et selon nos spécifications exactes. Une équipe professionnelle qui maîtrise parfaitement les projets industriels.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      color: "from-teal-500 to-green-500",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
  }

  const visibleTestimonials = testimonials.slice(currentSlide * 3, (currentSlide + 1) * 3)

  return (
    <section ref={sectionRef} id="temoignages" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
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
                Témoignages Clients
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez ce que nos clients disent de nos services et de notre engagement envers la qualité et la
              satisfaction client exceptionnelle.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl group h-full">
                  <CardContent className="p-8 relative">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${testimonial.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 dark:text-gray-300 mb-8 italic leading-relaxed text-lg">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <Avatar className="h-16 w-16 mr-4 ring-4 ring-white/20 group-hover:ring-blue-500/30 transition-all duration-300">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback
                          className={`bg-gradient-to-r ${testimonial.color} text-white text-lg font-bold`}
                        >
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{testimonial.position}</p>
                        <p
                          className={`text-sm bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent font-semibold`}
                        >
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div
                      className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${testimonial.color} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
