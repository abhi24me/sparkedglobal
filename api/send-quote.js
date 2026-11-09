import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL;
const toEmail = process.env.RESEND_TO_EMAIL;

const resend = new Resend(resendApiKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { from_name, from_email, phone, interest, message } = req.body;
    if (!from_name || !from_email || !phone || !message) {
      return res.status(400).json({ error: 'Missing required form fields.' });
    }

    const html = `
      <h1>New Quote Request</h1>
      <p><strong>Name:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${from_email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'New Quote Request from Website',
      html,
      reply_to: from_email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend email error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
