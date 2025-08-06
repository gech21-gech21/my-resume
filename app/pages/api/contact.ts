// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
    message: string;
  };
}

export default async function handler(
  req: ContactRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to you (the site owner)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} - Portfolio Contact`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New message from portfolio contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>---</p>
        <p>You can reply directly to this email to respond to ${name}.</p>
      `,
      replyTo: email,
    });

    // Confirmation email to the sender
    await transporter.sendMail({
      from: `"${process.env.EMAIL_SENDER_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for your message',
      text: `Hi ${name},\n\nThank you for reaching out! I've received your message and will get back to you soon.\n\nYour message:\n${message}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
        <p>Here's what you sent:</p>
        <blockquote>${message.replace(/\n/g, '<br>')}</blockquote>
        <p>Best regards,</p>
        <p>${process.env.EMAIL_SENDER_NAME}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}