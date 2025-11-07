# Design Document

## Overview

The Google Sheets Form Integration system will replace the existing Express server with Vercel Functions to provide a serverless form submission solution. The system consists of a React frontend form component and a Vercel Function API endpoint that authenticates with Google Sheets API to store form submissions.

## Architecture

### High-Level Architecture

```
[React Form Component] → [Vercel Function API] → [Google Sheets API] → [Google Spreadsheet]
```

### Component Flow

1. **Frontend Form**: React component with form validation and submission handling
2. **API Endpoint**: Vercel Function at `/api/submit-form` that processes form data
3. **Google Sheets Integration**: Service account authentication and data appending
4. **Response Handling**: Success/error feedback to the user

### Authentication Strategy

**Service Account Authentication** (Recommended for server-to-server)
- Use Google Service Account with JSON key file
- Store credentials securely in Vercel environment variables
- No user interaction required for authentication

## Components and Interfaces

### 1. Frontend Form Component

**Location**: `client/components/PreRegistrationForm.tsx`

**Features**:
- Form fields for pre-registration data
- Client-side validation using React Hook Form + Zod
- Loading states during submission
- Success/error message display
- Responsive design with Tailwind CSS

**Form Fields**:
- Full Name (text, required)
- Phone Number (tel, required)
- Living Situation (text, required)

### 2. Vercel Function API

**Location**: `api/submit-form.ts`

**Responsibilities**:
- Receive and validate form data
- Authenticate with Google Sheets API
- Append data to designated spreadsheet
- Return appropriate success/error responses

**Request/Response Interface**:
```typescript
// Request
interface FormSubmissionRequest {
  fullName: string;
  phoneNumber: string;
  livingSituation: string;
}

// Response
interface FormSubmissionResponse {
  success: boolean;
  message: string;
  error?: string;
}
```

### 3. Google Sheets Integration Service

**Location**: `api/lib/google-sheets.ts`

**Responsibilities**:
- Handle Google Sheets API authentication
- Provide methods for appending data to sheets
- Error handling for API failures

### 4. Shared Types and Validation

**Location**: `shared/types.ts` and `shared/validation.ts`

**Purpose**:
- Shared TypeScript interfaces
- Zod validation schemas for form data
- Consistent data types between frontend and backend

## Data Models

### Form Submission Data

```typescript
interface PreRegistrationData {
  fullName: string;
  phoneNumber: string;
  livingSituation: string;
  submittedAt: string; // ISO timestamp
}
```

### Google Sheets Row Structure

| Column A  | Column B     | Column C         | Column D     |
|-----------|--------------|------------------|--------------|
| Full Name | Phone Number | Living Situation | Submitted At |

## Error Handling

### Client-Side Error Handling

1. **Form Validation Errors**: Display field-specific validation messages
2. **Network Errors**: Show generic "Please try again" message
3. **Server Errors**: Display server-provided error messages

### Server-Side Error Handling

1. **Validation Errors**: Return 400 with specific field errors
2. **Authentication Errors**: Return 500 with generic error message
3. **Google Sheets API Errors**: Return 500 with user-friendly message
4. **Rate Limiting**: Return 429 with retry-after information

### Error Response Format

```typescript
interface ErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>; // Field-specific errors
}
```

## Security Considerations

### Environment Variables

Required environment variables for Vercel deployment:
- `GOOGLE_SHEETS_PRIVATE_KEY`: Service account private key
- `GOOGLE_SHEETS_CLIENT_EMAIL`: Service account email
- `GOOGLE_SHEETS_SPREADSHEET_ID`: Target spreadsheet ID
- `GOOGLE_SHEETS_SHEET_NAME`: Target sheet name (optional, defaults to first sheet)

### Data Validation

- Server-side validation using Zod schemas
- Input sanitization to prevent injection attacks
- Rate limiting to prevent spam submissions

### CORS Configuration

- Configure appropriate CORS headers for production domain
- Restrict API access to authorized origins

## Testing Strategy

### Unit Tests

1. **Form Validation**: Test Zod schemas with valid/invalid data
2. **Google Sheets Service**: Mock API calls and test error handling
3. **API Endpoint**: Test request/response handling

### Integration Tests

1. **End-to-End Form Submission**: Test complete form submission flow
2. **Google Sheets Integration**: Test actual API integration (with test spreadsheet)

### Manual Testing

1. **Form UI/UX**: Test form interaction and validation messages
2. **Error Scenarios**: Test network failures and API errors
3. **Cross-browser Compatibility**: Test form functionality across browsers

## Deployment Configuration

### Vercel Configuration

**vercel.json** (if needed):
```json
{
  "functions": {
    "api/submit-form.ts": {
      "maxDuration": 10
    }
  }
}
```

### Environment Setup

1. Create Google Cloud Project
2. Enable Google Sheets API
3. Create Service Account and download JSON key
4. Share target spreadsheet with service account email
5. Configure Vercel environment variables

## Performance Considerations

### Optimization Strategies

1. **Lazy Loading**: Load form component only when needed
2. **API Response Caching**: Cache successful submissions briefly
3. **Error Retry Logic**: Implement exponential backoff for failed requests
4. **Bundle Size**: Use tree-shaking to minimize JavaScript bundle

### Monitoring

1. **Vercel Analytics**: Monitor function execution times and errors
2. **Google Sheets API Quotas**: Monitor API usage to avoid limits
3. **Form Submission Metrics**: Track success/failure rates