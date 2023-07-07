import { getSession, SessionProvider } from 'next-auth/react';
import '../client/styles/core.scss';
import Layout from '../client/components/core/Layout';
import GuestLayout from '../client/components/core/GuestLayout';
import App from 'next/app';
import React, { createContext } from 'react';
import '../client/helpers/functions.mjs';
import WebKernel from '../client/WebKernel.mjs';

export const UserContext = createContext({});
export const AwilixContext = createContext({});

function MyApp({ Component, pageProps, session }) {
  const kernel = new WebKernel();
  const scope = kernel.createApplication();

  return (
    <AwilixContext.Provider value={scope.cradle}>
      <UserContext.Provider value={session}>
        <SessionProvider session={session} basePath="/projecttemplate/api/auth">
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
    </AwilixContext.Provider>

  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  const session = await getSession(context);
  return { ...appProps, session };
};

export default MyApp;
