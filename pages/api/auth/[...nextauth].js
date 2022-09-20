import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createScope } from '../../../src/helpers/core'
import AuthController from '../../../src/http/controllers/AuthController.mjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        login: { label: 'Login', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const scope = await createScope(req);
        try {
          return new AuthController().signIn(scope.cradle);
        } catch (err) {
          console.log(err);
        }
      }
    })
  ],
  session: {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    }
  }
});
