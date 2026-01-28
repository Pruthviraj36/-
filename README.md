# Student Project Management System (SPMS)

Role-based academic project management for colleges: projects, guides, meetings, approvals, and reports.

## Tech stack

- **Frontend:** Next.js (App Router), custom CSS (no UI/libs), custom SVG icons
- **Backend:** Next.js API Routes
- **DB:** MySQL, Prisma ORM
- **Auth:** NextAuth.js (JWT, credentials with bcrypt)
- **Files:** Local storage under `public/uploads`

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment**

   Copy `env.example` to `.env` and set:

   - `DATABASE_URL` — MySQL connection string, e.g. `mysql://user:pass@localhost:3306/spms`
   - `NEXTAUTH_URL` — e.g. `http://localhost:3000`
   - `NEXTAUTH_SECRET` — e.g. `openssl rand -base64 32`

3. **Database**

   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   ```

4. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). Use:

   - **Admin:** `admin@spms.local` / `admin123`
   - **Faculty:** `guide@spms.local` / `faculty123`
   - **Student:** `student@spms.local` / `student123`

## API routes

| Route | Methods | Auth | Description |
|-------|---------|------|-------------|
| `/api/auth/[...nextauth]` | GET, POST | — | NextAuth |
| `/api/masters/project-types` | GET, POST | Admin | Project types CRUD |
| `/api/masters/project-types/[id]` | GET, PUT, DELETE | Admin | |
| `/api/masters/staff` | GET, POST | Admin | Staff CRUD |
| `/api/masters/staff/[id]` | GET, PUT, DELETE | Admin | |
| `/api/masters/academic-years` | GET, POST | Admin | Academic years |
| `/api/masters/departments` | GET, POST | Admin | Departments |
| `/api/students` | GET, POST | Admin, Faculty | Students |
| `/api/students/[id]` | GET, PUT, DELETE | Admin, Faculty | |
| `/api/groups` | GET, POST | All | Project groups |
| `/api/groups/[id]` | GET, PUT, DELETE | All* | *Students: own group only |
| `/api/groups/[id]/members` | POST, DELETE | Admin, Faculty | Group members |
| `/api/meetings` | GET, POST | All | Meetings |
| `/api/meetings/[id]` | GET, PUT, DELETE | All | |
| `/api/meetings/[id]/attendance` | POST | Admin, Faculty | Attendance |
| `/api/reports` | GET | Admin, Faculty | `?type=projects-by-type \| projects-by-guide \| group-members \| attendance-summary \| progress-report` |
| `/api/reports/export` | GET | Admin, Faculty | `?type=...&format=excel|pdf` |
| `/api/upload` | POST | All | `FormData: file, projectGroupId, documentType?` |
| `/api/profile` | GET, PUT | All | Name, email, phone, password |

## Pages

- `/login` — Sign in (Admin / Faculty / Student)
- `/dashboard` — Role-based dashboard
- `/groups` — Project groups list and create
- `/groups/[id]` — Group detail, edit, documents, members
- `/meetings` — Meetings list and create
- `/reports` — Reports and Excel/PDF export
- `/masters` — Project types and Staff (Admin only)
- `/projects` — Redirects to `/groups`
- `/settings` — Profile and password

## Design & CSS

- Design tokens in `app/design-tokens.css`
- BEM-like classes in component `.module.css` files
- No Tailwind, Bootstrap, or component libraries; custom SVG icons only
- Recharts for report charts, styled to match theme

## Accessibility

See [docs/ACCESSIBILITY_CHECKLIST.md](docs/ACCESSIBILITY_CHECKLIST.md) for an audit checklist (WCAG AA, keyboard, screen reader, contrast).

## Scripts

- `npm run dev` — Dev server
- `npm run build` — Production build
- `npm run start` — Production server
- `npm run db:generate` — Prisma generate
- `npm run db:push` — Prisma db push
- `npm run db:seed` — Seed admin, faculty, student, project type, academic year
- `npm run db:studio` — Prisma Studio
