import nodemailer from "nodemailer";
import { z } from "zod";

const guestSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string().min(1),
  nationality: z.string().min(1),
  idDocument: z.string().min(1),
  issuingCountry: z.string().min(1),
});

export const checkinSchema = z.object({
  checkInDate: z.string().min(1),
  checkOutDate: z.string().min(1),
  email: z.string().email(),
  phoneCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  guests: z.array(guestSchema).min(1),
});

export type CheckinData = z.infer<typeof checkinSchema>;

// "YYYY-MM-DD" (input type="date") -> M/D/YYYY or MM/DD/YYYY, without timezone shifts
function formatDate(value: string, pad: boolean): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const [, year, month, day] = match;
  return pad
    ? `${month}/${day}/${year}`
    : `${parseInt(month, 10)}/${parseInt(day, 10)}/${year}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendCheckinEmail(data: CheckinData): Promise<void> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP_USER/SMTP_PASS not configured");
  }

  const checkIn = formatDate(data.checkInDate, false);
  const checkOut = formatDate(data.checkOutDate, false);
  const phone = `${data.phoneCode || ""} ${data.phoneNumber || ""}`.trim();
  const generatedAt = new Date().toLocaleString("en-US", { timeZone: "Atlantic/Azores" });
  const subject = `Check-in Registration - ${checkIn} to ${checkOut}`;

  const bookingRows: [string, string][] = [
    ["Check-in Date", checkIn],
    ["Check-out Date", checkOut],
    ["Number of Guests", String(data.guests.length)],
    ["Phone", phone],
  ];

  const cell = "border: 1px solid #ddd; padding: 8px; text-align: left;";

  const html = `
<div style="font-family: Arial, sans-serif; color: #333;">
  <h1>Check-in Registration</h1>

  <h2>Booking Details</h2>
  <table style="border-collapse: collapse;">
    ${bookingRows.map(([label, value]) => `
    <tr>
      <th style="${cell} background: #f5f5f5;">${label}</th>
      <td style="${cell}">${escapeHtml(value)}</td>
    </tr>`).join("")}
  </table>

  <h2>Guest Information</h2>
  <table style="border-collapse: collapse;">
    <tr>
      ${["#", "First Name", "Last Name", "Date of Birth", "Nationality", "ID Document", "Issuing Country"]
        .map((h) => `<th style="${cell} background: #f5f5f5;">${h}</th>`).join("")}
    </tr>
    ${data.guests.map((g, i) => `
    <tr>
      <td style="${cell}">${i + 1}</td>
      <td style="${cell}">${escapeHtml(g.firstName)}</td>
      <td style="${cell}">${escapeHtml(g.lastName)}</td>
      <td style="${cell}">${escapeHtml(formatDate(g.dateOfBirth, true))}</td>
      <td style="${cell}">${escapeHtml(g.nationality)}</td>
      <td style="${cell}">${escapeHtml(g.idDocument)}</td>
      <td style="${cell}">${escapeHtml(g.issuingCountry)}</td>
    </tr>`).join("")}
  </table>

  <p style="margin-top: 24px; font-size: 12px; color: #888;">Registration generated automatically on ${generatedAt}</p>
</div>`.trim();

  const text = [
    "Check-in Registration",
    "",
    "Booking Details",
    ...bookingRows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Guest Information",
    ...data.guests.map((g, i) =>
      `${i + 1}. ${g.firstName} ${g.lastName} | Date of Birth: ${formatDate(g.dateOfBirth, true)} | Nationality: ${g.nationality} | ID Document: ${g.idDocument} | Issuing Country: ${g.issuingCountry}`
    ),
    "",
    `Registration generated automatically on ${generatedAt}`,
  ].join("\n");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.sendMail({
    from: smtpUser,
    to: data.email,
    cc: "info@azores4fun.com",
    subject,
    html,
    text,
  });
}
