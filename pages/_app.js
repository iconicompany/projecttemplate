import '../styles/globals.css';
import { getSession, SessionProvider } from 'next-auth/react';
import 'antd/dist/antd.css';
import '../styles/core.scss';
import Layout from '../public/components/core/Layout';
import GuestLayout from '../public/components/core/GuestLayout';
import App from 'next/app';
import { RouteGuard } from '../public/components/core/RouteGuard';

function MyApp({ Component, pageProps, session }) {
  console.log(session);

  return (
    <SessionProvider session={pageProps.session}>
      <RouteGuard session={session}>

        {session &&
          <Layout>
            <Component {...pageProps} />
          </Layout>}
        {!session &&
          <GuestLayout>
            <Component {...pageProps} />
          </GuestLayout>}
      </RouteGuard>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  const session = await getSession(context);
  return { ...appProps, session };
}


export default MyApp;
