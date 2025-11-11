# Google Sheets Setup Guide

This guide will walk you through setting up Google Sheets API integration for the form submission system.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- A Google Sheets spreadsheet where you want to store form submissions

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top of the page
3. Click "New Project"
4. Enter a project name (e.g., "Laundry Love Forms")
5. Click "Create"

## Step 2: Enable Google Sheets API

1. In your Google Cloud project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on "Google Sheets API"
4. Click "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Enter a service account name (e.g., "laundry-love-forms")
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Service Account Key

1. In the "Credentials" page, find your newly created service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Select "JSON" as the key type
6. Click "Create"
7. A JSON file will be downloaded to your computer - keep this file secure!

## Step 5: Share Your Google Sheet

1. Open the JSON key file you downloaded
2. Find the `client_email` field (it looks like: `your-service-account@your-project.iam.gserviceaccount.com`)
3. Copy this email address
4. Open your Google Sheets spreadsheet
5. Click the "Share" button
6. Paste the service account email
7. Give it "Editor" permissions
8. Uncheck "Notify people" (since it's a service account)
9. Click "Share"

## Step 6: Get Your Spreadsheet ID

1. Open your Google Sheets spreadsheet
2. Look at the URL in your browser
3. The spreadsheet ID is the long string between `/d/` and `/edit`
   
   Example: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`

## Step 7: Configure Environment Variables

Create a `.env` file in your project root with the following variables:

```env
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here
GOOGLE_SHEETS_SHEET_NAME=Sheet1
```

### Finding the Values:

- **GOOGLE_SHEETS_CLIENT_EMAIL**: Found in the JSON key file as `client_email`
- **GOOGLE_SHEETS_PRIVATE_KEY**: Found in the JSON key file as `private_key` (keep the quotes and `\n` characters)
- **GOOGLE_SHEETS_SPREADSHEET_ID**: Extracted from your spreadsheet URL (see Step 6)
- **GOOGLE_SHEETS_SHEET_NAME**: The name of the sheet tab (default is "Sheet1")

### Important Notes:

- The private key must be wrapped in double quotes
- Keep the `\n` characters in the private key - they represent line breaks
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`

## Step 8: Set Up Your Spreadsheet Structure

Your Google Sheet should have the following columns in the first row:

| Column A  | Column B     | Column C         | Column D     |
|-----------|--------------|------------------|--------------|
| Full Name | Phone Number | Living Situation | Submitted At |

The form will automatically append new rows with this structure.

## Step 9: Vercel Deployment (Production)

When deploying to Vercel, you need to add the environment variables:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add each environment variable:
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
   - `GOOGLE_SHEETS_SHEET_NAME`
4. Make sure to select the appropriate environments (Production, Preview, Development)
5. Click "Save"

## Troubleshooting

### "Permission denied" error

- Make sure you shared the spreadsheet with the service account email
- Verify the service account has "Editor" permissions

### "Invalid credentials" error

- Check that your `GOOGLE_SHEETS_CLIENT_EMAIL` matches the `client_email` in your JSON key
- Verify that your `GOOGLE_SHEETS_PRIVATE_KEY` includes the full key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Make sure the private key is wrapped in double quotes

### "Spreadsheet not found" error

- Verify your `GOOGLE_SHEETS_SPREADSHEET_ID` is correct
- Check that the spreadsheet hasn't been deleted or moved

### "Sheet not found" error

- Verify your `GOOGLE_SHEETS_SHEET_NAME` matches the exact name of the sheet tab
- Sheet names are case-sensitive

## Security Best Practices

1. **Never commit credentials**: Always keep your `.env` file out of version control
2. **Limit service account permissions**: Only share the specific spreadsheet needed
3. **Rotate keys periodically**: Generate new service account keys every few months
4. **Use environment-specific keys**: Consider using different service accounts for development and production
5. **Monitor API usage**: Check Google Cloud Console for unusual activity

## Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Cloud Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
