import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mave.app"),

  title: {
    default: "MAVE — Your ideas, your voice.",
    template: "%s — MAVE",
  },

  description:
    "MAVE turns your ideas into content that sounds like you — written for the platforms you create on.",

  applicationName: "MAVE",

  keywords: [
    "MAVE",
    "AI writing",
    "content creation",
    "content studio",
    "social media content",
    "LinkedIn content",
    "Instagram content",
  ],

  authors: [{ name: "Abdulrahman Saad" }],
  creator: "Abdulrahman Saad",
  publisher: "MAVE",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "MAVE",
    title: "MAVE — Your ideas, your voice.",
    description: "Turn your ideas into content that sounds like you.",
    url: "https://mave.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "MAVE — Your ideas, your voice.",
    description: "Turn your ideas into content that sounds like you.",
  },

  icons: {
    icon: "/icon.png",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className={``}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
