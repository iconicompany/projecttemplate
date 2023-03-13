import '../client/styles/globals.css';
import { getSession, SessionProvider } from 'next-auth/react';
import 'antd/dist/antd.css';
import '../client/styles/core.scss';
import Layout from '../client/components/core/Layout';
import GuestLayout from '../client/components/core/GuestLayout';
import App from 'next/app';
import React, { createContext } from 'react';
import '../client/helpers/functions.mjs';

export const UserContext = createContext();

function MyApp({ Component, pageProps, session }) {
  return (
    <UserContext.Provider value={session}>
      <SessionProvider session={session} basePath="/projectemplate/api/auth">
        <title>Оформление сделки</title>
        {session && (
          <>
            <Layout session={session}>
              <Component {...pageProps} />
            </Layout>
          </>
        )}
        {!session && (
          <GuestLayout>
            <Component {...pageProps} />
          </GuestLayout>
        )}
      </SessionProvider>
    </UserContext.Provider>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  const session = await getSession(context);
  console.log(session.user.relationMembers[0].role.permissions.map(i => i.code));
  return { ...appProps, session };
};

export default MyApp;
