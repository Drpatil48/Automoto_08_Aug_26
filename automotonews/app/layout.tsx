import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { HeaderAd } from "@/components/ads/HeaderAd";
import { MobileAnchorAd } from "@/components/ads/MobileAnchorAd";
import { CompareTray } from "@/components/compare/CompareTray";
import { CompareTrayProvider } from "@/components/compare/CompareTrayProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GoogleAnalyticsScript } from "@/components/analytics/GoogleAnalyticsScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { canRenderLiveAd } from "@/lib/ads";
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasMobileAnchorAd = canRenderLiveAd("mobileAnchor");

  return (
    <html lang="mr" className={`${latin.variable} ${devanagari.variable} light h-full`}>
      <head>
        <link rel="preconnect" href="https://cms.automotonews.in" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cms.automotonews.in" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('automotonews-theme');if(s==='dark'){document.documentElement.classList.add('dark');document.documentElement.classList.remove('light')}else{document.documentElement.classList.add('light');document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`flex min-h-full flex-col antialiased ${
          hasMobileAnchorAd
            ? "pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:pb-0"
            : "pb-0"
        }`}
      >
        <CompareTrayProvider>
          <GoogleAnalyticsScript />
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
