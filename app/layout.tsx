import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PEGGY DERRICK SARL - Construction, Entretien et Services Divers",
  description:
    "Société de construction, d'entretien et de services divers basée à Cocody II Plateaux, Abidjan. Votre partenaire de confiance en Côte d'Ivoire.",
  keywords: "construction, entretien, services, bâtiment, Abidjan, Côte d'Ivoire, PEGGY DERRICK",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
