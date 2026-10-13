import type { APIRoute } from "astro";
import { SITE_URL, indexablePaths } from "../lib/publication";
export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${import.meta.env.PUBLIC_INDEXABLE ? indexablePaths.map(path => `<url><loc>${SITE_URL}${path}</loc></url>`).join("") : ""}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
