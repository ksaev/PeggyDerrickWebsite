"use client"

import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import {SiX} from "react-icons/si"
import {SiFacebook} from "react-icons/si"
import {SiTelegram} from "react-icons/si"
import {SiInstagram} from "react-icons/si"
import {SiLinkedin} from "react-icons/si"
import {SiWhatsapp} from "react-icons/si"
import {SiXing} from "react-icons/si"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 group">
              <Link href="/">
                <div className="relative">
                
                <Image 
                    src="/peggyderrick_logo.png"
                    alt="Logo Peggy Derrick"
                    width={500}
                    height={500}
                  />                
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
              </Link>


            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Votre partenaire de confiance pour la construction, l'entretien et les services divers en Côte d'Ivoire.
              Nous transformons vos rêves en réalité avec expertise et passion.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: SiFacebook, color: "hover:text-blue-400" },
                { icon: SiInstagram, color: "hover:text-pink-400" },
                { icon: SiLinkedin, color: "hover:text-blue-500" },
                { icon: SiWhatsapp, color: "hover:text-green-400" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                >
                  <social.icon className="h-6 w-6" />
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nos Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              {["Construction", "Entretien", "Rénovation", "Services Industriels", "Finitions", "Aménagement"].map(
                (service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p>Yopougon Niangon Nord</p>
                  <p>14 BP 1464 Abidjan 14</p>
                  <p>Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p>+225 07 09 27 07 36</p>
                  <p>+225 07 09 27 07 38</p>
                </div>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <p>peggyderick75@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} PEGGY DERRICK SARL. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/politique" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Politique de confidentialité
            </Link>
            <Link
               href="/conditions" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Conditions d'utilisation
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </footer>
  )
}
