import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hmt-construction.example"),
  title: {
    default: "Hemant Maruti Tambe | HMT Civil Works Contractor Pune",
    template: "%s | HMT",
  },
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
  openGraph: {
    title: "Hemant Maruti Tambe | HMT Civil Works Contractor Pune",
    description:
      "Civil works, construction contracting, development support, architectural planning, and licensing across Pune.",
    type: "website",
    locale: "en_IN",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
