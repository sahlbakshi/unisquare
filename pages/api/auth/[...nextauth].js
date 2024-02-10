import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { API } from "../../../modules/baseRoute"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({session}) {
      return session
    },
    async signIn({profile}) {
      const res = await fetch(`${API}/api/user/${profile.email}`)
      const data = await res.json()
      if (!data) {
        const create = async () => {
          await fetch(`${API}/api/user/${profile.email}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name: profile.name }),
          })
        }
        create()
      }
      return true
    }
  }
}

export default NextAuth(authOptions)
