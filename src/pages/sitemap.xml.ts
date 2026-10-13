import type { APIRoute } from "astro";
// Sitio aún no aprobado: ningún documento se ofrece para indexación.
export const GET: APIRoute = () =>
  new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
    { headers: { "Content-Type": "application/xml" } },
  );
