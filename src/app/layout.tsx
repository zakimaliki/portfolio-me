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
  title: "Web Developer Portfolio - Zaki Maliki | Frontend & EdTech",
  description: "Welcome to Web Developer Zaki Maliki's portfolio. Explore frontend development projects, web development experience, and professional services. Contact me for web development solutions.",
  alternates: {
    canonical: "https://yourportfolio.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Zaki Maliki - Web Developer",
    title: "Web Developer Portfolio - Zaki Maliki | Frontend & EdTech",
    description: "Professional Web Developer Portfolio showcasing React, Next.js, and full-stack development projects.",
    images: [
      {
        url: "https://yourportfolio.com/avatar.png",
        width: 800,
        height: 800,
        alt: "Zaki Maliki - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Portfolio - Zaki Maliki",
    description: "Explore my web development projects and services",
  },
  robots: "index, follow",
  keywords: "web developer, frontend developer, React, Next.js, full-stack development, web applications",
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
