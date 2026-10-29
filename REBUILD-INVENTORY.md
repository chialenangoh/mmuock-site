# Rebuild Inventory — M'muock Fosimondi Community Ohio USA

**Rebuilt:** October 29, 2026 · **Source of truth:** WordPress export
`mmuock-site-content-snapshot-2026-10-29.xml` (212 items: 26 pages, 6 posts,
28 menu items, 138 attachments) · **Stack:** Next.js 15 App Router + React 19 +
Tailwind CSS v4 (same conventions as the Christ Light Foundation site).
**Status:** built locally only — no GitHub push, no Render service yet. The
WordPress site stays live and untouched.

## Pages — carried over

| WP slug | New route | Notes |
|---|---|---|
| home (id 38) | `/` | Full rebuild: hero, Who We Are, Mission/Vision, Community at a Glance, help cards, latest stories, activities. **Fix (a):** hero typo "actoins" → "actions". **Fix (b):** meeting banner added (see below). |
| about-us | `/about-us` | Story, Mission, Vision, Commitment, Activities — verbatim. |
| mission-vision | `/mission-vision` | Uses this page's own (longer) mission wording — differs slightly from Home/About; both preserved as found. |
| leadership | `/leadership` | All 14 leaders with roles verbatim; 11 matched to their uploaded portraits. Briant Fozao, Nzometia Kelvin and Longtse Juline Nwopedem had no portrait on the old page → initials tile shown. |
| our-activities | `/our-activities` | Six activities verbatim. (WP text here read "We support eduction…" — the Home/About spelling "education" is used; flagged as a deliberate typo fix like (a).) |
| our-impact | `/our-impact` | ⚠️ The WP page shipped with **placeholder lorem-ipsum** ("Impact title 1" ×5) that was never filled in. Reproduced as-is — nothing invented. Needs real impact content from the association. |
| photo-gallery | `/photo-gallery` | 75 photos in 4 groups: Community in Ohio (37), Blacklick Woods Cleanup Jul 4 2026 (20), Schools in Our Homeland (12), East Dublin Granville Rd Clean-Up (6). |
| video-gallery | `/video-gallery` | YouTube video XHOmBV4js_E embedded once (WP repeated it 3×). "We will upload the videos in a moment" heading kept once. |
| news-stories | `/news-stories` | "Our Blog — Discover the latest news and stories" + all 6 posts. |
| get-involved | `/get-involved` | 4 ways + "Meet With Us" section incl. Nov 7, 2026 meeting (already in WP content). |
| membership | `/membership` | Form rebuilt (see WP-only features). Field set matches WPForms original. |
| partners | `/partners` | Same, incl. organization field + comment. |
| volunteer | `/volunteer` | Same, incl. profession + message. |
| faq | `/faq` | ⚠️ WP page had only placeholder questions ("Question 1 here") with lorem-ipsum answers. Reproduced as-is; needs real FAQs. |
| contact-us | `/contact-us` | Address 2787 Marwood Court Columbus, Ohio 43232 · Phone/WhatsApp +1 614-695-0486 · info@mmuockfosimondiohio.org · Google Maps embed · social links (Facebook /muockfosimondiohio, YouTube @muockfosimondiohiousa). |
| donate | `/donate` | **Fix (c):** Stripe button native in page — "Donate with Card — Give Any Amount" → https://buy.stripe.com/4gM00i9j6c9U4ug5ufasg02 + the 501(c)(3)/tax-deductible line. GiveWP form replaced (see below). Other giving routes kept as contact info (email/phone/WhatsApp). No Zelle/check instructions existed in the export. |
| privacy-policy | `/privacy-policy` | Verbatim (42 blocks, generated from export). |
| terms-and-conditions | `/terms-and-conditions` | Verbatim (47 blocks, generated from export). |
| donation-confirmation | `/donation-confirmation` | Simple thank-you page (WP page was just the GiveWP `[give_receipt]` shortcode). |
| donation-failed | `/donation-failed` | WP failure text verbatim + link back to /donate. |

## Posts — carried over (at their original root URLs)

