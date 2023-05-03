import Head from "next/head"
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

import NavBar from '@components/Layout/NavBar'
import Footer from '@components/Layout/Footer';
import LayoutContainer from "@components/Layout/LayoutContainer";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grind & Blend',
  description: 'Grind and Blend website',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Analytics />
        <NavBar />
        <LayoutContainer>
          {props.children}
        </LayoutContainer>
        <Footer />
      </body>
    </html>
  )
}