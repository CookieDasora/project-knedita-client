import { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/helpers/NextAuthOptions'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Home / Knedita',
}

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/')
  }

  return <>{children}</>
}
