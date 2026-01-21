import type React from "react"
import { LanguageProvider } from "@/components/language-context"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ishan Learning",
  description: "Learn Smart, Stay Confident",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logonev.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logonev.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logonev.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
