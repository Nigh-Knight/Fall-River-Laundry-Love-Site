# Laundry Love Site

A website for Fall River Laundry Love with integrated Google Sheets form submission.

## Features

- Pre-registration form with Google Sheets integration
- SweetAlert2 for user-friendly notifications
- Serverless API using Vercel Functions
- React with TypeScript and Tailwind CSS
- Form validation with React Hook Form and Zod

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Google Cloud Service Account (for form submissions)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then fill in your Google Sheets API credentials (see [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md))

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:8080](http://localhost:8080)

## Google Sheets Setup

Follow the detailed guide in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) to:
- Create a Google Cloud project
- Enable Google Sheets API
- Create a service account
- Configure environment variables

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── lib/
│   │   └── google-sheets.ts
│   └── submit-form.ts
├── client/                 # React frontend
│   ├── components/
│   │   └── PreRegistrationForm.tsx
│   └── pages/
│       └── Index.tsx
├── shared/                 # Shared types and validation
│   ├── types.ts
│   └── validation.ts
└── public/                 # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking
- `npm test` - Run tests

## Technologies

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Form Handling**: React Hook Form, Zod
- **Notifications**: SweetAlert2
- **Backend**: Vercel Functions
- **Database**: Google Sheets API
- **Build Tool**: Vite

## License

MIT
