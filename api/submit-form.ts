import type { VercelRequest, VercelResponse } from "@vercel/node";
import { preRegistrationSchema } from "../shared/validation";
import { appendToSheet } from "./_helpers/google-sheets";
import type { FormSubmissionResponse } from "../shared/types";

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
