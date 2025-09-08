import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || url.protocol.slice(0, -1)
  
  // Only redirect if we're on www subdomain
  if (hostname === 'www.bsrdecorating.co.uk') {
    url.hostname = 'bsrdecorating.co.uk'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }
  
  // Only redirect if we're on HTTP and in production
  if (
    process.env.NODE_ENV === 'production' &&
    protocol === 'http' &&
    hostname === 'bsrdecorating.co.uk'
  ) {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
