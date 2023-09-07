import client from '@/helpers/Client'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
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
        const { data: token } = await client.post('/user/auth', {
          email: credentials?.email,
          password: credentials?.password,
        })

        const { data, status } = await client.post(
          '/user/me',
          {},
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        )

        const user = {
          id: data.id,
          profileImage: data.profileImage,
          displayName: data.displayName,
          username: data.username,
          followers: data.followers,
          following: data.following,
          accessToken: token.token,
        }

        if (status === 200) {
          return user
        }

        throw new Error(data)
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/signout',
    newUser: '/signup',
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token.user as any
      return session
    },
  },
}
