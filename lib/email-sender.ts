import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, subject: string, content: any[]) {
  try {
    console.log('Attempting to send email with Resend...');
    console.log('API Key present:', !!process.env.RESEND_API_KEY);
    
    const htmlContent = `
      <h1>Your Weekly Newsletter</h1>
      <ul>
        ${content.map(item => `
          <li>
            <a href="${item.url}">${item.title}</a> (${item.type})
          </li>
        `).join('')}
      </ul>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Your Newsletter <newsletter@levelup.thecorporateexplorers.com>',
      to: [to],
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return false;
    }

    console.log('Email sent successfully:', data);
    return true;
  } catch (error) {
    console.error('Error in sendEmail function:', error);
    return false;
  }
}