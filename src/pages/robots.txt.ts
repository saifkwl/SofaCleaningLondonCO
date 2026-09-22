import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * While PUBLIC_ALLOW_INDEXING is unset the whole site is disallowed, matching
 * the noindex tag in the layout. Set PUBLIC_ALLOW_INDEXING=true at build time
 * once the owner has confirmed prices and contact details.
 */
const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';

const body = allowIndexing
  ? // Privacy and terms carry a noindex tag instead of a Disallow rule: a
    // disallowed page cannot be crawled, so Google never sees the noindex.
    `User-agent: *
Allow: /

Sitemap: ${site.domain}/sitemap-index.xml
`
  : `User-agent: *
Disallow: /
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
