import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    console.log('Contact email API called');

    const formData = await request.json();
    const { name, email, phone, postcode, service, message } = formData;

    console.log('Form data received:', { name, email, phone, postcode, service, messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !phone || !postcode || !service || !message) {
      console.log('Validation failed: missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);

    // Service type formatting
    const serviceDisplay = service === 'domestic' ? 'Domestic' : 
                          service === 'commercial' ? 'Commercial' : 
                          'Both Domestic & Commercial';

    // Create professional email HTML — all styles inline for email client compatibility
    const emailHTML = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;line-height:1.6;color:#333;background:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;">
        <!-- Header -->
        <tr>
          <td style="background:#000000;color:#ffffff;padding:30px;text-align:center;">
            <div style="font-size:28px;font-weight:bold;color:#E801F8;">BSR Decorating</div>
            <p style="margin:10px 0 0 0;font-size:16px;color:#ffffff;">New Contact Message</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:30px;background:#f9f9f9;">
            <!-- Urgent banner -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#fff3cd;border-left:4px solid #ffc107;padding:15px;">
                  <strong>New Contact Message Received!</strong><br>
                  A customer has sent a message through your website contact form.
                </td>
              </tr>
            </table>

            <!-- Customer Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;margin-top:20px;">
              <tr><td style="padding:25px;">
                <h2 style="color:#E801F8;margin:0 0 15px 0;">Customer Details</h2>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Name:</td>
                    <td style="padding:10px 0;text-align:right;">${name}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Email:</td>
                    <td style="padding:10px 0;text-align:right;">${email}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Phone:</td>
                    <td style="padding:10px 0;text-align:right;">${phone}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Postcode:</td>
                    <td style="padding:10px 0;text-align:right;">${postcode}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Service Interest:</td>
                    <td style="padding:10px 0;text-align:right;">${serviceDisplay}</td>
                  </tr>
                </table>
              </td></tr>
            </table>

            <!-- Customer Message -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;margin-top:20px;">
              <tr><td style="padding:25px;">
                <h2 style="color:#E801F8;margin:0 0 15px 0;">Customer Message</h2>
                <div style="background:#f8f9fa;border-left:4px solid #E801F8;padding:20px;border-radius:8px;">
                  ${message}
                </div>
              </td></tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#E801F8;color:#ffffff;padding:20px;text-align:center;">
            <h3 style="margin:0 0 10px 0;color:#ffffff;">BSR Decorating</h3>
            <p style="margin:5px 0;color:#ffffff;"><strong>Phone:</strong> 01626 911236</p>
            <p style="margin:5px 0;color:#ffffff;"><strong>Email:</strong> info@bsrdecorating.co.uk</p>
            <p style="margin:5px 0;color:#ffffff;"><strong>Website:</strong> bsrdecorating.co.uk</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // Prepare recipient list - handle multiple emails
    const defaultEmail = process.env.EMAIL_DEFAULT || 'info@bsrdecorating.co.uk';
    const recipients = [defaultEmail];

    // Handle EMAIL_TO (can be comma-separated)
    if (process.env.EMAIL_TO) {
      const additionalEmails = process.env.EMAIL_TO.split(',').map(e => e.trim());
      additionalEmails.forEach(e => {
        if (e && e !== defaultEmail && !recipients.includes(e)) {
          recipients.push(e);
        }
      });
    }

    // Prepare BCC list if specified
    const bccEmails: string[] = [];
    if (process.env.EMAIL_BCC) {
      const bccList = process.env.EMAIL_BCC.split(',').map(e => e.trim());
      bccEmails.push(...bccList);
    }

    // Log email configuration for debugging
    console.log('Email recipients:', {
      to: recipients.join(', '),
      bcc: bccEmails.length > 0 ? bccEmails.join(', ') : 'None',
      totalRecipients: recipients.length + bccEmails.length
    });

    // Send email to BSR
    await resend.emails.send({
      from: 'web@saunders-simmons.co.uk',
      to: recipients,
      bcc: bccEmails.length > 0 ? bccEmails : undefined,
      subject: `New Contact Message from ${name} - ${serviceDisplay}`,
      html: emailHTML,
      text: `
New Contact Message - BSR Decorating

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Postcode: ${postcode}
Service Interest: ${serviceDisplay}

Message:
${message}

---
This message was sent from the BSR Decorating website contact form.
Please respond to the customer directly at ${email} or ${phone}.
      `.trim(),
    });
    console.log('BSR notification email sent successfully');

    // Send thank you email to customer — all styles inline for email client compatibility
    const customerEmailHTML = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;line-height:1.6;color:#333;background:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;">
        <!-- Header -->
        <tr>
          <td style="background:#000000;color:#ffffff;padding:40px 30px;text-align:center;">
            <h1 style="font-size:32px;font-weight:bold;color:#E801F8;margin:0;">BSR Decorating</h1>
            <p style="font-size:16px;margin:10px 0 0 0;color:#cccccc;">Professional Decorating Services</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px 30px;">
            <h2 style="color:#E801F8;margin:0 0 20px 0;">Thank You for Your Message</h2>
            <p>Dear ${name},</p>
            <p>Thank you for contacting BSR Decorating regarding your ${serviceDisplay.toLowerCase()} decorating needs. We have received your message and our team is reviewing your enquiry.</p>

            <!-- What happens next -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0;">
              <tr>
                <td style="background:#f8f9fa;border-left:4px solid #E801F8;padding:25px;border-radius:8px;">
                  <h3 style="color:#E801F8;margin:0 0 10px 0;">What happens next?</h3>
                  <p><strong>We will contact you within 2 working days</strong> to discuss your requirements and answer any questions you may have.</p>
                  <p style="margin-bottom:0;">Our experienced team is ready to help transform your space with our professional decorating services.</p>
                </td>
              </tr>
            </table>

            <!-- Contact Reference -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0;">
              <tr>
                <td style="background:#E801F8;color:#ffffff;padding:15px;border-radius:8px;text-align:center;">
                  <h3 style="margin:0;font-size:18px;color:#ffffff;">Your Contact Reference</h3>
                  <p style="margin:5px 0 0 0;font-size:16px;color:#ffffff;">Service Interest: ${serviceDisplay} | Postcode: ${postcode} | Contact: ${phone}</p>
                </td>
              </tr>
            </table>

            <!-- Contact Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0;">
              <tr>
                <td style="background:#000000;color:#ffffff;padding:25px;border-radius:8px;">
                  <h3 style="color:#E801F8;margin:0 0 10px 0;">Need to speak to us sooner?</h3>
                  <p style="color:#ffffff;margin:5px 0;"><strong>Phone:</strong> 01626 911236</p>
                  <p style="color:#ffffff;margin:5px 0;"><strong>Email:</strong> info@bsrdecorating.co.uk</p>
                  <p style="color:#ffffff;margin:5px 0;"><strong>Hours:</strong> Monday to Friday, 8:00 AM to 6:00 PM</p>
                </td>
              </tr>
            </table>

            <p>We look forward to helping transform your space with our professional decorating services.</p>
            <p>Best regards,<br>
            <strong style="color:#E801F8;">The BSR Decorating Team</strong></p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f1f1f1;padding:20px 30px;text-align:center;color:#666;font-size:14px;">
            <p style="margin:0;"><strong>BSR Decorating</strong> | Professional Decorating Services | South East Devon</p>
            <p style="margin:5px 0 0 0;">This email was sent in response to your contact form submission on our website.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // Send customer thank you email
    console.log('Attempting to send customer thank you email to:', email);

    try {
      const customerResult = await resend.emails.send({
        from: 'web@saunders-simmons.co.uk',
        to: email,
        replyTo: process.env.EMAIL_DEFAULT || 'info@bsrdecorating.co.uk',
        subject: 'Thank you for contacting us - BSR Decorating',
        html: customerEmailHTML,
        text: `
Thank you for contacting us - BSR Decorating

Dear ${name},

Thank you for contacting BSR Decorating regarding your ${serviceDisplay.toLowerCase()} decorating needs. We have received your message and our team is reviewing your enquiry.

What happens next?
We will contact you within 2 working days to discuss your requirements and answer any questions you may have. Our experienced team is ready to help transform your space with our professional decorating services.

Your Contact Reference:
Service Interest: ${serviceDisplay} | Postcode: ${postcode} | Contact: ${phone}

Need to speak to us sooner?
Phone: 01626 911236
Email: info@bsrdecorating.co.uk
We are available Monday to Friday, 8:00 AM to 6:00 PM

We look forward to helping transform your space with our professional decorating services.

Best regards,
The BSR Decorating Team

BSR Decorating | Professional Decorating Services | South East Devon
This email was sent in response to your contact form submission on our website.
        `.trim(),
      });
      console.log('Customer thank you email sent successfully to:', email, '- Message ID:', customerResult.data?.id);
    } catch (customerEmailError) {
      console.error('Failed to send customer thank you email:', customerEmailError);

      if (customerEmailError instanceof Error) {
        console.error('Customer email error details:', {
          message: customerEmailError.message,
          stack: customerEmailError.stack,
          name: customerEmailError.name
        });
      }

      // Don't fail the whole request if customer email fails - BSR email is more important
      console.error('CUSTOMER EMAIL FAILED - Business got notification but customer did not get confirmation');
    }

    return NextResponse.json(
      { message: 'Contact message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact email error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send contact message';
    
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      
      // Check for common email errors
      if (error.message.includes('authentication') || error.message.includes('auth')) {
        errorMessage = 'Email authentication failed. Please contact us directly at info@bsrdecorating.co.uk or 01626 911236.';
      } else if (error.message.includes('connection') || error.message.includes('timeout')) {
        errorMessage = 'Email service temporarily unavailable. Please contact us directly at info@bsrdecorating.co.uk or 01626 911236.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
