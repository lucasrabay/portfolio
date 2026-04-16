import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — AI Engineer & Builder",
  description:
    "I design and build intelligent systems that bridge research and production. Focused on large language models, retrieval-augmented generation, and developer tooling.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Your Name — AI Engineer & Builder",
    description:
      "I design and build intelligent systems that bridge research and production.",
    url: "https://yourdomain.com",
    siteName: "Your Name",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — AI Engineer & Builder",
    description:
      "I design and build intelligent systems that bridge research and production.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="font-sans bg-background text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
