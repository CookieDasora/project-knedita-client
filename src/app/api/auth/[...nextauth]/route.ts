import NextAuth from 'next-auth/next'
import { options } from '@/helpers/NextAuthOptions'

const handler = NextAuth(options)

export { handler as GET, handler as POST }
