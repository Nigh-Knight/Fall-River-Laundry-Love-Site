# Deployment Checklist for Vercel

## Pre-Deployment Setup

### 1. Google Cloud Setup
- [ ] Create Google Cloud Project
- [ ] Enable Google Sheets API
- [ ] Create Service Account
- [ ] Download Service Account JSON key
- [ ] Create Google Spreadsheet with headers:
  - Column A: Full Name
  - Column B: Phone Number
  - Column C: Living Situation
  - Column D: Submitted At
- [ ] Share spreadsheet with service account email (Editor access)

### 2. Local Testing
- [ ] Copy `.env.example` to `.env`
- [ ] Fill in all environment variables
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test form submission locally
- [ ] Verify data appears in Google Sheets
- [ ] Test validation errors
- [ ] Test success/error modals

### 3. Code Preparation
- [ ] Run `npm run typecheck` - ensure no errors
- [ ] Run `npm run build` - ensure build succeeds
- [ ] Commit all changes to Git
- [ ] Push to GitHub

## Vercel Deployment

### 4. Import Project
- [ ] Go to [Vercel Dashboard](https://vercel.com/dashboard)
- [ ] Click "Add New" → "Project"
- [ ] Import your GitHub repository
- [ ] Select the repository

### 5. Configure Project
- [ ] Framework Preset: Vite
- [ ] Root Directory: `./` (leave as default)
- [ ] Build Command: `npm run build` (should be auto-detected)
- [ ] Output Directory: `dist` (should be auto-detected)

### 6. Add Environment Variables
Go to Project Settings → Environment Variables and add:

- [ ] `GOOGLE_SHEETS_CLIENT_EMAIL`
  - Value: From your service account JSON (`client_email`)
  - Environments: Production, Preview, Development

- [ ] `GOOGLE_SHEETS_PRIVATE_KEY`
  - Value: From your service account JSON (`private_key`)
  - **Important**: Include the full key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
  - Keep the `\n` characters as-is
  - Environments: Production, Preview, Development

- [ ] `GOOGLE_SHEETS_SPREADSHEET_ID`
  - Value: From your spreadsheet URL (the long ID between `/d/` and `/edit`)
  - Environments: Production, Preview, Development

- [ ] `GOOGLE_SHEETS_SHEET_NAME`
  - Value: `Sheet1` (or your sheet name)
  - Environments: Production, Preview, Development

### 7. Deploy
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Check deployment logs for any errors

## Post-Deployment Testing

### 8. Verify Production
- [ ] Visit your deployed site
- [ ] Navigate to the form section
- [ ] Submit a test entry
- [ ] Check Google Sheets for the test data
- [ ] Verify success modal appears
- [ ] Test with invalid data to verify error handling
- [ ] Test on mobile device
- [ ] Test in different browsers (Chrome, Firefox, Safari)

### 9. Monitor
- [ ] Check Vercel Function logs for any errors
- [ ] Monitor form submissions in Google Sheets
- [ ] Set up alerts for function failures (optional)

## Troubleshooting

### If form submission fails:
1. Check Vercel Function logs in dashboard
2. Verify environment variables are set correctly
3. Ensure service account has Editor access to spreadsheet
4. Check that spreadsheet ID is correct
5. Verify private key format (should include `\n` characters)

### If data doesn't appear in sheets:
1. Check sheet name matches `GOOGLE_SHEETS_SHEET_NAME`
2. Verify spreadsheet isn't protected
3. Check service account permissions
4. Look for errors in Vercel Function logs

## Security Reminders

- [ ] Never commit `.env` file to Git
- [ ] Never commit service account JSON to Git
- [ ] Keep service account credentials secure
- [ ] Regularly review access logs
- [ ] Consider rotating service account keys periodically

## Success Criteria

✅ Form loads without errors
✅ Form validation works correctly
✅ Submissions save to Google Sheets
✅ Success/error modals display properly
✅ Site works on mobile and desktop
✅ No console errors in browser
✅ Vercel Functions execute successfully
