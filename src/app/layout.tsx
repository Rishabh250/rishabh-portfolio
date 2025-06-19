import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rishabh Bansal - AI-Focused Full Stack Developer',
  description:
    'AI-Focused Full Stack Developer with 2+ years building scalable web applications using Node.js, Next.js and AI technologies. Specializing in LangChain, OpenAI API, and enterprise solutions.',
  keywords: [
    'Full Stack Developer',
    'AI Developer',
    'Next.js',
    'Node.js',
    'LangChain',
    'React',
    'Rishabh Bansal',
  ],
  authors: [{ name: 'Rishabh Bansal' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Rishabh Bansal - AI-Focused Full Stack Developer',
    description:
      'AI-Focused Full Stack Developer with 2+ years building scalable web applications using Node.js, Next.js and AI technologies.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/favicon.svg',
        width: 40,
        height: 40,
        alt: 'Rishabh Bansal Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Rishabh Bansal - AI-Focused Full Stack Developer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#0a0e1a', color: '#e1e8f0' }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
