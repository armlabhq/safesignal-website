import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const RECIPIENT = "info@safesignal.be";
const SENDER = { name: "SafeSignal Website", email: "info@safesignal.be" };

export async function POST(req: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Service not configured" }, { status: 503 });
  }

  const body = await req.json();
  const { name, company, email, phone, service, message, businessUnit } = body;

  if (!name || !email || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const subject = businessUnit
    ? `Offerteaanvraag via SafeSignal ${businessUnit} — ${name}`
    : `Offerteaanvraag via SafeSignal — ${name}`;

  const htmlContent = `
<h2>Nieuwe offerteaanvraag</h2>
${businessUnit ? `<p><strong>Divisie:</strong> SafeSignal ${businessUnit}</p>` : ""}
<table>
  <tr><td><strong>Naam</strong></td><td>${name}</td></tr>
  ${company ? `<tr><td><strong>Bedrijf</strong></td><td>${company}</td></tr>` : ""}
  <tr><td><strong>E-mail</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
  ${phone ? `<tr><td><strong>Telefoon</strong></td><td>${phone}</td></tr>` : ""}
  <tr><td><strong>Dienst</strong></td><td>${service}</td></tr>
  ${message ? `<tr><td><strong>Bericht</strong></td><td>${message}</td></tr>` : ""}
</table>
  `.trim();

  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: SENDER,
      to: [{ email: RECIPIENT }],
      replyTo: { email, name },
      subject,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
