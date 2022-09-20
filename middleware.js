import { NextResponse } from 'next/server'
import { getSession } from 'next-auth/react';
// import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(request, data, q) {
  // const session = await getSession(request);
  console.log(request);
  const session = await getSession();
  console.log(session?.user, 'session');
  if (!isAuthRoute(request.nextUrl.pathname) && !isServiceRoute(request.nextUrl.pathname)) {
    console.log(request.cookies.get('next-auth.session-token'), 'cookies');
    // const session = useSession();

    console.log(request.nextUrl.pathname);
  }
}

function isAuthRoute(path) {
  if (['/signin', '/signup'].includes(path)) return true;

  return !!path.startsWith('/api/auth');
}

function isServiceRoute(path) {
  return path.startsWith('/_next');
}
