import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500, headers }
      );
    }

    // Parse request body
    let body: ContactFormData;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body.' },
        { status: 400, headers }
      );
    }

    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          error: 'Missing required fields. Please provide name, email, and message.',
          fields: {
            name: !name ? 'Name is required' : null,
            email: !email ? 'Email is required' : null,
            message: !message ? 'Message is required' : null,
          }
        },
        { status: 400, headers }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          error: 'Please provide a valid email address.',
          fields: { email: 'Invalid email format' }
        },
        { status: 400, headers }
      );
    }

    // Sanitize inputs (basic HTML escape)
    const sanitizedName = name.trim().replace(/[<>]/g, '');
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim().replace(/[<>]/g, '');

    // Create HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #374151;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9fafb;
          }
          .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #d8b4fe 0%, #a5b4fc 100%);
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            color: #000000;
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.01em;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 24px;
            border-left: 4px solid #d8b4fe;
            padding-left: 16px;
          }
          .field-label {
            font-weight: 600;
            color: #111827;
            margin-bottom: 8px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .field-value {
            color: #374151;
            font-size: 16px;
            line-height: 1.5;
          }
          .message-content {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .footer {
            background: #f8fafc;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            margin: 0;
            font-size: 14px;
            color: #64748b;
          }
          .reply-info {
            background: #eff6ff;
            border: 1px solid #bfdbfe;
            border-radius: 8px;
            padding: 16px;
            margin-top: 20px;
          }
          .reply-info p {
            margin: 0;
            font-size: 14px;
            color: #1e40af;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">From</div>
              <div class="field-value">${sanitizedName}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${sanitizedEmail}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value">
                <div class="message-content">${sanitizedMessage}</div>
              </div>
            </div>
            
            <div class="reply-info">
              <p><strong>💡 Quick Reply:</strong> This email is set up with reply-to, so you can simply hit "Reply" to respond directly to ${sanitizedName}.</p>
            </div>
          </div>
          
          <div class="footer">
            <p>This message was sent through your website contact form on ${new Date().toLocaleString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <noreply@resend.dev>',
        to: ['nspnexus003@gmail.com'],
        replyTo: sanitizedEmail,
        subject: `New Contact Form Submission from ${sanitizedName}`,
        html: htmlTemplate,
        text: `
New Contact Form Submission

From: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
Sent on ${new Date().toLocaleString()}
        `.trim(),
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json(
          { 
            error: 'Failed to send email. Please try again later or contact us directly.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
          },
          { status: 500, headers }
        );
      }

      return NextResponse.json(
        { 
          success: true,
          message: 'Your message has been sent successfully! We\'ll get back to you soon.',
          messageId: data?.id
        },
        { status: 200, headers }
      );

    } catch (resendError: any) {
      console.error('Resend service error:', resendError);
      return NextResponse.json(
        { 
          error: 'Email service temporarily unavailable. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? resendError.message : undefined
        },
        { status: 503, headers }
      );
    }

  } catch (error: any) {
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500, headers }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}