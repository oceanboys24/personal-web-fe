import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const res = await axios.post("http://localhost:3000/v1/login", {
            email: credentials?.email,
            password: credentials?.password,
          });
          return res.data;
        } catch (error) {
          throw new Error("Failed to authenticate");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.sessionToken = token.token;
      return session;
    },
  },
});
