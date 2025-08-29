export async function GET() {
  return Response.json({
    hasGoogleMaps: !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    hasMapbox: !!process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
    hasAnalytics: !!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    hasEmailService: !!(process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS),
    EMAIL_HOST: process.env.EMAIL_HOST || 'missing',
    EMAIL_USER: process.env.EMAIL_USER || 'missing',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'configured' : 'missing',
    EMAIL_PORT: process.env.EMAIL_PORT || 'missing',
    environment: process.env.NODE_ENV,
    message: "Environment variables test endpoint",
    timestamp: new Date().toISOString()
  });
}
