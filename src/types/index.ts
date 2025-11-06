// Core types for the Laundry Love website

export interface PreRegistrationFormData {
  fullName: string;
  phoneNumber: string;
  livingSituation: string;
}

export interface Location {
  name: string;
  address: string;
  nextEventDate?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}