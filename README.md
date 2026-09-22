# sofacleaninglondon.co

Marketing site for Sofa Cleaning London — upholstery and carpet cleaning across Greater London.
Built with Astro (static output), Tailwind CSS v4 and no client framework.

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run check    # Astro + TypeScript diagnostics
```

## Before this goes live

The site ships **noindex + `Disallow: /`** until you opt in. Nothing gets crawled until then, which
is deliberate — the two items below must be confirmed first.

1. **Confirm every price range.** All ranges are placeholders written to be plausible for London,
   not figures you gave us. They live in one file, `src/data/services.ts`, in each service's
   `priceRows` as `range: '£65–£85'`. Read them, change them, and only then go live.

   The site deliberately quotes **ranges, not fixed prices**, and every page says the exact figure
   is agreed by phone or WhatsApp. So a range only needs to be roughly right — it sets expectations
   rather than committing you. Structured data publishes each range as a `PriceSpecification` with
   a min and max, which is what Google expects for a guide price.
2. **Confirm the contact details.** `src/data/site.ts` holds the phone number, WhatsApp number,
   email and opening hours. The phone and WhatsApp number (+44 7342 840056) came from you. The
   email address `hello@sofacleaninglondon.co` is a placeholder — set it to a mailbox that exists.

Then build with indexing enabled:

```bash
PUBLIC_ALLOW_INDEXING=true npm run build
```

That one variable flips the robots meta tag on every page and rewrites `robots.txt` to allow
crawling and point at the sitemap. Without it, staging deploys stay safely invisible.

## Things deliberately left out

These are claims we could not verify, so nothing on the site asserts them. Each one is wired up to
appear automatically once you fill it in, in `site.pending` in `src/data/site.ts`:

- **No star rating or review count anywhere.** An unverifiable "4.9 from 300 reviews" badge breaks
  Google's structured-data policy and UK advertising rules. The `/reviews/` page explains the
  absence rather than hiding it. Give us a public Google or Facebook profile URL and a real count
  and we can add `aggregateRating` schema properly.
- **No insurance, accreditation or years-in-business claim.** Set `pending.insurance` and
  `pending.yearsTrading` and they appear in the About page fact box.
- **No ULEZ vehicle-compliance claim.** Area pages state which zone an address is in and say road
  charges are itemised in the quote. They do not claim anything about the van.
- **No company address**, because the business is mobile. If you have a registered address, adding
  it unlocks `LocalBusiness` schema with a `PostalAddress`, which helps local search.

## Content structure

All page content is data, not markup. Editing text almost never means touching a template:

| File | Holds |
|---|---|
| `src/data/site.ts` | Phone, WhatsApp, email, hours, unconfirmed facts |
| `src/data/services.ts` | 10 service pages — copy, price tables, FAQs |
| `src/data/areas.ts` | 12 London area pages — local copy, postcodes, FAQs |
| `src/data/guides.ts` | 6 guide articles |
| `src/data/gallery.ts` | Before/after pair captions and alt text |
| `src/data/reviews.ts` | Customer messages, quoted verbatim |
| `src/data/method.ts` | The seven-step method |

Adding a service or area is a matter of appending an object to the relevant array — the page, the
navigation, the footer, the sitemap, the internal links and the schema all follow automatically.

## Photography

`src/assets/gallery/` holds 28 photographs forming 14 before/after pairs, plus 4 standalone shots,
all supplied by the owner from real jobs. There is no stock photography on this site. Captions and
alt text describe only what is visible in each frame.

`src/assets/reviews/` holds three screenshots of customer messages. **Check you have the senders'
consent to publish their names** before going live — they are full names of identifiable people.
If not, remove the `screenshot` field from `src/data/reviews.ts` and shorten the names to a first
name and initial; the review text itself will still display.

## Lead capture

The quote form has no backend. It assembles a message in the visitor's browser, shows it to them,
and opens `wa.me` with the text pre-filled on a second press. The visitor sends it themselves from
their own WhatsApp. Nothing is posted to a server, so there is no database, no GDPR processor
agreement and nothing to breach. The trade-off is that an abandoned form leaves no record — if you
later want to capture those, a form backend can be added alongside.

## Architecture notes

- **Static output.** Every page is pre-rendered HTML; text, links and metadata are in the initial
  response, which is what makes it cheap to crawl.
- **No JavaScript bundle.** Total shipped JS is under 2 kB of inline script (mobile menu, the
  before/after sliders, the quote form). Total CSS is ~41 kB.
- **Internal linking.** Every page is reachable from the homepage in one click. Services cross-link
  to related services and to the areas that request them most; areas cross-link to adjacent areas
  and to every service. `/sitemap/` is a human-readable index; `/sitemap-index.xml` is for crawlers.
- **Schema.** `HomeAndConstructionBusiness`, `WebSite`, `Service`, `FAQPage`, `Article`,
  `BreadcrumbList`, `ItemList`, `ImageGallery` — all generated from the same data as the visible
  page, so structured data and content can never disagree.
- **Differentiation from the .com site.** Different stack, different design system, different
  service taxonomy and entirely original copy. Across the 12 area pages, 358 substantial sentences
  appear on exactly one page and 16 are shared boilerplate; across the 10 service pages the split
  is 303 to 15.

## Deployment

The build output in `dist/` is plain static files — any host works. Netlify, Cloudflare Pages and
Vercel all detect Astro automatically; set the build command to
`PUBLIC_ALLOW_INDEXING=true npm run build` and the publish directory to `dist`.

After launch: point `sofacleaninglondon.co` at the host, force HTTPS, pick one of www or non-www
and redirect the other, then verify the domain in Google Search Console and submit
`https://sofacleaninglondon.co/sitemap-index.xml`.
