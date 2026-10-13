import { readdir, readFile } from "node:fs/promises";
import { parse } from "yaml";
const folder = new URL("../src/content/guides/", import.meta.url);
const seenTitles = new Set(),
  seenCanonical = new Set();
let count = 0;
for (const filename of await readdir(folder)) {
  if (!filename.endsWith(".md")) continue;
  const raw = await readFile(new URL(filename, folder), "utf8");
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(raw);
  if (!match) throw new Error(`${filename}: falta frontmatter`);
  const data = parse(match[1]);
  const content = match[2];
  if (!["draft", "review", "approved"].includes(data.status))
    throw new Error(`${filename}: estado ausente o inválido`);
  const title = data.title?.trim().toLocaleLowerCase("es");
  if (!title || seenTitles.has(title))
    throw new Error(`${filename}: título vacío o duplicado`);
  seenTitles.add(title);
  if (data.canonical) {
    const canonical = new URL(data.canonical).href;
    if (seenCanonical.has(canonical))
      throw new Error(`${filename}: canonical duplicada`);
    seenCanonical.add(canonical);
  }
  if (!Array.isArray(data.sources) || !data.sources.length)
    throw new Error(`${filename}: faltan fuentes`);
  for (const source of data.sources) {
    const url = new URL(source.url);
    if (
      url.protocol !== "https:" ||
      !source.title ||
      !/^\d{4}-\d{2}-\d{2}$/.test(source.consultedAt)
    )
      throw new Error(`${filename}: fuente sin URL HTTPS, título o fecha`);
  }
  if (data.status === "approved") {
    if (
      !data.reviewedAt ||
      !data.author ||
      /pendiente|asistencia de ia/i.test(data.author)
    )
      throw new Error(`${filename}: aprobación sin autoría/revisión humana`);
    if (
      /TODO|TBD|garantiza(?:mos)? (?:ahorro|ingresos|aprobaci[oó]n)/i.test(
        content,
      )
    )
      throw new Error(`${filename}: marcadores o promesas no aceptables`);
  }
  count++;
}
console.log(
  `Editorial: ${count} guías comprobadas. Veracidad y vigencia requieren revisión humana, no se deducen de una URL.`,
);
