import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import { options } from '@/helpers/NextAuthOptions'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)

  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <SessionProvider session={session}>
          <main className='bg-[#1C1C1C] text-white'>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
