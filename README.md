# TRAXXIO — Next.js Site

A multi-page rebuild of the TRAXXIO site, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS,
following the official TRAXXIO Brand Style Guide (deep navy/black, TRAXXIO Blue `#0A6EFF`, Space Grotesk +
Space Mono).

## Pages

- `/` — Home (hero, stats, highlights, featured product/event, newsletter strip)
- `/about` — Brand story, philosophy, voice
- `/events` — Ongoing / Upcoming / Ended events with tabs and waitlist forms
- `/products` — Ebook, Mentorship, VERDICT product cards with waitlist forms
- `/faq` — Accordion FAQ
- `/contact` — Contact channels + newsletter signup

A site-wide newsletter popup appears once per session, matching the original site's behavior.

## Getting started

This was built in a sandboxed environment without internet access, so dependencies have **not** been installed.
On your machine, with Node.js 18.18+ installed:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Wiring up real email capture

Email signups currently save to `localStorage` on the client (see `lib/subscribe.ts`) so the UI works out of
the box with no backend. Before shipping, replace the body of `saveEmail()` with a real API call — e.g. a
Next.js API route (`app/api/subscribe/route.ts`) that forwards to Mailchimp, ConvertKit, Supabase, or your own
database. The TODO comment in that file shows the shape of the call.

## Notes

- Event images point at the original `traxxionet.netlify.app` host; swap in your own assets in `lib/data.ts`
  whenever convenient — they fail gracefully (hidden) if unreachable.
- All copy, products, and events live in `lib/data.ts` — edit that file to update content across the site
  without touching components.
- Colors, type, and spacing all derive from `tailwind.config.js`, mapped 1:1 to the brand guide's CSS variables.
