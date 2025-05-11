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
  title: "Sadeepa Sri Rohanasinghe - Fullstack Software Engineer",
  description: "I'm Sadeepa, a fullstack software engineer from Sri Lanka. Explore my portfolio, projects, and skills.",
  keywords: ["Sadeepa", "Sadeepa Sri Rohanasinghe", "Fullstack Developer", "Software Engineer", "Portfolio", "React", "Next.js", "JavaScript"],
  metadataBase: new URL("https://your-website-url.com"), // Replace with actual domain
  openGraph: {
    title: "Sadeepa Sri Rohanasinghe - Portfolio",
    description: "Discover Sadeepa's latest projects and technical skills as a fullstack software engineer.",
    url: "https://sadeepa-sri-rohanasinghe-39s6.vercel.app/",
    siteName: "Sadeepa's Portfolio",
    images: [
      {
        url: "/public/assets/me.jpg", // should be an absolute or public path
        width: 800,
        height: 600,
        alt: "Sadeepa Sri Rohanasinghe",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sadeepa Sri Rohanasinghe" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sadeepa-sri-rohanasinghe-39s6.vercel.app/" />
        <link rel="icon" href="/assets/me.jpg" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
