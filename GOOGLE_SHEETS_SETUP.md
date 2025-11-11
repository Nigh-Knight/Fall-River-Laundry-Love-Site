# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets API integration for the form submission feature.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- A Google Spreadsheet where you want to store form submissions

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter a project name (e.g., "Laundry Love Forms")
4. Click "Create"

## Step 2: Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Enter a name (e.g., "form-submissions")
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Service Account Key

1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" → "Create new key"
5. Choose "JSON" format
6. Click "Create" - a JSON file will download

## Step 5: Prepare Your Google Spreadsheet

1. Create or open your Google Spreadsheet
2. Add headers in the first row:
   - Column A: Full Name
   - Column B: Phone Number
   - Column C: Living Situation
   - Column D: Submitted At

3. Share the spreadsheet with your service account:
   - Click "Share" button
   - Paste the service account email (from the JSON file: `client_email`)
   - Give it "Editor" access
   - Uncheck "Notify people"
   - Click "Share"

## Step 6: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Open the downloaded JSON key file
3. Copy the values to your `.env` file:

```env
GOOGLE_SHEETS_CLIENT_EMAIL=<client_email from JSON>
GOOGLE_SHEETS_PRIVATE_KEY="<private_key from JSON>"
GOOGLE_SHEETS_SPREADSHEET_ID=<from your spreadsheet URL>
GOOGLE_SHEETS_SHEET_NAME=Sheet1
```

**Important Notes:**
- The `GOOGLE_SHEETS_PRIVATE_KEY` must include the quotes and newline characters (`\n`)
- The spreadsheet ID is the long string in your spreadsheet URL between `/d/` and `/edit`
- Example URL: `https://docs.google.com/spreadsheets/d/1ABC...XYZ/edit`
  - Spreadsheet ID: `1ABC...XYZ`

## Step 7: Deploy to Vercel

1. Push your code to GitHub
2. Import your project in Vercel
3. Add the environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable from your `.env` file
   - Make sure to add them for Production, Preview, and Development

## Testing

1. Run your development server: `npm run dev`
2. Navigate to the form on your site
3. Submit a test entry
4. Check your Google Spreadsheet to verify the data appears

## Troubleshooting

### "Failed to save data to Google Sheets"
- Verify the service account email has Editor access to the spreadsheet
- Check that the spreadsheet ID is correct
- Ensure the private key is properly formatted with `\n` characters

### "Authentication failed"
- Double-check the `GOOGLE_SHEETS_CLIENT_EMAIL` matches the JSON file
- Verify the `GOOGLE_SHEETS_PRIVATE_KEY` includes the full key with headers

### Data not appearing in spreadsheet
- Check the sheet name matches `GOOGLE_SHEETS_SHEET_NAME`
- Verify the spreadsheet isn't protected or locked
- Check Vercel function logs for errors

## Security Notes

- Never commit your `.env` file or service account JSON to version control
- Keep your service account credentials secure
- Regularly rotate your service account keys
- Use Vercel's environment variables for production deployment
