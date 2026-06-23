import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hmtambe.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "mr-IN": "/mr",
    },
  },
  title: {
    default: "Hemant Maruti Tambe | HMT Civil Works Contractor Pune",
    template: "%s | HMT",
  },
  applicationName: "HMT Hemant Maruti Tambe",
  description:
    "Hemant Maruti Tambe is Managing Director of HMT, a civil engineer and civil works contractor serving Pune city and Pune district.",
  keywords: [
    "Hemant Maruti Tambe",
    "HMT",
    "civil engineer Pune",
    "civil works contractor Pune",
    "construction contractor Pune",
    "architectural planning Pune",
    "licensing Pune",
    "Hadapsar construction contractor",
  ],
  authors: [{ name: "Hemant Maruti Tambe" }],
  creator: "HMT",
  publisher: "HMT",
  category: "Construction",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Hemant Maruti Tambe | HMT Civil Works Contractor Pune",
    description:
      "Civil works, construction contracting, development support, architectural planning, and licensing across Pune.",
    type: "website",
    url: siteUrl,
    siteName: "HMT Hemant Maruti Tambe",
    locale: "en_IN",
    localeAlternate: ["mr_IN"],
    images: [
      {
        url: "/hmt-logo.jpeg",
        width: 1160,
        height: 676,
        alt: "HMT Hemant Maruti Tambe logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemant Maruti Tambe | HMT",
    description:
      "Civil engineer and civil works contractor serving Pune city and Pune district.",
    images: ["/hmt-logo.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HMT",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansDevanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
