import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('Contact email API called');
    
    const formData = await request.json();
    const { name, email, phone, service, message } = formData;

    console.log('Form data received:', { name, email, phone, service, messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
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

    // Check environment variables
    const envVars = {
      EMAIL_HOST: process.env.EMAIL_HOST,
      EMAIL_PORT: process.env.EMAIL_PORT,
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? '[REDACTED]' : undefined,
      EMAIL_FROM: process.env.EMAIL_FROM,
      EMAIL_TO: process.env.EMAIL_TO
    };
    console.log('Environment variables:', envVars);

    // Check for both EMAIL_PASS and EMAIL_PASSWORD
    const emailPassword = process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD;
    
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !emailPassword) {
      console.log('Missing required email environment variables');
      console.log('Available env vars:', {
        EMAIL_HOST: !!process.env.EMAIL_HOST,
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
        EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD
      });
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at info@bsrdecorating.co.uk or 01626 911236.' },
        { status: 503 }
      );
    }

    // Create email transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: parseInt(process.env.EMAIL_PORT || '587') === 465, // SSL for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: emailPassword
      }
    });

    console.log('Transporter config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER ? 'configured' : 'missing'
    });

    // Service type formatting
    const serviceDisplay = service === 'domestic' ? 'Domestic' : 
                          service === 'commercial' ? 'Commercial' : 
                          'Both Domestic & Commercial';

    // Create professional email HTML (matching quote form styling)
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #000000, #1a1a1a); color: white; padding: 30px; text-align: center; }
          .logo { font-size: 28px; font-weight: bold; color: #E801F8; }
          .container { max-width: 600px; margin: 0 auto; }
          .content { padding: 30px; background: #f9f9f9; }
          .contact-details { background: white; padding: 25px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
          .label { font-weight: bold; color: #E801F8; }
          .value { text-align: right; }
          .footer { background: #E801F8; color: white; padding: 20px; text-align: center; }
          .urgent { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
          .message-content { background: #f8f9fa; border-left: 4px solid #E801F8; padding: 20px; margin: 15px 0; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">BSR Decorating</div>
            <p style="margin: 10px 0 0 0; font-size: 16px;">New Contact Message</p>
          </div>
          
          <div class="content">
            <div class="urgent">
              <strong>📧 New Contact Message Received!</strong><br>
              A customer has sent a message through your website contact form.
            </div>

            <div class="contact-details">
              <h2 style="color: #E801F8; margin-top: 0;">Customer Details</h2>
              
              <div class="detail-row">
                <span class="label">👤 Name:</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="detail-row">
                <span class="label">📧 Email:</span>
                <span class="value">${email}</span>
              </div>
              
              <div class="detail-row">
                <span class="label">📞 Phone:</span>
                <span class="value">${phone}</span>
              </div>
              
              <div class="detail-row" style="border-bottom: none;">
                <span class="label">🏠 Service Interest:</span>
                <span class="value">${serviceDisplay}</span>
              </div>
            </div>

            <div class="contact-details">
              <h2 style="color: #E801F8; margin-top: 0;">💬 Customer Message</h2>
              <div class="message-content">
                ${message}
              </div>
            </div>
          </div>
          
          <div class="footer">
            <h3 style="margin: 0 0 10px 0;">🎨 BSR Decorating</h3>
            <p style="margin: 5px 0;"><strong>Phone:</strong> 01626 911236</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> info@bsrdecorating.co.uk</p>
            <p style="margin: 5px 0;"><strong>Website:</strong> www.bsrdecorating.co.uk</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Prepare recipient list - handle multiple emails
    const defaultEmail = process.env.EMAIL_DEFAULT || 'info@bsrdecorating.co.uk';
    const recipients = [defaultEmail];
    
    // Handle EMAIL_TO (can be comma-separated)
    if (process.env.EMAIL_TO) {
      const additionalEmails = process.env.EMAIL_TO.split(',').map(email => email.trim());
      additionalEmails.forEach(email => {
        if (email && email !== defaultEmail && !recipients.includes(email)) {
          recipients.push(email);
        }
      });
    }

    // Prepare BCC list if specified
    const bccEmails = [];
    if (process.env.EMAIL_BCC) {
      const bccList = process.env.EMAIL_BCC.split(',').map(email => email.trim());
      bccEmails.push(...bccList);
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: recipients.join(', '),
      bcc: bccEmails.length > 0 ? bccEmails.join(', ') : undefined,
      subject: `📧 New Contact Message from ${name} - ${serviceDisplay}`,
      html: emailHTML,
      text: `
New Contact Message - BSR Decorating

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Interest: ${serviceDisplay}

Message:
${message}

---
This message was sent from the BSR Decorating website contact form.
Please respond to the customer directly at ${email} or ${phone}.
      `.trim(),
    };

    // Log email configuration for debugging
    console.log('Email recipients:', {
      to: recipients.join(', '),
      bcc: bccEmails.length > 0 ? bccEmails.join(', ') : 'None',
      totalRecipients: recipients.length + bccEmails.length
    });

    // Send email to BSR
    await transporter.sendMail(mailOptions);
    console.log('BSR notification email sent successfully');

    // Send thank you email to customer (matching quote form styling exactly)
    const customerEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
          .header { background: linear-gradient(135deg, #000000, #1a1a1a); color: white; padding: 40px 30px; text-align: center; }
          .company-name { font-size: 32px; font-weight: bold; color: #E801F8; margin: 0; }
          .tagline { font-size: 16px; margin: 10px 0 0 0; color: #cccccc; }
          .content { padding: 40px 30px; }
          .message-box { background: #f8f9fa; border-left: 4px solid #E801F8; padding: 25px; margin: 25px 0; border-radius: 8px; }
          .highlight { color: #E801F8; font-weight: bold; }
          .quote-reference { background: #E801F8; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 25px 0; }
          .contact-info { background: #000000; color: white; padding: 25px; border-radius: 8px; margin: 25px 0; }
          .contact-info h3 { color: #E801F8; margin-top: 0; }
          .footer { background: #f1f1f1; padding: 20px 30px; text-align: center; color: #666; font-size: 14px; }
          .service-area { background: #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="company-name">BSR Decorating</h1>
            <p class="tagline">Professional Decorating Services</p>
          </div>
          
          <div class="content">
            <h2 style="color: #E801F8; margin-top: 0;">Thank You for Your Message</h2>
            
            <p>Dear ${name},</p>
            
            <p>Thank you for contacting BSR Decorating regarding your ${serviceDisplay.toLowerCase()} decorating needs. We have received your message and our team is reviewing your enquiry.</p>
            
            <div class="message-box">
              <h3 style="color: #E801F8; margin-top: 0;">What happens next?</h3>
              <p><strong>We will contact you within 2 working days</strong> to discuss your requirements and answer any questions you may have.</p>
              <p>Our experienced team is ready to help transform your space with our professional decorating services.</p>
            </div>

            <div class="quote-reference">
              <h3 style="margin: 0; font-size: 18px;">Your Contact Reference</h3>
              <p style="margin: 5px 0 0 0; font-size: 16px;">Service Interest: ${serviceDisplay} | Contact: ${phone}</p>
            </div>

            <div class="contact-info">
              <h3>Need to speak to us sooner?</h3>
              <p><strong>📞 Phone:</strong> 01626 911236</p>
              <p><strong>📧 Email:</strong> info@bsrdecorating.co.uk</p>
              <p><strong>🕒 Hours:</strong> Monday to Friday, 8:00 AM to 6:00 PM</p>
            </div>

            <p>We look forward to helping transform your space with our professional decorating services.</p>
            
            <p>Best regards,<br>
            <strong class="highlight">The BSR Decorating Team</strong></p>
          </div>
          
          <div class="footer">
            <p><strong>BSR Decorating</strong> | Professional Decorating Services | South East Devon</p>
            <p>This email was sent in response to your contact form submission on our website.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const customerMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
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
Service Interest: ${serviceDisplay} | Contact: ${phone}

Need to speak to us sooner?
Phone: 01626 911236
Email: info@bsrdecorating.co.uk
We are available Monday to Friday, 8:00 AM to 6:00 PM

We look forward to helping transform your space with our professional decorating services.

Best regards,
The BSR Decorating Team

BSR Decorating | Professional Decorating Services | South East Devon
This email was sent in response to your contact form submission on our website.
      `
    };

    // Send customer thank you email
    console.log('Attempting to send customer thank you email to:', email);
    console.log('Customer email options:', {
      from: customerMailOptions.from,
      to: customerMailOptions.to,
      subject: customerMailOptions.subject
    });
    
    try {
      console.log('Sending customer email with transporter config:', {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        user: process.env.EMAIL_USER ? 'configured' : 'missing',
        from: customerMailOptions.from,
        to: customerMailOptions.to
      });
      
      const customerEmailResult = await transporter.sendMail(customerMailOptions);
      console.log('✅ Customer thank you email sent successfully to:', email);
      console.log('📧 Customer email SMTP response:', {
        messageId: customerEmailResult.messageId,
        response: customerEmailResult.response,
        accepted: customerEmailResult.accepted,
        rejected: customerEmailResult.rejected,
        pending: customerEmailResult.pending
      });
    } catch (customerEmailError) {
      console.error('❌ Failed to send customer thank you email:', customerEmailError);
      
      if (customerEmailError instanceof Error) {
        console.error('Customer email error details:', {
          message: customerEmailError.message,
          stack: customerEmailError.stack,
          name: customerEmailError.name
        });
      }
      
      // Don't fail the whole request if customer email fails - BSR email is more important
      // But log it prominently so we know about it
      console.error('🚨 CUSTOMER EMAIL FAILED - Business got notification but customer did not get confirmation');
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
