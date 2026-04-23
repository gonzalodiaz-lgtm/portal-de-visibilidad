import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        id: { label: "ID", type: "text" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "gerencia@polpaico.cl" &&
          credentials?.password === "demo2024"
        ) {
          return {
            id: "1",
            email: credentials.email,
            name: "Gerencia Polpaico",
            role: "admin",
          };
        }
        if (
          credentials?.email === "po@polpaico.cl" &&
          credentials?.password === "demo2024"
        ) {
          return {
            id: "2",
            email: credentials.email,
            name: "Product Owner",
            role: "po",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token.role as string) ?? "";
        session.user.id = (token.id as string) ?? "";
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);