# Android Developer Portfolio

A clean, modern portfolio website for an Android developer. Built with Next.js (App Router), TypeScript, and Tailwind-powered base styles, with custom CSS for the visual system. Includes a contact form with server-side validation, project detail pages, and a lightweight blog.

## Features
- Responsive single-page home with hero, projects, skills, about, and contact
- Project listing + detail pages
- Blog listing + detail pages
- Light/dark theme toggle with persisted preference
- Scroll-reveal animations
- Contact form validation via API route

## Screenshots
> Replace these demo visuals with real screenshots from your apps.

![Home](public/images/demo-trackify.svg)
![Projects](public/images/demo-pulsepay.svg)
![Project Detail](public/images/demo-clinicnow.svg)

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS + custom CSS theme

## Getting Started
Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Structure
- `src/app/` — routes and pages
- `src/components/` — UI components
- `src/lib/` — project and blog data
- `public/images/` — demo images

## Contact Form
The API route at `src/app/api/contact/route.ts` validates submissions but does not send email yet. Hook this up to an email provider (Resend/SendGrid) when ready.

## Customize Content
Update these files with your real data:
- `src/app/page.tsx` (hero, sections, contact links)
- `src/lib/projects.ts` (project details)
- `src/lib/posts.ts` (blog entries)

## License
MIT (add your license choice if different).
