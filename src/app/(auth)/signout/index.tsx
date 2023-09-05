'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignOut() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      if (session) {
        await signOut({ redirect: false })
        router.push('/login')
      } else {
        router.push('/login')
      }
    }

    handleLogout()
  }, [session, router])

  return <main className='relative min-h-screen md:flex'></main>
}
