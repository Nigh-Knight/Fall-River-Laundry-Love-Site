import "dotenv/config";
import express from "express";
import { google } from "googleapis";

const app = express();
app.use(express.json());

// Google Sheets helper
async function appendToSheet(data) {
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

// API endpoint
app.post("/api/submit-form", async (req, res) => {
  try {
    const { fullName, phoneNumber, livingSituation } = req.body;

    // Basic validation
    if (!fullName || !phoneNumber || !livingSituation) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

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
      error: error.message,
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🔧 Dev API server running on http://localhost:${PORT}`);
});
