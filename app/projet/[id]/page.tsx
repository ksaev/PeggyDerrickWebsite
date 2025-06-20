import { ProjectDetail } from "@/components/project-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ParticleBackground } from "@/components/particle-background"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Header />
      <main id="project" className="pt-20">
        <ProjectDetail projectId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
