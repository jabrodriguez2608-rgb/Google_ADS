import { expect, test } from "vitest";
import { isProduction, indexablePaths } from "./publication";
test("indexing is fail-closed outside Cloudflare main builds", () => {
  expect(isProduction({})).toBe(false);
  expect(isProduction({CF_PAGES_BRANCH: "main"})).toBe(false);
  expect(isProduction({CF_PAGES: "1", CF_PAGES_BRANCH: "feature/seo-produccion"})).toBe(false);
  expect(isProduction({CF_PAGES: "1", CF_PAGES_BRANCH: "main"})).toBe(true);
  expect(indexablePaths).toHaveLength(7);
  expect(indexablePaths).not.toContain("/privacidad/");
  expect(indexablePaths.some(path => path.startsWith("/guias/"))).toBe(false);
});
