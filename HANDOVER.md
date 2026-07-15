# Dtanique Website — Handover Guide

This document explains how to run, configure, and deploy the website on your own hosting.

---

## 1. Requirements

- **Node.js 20+** (or **Bun 1.x** — recommended, faster)
- A hosting platform that supports **Node.js / SSR** (e.g. Cloudflare Workers, Vercel, Netlify, Render, or a VPS running Node).
  > This site is built with **TanStack Start** (SSR). It is **not** a plain static HTML site — it needs a Node/Edge runtime to serve.

---

## 2. Install & Run Locally

```bash
# 1. Install dependencies
bun install
# or: npm install

# 2. Copy the environment file (see section 3)
cp .env.example .env
# then fill in the values

# 3. Start the dev server
bun run dev
# opens http://localhost:8080

# 4. Build for production
bun run build

# 5. Start the production server
bun run start
```

---

## 3. Environment Variables (`.env`)

The site needs **6 environment variables** for the frontend + lead form to work. They must be defined in a `.env` file at the project root (for local dev) **and** in your hosting platform's environment settings (for production).

All 6 come from the **same Supabase project**. The `VITE_` prefixed ones are used by the browser; the un-prefixed ones are used by the server.

### `.env.example`

```env
# ------- Supabase (backend / database / auth) -------
# Get these from: https://supabase.com/dashboard → your project → Settings → API

# Server-side (used by SSR / server functions)
SUPABASE_URL="https://YOUR-PROJECT-REF.supabase.co"
SUPABASE_PUBLISHABLE_KEY="eyJhbGciOi...your anon/publishable key..."
SUPABASE_PROJECT_ID="YOUR-PROJECT-REF"

# Client-side (exposed to the browser — must match the values above)
VITE_SUPABASE_URL="https://YOUR-PROJECT-REF.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="eyJhbGciOi...same anon key as above..."
VITE_SUPABASE_PROJECT_ID="YOUR-PROJECT-REF"
```

### What each one is

| Variable | Where to find it | Purpose |
|---|---|---|
| `SUPABASE_URL` / `VITE_SUPABASE_URL` | Supabase → Settings → API → **Project URL** | Base URL of your Supabase backend |
| `SUPABASE_PUBLISHABLE_KEY` / `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase → Settings → API → **anon / public key** | Safe-to-expose key that respects Row Level Security. Used to submit leads. |
| `SUPABASE_PROJECT_ID` / `VITE_SUPABASE_PROJECT_ID` | The `ref` part of your project URL (e.g. `abcd1234` in `abcd1234.supabase.co`) | Project identifier |

> ✅ The `anon / publishable key` is **safe to include in the frontend**. It is a public key.
> ❌ **Never** put the `service_role` key in this file — it bypasses all security.

---

## 4. Two Options for the Database

### Option A — Keep using the existing Supabase project (easiest)

The `.env` file included in the ZIP already contains working credentials pointing at the current Supabase project. If you keep these values, the website will continue to write leads to the same database that the current live site uses.

- **Pros:** Zero backend setup. Lead form works immediately.
- **Cons:** The database is still hosted on Lovable Cloud. If the Lovable project is deleted or the plan is cancelled, the database disappears too.

### Option B — Migrate to your own Supabase account (recommended for full ownership)

1. Create a free account at [supabase.com](https://supabase.com) and create a new project.
2. Export the current database schema + data (Lovable → Cloud → Advanced settings → Export data). Import it into your new Supabase project via the SQL editor.
3. Recreate the schema (tables: `leads`, `user_roles`, and the RLS policies). SQL is included in `supabase/migrations/`.
4. Copy the new project's URL and anon key into `.env` (all 6 variables).
5. Create an admin user in Supabase Auth, then insert a row in `user_roles` with `role = 'admin'` so you can view leads at `/admin/leads`.

---

## 5. Deploying to a Hosting Platform

The build output supports **Cloudflare Workers** by default (see `wrangler.jsonc`). For other platforms:

- **Vercel / Netlify:** Detect TanStack Start automatically. Add the 6 env vars in the project's Environment Variables settings, then deploy.
- **Cloudflare Workers:** `bunx wrangler deploy`. Add secrets with `wrangler secret put SUPABASE_URL` (etc.) for the server-side vars; the `VITE_` vars are baked in at build time from `.env`.
- **VPS / Node server:** Run `bun run build`, then `bun run start`. Put the 6 env vars in your process manager (systemd, PM2, Docker `-e` flags, etc.).

**Important:** The `VITE_` prefixed variables are read **at build time** and embedded into the JavaScript bundle. If you change them, you must **rebuild** (`bun run build`) — restarting is not enough.

---

## 6. Admin Access (viewing leads)

- Admin login page: `/admin/login`
- Admin dashboard: `/admin/leads`

To grant admin access to a user:
1. Have them sign up (or create them in Supabase Auth).
2. In the Supabase SQL editor, run:
   ```sql
   INSERT INTO public.user_roles (user_id, role)
   VALUES ('<the-user-uuid-from-auth.users>', 'admin');
   ```

---

## 7. Custom Domain

Point your domain's DNS to your new host (Vercel/Netlify/Cloudflare will give you the exact records). Only switch DNS **after** you have verified the new deployment works on a temporary URL.

---

## 8. What's NOT included

- **Third-party widgets** (SociableKit Google Posts / review widgets) have been removed from the code before handover.
- **Email sending** (if any is added later) will need its own provider (Resend, SendGrid, etc.) configured with additional env vars.

---

## Questions?

The code is a standard TanStack Start + Supabase project. Any developer familiar with React and Supabase can maintain it.
