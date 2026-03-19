import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Createscape — Creator Workspace Guides",
  description: "Standing desks, ergonomic chairs, lighting, audio equipment, and cameras for content creators. Honest reviews, real comparisons, no BS.",
  keywords: "creator workspace, standing desk, ergonomic setup, podcast equipment, streaming setup, workspace inspiration",
  openGraph: {
    title: "Createscape — Creator Workspace Guides",
    description: "Honest workspace guides for creators. Product reviews, setup comparisons, and budget breakdowns.",
    url: "https://www.createscape.co",
    siteName: "Createscape",
    images: [
      {
        url: "https://www.createscape.co/og-image-homepage.png",
        width: 1200,
        height: 630,
        alt: "Createscape - Creator workspace guides"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Createscape — Creator Workspace Guides",
    description: "Honest workspace guides for creators",
    images: ["https://www.createscape.co/og-image-homepage.png"]
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.createscape.co" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:site_name" content="Createscape" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:creator" content="@createscape" />
      </head>
      <body>{children}</body>
    </html>
  )
}
