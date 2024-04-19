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
        username: { label: "GitHub Username", type: "text", placeholder: "Saadat_Ali" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        prisma.$connect();
        // Add logic here to look up the user from the credentials supplied
        try {
          const adminUser = await prisma.user.findFirstOrThrow({
            where: {
              userName: credentials!.username,
              password: credentials!.password
            }
          });
          if (!adminUser) {
            throw new Error('Invalid credentials');
          }
          console.log('Valid credentials');
          console.log(adminUser);
          return adminUser as any;
        } catch (error) {
          console.log(error)
          return null
        }

      }
    })
  ],
  callbacks: {
    jwt: async ({token}) => token,
    session: ({session}) => session,
  },
  secret: 'supersecret',
  jwt: {
    secret: 'supersecret',
  },
  session: {
    strategy: 'jwt',
  }
});
