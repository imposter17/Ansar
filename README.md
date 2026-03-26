# Masjid Help Board (Base44-ready)

A production-oriented full-stack app that digitizes the masjid help board and monetizes outbound affiliate discovery.

## Tech stack

- Next.js 14 + React 18 + TypeScript + Tailwind
- Base44 backend (`base44/entities`, `base44/functions`)
- `@base44/sdk` client integration for auth, CRUD, and functions

## Full folder structure

```text
.
├── app/
│   ├── admin/page.tsx
│   ├── api/redirect/route.ts
│   ├── api/translate/route.ts
│   ├── create/page.tsx
│   ├── dashboard/page.tsx
│   ├── favorites/page.tsx
│   ├── login/page.tsx
│   ├── page.tsx
│   ├── reports/page.tsx
│   ├── search/page.tsx
│   ├── signup/page.tsx
│   └── layout.tsx
├── base44/
│   ├── .app.jsonc
│   ├── config.jsonc
│   ├── entities/
│   │   ├── affiliate_clicks.json
│   │   ├── commissions.json
│   │   ├── messages.json
│   │   ├── posts.json
│   │   ├── reports.json
│   │   └── users.json
│   └── functions/
│       ├── auto-translate.ts
│       ├── calculate-commission.ts
│       ├── create-post.ts
│       ├── find-matches.ts
│       ├── mark-solved.ts
│       ├── track-affiliate-redirect.ts
│       └── update-post.ts
├── components/
│   ├── board/LanguageSelect.tsx
│   ├── board/PostCard.tsx
│   └── providers/I18nProvider.tsx
└── lib/base44.ts
```

## Features delivered

1. User posts with category, location, optional budget, and status lifecycle.
2. Affiliate redirect tracking for Indeed/Glassdoor/ZipRecruiter/Zillow/Airbnb/Realtor.
3. Multi-language UI and post translation-ready structure.
4. Matching system (internal + external suggestions).
5. Auth-ready login/signup pages + user dashboard.
6. Admin panel with moderation and analytics cards.
7. Commission tracking entities and calculation function.
8. Optional notifications section in user dashboard.
9. Save/favorite and report content pages.

## Base44 backend

### Entities

- `users` (extends auth users with role, preferred language, reward points)
- `posts`
- `affiliate_clicks`
- `commissions`
- `reports`
- `messages`

### Functions

- `create-post`
- `update-post`
- `mark-solved`
- `track-affiliate-redirect`
- `calculate-commission`
- `find-matches`
- `auto-translate`

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Add environment variables in `.env.local`:
   ```bash
   NEXT_PUBLIC_BASE44_APP_ID=masjid-help-board
   NEXT_PUBLIC_BASE44_PUBLIC_KEY=your_public_key
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## Base44 CLI workflow

1. Create/link app:
   ```bash
   base44 create
   ```
2. Push entities:
   ```bash
   base44 entities push --config base44/config.jsonc
   ```
3. Deploy functions + app:
   ```bash
   base44 deploy --config base44/config.jsonc
   ```

## Production deployment checklist

- Replace demo `appId` in `base44/.app.jsonc` with real app id.
- Configure Base44 auth providers and role policy.
- Add webhook to send conversion callbacks into `calculate-commission`.
- Add translation provider in `auto-translate.ts`.
- Enforce rate limits + moderation automation for abuse handling.
