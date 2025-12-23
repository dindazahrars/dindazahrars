import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dinda - Software Engineering Student | Portfolio',
  description: 'Portfolio website of a Software Engineering student specializing in Laravel, Next.js, MySQL, and Supabase. Open for internship opportunities.',
  keywords: 'software engineering, portfolio, laravel, nextjs, mysql, supabase, frontend, backend, internship',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Dinda - Software Engineering Student',
    description: 'Portfolio & CV - Open for Internship',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
