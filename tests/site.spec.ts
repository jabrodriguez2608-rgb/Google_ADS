import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const slugs = ["consumo", "standby", "led", "escenarios", "periodos"];
for (const slug of slugs) {
  test(`${slug}: example, accessibility, mobile and no third parties`, async ({
    page,
  }) => {
    const external: string[] = [];
    page.on("request", (r) => {
      if (!r.url().startsWith("http://127.0.0.1:4321")) external.push(r.url());
    });
    await page.goto(`/herramientas/${slug}/`);
    await page.getByRole("button", { name: "Cargar ejemplo ficticio" }).click();
    await page.getByRole("button", { name: "Calcular", exact: true }).click();
    await expect(page.getByRole("table")).toBeVisible();
    const result =
      slug === "consumo"
        ? "12,00"
        : slug === "standby"
          ? "0,60"
          : slug === "led"
            ? "0,61"
            : slug === "escenarios"
              ? "18,00"
              : "18,00";
    await expect(page.getByRole("table")).toContainText(result);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, nofollow",
    );
    expect(external).toEqual([]);
  });
}
test("invalid inputs, keyboard and shared URL", async ({ page }) => {
  await page.goto("/herramientas/consumo/");
  await page.getByLabel("Tu precio de energía").fill("-1");
  await page.getByRole("button", { name: "Calcular", exact: true }).click();
  await expect(page.getByRole("alert")).toBeVisible();
  await expect(page.getByLabel("Tu precio de energía")).toBeFocused();
  await page.getByLabel("Tu precio de energía").fill("0,20");
  await page.getByLabel("Tu precio de energía").press("Enter");
  await expect(page.getByRole("table")).toContainText("12,00");
  await page.getByRole("button", { name: "Preparar enlace" }).click();
  const href = await page
    .getByRole("link", { name: "Enlace a este escenario" })
    .getAttribute("href");
  await page.goto(href!);
  await expect(page.getByLabel("Tu precio de energía")).toHaveValue("0,20");
});
test("drafts absent and 404", async ({ page }) => {
  const response = await page.goto("/guias/consumo/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "No encontramos",
  );
});
test("all internal links, unique metadata and draft-free sitemap", async ({
  page,
  request,
}) => {
  const paths = [
    "/",
    "/herramientas/",
    "/guias/",
    "/metodologia/",
    "/sobre-nosotros/",
    "/contacto/",
    "/aviso-legal/",
    "/privacidad/",
    "/cookies/",
    ...slugs.map((s) => `/herramientas/${s}/`),
  ];
  const titles = new Set<string>(),
    descriptions = new Set<string>();
  for (const path of paths) {
    await page.goto(path);
    const title = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(titles.has(title)).toBe(false);
    expect(descriptions.has(description!)).toBe(false);
    titles.add(title);
    descriptions.add(description!);
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")!));
    for (const link of new Set(links)) {
      expect((await request.get(link)).status()).toBe(200);
    }
  }
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain(
    "<loc>",
  );
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Disallow: /",
  );
});
