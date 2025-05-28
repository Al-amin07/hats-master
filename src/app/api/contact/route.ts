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
 <div style="background: #f0f4f8; padding: 40px 16px; font-family: 'Helvetica Neue', sans-serif;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); overflow: hidden;">

      <div style="background: linear-gradient(135deg, #2b6cb0, #2c5282); color: #fff; padding: 24px 32px;">
        <h2 style="margin: 0; font-size: 22px;">New Contact Request 📬</h2>
        <p style="margin: 4px 0 0;">From your HatsMaster website</p>
      </div>

      <div style="padding: 24px 32px; color: #333;">
        <h3 style="margin-bottom: 16px; font-size: 18px;">Contact Details</h3>
        <table style="width: 100%; font-size: 15px; border-spacing: 0 10px;">
          <tr>
            <td style="font-weight: 600;">Name:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="font-weight: 600;">Email:</td>
            <td><a href="mailto:${email}" style="color: #2b6cb0;">${email}</a></td>
          </tr>
          <tr>
            <td style="font-weight: 600;">Phone:</td>
            <td>${phone || "N/A"}</td>
          </tr>
        </table>

        <h3 style="margin: 24px 0 8px; font-size: 18px;">Message</h3>
        <div style="background: #f9fafb; padding: 16px; border-left: 4px solid #2b6cb0; border-radius: 6px; font-size: 14px; line-height: 1.6;">
          ${comment.replace(/\n/g, "<br />")}
        </div>
      </div>

      <div style="background: #edf2f7; padding: 16px 32px; font-size: 12px; text-align: center; color: #666;">
        &copy; ${new Date().getFullYear()} HatsMaster — Crafted with care.
      </div>

    </div>
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
