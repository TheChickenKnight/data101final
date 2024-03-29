import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/signup',
  },
  providers: [
      CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "something@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
              if (!credentials?.email || !credentials?.password)
                return null;

              const existingUser = await db.user.findUnique({
                where: {
                  email: credentials.email
                }
              });


              if (!existingUser)
                return null;

              const passwordMatch = await compare(credentials.password, existingUser.password);

              if (!passwordMatch)
                return null;

              return {
                id: existingUser.id + "",
                username: existingUser.username,
                email: existingUser.email
              } 
          }
        })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser}) {
      if (user) {
        console.log("user:",user)
         return {
          ...token,
          username: user.username
        }
      }
       
      return token
    },
    async session({ session, user, token }) {
        return {
          ...session,
          user: {
            ...session.user,
            username: token.username
          }
        }
    }
  }
}