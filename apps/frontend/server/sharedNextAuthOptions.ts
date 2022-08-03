import { NextAuthOptions } from 'next-auth'

export const sharedNextAuthOptions: Partial<NextAuthOptions> = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      session.strategy = 'jwt'
      return session
    },
  },
}
