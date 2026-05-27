import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'A modern Next.js application with Vercel Analytics and Speed Insights',
  keywords: ['Next.js', 'React', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Your Name' }],
  creator: 'Next.js',
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://example.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Next.js App',
    title: 'Next.js App',
    description: 'A modern Next.js application with Vercel Analytics and Speed Insights',
    images: [
      {
        url: 'https://example.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js App',
    description: 'A modern Next.js application with Vercel Analytics and Speed Insights',
    creator: '@vercel',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066cc',
  colorScheme: 'light dark',
  viewportFit: 'cover',
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066cc" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
