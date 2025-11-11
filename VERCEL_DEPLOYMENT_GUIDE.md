# Vercel Deployment Guide

## Pre-Deployment Checklist

✅ All configuration checks passed!

### Files Verified
- ✓ `vercel.json` - Vercel configuration with function settings
- ✓ `api/submit-form.ts` - Serverless API endpoint
- ✓ `api/lib/google-sheets.ts` - Google Sheets integration
- ✓ `dist/` - Production build output
- ✓ `shared/types.ts` & `shared/validation.ts` - Shared code
- ✓ `client/components/PreRegistrationForm.tsx` - Form component

### Dependencies Verified
- ✓ `googleapis` - Google Sheets API client
- ✓ `@vercel/node` - Vercel serverless functions
- ✓ `zod` - Schema validation
- ✓ `sweetalert2` - User notifications

## Deployment Steps

### 1. Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Set Environment Variables in Vercel

You need to configure these environment variables in your Vercel project:

```bash
# Option A: Using Vercel CLI
vercel env add GOOGLE_SHEETS_CLIENT_EMAIL
vercel env add GOOGLE_SHEETS_PRIVATE_KEY
vercel env add GOOGLE_SHEETS_SPREADSHEET_ID
vercel env add GOOGLE_SHEETS_SHEET_NAME

# Option B: Using Vercel Dashboard
# Go to: Project Settings > Environment Variables
```

**Required Environment Variables:**

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Service account email | `your-service@project.iam.gserviceaccount.com` |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Service account private key | `-----BEGIN PRIVATE KEY-----\n...` |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Target spreadsheet ID | `1abc...xyz` |
| `GOOGLE_SHEETS_SHEET_NAME` | Sheet name (optional) | `Sheet1` |

**Important Notes:**
- The private key must include `\n` for line breaks
- Make sure to add variables for all environments (Production, Preview, Development)
- The service account must have edit access to the target spreadsheet

### 4. Deploy to Vercel

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### 5. Verify Deployment

After deployment, test the following:

1. **Frontend loads correctly**
   - Visit your Vercel URL
   - Check that the form displays properly
   - Verify all styling is correct

2. **Form validation works**
   - Try submitting with empty fields
   - Verify error messages appear

3. **Form submission works**
   - Fill out the form with valid data
   - Submit and verify success message
   - Check Google Sheets to confirm data was added

4. **Error handling works**
   - Test with invalid data
   - Verify appropriate error messages

## Troubleshooting

### API Route Not Found (404)
- Verify `api/submit-form.ts` is in the correct location
- Check `vercel.json` configuration
- Ensure the file exports a default function

### Environment Variables Not Working
- Verify variables are set in Vercel dashboard
- Check variable names match exactly (case-sensitive)
- Redeploy after adding/updating variables

### Google Sheets API Errors
- Verify service account has access to the spreadsheet
- Check that the private key is properly formatted with `\n`
- Ensure the spreadsheet ID is correct

### Build Failures
- Run `npm run build` locally to test
- Check for TypeScript errors: `npm run typecheck`
- Verify all dependencies are in `package.json`

## Monitoring

After deployment, monitor:
- Vercel function logs for errors
- Google Sheets API quota usage
- Form submission success rate

Access logs via:
```bash
vercel logs [deployment-url]
```

Or through the Vercel Dashboard: Project > Deployments > [Select Deployment] > Logs

## Rollback

If issues occur, you can rollback to a previous deployment:

```bash
# List deployments
vercel ls

# Promote a previous deployment to production
vercel promote [deployment-url]
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
