# Yalla China

A multilingual student guidance and application platform for Moroccan students interested in studying in China.

## Overview

Yalla China combines a public information website with a structured application workflow. The platform presents study options, destinations, service packages, frequently asked questions, and a direct application form in French, English, and Arabic.

The project was designed and developed as a complete full-stack product, including the public interface, application API, database integration, administrative workflow, validation, and deployment.

## Key Features

- Multilingual interface in French, English, and Arabic
- Right-to-left layout support for Arabic
- Responsive landing pages and conversion-focused calls to action
- Student application form with structured fields and consent handling
- Server-side validation, payload limits, rate limiting, and bot protection
- Database persistence through Prisma and PostgreSQL
- Administrative application-management workflow
- Production deployment on Vercel

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Prisma ORM
- PostgreSQL / Supabase
- Tailwind CSS
- Framer Motion
- Playwright
- Vercel

## Application Flow

```text
Visitor
  -> Chooses a language
  -> Reviews destinations and service information
  -> Submits an application
  -> API validates and stores the request
  -> Administrator reviews and updates the application status
```

## Local Development

```bash
npm install
npm run dev
```

The application requires the relevant database and authentication environment variables before the complete workflow can run locally.

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Live Project

Production website: https://go-china-site.vercel.app

## Author

Developed by **Abdellah Kachani**, computer engineering student focused on AI systems and full-stack development.
