
# Globade Solution – Trade Intelligence (Next.js)

A production-ready MVP website for GlobadeSolution.com that mimics the look & feel of leading trade-intelligence portals. Includes:
- Landing sections (hero, features, pricing, contact)
- Sample dashboard with searchable table and charts (mock data)
- Tailwind-based modern UI, Framer Motion animations, Recharts graphs

## Tech
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy on Vercel
1. Create a new GitHub repo and push this project.
2. Go to https://vercel.com/import and select your repo.
3. Framework preset: **Next.js**. Build command `next build` (default). Output: `.next` (default).
4. Click **Deploy**.

## Connect your domain (GoDaddy → Vercel)
In Vercel project → Settings → Domains:
- Add `globadesolution.com` and `www.globadesolution.com`.
- Vercel will show the required records. Typically:
  - **A** record for apex `globadesolution.com` → `76.76.21.21`
  - **CNAME** for `www` → `cname.vercel-dns.com.`
  - TTL: default (1 hour) is fine.

Then in **GoDaddy → Domains → DNS**:
- Add/Update the **A** record for `@` → `76.76.21.21`
- Add/Update the **CNAME** record for `www` → `cname.vercel-dns.com`
- Remove any conflicting A/AAAA/CNAME records for `@` or `www` that point elsewhere.
- Wait for propagation (usually minutes). Vercel will issue SSL automatically.

## Next steps (Phase 2)
- Wire a Postgres database (Supabase/Neon) and build an API for real data.
- Replace mock arrays with live queries.
- Add authentication and billing (Clerk/NextAuth + Stripe).
- Add CSV export endpoints and rate limiting.
