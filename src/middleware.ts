import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // SAFETY CHECK 1: Skip development/localhost completely
  if (url.hostname === 'localhost' || url.hostname.includes('127.0.0.1') || url.hostname.includes('.local')) {
    return NextResponse.next()
  }
  
  // SAFETY CHECK 2: Only process production domain
  if (!url.hostname.includes('bsrdecorating.co.uk')) {
    return NextResponse.next()
  }
  
  // SAFETY CHECK 3: Skip if already processing a redirect
  if (request.headers.get('x-middleware-redirect')) {
    return NextResponse.next()
  }
  
  try {
    let shouldRedirect = false
    const redirectUrl = url.clone()
    
    // Handle HTTPS redirect (HTTP → HTTPS) - only on production
    if (url.protocol === 'http:' && url.hostname.includes('bsrdecorating.co.uk')) {
      redirectUrl.protocol = 'https:'
      shouldRedirect = true
    }
    
    // Handle WWW redirect (www → non-www)
    if (url.hostname === 'www.bsrdecorating.co.uk') {
      redirectUrl.hostname = 'bsrdecorating.co.uk'
      shouldRedirect = true
    }
    
    // SAFETY CHECK 4: Only redirect if we detected a change AND we're not in a loop
    if (shouldRedirect) {
      // SAFETY CHECK 5: Prevent infinite loops by checking if we're redirecting to the same URL
      if (redirectUrl.toString() === url.toString()) {
        return NextResponse.next()
      }
      
      // SAFETY CHECK 6: Maximum redirect prevention
      const redirectCount = parseInt(request.headers.get('x-redirect-count') || '0')
      if (redirectCount > 2) {
        return NextResponse.next()
      }
      
      // Create redirect response with safety headers
      const response = NextResponse.redirect(redirectUrl, 301)
      response.headers.set('x-middleware-redirect', 'true')
      response.headers.set('x-redirect-count', (redirectCount + 1).toString())
      return response
    }
    
    return NextResponse.next()
  } catch (error) {
    // SAFETY CHECK 7: If anything goes wrong, just continue without redirecting
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
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
