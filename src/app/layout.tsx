import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home / Knedita',
  description: 'An open source social media',
  manifest: '/manifest.json',
  themeColor: '#1C1C1C',
  appleWebApp: {
    title: 'Project Knedita',
    statusBarStyle: 'default',
    startupImage: '/images/splash.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#1C1C1C] text-white`}>
        {children}
      </body>
    </html>
  )
}
