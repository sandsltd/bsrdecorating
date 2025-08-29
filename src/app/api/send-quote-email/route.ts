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
        message: 'Email service not configured. Please contact us directly at 07700 900000.',
        missingConfig: true
      }, { status: 200 }); // Return 200 to avoid browser errors
    }

    // Create email transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: parseInt(process.env.EMAIL_PORT || '587') === 465, // SSL for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
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
    if (formData.externalDecorating) additionalServices.push('Exterior Decorating');
    if (formData.garageDoor) additionalServices.push('Garage Door');
    if (formData.frontDoor) additionalServices.push('Front Door');

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
            <div class="logo">BSR Decorating Ltd</div>
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
            <p style="margin: 0;"><strong>BSR Decorating Ltd</strong></p>
            <p style="margin: 5px 0 0 0;">Professional Decorating Services • South East Devon</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'hello@saunders-simmons.co.uk',
      subject: `🎨 New Quote Request from ${formData.name} (${formData.postcode})`,
      html: emailHTML,
      text: `
New Quote Request - BSR Decorating Ltd

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

    // Send email
    await transporter.sendMail(mailOptions);

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
        message: 'Failed to send quote request. Please call 07700 900000.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 200 } // Change to 200 to avoid browser console errors
    );
  }
}
