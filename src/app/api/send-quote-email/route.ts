import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY!);

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

    // Coverage badge colours
    const coverageBadgeStyle = formData.postcodeStatus === 'main'
      ? 'background:#d4edda;color:#155724;'
      : formData.postcodeStatus === 'larger'
        ? 'background:#cce7ff;color:#004085;'
        : 'background:#f8d7da;color:#721c24;';

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
            <p style="margin:10px 0 0 0;font-size:16px;color:#ffffff;">New Quote Request</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:30px;background:#f9f9f9;">
            <!-- Urgent banner -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#fff3cd;border-left:4px solid #ffc107;padding:15px;margin-bottom:20px;">
                  <strong>New Quote Request Received!</strong><br>
                  A potential customer has submitted a quote request through your website.
                </td>
              </tr>
            </table>

            <!-- Customer Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:25px;border-radius:8px;margin-top:20px;">
              <tr><td style="padding:25px;">
                <h2 style="color:#E801F8;margin:0 0 15px 0;">Customer Details</h2>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Name:</td>
                    <td style="padding:10px 0;text-align:right;">${formData.name}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Email:</td>
                    <td style="padding:10px 0;text-align:right;">${formData.email}</td>
                  </tr>
                  ${formData.phone ? `<tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Phone:</td>
                    <td style="padding:10px 0;text-align:right;">${formData.phone}</td>
                  </tr>` : ''}
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Postcode:</td>
                    <td style="padding:10px 0;text-align:right;">${formData.postcode}</td>
                  </tr>
                </table>
                <div style="text-align:center;margin:15px 0;">
                  <span style="display:inline-block;padding:8px 16px;border-radius:20px;font-weight:bold;${coverageBadgeStyle}">${coverageArea}</span>
                </div>
              </td></tr>
            </table>

            <!-- Project Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:25px;border-radius:8px;margin-top:20px;">
              <tr><td style="padding:25px;">
                <h2 style="color:#E801F8;margin:0 0 15px 0;">Project Details</h2>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Service Type:</td>
                    <td style="padding:10px 0;text-align:right;">${formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}</td>
                  </tr>
                  ${formData.numberOfRooms ? `<tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Number of Rooms:</td>
                    <td style="padding:10px 0;text-align:right;">${formData.numberOfRooms}</td>
                  </tr>` : ''}
                  ${additionalServices.length > 0 ? `<tr style="border-bottom:1px solid #eee;">
                    <td style="padding:10px 0;font-weight:bold;color:#E801F8;">Additional Services:</td>
                    <td style="padding:10px 0;text-align:right;">${additionalServices.join(', ')}</td>
                  </tr>` : ''}
                </table>
                ${formData.message ? `
                <div style="margin-top:20px;padding:15px;background:#f8f9fa;border-radius:8px;border-left:4px solid #E801F8;">
                  <h4 style="color:#E801F8;margin:0 0 10px 0;font-size:16px;">Customer Message:</h4>
                  <p style="margin:0;color:#333;line-height:1.5;white-space:pre-wrap;">${formData.message}</p>
                </div>` : ''}
              </td></tr>
            </table>

            <!-- Next Steps -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
              <tr>
                <td style="background:#e9ecef;padding:20px;border-radius:8px;">
                  <h3 style="color:#E801F8;margin:0 0 10px 0;">Next Steps:</h3>
                  <ul style="margin:0;padding-left:20px;">
                    <li>Review the customer's location and project requirements</li>
                    <li>Contact the customer within 24 hours</li>
                    <li>Schedule a site visit if needed</li>
                    <li>Prepare and send a detailed quote</li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#E801F8;color:#ffffff;padding:20px;text-align:center;">
            <p style="margin:0;color:#ffffff;"><strong>BSR Decorating</strong></p>
            <p style="margin:5px 0 0 0;color:#ffffff;">Professional Decorating Services - South East Devon</p>
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
      subject: `New Quote Request from ${formData.name} (${formData.postcode})`,
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
            <h2 style="color:#E801F8;margin:0 0 20px 0;">Thank You for Your Quote Request</h2>
            <p>Dear ${formData.name},</p>
            <p>Thank you for choosing BSR Decorating for your ${formData.serviceType} decorating project. We have received your quote request and our team is reviewing the details you provided.</p>

            <!-- What happens next -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0;">
              <tr>
                <td style="background:#f8f9fa;border-left:4px solid #E801F8;padding:25px;border-radius:8px;">
                  <h3 style="color:#E801F8;margin:0 0 10px 0;">What happens next?</h3>
                  <p><strong>We will contact you within 2 working days</strong> to discuss your project requirements and arrange a convenient time for a site visit if needed.</p>
                  <p style="margin-bottom:0;">Our experienced team will provide you with a detailed, competitive quote tailored to your specific needs.</p>
                </td>
              </tr>
            </table>

            <!-- Quote Reference -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0;">
              <tr>
                <td style="background:#E801F8;color:#ffffff;padding:15px;border-radius:8px;text-align:center;">
                  <h3 style="margin:0;font-size:18px;color:#ffffff;">Your Quote Reference</h3>
                  <p style="margin:5px 0 0 0;font-size:16px;color:#ffffff;">Location: ${formData.postcode} | Service: ${formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}</p>
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
                  <p style="color:#ffffff;margin:5px 0;">We are available Monday to Friday, 8:00 AM to 6:00 PM</p>
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
            <p style="margin:5px 0 0 0;">This email was sent in response to your quote request on our website.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // Send customer thank you email
    console.log('Attempting to send customer thank you email to:', formData.email);

    try {
      const customerResult = await resend.emails.send({
        from: 'web@saunders-simmons.co.uk',
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
        `.trim(),
      });
      console.log('Customer thank you email sent successfully to:', formData.email, '- Message ID:', customerResult.data?.id);
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
