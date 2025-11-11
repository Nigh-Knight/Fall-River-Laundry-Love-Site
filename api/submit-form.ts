import type { VercelRequest, VercelResponse } from "@vercel/node";
import { google } from "googleapis";
import { z } from "zod";

// Inline validation schema
const preRegistrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().regex(/^\+?[\d\s\-()]+$/, "Please enter a valid phone number"),
  livingSituation: z.string().min(2, "Please describe your living situation"),
});

// Inline Google Sheets helper
async function appendToSheet(data: string[][]) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: data,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    throw new Error("Failed to save data to Google Sheets");
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // Validate request body
    const validationResult = preRegistrationSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        error: validationResult.error.errors.map(e => e.message).join(", "),
      });
    }

    const { fullName, phoneNumber, livingSituation } = validationResult.data;
    const submittedAt = new Date().toISOString();

    // Append to Google Sheets
    await appendToSheet([[fullName, phoneNumber, livingSituation, submittedAt]]);

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit form. Please try again later.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
