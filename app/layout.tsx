import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { themeInitScript } from "@/lib/theme"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F1F1F1",
}

export const metadata: Metadata = {
  title: "Sistemas a medida para tu empresa | Misionary",
  description:
    "Desarrollamos sistemas web personalizados para automatizar y escalar tu negocio. +10 empresas con sistemas activos. Posadas, Misiones, Argentina.",
  keywords: [
    "sistemas a medida",
    "software para empresas Argentina",
    "desarrollo de sistemas Posadas",
    "agencia software Misiones",
    "software factory NEA",
  ],
  openGraph: {
    title: "Sistemas a medida para tu empresa | Misionary",
    description:
      "Sistemas web personalizados para automatizar y escalar tu negocio. +10 empresas con sistemas activos.",
    url: "https://misionary.dev/sistemas",
    siteName: "Misionary",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://cdn.misionary.misionary.com.ar/Logos%20Misionary_MSNR-13.svg",
        width: 1200,
        height: 630,
        alt: "Misionary — Sistemas a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas a medida para tu empresa | Misionary",
    description: "Sistemas web personalizados para automatizar y escalar tu negocio.",
    images: [
      "https://cdn.misionary.misionary.com.ar/Logos%20Misionary_MSNR-13.svg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} min-h-dvh overflow-x-clip`}
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
