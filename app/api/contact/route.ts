import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';
import { sendEmail } from '@/lib/email';
import { ZodError } from 'zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // 2. Send email to the site owner (YOU)
    const adminEmailResult = await sendEmail({
      to: 'techsparks.co@gmail.com',
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (!adminEmailResult.success) {
      throw new Error('Failed to send admin email');
    }

    // 3. Send confirmation email to the user (Optional but recommended)
    // await sendEmail({
    //   to: validatedData.email,
    //   subject: 'We received your message!',
    //   html: `<h1>Hi ${validatedData.name},</h1><p>Thanks for reaching out. We'll get back to you soon.</p>`,
    // });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
