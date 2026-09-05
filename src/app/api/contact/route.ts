import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      service,
      budget,
      timeline,
      message,
      formLocation = "Website Contact Form",
    } = body;

    // Validate essential inputs
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser || "contact@digitalwebstudio.in";
    const rawToEmails = process.env.CONTACT_TO_EMAIL || "contact@digitalwebstudio.in, jeevawebstudio@gmail.com";
    const toEmail = rawToEmails
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    // Format HTML email
    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Submission</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #030608; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f5f8f6;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #030608; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0a0f13; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                <!-- Header -->
                <tr>
                  <td style="padding: 30px; background: linear-gradient(135deg, #0d161c 0%, #060a0d 100%); border-bottom: 2px solid #9ae64c;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 2px; color: #9ae64c; font-weight: bold; margin-bottom: 6px;">
                            ⚡ NEW INQUIRY RECEIVED
                          </div>
                          <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">
                            ${service || "General Inquiry"}
                          </h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 30px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287;">Client Name</div>
                          <div style="font-size: 16px; font-weight: bold; color: #ffffff; margin-top: 4px;">${name}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287;">Email Address</div>
                          <div style="font-size: 15px; margin-top: 4px;">
                            <a href="mailto:${email}" style="color: #9ae64c; text-decoration: none; font-weight: 600;">${email}</a>
                          </div>
                        </td>
                      </tr>
                      ${
                        phone
                          ? `
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287;">Phone / WhatsApp</div>
                          <div style="font-size: 15px; color: #ffffff; margin-top: 4px;">
                            <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
                          </div>
                        </td>
                      </tr>`
                          : ""
                      }
                      ${
                        budget
                          ? `
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287;">Target Budget</div>
                          <div style="font-size: 15px; color: #ffffff; margin-top: 4px; font-weight: 600;">${budget}</div>
                        </td>
                      </tr>`
                          : ""
                      }
                      ${
                        timeline
                          ? `
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287;">Project Timeline</div>
                          <div style="font-size: 15px; color: #ffffff; margin-top: 4px; font-weight: 600;">${timeline}</div>
                        </td>
                      </tr>`
                          : ""
                      }
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287;">Source Form / Location</div>
                          <div style="font-size: 13px; color: #9cb1a6; margin-top: 4px; font-family: monospace;">${formLocation}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287;">Received At (IST)</div>
                          <div style="font-size: 13px; color: #9cb1a6; margin-top: 4px;">${submissionTime}</div>
                        </td>
                      </tr>
                    </table>

                    ${
                      message
                        ? `
                    <!-- Message Box -->
                    <div style="background-color: #05080a; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; margin-bottom: 25px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #7d9287; margin-bottom: 8px;">Project Scope & Brief</div>
                      <div style="font-size: 14px; line-height: 1.6; color: #e5ece8; white-space: pre-wrap;">${message}</div>
                    </div>`
                        : ""
                    }

                    <!-- Action Button -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="padding-top: 10px;">
                          <a href="mailto:${email}?subject=Re: Your Inquiry with DigitalWebStudio (${service || "Project Consultation"})" style="display: inline-block; padding: 14px 28px; background-color: #9ae64c; color: #05080a; font-weight: bold; font-size: 14px; text-decoration: none; border-radius: 50px; box-shadow: 0 4px 15px rgba(154, 230, 76, 0.4);">
                            Reply to ${name} &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 30px; background-color: #06090c; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center; font-size: 12px; color: #556960;">
                    DigitalWebStudio Lead Management System &bull; <a href="https://digitalwebstudio.in" style="color: #7d9287; text-decoration: none;">digitalwebstudio.in</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Strategy 1: Brevo REST API (Fastest & Most Reliable via HTTPS, Zero DNS/SMTP EBUSY issues)
    if (brevoApiKey) {
      const brevoPayload = {
        sender: { name: "DigitalWebStudio Inquiry", email: smtpFrom },
        to: toEmail.map((addr) => ({ email: addr })),
        replyTo: { name, email },
        subject: `⚡ New Lead: [${service || "General"}] - ${name}`,
        htmlContent: emailHtml,
        textContent: `New lead from ${name} (${email}):\nService: ${service}\nBudget: ${budget || "N/A"}\nTimeline: ${timeline || "N/A"}\nMessage: ${message || "N/A"}\nLocation: ${formLocation}`,
      };

      const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify(brevoPayload),
      });

      if (!brevoRes.ok) {
        const errData = await brevoRes.json().catch(() => ({}));
        throw new Error(errData.message || `Brevo API returned status ${brevoRes.status}`);
      }

      console.log(`[Brevo API] Successfully dispatched lead notification to ${toEmail.join(", ")}`);
    }
    // Strategy 2: Nodemailer SMTP with Timeout Protection & Auto-Retry
    else if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 15000,
        greetingTimeout: 15000,
        socketTimeout: 15000,
      });

      const mailOptions = {
        from: `"DigitalWebStudio Inquiry" <${smtpFrom}>`,
        to: toEmail,
        replyTo: `"${name}" <${email}>`,
        subject: `⚡ New Lead: [${service || "General"}] - ${name}`,
        html: emailHtml,
        text: `New lead from ${name} (${email}):\nService: ${service}\nBudget: ${budget || "N/A"}\nTimeline: ${timeline || "N/A"}\nMessage: ${message || "N/A"}\nLocation: ${formLocation}`,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (err: any) {
        // If transient DNS or socket EBUSY error on local machine, retry once after 1s
        if (err?.code === "EBUSY" || err?.code === "ETIMEDOUT" || err?.code === "EDNS" || err?.code === "ECONNRESET") {
          console.warn(`[SMTP] Transient ${err.code} encountered, retrying dispatch in 1s...`);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await transporter.sendMail(mailOptions);
        } else {
          throw err;
        }
      }

      console.log(`[SMTP] Successfully dispatched lead notification to ${toEmail.join(", ")}`);
    } else {
      console.warn(
        "[SMTP] Neither BREVO_API_KEY nor SMTP credentials configured. Submission logged."
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully submitted.",
    });
  } catch (error: any) {
    console.error("[SMTP Error]", error);
    return NextResponse.json(
      { error: error.message || "Failed to process form submission." },
      { status: 500 }
    );
  }
}
