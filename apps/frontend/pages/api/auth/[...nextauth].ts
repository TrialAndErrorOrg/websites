/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import NextAuth, { type NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import OrcidProvider from "next-auth-orcid-provider"
import CredentialsProvider from "next-auth/providers/credentials"

// Prisma adapter for NextAuth, optional and can be removed
// eslint-disable-next-line import/extensions
import { env } from "../../../server/env.mjs"

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  // Include user.id on session
  // Configure one or more authentication providers
  callbacks: {
    //    ...sharedNextAuthOptions.callbacks,

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async session({ session, token, user }) {
      // @ts-expect-error its finnee
      session.jwt = token.jwt
      // @ts-expect-error its finnee
      session.id = token.id
      return session
    },

    async jwt({ token, user, account }) {
      const isSignIn = !!user
      if (isSignIn) {
        const response = await fetch(
          `${env.STRAPI_ENDPOINT}/auth/${account?.provider}/callback?access_token=${account?.access_token}`
        )
        const data = await response.json()
        token.jwt = data.jwt
        token.id = data.user.id
      }
      return token
    },
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    OrcidProvider({
      clientId: env.ORCID_CLIENT_ID,
      clientSecret: env.ORCID_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "Enter your name",
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      // @ts-expect-error its finnee
      async authorize(credentials, _req) {
        const user = { id: 1, name: credentials?.name ?? "J Smith" }
        return user
      },
    }),
  ],
}

export default NextAuth(authOptions)
