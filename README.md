# CessCare

Marketing landing page for CessCare, an AI-powered preventive wellness platform.

Built from the Figma design (file `9UvfC5Opinub5kXZca4K8g`, frame `27:1069`).

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Prisma 7 · Supabase Postgres

---

## Running locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

If port 3000 is taken by another project, pick another:

```bash
npm run dev -- -p 3009
```

The page renders fully without a database. Only the waitlist form needs one.

---

## Database setup (Supabase)

The waitlist form writes to Postgres. Until `DATABASE_URL` is set, the form
returns a 500 — everything else on the page works.

### 1. Create the project

Go to [supabase.com](https://supabase.com) → **New project**. Save the database
password it generates; you cannot see it again.

### 2. Get both connection strings

In your project, click **Connect** in the top bar → **ORMs** tab → **Prisma**.

Supabase gives you two URLs and you need both:

| | Port | Used by | Why |
|---|---|---|---|
| `DATABASE_URL` | 6543 | The running app | Transaction pooler — handles many short serverless requests |
| `DIRECT_URL` | 5432 | The Prisma CLI | Schema changes can't run through the pooler |

### 3. Create `.env`

Copy `.env.example` to `.env` and paste both strings in, replacing
`PROJECTREF`, `PASSWORD` and `REGION`.

`.env` is gitignored and must never be committed.

### 4. Create the table

```bash
npm run db:push
```

### 5. Inspect signups

```bash
npm run db:studio
```

Opens a browser UI at <http://localhost:5555>. The Supabase dashboard's Table
Editor shows the same rows.

---

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run db:push` | Apply `prisma/schema.prisma` to the database |
| `npm run db:studio` | Browse the data |

---

## Project layout

```
app/
  layout.tsx              Fonts and metadata
  page.tsx                Section composition, in Figma order
  globals.css             Design tokens, type scale, container
  api/waitlist/route.ts   Signup endpoint
components/
  site-header.tsx         Sticky nav, mobile sheet
  site-footer.tsx
  ui.tsx                  Container, SectionHeading, ButtonLink, Logo
  icons.tsx               Icon name to Lucide component
  sections/               One file per page section
lib/
  content.ts              Every string on the page
  prisma.ts               Lazy Postgres client
prisma/
  schema.prisma           WaitlistSignup model
```

All copy lives in `lib/content.ts`. Edit text there, not in components.

---

## Waitlist endpoint

`POST /api/waitlist` — `{ "email": "...", "source": "landing-cta" }`

| Status | Meaning |
|---|---|
| 201 | Stored |
| 400 | Missing or malformed email |
| 429 | More than 5 valid submissions from one IP in a minute |
| 500 | Database unreachable or `DATABASE_URL` unset |

Emails are lowercased and trimmed before storage. Repeat signups upsert rather
than error, and the response is identical either way, so the endpoint cannot be
used to probe who is on the list. IP addresses are stored hashed, never raw.

The rate limiter is in-memory: it resets on deploy and is per-instance. Move it
to Redis or Postgres before this runs on more than one instance.

---

## Known gaps

Carried over from the design and product docs — decide before launch:

- **No emails are sent.** Signups are stored only. Confirmation or double opt-in
  needs an email provider (Resend, Postmark, Brevo) and a verified domain.
- **Two sections claim wearable sync** — "Wearables sync data" and "Seamless
  integration with your favorite wearables." The V1 PRD puts wearables in V2 and
  the FAQ says manual logging. Reconcile these.
- **The privacy FAQ answer** states data is never sold to third parties. Confirm
  that matches your actual policy.
- **Testimonials were removed.** The design's three quotes were attributed to
  people who do not exist. The slot now holds positioning copy from the strategy
  report. Restore real quotes once you have customers.
- **No tablet or mobile frames existed** in the design. Responsive behaviour was
  designed during the build, not translated.
