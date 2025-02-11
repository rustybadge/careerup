import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email-sender';

export async function POST(req: Request) {
  try {
    const { userId, email, preferences } = await req.json();

    // For testing, we'll use mock content
    const mockContent = [
      { url: 'https://example.com/article1', title: 'Test Article 1', type: 'article' },
      { url: 'https://example.com/video1', title: 'Test Video 1', type: 'video' },
    ];

    // Send email
    const emailSent = await sendEmail(email, 'Your Test Newsletter', mockContent);

    if (emailSent) {
      return NextResponse.json({ success: true, message: 'Newsletter sent successfully' });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send email through Resend' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in send-newsletter API:', error);
    return NextResponse.json(
      { success: false, message: `Server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}