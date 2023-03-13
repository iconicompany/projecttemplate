import '../client/styles/globals.css';
import { getSession, SessionProvider } from 'next-auth/react';
import 'antd/dist/antd.css';
import '../client/styles/core.scss';
import Layout from '../client/components/core/Layout';
import GuestLayout from '../client/components/core/GuestLayout';
import App from 'next/app';
import '../client/helpers/functions.mjs';

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={pageProps.session} basePath='/projecttemplate/api/auth'>
      {session &&
        <Layout>
          <Component {...pageProps} />
        </Layout>}
      {!session &&
        <GuestLayout>
          <Component {...pageProps} />
        </GuestLayout>}
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  const session = await getSession(context);
  return { ...appProps, session };
}


export default MyApp;
