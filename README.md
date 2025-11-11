# Laundry Love Site

A website for Fall River Laundry Love with integrated Google Sheets form submission.

## Features

- **Pre-registration Form**: Collect user information (name, phone, living situation)
- **Google Sheets Integration**: Automatically store submissions in a Google Sheets spreadsheet
- **Real-time Validation**: Client-side form validation with React Hook Form and Zod
- **User-friendly Notifications**: Success and error messages with SweetAlert2
- **Serverless Architecture**: API endpoints using Vercel Functions (no server required)
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, and Vite
- **Type Safety**: Shared types and validation between frontend and backend

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- A Google account with access to Google Cloud Console
- A Google Sheets spreadsheet for storing form submissions

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Google Sheets API** (Required for form submissions)
   
   Follow the detailed guide in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) to:
   - Create a Google Cloud project
   - Enable Google Sheets API
   - Create a service account and download credentials
   - Share your spreadsheet with the service account
   - Get your spreadsheet ID

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and fill in your Google Sheets API credentials:
   ```env
   GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
   GOOGLE_SHEETS_SHEET_NAME=Sheet1
   ```
   
   See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed instructions on obtaining these values.

5. **Set up your Google Sheet structure**
   
   Create a spreadsheet with the following column headers in the first row:
   
   | Full Name | Phone Number | Living Situation | Submitted At |
   |-----------|--------------|------------------|--------------|

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:8080](http://localhost:8080)

## Google Sheets Setup

The form submission system uses Google Sheets API to store form data. Follow the comprehensive guide in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for step-by-step instructions.

**Quick Overview:**
1. Create a Google Cloud project and enable Google Sheets API
2. Create a service account and download the JSON key file
3. Share your Google Sheets spreadsheet with the service account email
4. Configure environment variables with your credentials
5. Set up the spreadsheet with the correct column structure

## Deployment

### Deploying to Vercel

This project is optimized for Vercel deployment with serverless functions:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import project in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure environment variables**
   
   In the Vercel project settings, add the following environment variables:
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
   - `GOOGLE_SHEETS_SHEET_NAME`
   
   **Important**: Make sure to add these for all environments (Production, Preview, Development)

4. **Deploy**
   
   Click "Deploy" and Vercel will automatically build and deploy your application.

### Environment Variables in Production

When adding `GOOGLE_SHEETS_PRIVATE_KEY` to Vercel:
- Keep the entire value including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Keep the `\n` characters (they represent line breaks)
- Wrap the entire value in double quotes

### Verifying Deployment

After deployment:
1. Visit your deployed URL
2. Navigate to the pre-registration form
3. Submit a test entry
4. Check your Google Sheets spreadsheet to verify the data was added

### Troubleshooting Deployment

- **API errors**: Verify all environment variables are set correctly in Vercel
- **Permission errors**: Ensure the spreadsheet is shared with the service account email
- **Build errors**: Check the Vercel build logs for specific error messages

## How It Works

1. **User fills out the form** on the website
2. **Client-side validation** checks the input using Zod schemas
3. **Form submits** to the Vercel Function API endpoint (`/api/submit-form`)
4. **Server validates** the data again for security
5. **API authenticates** with Google Sheets using service account credentials
6. **Data is appended** as a new row in the Google Sheets spreadsheet
7. **Success/error message** is displayed to the user via SweetAlert2

## Project Structure

```
├── api/                              # Vercel serverless functions
│   ├── _helpers/
│   │   └── google-sheets.ts         # Google Sheets API integration
│   └── submit-form.ts                # Form submission endpoint
├── client/                           # React frontend
│   ├── components/
│   │   └── PreRegistrationForm.tsx  # Main form component
│   ├── pages/
│   │   └── Index.tsx                # Home page with form
│   └── App.tsx                       # App router
├── shared/                           # Shared code (frontend + backend)
│   ├── types.ts                      # TypeScript interfaces
│   └── validation.ts                 # Zod validation schemas
└── public/                           # Static assets
```

## Environment Variables

The following environment variables are required for the application to work:

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Service account email from Google Cloud | `your-service@project.iam.gserviceaccount.com` |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Private key from service account JSON | `"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"` |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | ID from your spreadsheet URL | `1a2b3c4d5e6f7g8h9i0j` |
| `GOOGLE_SHEETS_SHEET_NAME` | Name of the sheet tab | `Sheet1` |

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed instructions on obtaining these values.

## Available Scripts

- `npm run dev` - Start development server on http://localhost:8080
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking
- `npm test` - Run tests with Vitest
- `npm test -- --run` - Run tests once without watch mode

## Development

### Local Development

1. Make sure you have completed the setup steps above
2. Run `npm run dev` to start the development server
3. The app will be available at http://localhost:8080
4. Changes to the code will automatically reload the page

### Testing the Form

1. Navigate to the home page
2. Fill out the pre-registration form with test data
3. Submit the form
4. Check your Google Sheets spreadsheet to verify the data was added
5. You should see a success message via SweetAlert2

### API Testing

The form submission API is available at `/api/submit-form` and accepts POST requests with:

```json
{
  "fullName": "John Doe",
  "phoneNumber": "555-1234",
  "livingSituation": "Homeless"
}
```

You can test it with curl:

```bash
curl -X POST http://localhost:8080/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","phoneNumber":"555-1234","livingSituation":"Homeless"}'
```

## Technologies

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Form Handling**: React Hook Form, Zod
- **Notifications**: SweetAlert2
- **Backend**: Vercel Functions (Serverless)
- **Database**: Google Sheets API
- **Build Tool**: Vite
- **Testing**: Vitest

## Troubleshooting

### Common Issues

**Form submission fails with "Permission denied"**
- Verify you've shared the Google Sheet with the service account email
- Check that the service account has "Editor" permissions

**"Invalid credentials" error**
- Ensure your `.env` file has the correct values
- Verify the private key includes `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Make sure the private key is wrapped in double quotes

**Form validation errors**
- Check that all required fields are filled
- Phone number should be in a valid format
- Living situation must be one of: Homeless, Sheltered, Homed, or Other

**Development server won't start**
- Make sure Node.js 18+ is installed
- Delete `node_modules` and run `npm install` again
- Check that port 8080 is not already in use

**Data not appearing in Google Sheets**
- Verify your `GOOGLE_SHEETS_SPREADSHEET_ID` is correct
- Check that `GOOGLE_SHEETS_SHEET_NAME` matches your sheet tab name (case-sensitive)
- Ensure the spreadsheet hasn't been deleted or moved

For more detailed troubleshooting, see [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For issues and questions:
- Check the [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) guide
- Review the troubleshooting section above
- Open an issue on GitHub

## License

MIT
