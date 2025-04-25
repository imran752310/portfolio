import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Global/Navbar";
import { Footer } from "@/Components/Global/Footer";

// Font Config
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Imran | Full Stack Developer Portfolio",
  description: "Hi, I'm Imran — a Full Stack Developer specializing in React, Next.js, FastAPI, and modern web technologies.",
  keywords: ["Imran", "Full Stack Developer", "React", "Next.js", "FastAPI", "Portfolio", "Web Developer in Pakistan"],
  authors: [{ name: "Imran", url: "https://yourdomain.com" }],
  creator: "Imran",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Imran | Full Stack Developer Portfolio",
    description: "Explore my web development projects built with React, Next.js, FastAPI, and more.",
    url: "https://yourdomain.com",
    siteName: "Imran Portfolio",
    images: [
      {
        url: "/portfolio-preview.png", // Make sure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Imran Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran | Full Stack Developer Portfolio",
    description: "Check out my portfolio of modern full-stack web development projects.",
    images: ["/portfolio-preview.png"],
    creator: "@yourTwitterHandle", // Replace with yours or remove
  },
  icons: {
    icon: "/favicon.ico",
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
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
