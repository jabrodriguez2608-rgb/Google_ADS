# Kit de prompts y despliegue — Codex + SEO + AdSense

**Estado:** material de arranque; no es una web ya construida, no contiene conexión con cuentas ni despliegues activados.

## Orden de uso
1. Crear directorio local del proyecto y un repo GitHub (preferentemente privado).
2. Copiar estos archivos al repositorio y abrirlo con Codex. Pegar `prompts/00_PROMPT_MAESTRO.md` para inicializar producto, decisiones y estructura.
3. Usar `01_INVESTIGAR_MERCADO.md` antes de consolidar el nicho. El portal energético es una hipótesis reversible, no un ranking real de oportunidades.
4. Pasar `02_CREAR_MVP.md` y `03_CALCULADORAS.md` para implementar; `04_SEO_CONTENIDO.md` para el CMS editorial; `05_ADSENSE_PRIVACIDAD.md` para preparar monetización sin activarla.
5. Ejecutar `06_CI_DESPLIEGUE.md`. Leer `deploy/DEPLOY.md` y configurar GitHub + Cloudflare. El workflow `ci.yml` no tendrá éxito hasta que Codex cree un package.json con todos los scripts requeridos.
6. Tras el lanzamiento pasar `08_OPTIMIZACION_DATOS.md` con CSV reales y `09_AUDITORIA_PREPRODUCCION.md` antes de cada despliegue importante.
7. Opcional: activar GitHub Actions `codex-audit.yml` semanal con `OPENAI_API_KEY`. Genera artefacto de auditoría en solo lectura, con coste de API. Si quieres propuestas en PRs, crear un flujo aparte con permiso exclusivo sobre ramas y aprobaciones.

## Control de calidad y monetización
- Google AdSense no es Google Ads: AdSense paga al editor, Ads permite comprar anuncios.
- No hay ingresos garantizados; `ingresos ≈ (páginas vistas / 1000) × Page RPM` (si el RPM corresponde a páginas vistas).
- La aprobación de AdSense requiere contenido útil, navegación y políticas conformes; no hay número mínimo universal de artículos garantizado.
- En EEE, Reino Unido y Suiza se exige CMP certificada por Google/TCF para anuncios personalizados. No publicar un banner casero como sustituto.
- No empezar con publicidad de pago para un modelo ads-only hasta demostrar unit economics: normalmente costará más captar visitas que monetizarlas.

## Dependencias/cuentas
- Necesarias: GitHub, Cloudflare y dominio propio (dominio normalmente de pago).
- Para medir SEO: Search Console gratis; GA4 opcional.
- Para monetizar: AdSense aprobado y CMP integrada; asesoramiento legal apropiado.
- Para auditoría Codex programada: API key facturable independiente de suscripción a ChatGPT.

## Referencias oficiales, consultadas en octubre 2026
- Google: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- Google AdSense: https://support.google.com/adsense/answer/7299563
- CMP: https://support.google.com/adsense/answer/13554116?hl=es
- Cloudflare Pages Astro: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- Cloudflare Git: https://developers.cloudflare.com/pages/configuration/git-integration/
- Codex GitHub Action: https://github.com/openai/codex-action
- Vercel Hobby comercial: https://vercel.com/docs/plans/hobby
