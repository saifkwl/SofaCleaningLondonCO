import type { APIRoute } from 'astro';
import { site } from '../data/site';

/** Mirrors the robots meta tag in Base.astro — see the note there. */
const allowIndexing = import.meta.env.PUBLIC_DISABLE_INDEXING !== 'true';

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
