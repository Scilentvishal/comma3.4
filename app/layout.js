
'use client'
import Footer from '@/app/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import NextNProgress from 'nextjs-progressbar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <NextNProgress
          height={6}
          color="#07F300 
"
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
