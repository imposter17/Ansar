# Ansar — Futuristic Muslim Discovery & Community Platform

Ansar is a production-ready, premium dark-mode web experience for nationwide Muslim discovery. It unifies Google Maps-powered place search, community submissions, claim flows for mosques and MSAs, programs/events, a help board, and affiliate job searches with outbound tracking.

## Features

- **Glassmorphism UI** with neon gradients, skeleton loaders, clustering map pins, and mobile tab navigation.
- **Discovery directories** for Mosques, Halal Food, Groups/MSAs, Programs/Education, Help Board, Jobs (affiliate), and detailed profiles for mosques, universities, groups, and programs.
- **Navigation everywhere** with Google Maps + Waze deep links on every location card/profile.
- **Search and filters** for query, category, verified status, and “open now”/distance placeholders.
- **Verification & claims** including mosque and MSA claim buttons, admin moderation, and report flows.
- **Accessibility** defaults to dark mode, AA contrast-ready styles, keyboard focus states, and font scaling support.
- **Admin dashboard** for moderation queues, analytics, roles, and partner status.

## Getting started

1. Install dependencies: `npm install` (requires access to npm registry).  
2. Run development server: `npm run dev` then open http://localhost:3000.  
3. Add a Google Maps key: set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in `.env.local` for the live map; without it, the app shows a skeleton placeholder.

## Site map (App Router)

- `/` — onboarding + directory shortcuts  
- `/map` — explore map with filters and clustered pins  
- `/mosques`, `/food`, `/groups`, `/programs`, `/help`, `/jobs` — category directories  
- `/place/[id]`, `/mosque/[id]`, `/university/[id]`, `/group/[id]`, `/program/[id]` — detail profiles with navigation buttons  
- `/me` — user profile and preferences  
- `/admin` — role-protected admin dashboard

## Data & backend modules

Seed data in `/data/seed.ts` mirrors the Wix Data Collections: UsersPublic, Places, Mosques, Universities, GroupsMSA, Programs, Events, HelpPosts, AffiliatePartners, ClickLogs, and Reports.

Velo-style backend stubs live in `/backend`:

- `config.jsw` — API key holder (Google Maps/Places, optional Translate/OpenAI)
- `maps.jsw` — search, autocomplete, viewport search, and caching/upsert to Places
- `navLinks.jsw` — Google Maps + Waze deep links
- `jobs.jsw` — affiliate job search link builder + click logging
- `moderation.jsw` — approve/reject helpers and role enforcement placeholders

API routes under `/app/api` expose search, click logging, and place details for the Next.js front end.

## Deployment checklist

- Configure environment secrets (Google Maps/Places, optional Translate/OpenAI keys).  
- Point `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to a client-safe key with HTTP referrer restrictions.  
- Enable HTTPS, CSP, and rate limits on write routes (claims, help posts, reports).  
- Connect to production data sources or Wix Data collections; replace seed data with real persistence.  
- Verify affiliate partner terms for outbound job links and ensure click tracking storage.  
- Run `npm run build` and deploy on a platform that supports Next.js App Router.
