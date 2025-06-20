import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Partners } from "@/components/partners"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <LoadingScreen />
      <ParticleBackground />
      <FloatingElements />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
