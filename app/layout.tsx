import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { type Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { HTML_DIR, I18nProvider } from "@/lib/i18n"
import { getI18n } from "@/lib/i18n/server"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Arabic fallback for every font stack: Geist has no Arabic glyphs, so
// per-glyph fallback picks this up for Arabic text while Latin stays Geist.
const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
})

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()

  return {
    metadataBase: new URL("https://mave.app"),

    title: {
      default: t("common.metadata.titleDefault"),
      template: t("common.metadata.titleTemplate"),
    },

    description: t("common.metadata.description"),

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
      title: t("common.metadata.titleDefault"),
      description: t("common.metadata.ogDescription"),
      url: "https://mave.app",
    },

    twitter: {
      card: "summary_large_image",
      title: t("common.metadata.titleDefault"),
      description: t("common.metadata.ogDescription"),
    },

    icons: {
      icon: "/icon.png",
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { locale } = await getI18n()

  return (
    <html
      lang={locale}
      dir={HTML_DIR[locale]}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        arabicFont.variable
      )}
    >
      <body className={``}>
        <ThemeProvider>
          <Toaster
            richColors
            visibleToasts={2}
            
            closeButton
            position="bottom-center"
          />
          <I18nProvider locale={locale}>
            <TooltipProvider>{children}</TooltipProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
