import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export { RouteGuard };

function RouteGuard({ children, session }) {
  const router = useRouter();
  const [allow, setAllow] = useState(checkAllow());

  useEffect(() => {
    console.log('guard');
    // on initial load - run auth check
    // authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    // const hideContent = () => setAuthorized(false);
    // router.events.on('routeChangeStart', hideContent);
    //
    // // on route change complete - run auth check
    // router.events.on('routeChangeComplete', authCheck)
    //
    // // unsubscribe from events in useEffect return function
    // return () => {
    //   router.events.off('routeChangeStart', hideContent);
    //   router.events.off('routeChangeComplete', authCheck);
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  function checkAllow() {
    const publicPaths = ['/signin', 'signup'];
    const path = router.asPath.split('?')[0];

    return !!session?.user || publicPaths.includes(path);
  }

  return (allow && children);
}