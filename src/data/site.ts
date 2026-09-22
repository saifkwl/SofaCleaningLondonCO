/**
 * Single source of truth for contact details.
 * The owner confirmed +44 7342 840056 for both calls and WhatsApp.
 * Changing it here changes every tel:, wa.me: and schema reference on the site.
 */
export const site = {
  name: 'Sofa Cleaning London',
  domain: 'https://sofacleaninglondon.co',
  tagline: 'Upholstery & carpet cleaning across Greater London',
  phoneE164: '+447342840056',
  phoneDisplay: '07342 840056',
  whatsappNumber: '447342840056',
  email: 'hello@sofacleaninglondon.co',
  hours: 'Every day, 8am – 8pm',
  /** Facts the owner has not yet supplied. Nothing here is guessed. */
  pending: {
    companyNumber: null as string | null,
    insurance: null as string | null,
    reviewProfileUrl: null as string | null,
    aggregateRating: null as { value: number; count: number } | null,
    yearsTrading: null as number | null,
  },
} as const;

export const telHref = `tel:${site.phoneE164}`;

/** Builds a wa.me deep link. The visitor still presses Send inside WhatsApp. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hi Sofa Cleaning London, I'd like a quote for upholstery cleaning. My postcode is ";

/**
 * GA4 measurement ID. Set to null to ship the site with no analytics at all —
 * useful for a client demo or a locale that opts out. The Base layout only
 * loads gtag.js when this is a real ID, and never on a staging build.
 */
export const analyticsId = 'G-F11VQS2NVT';
