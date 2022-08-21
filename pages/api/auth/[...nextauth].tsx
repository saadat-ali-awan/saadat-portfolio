import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Username',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Saadat_Ali" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (credentials) {
          const adminUser = await prisma.backendUser.findUnique({
            where: {
              name: credentials.username,
              password: credentials.password,
            },
          });
          if (adminUser) {
            // Any object returned will be saved in `user` property of the JWT
            return { message: 'Welcome back!' };
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } else {
          return null
        }

      }
    })
  ]
});
