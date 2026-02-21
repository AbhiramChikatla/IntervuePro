# IntervuePro 

IntervuePro is an AI-powered interview practice platform built with Next.js. It helps users practice role-specific interviews, run live AI voice sessions, and receive structured performance feedback with actionable recommendations.

## What this project does

### Core user functionality

- **Landing experience** with product sections (hero, features, how-it-works, pricing, testimonials, CTA).
- **Job exploration** with search and role cards (`/jobs`) using curated sample job data.
- **Job detail drill-down** (`/jobs/[id]`) with requirements/responsibilities and interview entry.
- **Access-gated interview launch** via `NEXT_PUBLIC_SECRET_KEY` check before starting a session.
- **Live interview session** (`/interview/[id]`) with:
    - microphone/camera controls,
    - in-session instructions modal,
    - Vapi voice assistant integration,
    - transcript capture,
    - interview timer and end-flow.
- **AI-generated questions** based on selected job details.
- **AI-generated feedback report** after interview completion.
- **Feedback review page** (`/feedback/[id]`) with:
    - interview summary,
    - scorecard,
    - per-question analysis,
    - final recommendations,
    - CSV export.
- **Authentication** with Firebase Auth:
    - email/password signup + login,
    - email verification check,
    - Google OAuth login/signup.
- **Profile system** (`/profile`) with:
    - personal details,
    - social links,
    - skills/interests tags,
    - resume link,
    - interview history listing.
- **Profile builder/settings** (`/profile/settings`) with ImageKit-powered uploads for avatar and resume.
- **Static legal/info pages** under `/links/*` (documentation, privacy, terms, help center, etc.).

### API functionality

The project includes Next.js API routes under `app/api`:

- `POST /api/generate-question`
    - Uses OpenAI chat completions to generate job-specific interview questions.
- `POST /api/generate-feedback`
    - Builds feedback from transcript + job context and stores it in Firestore.
- `POST /api/interviews`
    - Returns a specific saved interview document for a user.
- `POST /api/upload-imagekit`
    - Uploads profile assets/files to ImageKit and returns hosted URL.

## Tech stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript + React 19
- **Styling/UI**: Tailwind CSS v4, Radix UI primitives, Lucide icons, Sonner toasts
- **State**: Zustand (user store)
- **Auth & Data**: Firebase Auth + Firestore
- **AI**: OpenAI API for question/feedback generation
- **Voice interview runtime**: Vapi Web SDK
- **Media/file storage**: ImageKit

## High-level architecture

1. User signs in (Firebase Auth).
2. User picks a job and starts interview.
3. Frontend requests AI-generated questions from `/api/generate-question`.
4. Vapi handles live voice interview; transcripts are collected client-side.
5. On end, frontend sends transcript + metadata to `/api/generate-feedback`.
6. Feedback is generated and saved under Firestore:
    - `users/{uid}/interviews/{interviewId}`
7. Feedback page fetches interview data through `/api/interviews`.

## Project structure (key areas)

```text
app/
	(auth)/login, signup
	jobs/, jobs/[id]
	interview/[id]
	feedback/[id]
	profile/, profile/settings
	api/generate-question
	api/generate-feedback
	api/interviews
	api/upload-imagekit

components/
	landing sections, feedback UI, reusable UI primitives

firebase/
	client.ts (client SDK)
	admin.ts (admin SDK)
	actions.ts (data helpers)

hooks/
	useFeedback, useUserStore, useUserProfile

lib/
	generate-feedback.ts
	vapi.sdk.ts
	openai.sdk.ts
```

## Prerequisites

- Node.js **20+** recommended
- npm (comes with Node)
- A Firebase project (Auth + Firestore enabled)
- OpenAI API key
- Vapi account (public key + assistant ID)
- ImageKit account (public/private keys + URL endpoint)

## Environment variables

Create a `.env` file in the project root with the following keys:

```env
NODE_ENV=development

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id

# Vapi
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id

# Firebase Client SDK
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Interview access gate
NEXT_PUBLIC_SECRET_KEY=your_beta_access_key
```

> Important:
>
> - Keep `.env` out of version control.
> - Never expose `OPENAI_API_KEY`, `IMAGEKIT_PRIVATE_KEY`, or Firebase admin secrets.
> - If credentials were ever committed, rotate them immediately.

## Firebase setup checklist

1. Create Firebase project.
2. Enable **Authentication** providers:
    - Email/Password
    - Google
3. Create Firestore database.
4. Add a Web App in Firebase project settings and copy client config values.
5. Generate a service account key (for admin SDK values).
6. Ensure Firestore rules allow your intended authenticated read/write behavior.

## Local development setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Add and verify `.env` values.

3. Start development server:

    ```bash
    npm run dev
    ```

4. Open:

    ```text
    http://localhost:3000
    ```

## Available scripts

- `npm run dev` — Start local dev server
- `npm run build` — Create production build
- `npm run start` — Run production server
- `npm run lint` — Run linting

## Route map

### App routes

- `/` — Marketing landing page
- `/login` — Sign in
- `/signup` — Registration
- `/jobs` — Job listing/search
- `/jobs/[id]` — Job detail + interview entry point
- `/interview/[id]` — Live mock interview session
- `/feedback/[id]` — Interview feedback report
- `/profile` — User profile dashboard
- `/profile/settings` — Profile builder/editor
- `/links/documentation`, `/links/helpcenter`, `/links/privacy`, `/links/terms`, etc.

### API routes

- `POST /api/generate-question`
- `POST /api/generate-feedback`
- `POST /api/interviews`
- `POST /api/upload-imagekit`

## Data model snapshot (Firestore)

- `users/{uid}`
    - profile fields (name, bio, links, tags, resume, profilePicture, etc.)
- `users/{uid}/interviews/{interviewId}`
    - `job`
    - `transcript`
    - `feedback`
    - `createdAt`

## Operational notes

- The interview flow currently expects a valid localStorage secret-key gate and authenticated user.
- `next.config.ts` is configured to ignore TypeScript build errors (`ignoreBuildErrors: true`); consider tightening this for production hardening.
- Image domains are whitelisted in `next.config.ts` for Google, ImageKit, GitHub avatars, and placeholders.

## Troubleshooting

- **Login works but data missing**: verify Firestore rules and document paths under `users/{uid}`.
- **Interview cannot start**: validate `NEXT_PUBLIC_VAPI_PUBLIC_KEY`, `NEXT_PUBLIC_VAPI_ASSISTANT_ID`, microphone permissions, and secret key.
- **Question/feedback generation fails**: validate `OPENAI_API_KEY` and API quotas.
- **File upload fails**: verify ImageKit keys and endpoint values.
- **Admin SDK errors**: ensure `FIREBASE_PRIVATE_KEY` preserves escaped newlines (`\n`).

## Deployment notes

- Suitable for Vercel or any Node-compatible Next.js host.
- Configure all environment variables in your deployment platform.
- Restrict server-side secrets to backend runtime only.

## License

No license file is currently defined in this repository.
