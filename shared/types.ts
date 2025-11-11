export interface PreRegistrationData {
  fullName: string;
  phoneNumber: string;
  livingSituation: string;
  submittedAt?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  error?: string;
}
