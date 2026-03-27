import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Xenon Tech | Premium Tech & AI Agency",
    template: "%s | Xenon Tech",
  },
  description: "Elite full-stack development, Advanced AI-driven solutions & Products, and custom automation for visionary global high-growth brands.",
  keywords: ["Tech Agency", "AI Solutions", "Software Development", "Automation", "Next.js", "Full-stack Development", "Digital Transformation", "Ethiopia Tech", "Cloud Solutions"],
  authors: [{ name: "Xenon Tech" }],
  creator: "Xenon Tech",
  publisher: "Xenon Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://xenon.tech"), // Adjust to actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xenon.tech",
    title: "Xenon Tech | Engineering Bold Ideas",
    description: "Advanced AI-driven solutions and elite software development for visionary brands.",
    siteName: "Xenon Tech",
    images: [
      {
        url: "/logo.png", // Assuming an OG image exists or will be added
        width: 1200,
        height: 630,
        alt: "Xenon Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xenon Tech | Engineering Bold Ideas",
    description: "Advanced AI-driven solutions and elite software development.",
    images: ["/logo.png"],
    creator: "@xenontech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="theme-strategy"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
        <Script
          id="json-ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Xenon Tech",
              "url": "https://xenon.tech",
              "logo": "https://xenon.tech/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+251963889227",
                "contactType": "customer service",
                "availableLanguage": ["en", "am"]
              },
              "sameAs": [
                "https://twitter.com/xenontech",
                "https://linkedin.com/company/xenontech"
              ]
            })
          }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Xenon Tech",
              "url": "https://xenon.tech",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://xenon.tech/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
