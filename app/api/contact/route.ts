import { NextResponse } from "next/server";
import { contactSchema } from "../../lib/schemas";
import prisma from "../../lib/prisma";

import { sendEmail } from "../../lib/email";
export async function POST(request: Request) {
  try {
    if (!prisma) {
      throw new Error("Prisma client is not initialized");
    }
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const message = await prisma.contactMessage.create({
      data: validatedData,
    });

    const adminEmailResult = await sendEmail({
      to: "fikadegetahun695@gmail.com",
      subject: `New Contact from ${validatedData.name}`,
      text: `You have a new message from ${validatedData.name} (${validatedData.email}):\n\n${validatedData.message}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });

    if (!adminEmailResult.success) {
      console.error("Admin email failed:", adminEmailResult.error);
    }

    const confirmationEmailResult = await sendEmail({
      to: validatedData.email,
      subject: "Thank you for contacting me",
      text: `Hi ${validatedData.name},\n\nThank you for your message. I'll get back to you soon!\n\nBest regards,\nFikade Getahun`,
      html: `
        <h1>Thank you for contacting me</h1>
        <p>Hi ${validatedData.name},</p>
        <p>Thank you for your message. I'll get back to you soon!</p>
        <p>Best regards,<br/>Fikade Getahun</p>
      `,
    });

    if (!confirmationEmailResult.success) {
      console.error(
        "Confirmation email failed:",
        confirmationEmailResult.error
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully! You'll receive a confirmation email shortly.",
      data: message,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process request",
        error:
          process.env.NODE_ENV === "development"
            ? error instanceof Error
              ? error.message
              : "Unknown error"
            : undefined,
      },
      { status: 500 }
    );
  }
}
