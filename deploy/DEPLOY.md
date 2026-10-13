# Manual de despliegue, gestión y rollback

## Antes del primer despliegue
1. Instala Node compatible con la versión de Astro elegida y npm. Crea repo privado GitHub y copia el kit. Ejecuta Prompt 00, luego Prompt 01 y 02.
2. No actives el workflow semanal hasta disponer de código y `OPENAI_API_KEY`. La suscripción a ChatGPT/Codex NO implica crédito gratuito de API para la GitHub Action. La ejecución programada consume API facturable.
3. Asegura que `npm ci && npm run lint && npm run typecheck && npm run test && npm run build` funcionen localmente.
4. En GitHub Settings -> Secrets and variables -> Actions -> New repository secret, crea `OPENAI_API_KEY` con credencial limitada para auditorías (si deseas ejecutarlas). No guardarla en `.env` público.
5. En Settings -> Branches/Rulesets obliga PR, un revisor humano, CI en verde para `main` y prohíbe force-push. Evita autorizar automáticamente al bot a mergear.

## Cloudflare Pages: despliegue recomendado
1. En Cloudflare, Workers & Pages -> Create -> Pages -> Connect to Git -> GitHub y seleccionar el repositorio del sitio.
2. Production branch: `main`.
3. Framework: Astro. Build command: `npm run build`. Output directory: `dist`. Root directory: directorio raíz de la app; si el proyecto usa subcarpeta, ajustarlo.
4. Configurar `PUBLIC_SITE_URL` únicamente cuando exista URL real; variables `PUBLIC_ENABLE_ADS=false`, `PUBLIC_CMP_CONFIGURED=false`, GA4/AdSense IDs vacíos.
5. Crear primera rama feature/* y PR; comprobar preview en navegador, responsive, `noindex` en preview y flujos críticos. Cuando el propietario lo apruebe, merge a main para producir deployment.
6. Vincular dominio propio en Pages -> Custom domains y seguir DNS mostrado por Cloudflare; evitar inventar los registros.
7. Validar HTTPS, canonical, `robots.txt`, `sitemap-index.xml` o `sitemap.xml` según Astro, páginas y navegación.

## Configuración tras la publicación
- Search Console: verificar dominio, enviar sitemap y revisar indexación.
- GA4: crear propiedad y medir únicamente conforme a la CMP y requisitos de consentimiento. Si no hay CMP validada, mantener desactivado.
- AdSense: cuenta y sitio de titular auténtico, revisión y aprobación; gestionar CMP certificada por Google compatible TCF, completar política de cookies/privacidad y configuración de ads.txt si corresponde; encender bandera solo tras verificar todo.
- No publicar automáticamente borradores de IA. Flujo: Codex propone -> PR editorial -> humano verifica -> merge -> Cloudflare redeploy.

## Rollback y seguridad
- Usar panel de Cloudflare Pages -> Deployments y revertir al deployment anterior según disponibilidad de la cuenta; alternativamente hacer revert del commit en GitHub y mergear tras CI.
- En incidentes críticos, desactivar publicidad y medición opcional antes de exponer usuarios a un error. Guardar log de incidentes.
- Rotar secreto API si se filtra. Mantener acciones de CI con `contents: read` y sin `pull_request_target`; no permitir que Codex use prompts suministrados por desconocidos con acceso a secretos.
- `codex-audit.yml` es exclusivamente de revisión: no modifica, publica ni abre PR. El propietario crea nuevas tareas a partir del artefacto generado.

## Opcional: Vercel
Vercel Hobby no permite uso comercial. Si usas Vercel para este producto monetizado, revisa condiciones vigentes y emplea Pro o un plan comercial compatible, con el mismo `npm run build` y `dist` para Astro estático. No conectes simultáneamente varios sistemas de despliegue automático de producción.
