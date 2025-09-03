# Email Setup Instructions for BSR Decorating

## Environment Variables Needed

Add these to your `.env.local` file in the root directory:

```bash
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=BSR Decorating <your-gmail@gmail.com>
```

## How to Get Email Credentials

### Option 1: Gmail (Recommended)
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
   - Use this password as `EMAIL_PASSWORD`

### Option 2: Business Email (Outlook/Office365)
```bash
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-business@yourdomain.com
EMAIL_PASSWORD=your-password
```

### Option 3: Namecheap Private Email
```bash
EMAIL_HOST=mail.privateemail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=info@bsrdecorating.co.uk
EMAIL_PASSWORD=your-password
```

## Testing
Once configured, the quote request form will:
- ✅ Send professional emails to `info@bsrdecorating.co.uk`
- ✅ Include all customer details and project requirements
- ✅ Show success/error messages to users

## Current Status
- 🔧 Email API is ready but needs environment variables
- 📧 Professional email template is complete
- 🎯 Form validation and error handling implemented

Contact me once you've added the email credentials to test the system!
