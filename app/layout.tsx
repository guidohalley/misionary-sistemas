import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { themeInitScript } from "@/lib/theme"

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAFAFA",
}

const description =
  "Software factory en Posadas, Misiones. Diseñamos, construimos y operamos sistemas a medida conectados con las herramientas de tu empresa."

export const metadata: Metadata = {
  metadataBase: new URL("https://misionary.dev"),
  title: "Sistemas a medida para tu empresa | Misionary",
  description,
  keywords: [
    "sistemas a medida",
    "software para empresas Argentina",
    "desarrollo de sistemas Posadas",
    "software factory Misiones",
    "integraciones de sistemas",
  ],
  openGraph: {
    title: "Sistemas a medida para tu empresa | Misionary",
    description,
    url: "https://misionary.dev",
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
    description,
    images: ["https://cdn.misionary.misionary.com.ar/Logos%20Misionary_MSNR-13.svg"],
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
        className={`${plexSans.variable} ${plexMono.variable} min-h-dvh overflow-x-clip`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
