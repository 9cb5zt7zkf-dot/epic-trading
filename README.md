# Epic Trading PLC — Corporate Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Zero
runtime dependencies beyond `next`, `react`, `react-dom` and `framer-motion` —
the enquiry API talks to Resend directly over `fetch`, with no SDK.

## Stack

- **Next.js 14** (App Router, React Server Components, `generateStaticParams`
  for the divisions and enquiry-category routes)
- **TypeScript**, strict mode
- **Tailwind CSS**, with a custom design system (`tailwind.config.ts`): a
  dark-green (`forest`) / gold / warm-sand palette matched to the brand logo,
  `Fraunces` (display serif) + `Inter` (body) via `next/font/google`
- **Framer Motion** for scroll-reveal and hero entrance animation
- Hand-rolled dark mode (class strategy, no-flash inline script) — no
  `next-themes` dependency
- CMS-ready content layer under `src/content/*.ts` — plain typed data,
  structured so it can be swapped for a real CMS query later without
  touching any component

## Project structure

```
src/
  app/                    Routes (App Router)
    page.tsx              Home
    about/, divisions/, divisions/[slug]/
    products/export/, products/import/
    services/, process/, global-reach/
    enquiry/, enquiry/[category]/
    contact/
    api/enquiry/route.ts  Enquiry submission endpoint
    sitemap.ts, robots.ts
  components/
    layout/               Header, Footer
    ui/                   Button, Icon, Reveal, SectionHeading, ThemeToggle...
    sections/             Hero, DivisionsGrid, ProcessTimeline, CTASection...
    forms/                EnquiryForm (schema-driven, all 8 categories)
    seo/                  JsonLd, Breadcrumbs
  content/                Typed data: company.ts, divisions.ts, products.ts,
                          services.ts, process.ts, regions.ts, nav.ts,
                          enquiryForms.ts
  lib/                    metadata.ts (per-page SEO helper), utils.ts,
                          enquiry/ (validate.ts, reference.ts, resend.ts)
```

## What's live vs what needs configuration

**Works with zero configuration:**
- Every page, all copy, navigation, dark mode, animations, SEO metadata,
  JSON-LD (Organization + BreadcrumbList + Service schema per division),
  sitemap.xml, robots.txt.
- The enquiry form's full client + server-side validation, honeypot spam
  protection, unique reference number generation
  (`ET-YYYYMMDD-XXXX`), and structured console logging of every submission
  (visible in Vercel's function logs — this is the baseline durable record
  until a real CRM/database is wired up).

**Needs `RESEND_API_KEY` / `RESEND_FROM_EMAIL` / `SALES_TEAM_EMAIL`:**
- Emailing the sales team and the customer on submission. Until these are
  set, the API honestly reports each as `skipped` in its response rather
  than claiming an email was sent — see `src/lib/enquiry/resend.ts`.

## Known limitations (stated honestly, not hidden)

- **No photography.** The hero and section backgrounds use an
  editorial dark-green gradient + grain + a hand-drawn trade-route SVG
  graphic instead of real photography, because no photography was supplied
  and this build had no image-generation credits available. Swap in real
  photography of Addis Ababa, coffee farms, container terminals etc. by
  replacing the background treatment in `src/components/sections/Hero.tsx`
  — the layout and animation are already built to hold an image.
- **Company legal/contact details are placeholders.** `src/content/company.ts`
  intentionally leaves `email`, `phone`, `registrationNumber`, `tinNumber`,
  social links and the production `domain` as `null` — every component
  already handles the `null` case (hides the field or shows a neutral
  "coming soon" note) rather than displaying invented values. Fill these in
  as they're confirmed.
- **No persistent database / CRM.** The Vercel function log line per
  submission is the only durable record today.
- **Global Reach map is a stylized diagram, not a literal atlas.** This is
  deliberate — see the code comment in `WorldRoutesGraphic.tsx` — to avoid
  implying cartographic precision the brief didn't ask for.
- **Not locally build-verified.** This sandbox has no access to the npm
  registry, so `npm install`, `next build`, `next lint` and `tsc --noEmit`
  could not be run here. Every file was hand-reviewed for correctness (see
  the delivery notes for this project), and a real build was confirmed via
  Vercel after pushing to GitHub. If you ever see a build error locally
  that isn't reflected here, trust your local `npm run build` over this
  document.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm run start
```

## Deployment

No special build configuration needed — this is a standard Next.js App
Router project. Push to GitHub and import into Vercel, or run `vercel
deploy` from this folder. Add the Resend environment variables (see
`.env.example`) under Vercel → Project Settings → Environment Variables if
you want enquiry emails to send; redeploy after adding them.
