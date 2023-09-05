import client from '@/helpers/Client'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, _req) {
        const { data } = await client.post('/user/auth', {
          email: credentials?.email,
          password: credentials?.password,
        })

        const user = data.token

        if (data) {
          return user
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/signout',
    newUser: '/signup',
  },
}
