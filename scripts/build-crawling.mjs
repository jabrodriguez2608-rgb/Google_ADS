import { readFile, writeFile } from "node:fs/promises";
import { isProduction, SITE_URL } from "../src/lib/publication.ts";
const production = isProduction(process.env);
const headers = await readFile(new URL("../public/_headers", import.meta.url), "utf8");
await writeFile(new URL("../dist/_headers", import.meta.url), production ? headers.replace("  X-Robots-Tag: noindex, nofollow\n", "") : headers);
await writeFile(new URL("../dist/robots.txt", import.meta.url), production ? `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n` : "User-agent: *\nDisallow: /\n");
