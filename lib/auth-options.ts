// lib/auth-options.ts
import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_GITHUB_ID!,
      clientSecret: process.env.NEXT_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const allowed = process.env.ADMIN_EMAILS?.split(",").map((e) => e.trim().toLowerCase()) || []
      if (session.user) {
        console.log("[NextAuth] Session user:", session.user)
        console.log(
          "[NextAuth] Checking email:",
          session.user.email?.toLowerCase(),
          "against allowed:",
          allowed,
        )
        session.user.isAdmin = allowed.includes(session.user.email?.toLowerCase() || "")
      }
      return session
    },
  },
}
