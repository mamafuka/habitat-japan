import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!contactEmail || !apiKey) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL");
      return NextResponse.json(
        { success: false, error: "Failed to send. Please try again." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Habitat Tokyo <hello@mail.habitattokyo.com>",
      to: contactEmail,
      replyTo: email,
      subject: "New inquiry from Habitat Tokyo",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send. Please try again." },
      { status: 500 },
    );
  }
}
