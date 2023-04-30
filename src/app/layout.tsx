import Head from "next/head"
import { Analytics } from '@vercel/analytics/react';
import NavBar from '@components/Layout/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grind & Blend',
  description: 'Grind and Blend website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Analytics />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
