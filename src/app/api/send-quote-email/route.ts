import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Check if email environment variables are configured
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables not configured');
      return NextResponse.json({
        success: false,
        message: 'Email service not configured. Please contact us directly at 01626 911236.',
        missingConfig: true
      }, { status: 200 }); // Return 200 to avoid browser errors
    }

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

    // Determine coverage area
    let coverageArea = 'Outside normal coverage area';
    if (formData.postcodeStatus === 'main') {
      coverageArea = 'Main Coverage Area';
    } else if (formData.postcodeStatus === 'larger') {
      coverageArea = 'Larger Projects Area';
    }

    // Additional services list
    const additionalServices = [];
    if (formData.interiorDecorating) additionalServices.push('Interior Decorating');
    if (formData.externalDecorating) additionalServices.push('Exterior Decorating');
    if (formData.garageDoor) additionalServices.push('Garage Door Painting');
    if (formData.frontDoor) additionalServices.push('Front Door Painting');
    if (formData.wallpaperHanging) additionalServices.push('Wallpaper Hanging & Removal');
    if (formData.colourConsultation) additionalServices.push('Colour Consultation');
    if (formData.officeSpaces) additionalServices.push('Office Spaces');
    if (formData.retailSpaces) additionalServices.push('Retail Spaces');
    if (formData.industrialWarehouse) additionalServices.push('Industrial & Warehouse');
    if (formData.outOfHours) additionalServices.push('Out-of-Hours Working');
    if (formData.otherCommercial) additionalServices.push('Other (see project details)');

    // Create professional email HTML
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
          .quote-details { background: white; padding: 25px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
          .label { font-weight: bold; color: #E801F8; }
          .value { text-align: right; }
          .coverage-badge { 
            display: inline-block; 
            padding: 8px 16px; 
            border-radius: 20px; 
            font-weight: bold; 
            margin: 10px 0;
          }
          .main-coverage { background: #d4edda; color: #155724; }
          .larger-coverage { background: #cce7ff; color: #004085; }
          .outside-coverage { background: #f8d7da; color: #721c24; }
          .footer { background: #E801F8; color: white; padding: 20px; text-align: center; }
          .urgent { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">BSR Decorating</div>
            <p style="margin: 10px 0 0 0; font-size: 16px;">New Quote Request</p>
          </div>
          
          <div class="content">
            <div class="urgent">
              <strong>⚡ New Quote Request Received!</strong><br>
              A potential customer has submitted a quote request through your website.
            </div>

            <div class="quote-details">
              <h2 style="color: #E801F8; margin-top: 0;">Customer Details</h2>
              
              <div class="detail-row">
                <span class="label">Name:</span>
                <span class="value">${formData.name}</span>
              </div>
              
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value">${formData.email}</span>
              </div>
              
              ${formData.phone ? `
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value">${formData.phone}</span>
              </div>
              ` : ''}
              
              <div class="detail-row">
                <span class="label">Postcode:</span>
                <span class="value">${formData.postcode}</span>
              </div>
              
              <div style="text-align: center; margin: 15px 0;">
                <span class="coverage-badge ${formData.postcodeStatus === 'main' ? 'main-coverage' : formData.postcodeStatus === 'larger' ? 'larger-coverage' : 'outside-coverage'}">
                  ${coverageArea}
                </span>
              </div>
            </div>

            <div class="quote-details">
              <h2 style="color: #E801F8; margin-top: 0;">Project Details</h2>
              
              <div class="detail-row">
                <span class="label">Service Type:</span>
                <span class="value">${formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}</span>
              </div>
              
              ${formData.numberOfRooms ? `
              <div class="detail-row">
                <span class="label">Number of Rooms:</span>
                <span class="value">${formData.numberOfRooms}</span>
              </div>
              ` : ''}
              
              ${additionalServices.length > 0 ? `
              <div class="detail-row">
                <span class="label">Additional Services:</span>
                <span class="value">${additionalServices.join(', ')}</span>
              </div>
              ` : ''}
              
              ${formData.message ? `
              <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #E801F8;">
                <h4 style="color: #E801F8; margin: 0 0 10px 0; font-size: 16px;">Customer Message:</h4>
                <p style="margin: 0; color: #333; line-height: 1.5; white-space: pre-wrap;">${formData.message}</p>
              </div>
              ` : ''}
            </div>

            <div style="background: #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #E801F8; margin-top: 0;">Next Steps:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Review the customer's location and project requirements</li>
                <li>Contact the customer within 24 hours</li>
                <li>Schedule a site visit if needed</li>
                <li>Prepare and send a detailed quote</li>
              </ul>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0;"><strong>BSR Decorating</strong></p>
            <p style="margin: 5px 0 0 0;">Professional Decorating Services • South East Devon</p>
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
      subject: `🎨 New Quote Request from ${formData.name} (${formData.postcode})`,
      html: emailHTML,
      text: `
New Quote Request - BSR Decorating

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
${formData.phone ? `- Phone: ${formData.phone}` : ''}
- Postcode: ${formData.postcode}
- Coverage: ${coverageArea}

Project Details:
- Service Type: ${formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}
${formData.numberOfRooms ? `- Number of Rooms: ${formData.numberOfRooms}` : ''}
${additionalServices.length > 0 ? `- Additional Services: ${additionalServices.join(', ')}` : ''}

${formData.message ? `Customer Message:
${formData.message}

` : ''}Please contact the customer within 24 hours.
      `
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

    // Send thank you email to customer
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
            <h2 style="color: #E801F8; margin-top: 0;">Thank You for Your Quote Request</h2>
            
            <p>Dear ${formData.name},</p>
            
            <p>Thank you for choosing BSR Decorating for your ${formData.serviceType} decorating project. We have received your quote request and our team is reviewing the details you provided.</p>
            
            <div class="message-box">
              <h3 style="color: #E801F8; margin-top: 0;">What happens next?</h3>
              <p><strong>We will contact you within 2 working days</strong> to discuss your project requirements and arrange a convenient time for a site visit if needed.</p>
              <p>Our experienced team will provide you with a detailed, competitive quote tailored to your specific needs.</p>
            </div>

            <div class="quote-reference">
              <h3 style="margin: 0; font-size: 18px;">Your Quote Reference</h3>
              <p style="margin: 5px 0 0 0; font-size: 16px;">Location: ${formData.postcode} | Service: ${formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}</p>
            </div>

            <div class="contact-info">
              <h3>Need to speak to us sooner?</h3>
              <p><strong>Phone:</strong> 01626 911236</p>
              <p><strong>Email:</strong> info@bsrdecorating.co.uk</p>
              <p>We are available Monday to Friday, 8:00 AM to 6:00 PM</p>
            </div>

            <p>We look forward to helping transform your space with our professional decorating services.</p>
            
            <p>Best regards,<br>
            <span class="highlight">The BSR Decorating Team</span></p>
          </div>
          
          <div class="footer">
            <p><strong>BSR Decorating</strong> | Professional Decorating Services | South East Devon</p>
            <p>This email was sent in response to your quote request on our website.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const customerMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: formData.email,
      replyTo: process.env.EMAIL_DEFAULT || 'info@bsrdecorating.co.uk',
      subject: 'Thank you for your quote request - BSR Decorating',
      html: customerEmailHTML,
      text: `
Thank you for your quote request - BSR Decorating

Dear ${formData.name},

Thank you for choosing BSR Decorating for your ${formData.serviceType} decorating project. We have received your quote request and our team is reviewing the details you provided.

What happens next?
We will contact you within 2 working days to discuss your project requirements and arrange a convenient time for a site visit if needed. Our experienced team will provide you with a detailed, competitive quote tailored to your specific needs.

Your Quote Reference:
Location: ${formData.postcode} | Service: ${formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}

Need to speak to us sooner?
Phone: 01626 911236
Email: info@bsrdecorating.co.uk
We are available Monday to Friday, 8:00 AM to 6:00 PM

We look forward to helping transform your space with our professional decorating services.

Best regards,
The BSR Decorating Team

BSR Decorating | Professional Decorating Services | South East Devon
This email was sent in response to your quote request on our website.
      `
    };

    // Send customer thank you email
    console.log('Attempting to send customer thank you email to:', formData.email);
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
      console.log('✅ Customer thank you email sent successfully to:', formData.email);
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

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request sent successfully' 
    });

  } catch (error) {
    console.error('Email sending failed:', error);
    console.error('Environment check:', {
      hasHost: !!process.env.EMAIL_HOST,
      hasUser: !!process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASSWORD,
      host: process.env.EMAIL_HOST
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send quote request. Please call 01626 911236.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 200 } // Change to 200 to avoid browser console errors
    );
  }
}
