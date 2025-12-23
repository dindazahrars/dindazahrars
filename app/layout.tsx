import type { Metadata } from 'next'
import type { Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dinda Zahra Rama Sabila | Software Engineering Student',
  description: 'Portfolio website of Dinda Zahra Rama Sabila, a Software Engineering student specializing in Laravel, Next.js, MySQL, and Supabase. Open for internship opportunities.',
  keywords: 'software engineering, portfolio, laravel, nextjs, mysql, supabase, frontend, backend, internship, dinda zahra, diz',
  authors: [{ name: 'Dinda Zahra Rama Sabila' }],
  icons: {
    icon: [
      { url: '/images/logo.png' },
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/logo.png',
    },
  },
  openGraph: {
    title: 'Dinda Zahra Rama Sabila | Software Engineering Student',
    description: 'Portfolio & CV - Open for Internship Opportunities',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'DiZ Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DiZ - Dinda Zahra Rama Sabila',
    description: 'Software Engineering Student | Portfolio & CV',
    images: ['/images/logo.png'],
  },
}

// Viewport configuration - Separate export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  )
}
