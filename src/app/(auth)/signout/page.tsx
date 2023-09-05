'use client'
import SignOut from './index'
import { SessionProvider } from 'next-auth/react'

export const metadata = {
  title: 'Sign out / Knedita',
}

export default function Page() {
  return (
    <SessionProvider>
      <SignOut />
    </SessionProvider>
  )
}
