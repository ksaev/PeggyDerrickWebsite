import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PEGGY DERRICK SARL - Construction & Services",
  description:
    "Entreprise basée à Abidjan spécialisée dans la construction, l'entretien, la rénovation et les services industriels. Expertise, qualité et passion au service de vos projets.",
  keywords: [
    "construction Côte d'Ivoire",
    "entretien bâtiment",
    "rénovation Abidjan",
    "services industriels",
    "entreprise de bâtiment",
    "PEGGY DERRICK SARL"
  ],
  openGraph: {
    title: "PEGGY DERRICK SARL",
    description: "Expert en construction, entretien, rénovation à Abidjan",
    url: "http://localhost:3000/",
    siteName: "PEGGY DERRICK",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Image de présentation de PEGGY DERRICK SARL"
      }
    ],

  },
  metadataBase: new URL("http://localhost:3000"), // important !

  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
