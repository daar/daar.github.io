import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function post({ request }) {
  const { email, message } = await request.json();

  if (!email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
  }

  const method = import.meta.env.EMAIL_METHOD; // "resend" or "gmail"

  if (method === "gmail") {
    // Use Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.SMTP_EMAIL,
        pass: import.meta.env.SMTP_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: import.meta.env.SMTP_EMAIL,
        to: "your-email@example.com",
        subject: "New Contact Message",
        text: `Email: ${email}\nMessage: ${message}`,
      });

      return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
  } else {
    // Use Resend API
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: import.meta.env.RESEND_FROM,
        to: "your-email@example.com",
        subject: "New Contact Message",
        text: `Email: ${email}\nMessage: ${message}`,
      });

      return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
  }
}
