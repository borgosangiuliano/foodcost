# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FoodCost 360 is a **multi-tool SaaS platform** for restaurant cost management, built in Italian for restaurant operators. It includes three paid tools: kitchen food cost calculator, bar beverage cost calculator, and a QR menu manager.

## Development

**No build system.** This is a pure static-file project with no npm, no bundler, and no compilation step. All libraries are loaded via CDN.

**Local development:**
```
npx http-server .
# or
python -m http.server 8080
```

**Deployment:** Cloudflare Pages. Push to the connected repo and it deploys automatically. The `functions/` directory is treated as Cloudflare Workers (serverless edge functions).

## Architecture

### Stack
- **Frontend:** Vanilla JS + custom CSS (no framework)
- **Backend:** Supabase (PostgreSQL + Auth)
- **Hosting:** Cloudflare Pages + Cloudflare Workers
- **Payments:** PayPal
- **Auth providers:** Email/password + Google OAuth

### Key directories
- `app/` — Protected application pages (dashboard and the three tools)
- `functions/menu/[[slug]].js` — Cloudflare Worker that handles dynamic `/menu/:slug` routes by injecting the slug into `menu-pubblico.html`
- `demo/` — Standalone demo (no auth required)

### Authentication & Authorization

`app/auth-guard.js` is injected into every protected page. It:
1. Checks for a valid Supabase session
2. Queries the `accessi` table for the user's `piano` (plan) and `attivo` (active) fields
3. Shows a blocking overlay if not authenticated or no valid plan
4. Restricts tool access based on plan: `singolo-cucina`, `singolo-bar`, `singolo-qr`, `cucina`, `bar`, `bundle`, `360`

### Supabase
- URL: `https://lhzpueahpfpqkipwqlgk.supabase.co`
- The public (anon) key is intentionally embedded in client code — this is standard Supabase practice
- Main tables inferred from code: `accessi` (user subscriptions), plus menu/restaurant data accessed via slug

### Public vs. Protected pages
- `index.html`, `login.html`, `shop.html`, `privacy.html`, `grazie.html` — public, no auth
- `app/*.html` — protected via `auth-guard.js`
- `admin.html` — admin-only dashboard
- `menu-pubblico.html` + `/menu/:slug` — public restaurant menu display

### Design system
CSS custom properties define the entire theme (dark/gold brand):
- Background: `#0C0C0E` / `#12121A` / `#1A1A24`
- Brand accent (gold): `#E8C547` / `#C9A82C`
- Tool-specific: kitchen uses greens (`#7EC850`), bar uses oranges/golds
- Text: `#E8E8F0` / muted `#6B6B8A`
