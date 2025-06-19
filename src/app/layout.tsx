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
  title: "Rishabh Bansal - AI-Focused Full Stack Developer",
  description: "AI-Focused Full Stack Developer with 2+ years building scalable web applications using Node.js, Next.js and AI technologies. Specializing in LangChain, OpenAI API, and enterprise solutions.",
  keywords: ["Full Stack Developer", "AI Developer", "Next.js", "Node.js", "LangChain", "React", "Rishabh Bansal"],
  authors: [{ name: "Rishabh Bansal" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Rishabh Bansal - AI-Focused Full Stack Developer",
    description: "AI-Focused Full Stack Developer with 2+ years building scalable web applications using Node.js, Next.js and AI technologies.",
    type: "website",
    locale: "en_US",
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
