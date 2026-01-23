# Full-Stack Portfolio Website

A modern, full-stack personal portfolio website built with a scalable frontend and backend architecture.  
This project showcases projects, skills, and experience, and includes a backend for managing content and contact messages.

---

## 📌 Project Goals

- Create a professional portfolio website
- Implement both frontend and backend
- Use modern web technologies
- Follow clean architecture and best practices
- Make the project production-ready and deployable

---

## 🧱 Tech Stack

### Frontend
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: React Hooks
- SEO: Next.js Metadata API

### Backend
- Runtime: Node.js
- API: Next.js API Routes / Server Actions
- Database: PostgreSQL
- ORM: Prisma
- Authentication (optional): NextAuth

### Dev & Tooling
- Codex CLI (AI-assisted development)
- ESLint + Prettier
- Git + GitHub

### Deployment
- Frontend & Backend: Vercel
- Database: Supabase / Neon

---

## 📂 Project Structure

```text
.
├── app/
│   ├── page.tsx              # Home page
│   ├── projects/
│   │   ├── page.tsx          # Projects list
│   │   └── [slug]/page.tsx   # Project details
│   ├── contact/page.tsx      # Contact page
│   └── api/
│       ├── projects/route.ts # Projects API
│       └── contact/route.ts  # Contact API
├── components/               # Reusable UI components
├── lib/                      # Utilities and DB logic
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── seed.ts               # Seed data
├── public/                   # Static assets
├── styles/                   # Global styles
├── .env.example              # Environment variables
└── README.md