| Post | WP date | Route |
|---|---|---|
| Blacklick Woods Metro Park cleanup | published Oct 26, 2026 | `/mmuock-fosimondi-community-ohio-usa-holds-cleanup-campaign-at-blacklick-woods-metro-park` — **story date shown as July 4, 2026** (the corrected event date; it appears throughout the text and in the byline via `displayDate`). 19 photos. |
| Supports All 7 Schools in Our Homeland | Dec 12, 2025 | same slug, 12 photos |
| Clean-up campaign, East Dublin Granville Road | Oct 6, 2024 | same slug, 6 photos |
| Celebrating Culture and Unity in the M'muock Community | Jun 3, 2024 | same slug |
| Empowering Education in the M'muock Community… | Jun 3, 2024 | same slug |
| Strengthening Bonds… through Community Outreach | Jun 3, 2024 | same slug |

## Media

- **138 / 138 attachments downloaded, 0 failures** (42 MB) into `public/images/`
  with sanitized filenames (spaces/en-dashes → `-`); original WP paths are
  mapped in the generated data files. All photos are the association's real
  photos — no stock/AI substitutions.
- The Blacklick story uses the hash-named Oct 2026 uploads (19) exactly as the
  WP post references them; the Photo Gallery's Blacklick section uses the
  named set uploaded for the gallery update (`mmuock-community-cleanup-01…19`
  + `mmuock-community-gathering-20`) — the update the Elementor fault had
  blocked on WordPress.
- Downloaded but unused by any page (kept in `public/images/` for completeness):
  placeholder.png, website-redesign-banner.jpg, ezgif.com-resize.gif,
  Afritech-Global-logo.jpg, alternate portrait crops (Bazil.jpg,
  Bazil-Forchia.jpg, Ndemezeh-forsia-1.jpg, etc.).

## WordPress-only features — dropped / replaced

| Feature | Disposition |
|---|---|
| **GiveWP donation form** (`[give_form id="214"]`) | Replaced by the native Stripe Payment Link button on /donate (Fix (c)). |
| GiveWP donor dashboard / donation history / recurring-donations pages | **Dropped** — donor accounts are a GiveWP/WordPress feature with no static equivalent. Existing donors' records remain in the WordPress/GiveWP data. |
| WPForms (membership, partnership, volunteer, contact) | Rebuilt as native forms with the same fields; submitting composes an email to info@mmuockfosimondiohio.org via the visitor's mail app (no server backend). The contact form's exact WPForms field list wasn't in the export (shortcode only) — Name/Email/Subject/Message used. |
| Elementor templates (header/footer/CTA blocks) | Rebuilt as React Header/Footer components; footer text, quick links, contacts and socials carried over. The WP footer linked Privacy/Terms to an external dev domain (bis.faithworkstech.com); the rebuild links to the site's own /privacy-policy and /terms-and-conditions pages. |
| Sample Page (WP boilerplate, slug `sample-page`) | **Dropped intentionally** — default WordPress demo content, not association content. |
| Events page (draft, never published) | Not carried over (was a draft). |
| WPCode Stripe-button snippet (donate workaround) | No longer needed — the button is native in the new /donate page. The snippet remains active on the old WP site until cutover. |

## Baked-in fixes (queued behind the Elementor fault)

- (a) Homepage hero: "Support us in our **actions** to drive change…" (was "actoins").
- (b) Homepage meeting banner: "Next meeting: Saturday, November 7, 2026 — the
  community meets the first Saturday of the month in rotating member homes.
  All members welcome."
- (c) Donate page: native Stripe button + 501(c)(3) line (details above).

## Verification (local, Oct 29 2026)

- `npm install` clean; `npm run build` **passes** — 25 routes prerendered
  (19 pages + 6 posts), no errors.
- Production server (`npm start`) checked page-by-page: **all 26 routes HTTP
  200**; content checks passed — homepage meeting block + corrected hero text
  ("actoins" absent), Donate Stripe link + tax-deductible line, gallery ≥70
  images referenced, Blacklick story shows "July 4, 2026" with its 19 photos,
  contact details present, leadership renders. Images (jpg/png/avif) serve 200.
  No leftover WP shortcodes in output.
- Live-site spot check: browser fetch of the live site failed with a network
  error during the build, so rendered-page comparison relied on the export
  (the authoritative source) — the export already contained the July 4, 2026
  corrections.

## Next steps (not done here)

1. Push `~/workspace/vercel-migration/repos/mmuock/` to GitHub.
2. Create the Render service (mirror the CLF service settings) and deploy.
3. Point mmuockfosimondiohio.org DNS at Render when ready to cut over; the
   WordPress site stays live until then.
4. Fill in real content for /our-impact and /faq placeholders.
