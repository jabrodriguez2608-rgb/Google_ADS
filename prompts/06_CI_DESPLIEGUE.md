# Prompt 06 — CI/CD Y DESPLIEGUE

Configura repositorio GitHub con integración Cloudflare Pages, rama main protegida, PR obligatorios, GitHub Actions CI que ejecute npm ci, lint, typecheck, test y build. Usa archivos .github/workflows/ci.yml y .github/workflows/codex-audit.yml como base y ajusta los comandos a package.json. La CI debe ser requerida antes de merge. Las ramas feature/* generan previews de Pages y main produce despliegue automático tras merge aprobado. No configures deploy doble desde GitHub Actions y Cloudflare Git Integration.

Implementa control de calidad para contenido status=approved, datos estructurados, accesibilidad, seguridad, links internos, anti-duplicado y smoke test. Instala Dependabot si aporta valor. Define límites de gasto y uso, y documenta cómo volver a una versión anterior. No conectes cuentas externas ni hagas cambios de producción reales sin aprobación.

Crea un plan de deploy para Cloudflare: framework Astro, npm run build, directorio dist, rama main, Node compatible con dependencias, dominio del titular, TLS. Como alternativa documenta Vercel Pro para uso comercial (no Hobby). Incluye un runbook con procedimientos de pre-release, lanzamiento, rollback, incidentes, medición y backups. En docs/DEPLOY.md lista todos los pasos manuales y los parámetros de configuración de GitHub y Cloudflare.
