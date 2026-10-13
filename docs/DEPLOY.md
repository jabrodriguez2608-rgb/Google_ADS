# Preparación de GitHub y Cloudflare Pages

Estado: borrador de operaciones, no autorización de publicación. Repositorio objetivo: https://github.com/jabrodriguez2608-rgb/Google_ADS. Cuenta comprobada mediante GitHub CLI; no usar el conector asociado a otra cuenta. No guardar identificadores privados de Cloudflare ni credenciales aquí.

## Configuración prevista

- Astro estático; Node 24 (.nvmrc); npm ci reproducible con package-lock.json.
- GitHub Actions ejecuta lint, typecheck, test, build y smoke con Chromium/axe. Job requerido: `quality` del workflow `CI`.
- Pages con Git Integration exclusivamente. No hay deploy desde Actions.
- Framework Astro; raíz `/`; build `npm run build`; salida `dist`; rama de producción `main` solo después de revisión y autorización explícita.
- Previews de ramas `feature/*`: contenido sin aprobación editorial no debe hacerse público. Hasta disponer de protección de acceso efectiva, verificar localmente. noindex no proporciona privacidad.
- Variables: NODE_VERSION=24, ASTRO_TELEMETRY_DISABLED=1; PUBLIC_ENABLE_ADS=false, PUBLIC_CMP_CONFIGURED=false, IDs opcionales vacíos. PUBLIC_SITE_URL solo con origen HTTPS real aprobado, nunca un dominio inventado.
- El build actual está destinado a revisión local, con meta y cabecera noindex, robots Disallow:/ y sitemap vacío. Canonical solo cuando existe PUBLIC_SITE_URL. Eliminar estas restricciones requiere un PR editorial y de lanzamiento revisado; no marcar esta versión como SEO de producción terminado.

## Antes de conectar Pages

1. Revisar los PRs y resolver controles. main contiene únicamente el kit original mientras no haya merge autorizado.
2. Confirmar revisión de contenido de herramientas y metodología, identidad, contacto y textos legales; guías aprobadas individualmente con autor/revisor reales. Borradores quedan fuera del build.
3. Configurar protección de main: PR obligatorio, una aprobación humana, CI quality obligatorio, bloquear force-push y borrado. En una cuenta de un único mantenedor será necesario otro revisor para cumplir una aprobación; no omitirla ni simularla.
4. Autorizar instalación de Cloudflare GitHub App con acceso exclusivamente a Google_ADS. Esta concesión de acceso requiere confirmación en la pantalla correspondiente.
5. Revisar si guardar el proyecto dispara el primer deploy. No pulsar Save and Deploy sin autorización explícita de publicación. El acceso a la cuenta no equivale a aprobar textos.
6. En lanzamiento autorizado: configurar dominio/TLS solo con datos reales y permiso, comprobar canonical, sitemap, robots, noindex de previews y contenido aprobado. No comprar dominios ni modificar facturación.

## Operación y rollback

Antes de cada release: npm ci, npm run lint, npm run typecheck, npm run test, npm run build, npm run test:e2e; revisión manual de teclado/lector de pantalla/móvil y checklist legal. Repetir pruebas de red cuando se integre CMP.

Tras release: comprobar URL canónica HTTPS, 404 real, enlaces, ausencia de borradores, errores de consola y cabeceras en Cloudflare (el preview local no aplica _headers). Si hay fallo, restaurar despliegue previamente aprobado desde el panel o preparar un revert en PR; pedir autorización para cambios de producción. Registrar fecha, SHA, motivo y comprobaciones. Git es copia del código y contenido; mantener acceso del titular, no almacenar secrets en backups del repositorio.

No se cambia presupuesto alguno. Operar sin APIs de pago ni auditoría automática facturable; revisar consumo de CI/Pages antes de crecer. Si se agotan cuotas, detener ejecuciones no esenciales y consultar al propietario; nunca ampliar plan automáticamente. codex-audit.yml es solo un checklist manual, no ejecuta API ni tiene calendario.

Fuentes consultadas 2026-10-13: https://developers.cloudflare.com/pages/configuration/git-integration/ y https://docs.astro.build/en/install-and-setup/. Revalidar opciones del panel al conectar. Alternativa Vercel requiere comprobar condiciones comerciales y coste con autorización; no está configurada.

## Estado verificado tras autorizar accesos

- GitHub CLI tiene el permiso Workflow y la rama del MVP está subida. PR: https://github.com/jabrodriguez2608-rgb/Google_ADS/pull/2.
- En GitHub Apps, Cloudflare Workers and Pages aparece instalado con «Only select repositories» y exactamente Google_ADS seleccionado. No se amplió a todos los repositorios.
- Pages reconoce ese repositorio. Formulario preparado con rama main, build npm run build y salida dist; configuración manual, sin preset. Node se fija con .nvmrc.
- No se ha pulsado Save and Deploy. El formulario no constituye un proyecto guardado ni un despliegue. Conservarlo abierto no sustituye guardar la configuración después de la aprobación de lanzamiento.
- main continúa con el kit inicial: antes de publicar debe revisarse y autorizarse el merge del PR. No lanzar ese main aún sin aplicación.
- CI del PR: https://github.com/jabrodriguez2608-rgb/Google_ADS/actions. Consultar estado del SHA actual antes de cualquier merge.

## Producción publicada e indexación (14/10/2026)

Origen: https://google-ads-7zr.pages.dev/. Cloudflare Pages construye main con `npm run build`, salida `dist`. No requiere variables secretas para el sitio. El build reconoce exclusivamente `CF_PAGES=1` y `CF_PAGES_BRANCH=main`, variables del proveedor, para permitir indexación. En cualquier otro contexto conserva noindex. No reutilizar un artefacto local/preview para publicar producción: reconstruir en el contexto de Pages. Si cambia el dominio, actualizar SITE_URL en src/lib/publication.ts y sus pruebas. No hay publicidad activa.
