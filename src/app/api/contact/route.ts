import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, comment } = await req.json();

  // Configure SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "alsujon2001@gmail.com",
      pass: "jshu txhb ckth heio",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "ukgfashion@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 24px; border-radius: 8px; background: #ffffff;">
    <h2 style="color: #d32f2f; margin-bottom: 16px;">📩 New Contact Message</h2>

    <table style="width: 100%; margin-bottom: 24px;">
      <tr>
        <td style="font-weight: bold; padding: 4px 0;">Name:</td>
        <td style="padding: 4px 0;">${name}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 4px 0;">Email:</td>
        <td style="padding: 4px 0;"><a href="mailto:${email}">${email}</a></td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 4px 0;">Phone:</td>
        <td style="padding: 4px 0;">${phone || "N/A"}</td>
      </tr>
    </table>

    <div style="margin-bottom: 24px;">
      <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
      <div style="background: #f9f9f9; padding: 12px; border-left: 4px solid #d32f2f; border-radius: 4px; line-height: 1.6;">
        ${comment.replace(/\n/g, "<br />")}
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

    <footer style="font-size: 12px; color: #888; text-align: center;">
      Sent from the <strong>HatsMaster</strong> website contact form.
    </footer>
  </div>
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
