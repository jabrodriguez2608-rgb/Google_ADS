export const SITE_URL = "https://google-ads-7zr.pages.dev";
// Only the existing tools approved by the owner are released for indexing.
// Legal placeholders and editorial drafts remain excluded.
export const indexablePaths = ["/", "/herramientas/", ...["consumo", "standby", "led", "escenarios", "periodos"].map(slug => `/herramientas/${slug}/`)];
export function isProduction(env: Record<string, string | undefined>): boolean {
  return env.CF_PAGES === "1" && env.CF_PAGES_BRANCH === "main";
}
