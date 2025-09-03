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
# Optional: Additional recipient for all form submissions
EMAIL_TO=additional-email@example.com
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

## Email Recipients Configuration

### Default Recipients
- **All form submissions** automatically go to: `info@bsrdecorating.co.uk`

### Multiple Recipients (EMAIL_TO)
- Set `EMAIL_TO` environment variable for additional email addresses
- Supports multiple emails separated by commas
- Automatically removes duplicates and trims whitespace

### BCC Recipients (EMAIL_BCC)
- Set `EMAIL_BCC` environment variable for blind carbon copy recipients
- Supports multiple emails separated by commas
- Recipients won't see each other's email addresses

### Examples:
```bash
# Multiple recipients (all visible to each other)
EMAIL_TO=info@bsrdecorating.co.uk,hello@saunders-simmons.co.uk

# BCC recipient (hidden from main recipients)
EMAIL_BCC=hello@saunders-simmons.co.uk

# Both TO and BCC
EMAIL_TO=info@bsrdecorating.co.uk,ben@example.com
EMAIL_BCC=hello@saunders-simmons.co.uk,admin@company.com

# Single additional recipient
EMAIL_TO=hello@saunders-simmons.co.uk
```

## Current Status
- 🔧 Email APIs are ready but need environment variables
- 📧 Professional email templates are complete  
- 🎯 Form validation and error handling implemented
- 📬 Both quote form AND contact form now send emails
- 📧 Flexible recipient configuration with EMAIL_TO support

Contact me once you've added the email credentials to test the system!
