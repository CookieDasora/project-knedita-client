// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      profileImage?: string
      displayName?: string
      username: string
      followers: number
      following: number
      accessToken: string
    }
  }
}
