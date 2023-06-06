
'use client'
import Footer from '@/app/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import NextNProgress from 'nextjs-progressbar';

import { Metadata } from 'next';

// export const metadata: Metadata = [{
//   openGraph: {
//     title: 'Comma Tech | Best web development services | In Wardha',
//     description: 'Looking for the best SEO friendly web development services? We are located in maharashtra and are the leading provider of these services.',
//     url: 'https://commatech.in',
//     siteName: 'commatech.in',
//     images: [
//       {
//         url: 'https://nextjs.org/og.png',
//         width: 800,
//         height: 600,
//       },
//     ],
//     locale: 'en-US',
//     type: 'website',
//   },
//   title: 'Comma Tech | Best web development services | In Wardha',
//   description: 'Looking for the best SEO friendly web development services? We are located in maharashtra and are the leading provider of these services.',
// }];

const inter = Inter({ subsets: ['latin'] })

// export const metadata = [{
//   openGraph: {
//     title: 'Comma Tech | Best web development services | In Wardha',
//     description: 'Looking for the best SEO friendly web development services? We are located in maharashtra and are the leading provider of these services.',
//     url: 'https://commatech.in',
//     siteName: 'commatech.in',
//     images: [
//       {
//         url: 'https://nextjs.org/og.png',
//         width: 800,
//         height: 600,
//       },
//     ],
//     locale: 'en-US',
//     type: 'website',
//   },
//   title: 'Comma Tech | Best web development services | In Wardha',
//   description: 'Looking for the best SEO friendly web development services? We are located in maharashtra and are the leading provider of these services.',
// }];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
