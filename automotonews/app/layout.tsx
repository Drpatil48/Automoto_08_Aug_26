import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { HeaderAd } from "@/components/ads/HeaderAd";
import { MobileAnchorAd } from "@/components/ads/MobileAnchorAd";
import { CompareTray } from "@/components/compare/CompareTray";
import { CompareTrayProvider } from "@/components/compare/CompareTrayProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  defaultOgImageUrl,
  getSiteUrl,
} from "@/lib/seo";
import "@/styles/globals.css";

const latin = Inter({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  // Variable font when available — fewer bytes than discrete 400–700 files.
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "mr_IN",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    images: [{ url: defaultOgImageUrl(), alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [defaultOgImageUrl()],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={`${latin.variable} ${devanagari.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] antialiased md:pb-0">
        <CompareTrayProvider>
          <AdSenseScript />
          <JsonLd data={[buildOrganizationJsonLd(), buildWebSiteJsonLd()]} />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <HeaderAd />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CompareTray />
          <MobileAnchorAd />
        </CompareTrayProvider>
      </body>
    </html>
  );
}
