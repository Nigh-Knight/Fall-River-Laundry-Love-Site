import { z } from "zod";

export const preRegistrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().regex(/^\+?[\d\s\-()]+$/, "Please enter a valid phone number"),
  livingSituation: z.string().min(2, "Please describe your living situation"),
});

export type PreRegistrationFormData = z.infer<typeof preRegistrationSchema>;
