import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/sections/footer/Footer";
import { Navbar } from "@/components/sections/navbar/Navbar";

export const metadata: Metadata = {
  title: "Saadat Ali",
  description: "Full Stack Developer | Software Engineer | Tech Enthusiast | 5 Years of Experience | Passionate about Building Scalable Applications | Open Source Contributor | Tech Blogger | Mentor | Lifelong Learner | Problem Solver | Team Player",
  keywords: [
    "Saadat Ali",
    "Full Stack Developer",
    "Software Engineer",
    "Tech Enthusiast",
    "5 Years of Experience",
    "Passionate about Building Scalable Applications",
    "Open Source Contributor",
    "Tech Blogger",
    "Mentor",
    "Lifelong Learner",
    "Problem Solver",
    "Team Player",
  ],
  authors: [
    {
      name: "Saadat Ali",
      url: "https://saadat-ali.com",
    },
    ],
  viewport: "width=device-width, initial-scale=1",
  creator: "Saadat Ali",
  publisher: "Saadat Ali",
  openGraph: {
    title: "Saadat Ali",
    description: "Full Stack Developer | Software Engineer | Tech Enthusiast | 5 Years of Experience | Passionate about Building Scalable Applications | Open Source Contributor | Tech Blogger | Mentor | Lifelong Learner | Problem Solver | Team Player",
    url: "https://saadat-ali.com",
    siteName: "Saadat Ali",
    images: [
      {
        url: "https://saadat-ali.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saadat Ali",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saadat Ali",
    description: "Full Stack Developer | Software Engineer | Tech Enthusiast | 5 Years of Experience | Passionate about Building Scalable Applications | Open Source Contributor | Tech Blogger | Mentor | Lifelong Learner | Problem Solver | Team Player",
    images: [
      {
        url: "https://saadat-ali.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saadat Ali",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased dark`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
