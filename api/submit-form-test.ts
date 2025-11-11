import type { VercelRequest, VercelResponse } from "@vercel/node";

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
    return res.status(200).json({
      success: true,
      message: "Test endpoint working!",
      body: req.body,
      env: {
        hasClientEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        hasPrivateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
        hasSpreadsheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      }
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
