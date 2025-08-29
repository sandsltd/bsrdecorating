# Environment Variables Setup Guide

## How to Safely Store API Keys

### 1. Create Environment File
Create a `.env.local` file in your project root (this file is already ignored by .gitignore):

```bash
touch .env.local
```

### 2. Add Your API Keys
Add your actual API keys to `.env.local`:

```env
# API Keys and Environment Variables
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_google_maps_api_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_actual_google_analytics_id
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_actual_facebook_pixel_id

# Email Service
EMAIL_SERVICE_API_KEY=your_actual_email_service_api_key
EMAIL_SERVICE_URL=your_actual_email_service_url

# Contact Form
CONTACT_FORM_ENDPOINT=your_actual_contact_form_endpoint

# Social Media
FACEBOOK_APP_ID=your_actual_facebook_app_id
TIKTOK_API_KEY=your_actual_tiktok_api_key

# Other Services
RECAPTCHA_SITE_KEY=your_actual_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_actual_recaptcha_secret_key

# Environment
NODE_ENV=development
```

### 3. Using Environment Variables in Code

#### Client-Side (Browser)
Only variables prefixed with `NEXT_PUBLIC_` are available in the browser:

```javascript
// ✅ Available in browser
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// ❌ NOT available in browser (server-side only)
const secretKey = process.env.EMAIL_SERVICE_API_KEY;
```

#### Server-Side (API Routes)
All environment variables are available in API routes:

```javascript
// pages/api/contact.js or app/api/contact/route.js
export default function handler(req, res) {
  const emailApiKey = process.env.EMAIL_SERVICE_API_KEY;
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  
  // Use your API keys here
}
```

### 4. Example Usage for BSR Decorating

#### Google Maps Integration
```javascript
// components/Map.js
const MapComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  return (
    <div>
      {/* Google Maps component using apiKey */}
    </div>
  );
};
```

#### Contact Form with Email Service
```javascript
// app/api/contact/route.js
export async function POST(request) {
  const emailApiKey = process.env.EMAIL_SERVICE_API_KEY;
  const emailServiceUrl = process.env.EMAIL_SERVICE_URL;
  
  // Send email using your service
  const response = await fetch(emailServiceUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${emailApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
}
```

#### Google Analytics
```javascript
// app/layout.js
export default function RootLayout({ children }) {
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  
  return (
    <html>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analyticsId}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 5. Deployment Considerations

#### Vercel
- Add environment variables in Vercel dashboard
- Go to Project Settings > Environment Variables
- Add each variable with the same name as in `.env.local`

#### Netlify
- Add environment variables in Netlify dashboard
- Go to Site Settings > Environment Variables
- Add each variable with the same name as in `.env.local`

#### Other Platforms
- Check your hosting platform's documentation for environment variable setup

### 6. Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use different keys for development and production**
3. **Rotate API keys regularly**
4. **Use the minimum required permissions for API keys**
5. **Monitor API usage for unusual activity**

### 7. Testing Environment Variables

Create a simple test to verify your environment variables are working:

```javascript
// app/api/test-env/route.js
export async function GET() {
  return Response.json({
    hasGoogleMaps: !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    hasAnalytics: !!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    hasEmailService: !!process.env.EMAIL_SERVICE_API_KEY,
    environment: process.env.NODE_ENV,
  });
}
```

Visit `/api/test-env` to check if your environment variables are loaded correctly.

### 8. Common API Services for BSR Decorating

#### Email Services
- **SendGrid**: `SENDGRID_API_KEY`
- **Mailgun**: `MAILGUN_API_KEY`
- **Resend**: `RESEND_API_KEY`

#### Maps
- **Google Maps**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

#### Analytics
- **Google Analytics**: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
- **Facebook Pixel**: `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`

#### Contact Forms
- **Formspree**: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- **Netlify Forms**: Built-in, no API key needed

Remember: Keep your `.env.local` file secure and never share it publicly!
