# QA por fase

## Fase 01 — investigación y planificación (2026-10-13)

Alcance: documentación interna. No existe aplicación. Investigación de escritorio entregada; validación comercial y revisión humana pendientes.

Comandos y resultados:

- `rg --files` y lectura de AGENTS.md, prompts 00–06, README y deploy/DEPLOY.md: realizados. El directorio inicial contenía 15 archivos de kit, sin docs, package.json, lockfile, src ni workflows.
- `git status --short --branch` inicial: falló porque no existía repositorio. Se inicializó Git conservando el kit original como commit base; se creó `feature/01-validacion-nicho`.
- La primera escritura de .git fue denegada por el sandbox; se repitió con permiso elevado aprobado y tuvo éxito. No hubo rechazo de revisión automática pendiente.
- `gh auth status`: sin sesión iniciada; no existe remoto configurado. PR externo no creado.
- `node --version`: v24.20.0. `npm --version`: 11.19.0. Versiones disponibles, no selección definitiva de runtime para Astro.
- Consultas web públicas: realizadas; fuentes y límites en investigacion-mercado.md. No se accedió a herramientas privadas de volumen o RPM.
- Revisión documental automatizada: comprueba presencia de entregables, veinte hipótesis, suma de pesos/cálculos y enlaces relativos existentes. Resultado: PASS para nueve entregables, enlaces locales, veinte keywords y seis puntuaciones; no equivale a tests de producto.
- `git diff --cached --check`: pasó sin incidencias antes del commit. Se añadió .gitignore para excluir metadatos macOS, dependencias, builds, informes de pruebas y variables locales.

Controles requeridos por AGENTS.md:

| Control | Resultado |
|---|---|
| npm ci | No ejecutado: no existe package.json ni lockfile |
| npm run lint | No ejecutado: no existe script |
| npm run typecheck | No ejecutado: no existe script |
| npm run test | No ejecutado: no existe script |
| npm run build | No ejecutado: no existe script |
| Accesibilidad, móvil 360 px y 404 | No aplicable aún: no hay aplicación renderizable |
| Títulos/descriptions, sitemap, robots, canonical, enlaces web, noindex | No aplicable aún: no hay sitio ni artefacto dist |

No se declara ningún test de calculadora, build, auditoría móvil o SEO exitoso. La ausencia de estos controles no permite dar por terminada una fase de producto. En M2–M6 deberán ejecutarse todos los controles aplicables y guardar los resultados reales.

Bloqueos externos: autenticación y remoto GitHub para abrir PR; datos de demanda y sesiones con usuarios para validar mercado. No se ha configurado GitHub Actions ni Cloudflare; están en el hito M6, después de disponer de scripts reales. No hay producción, publicidad, billing o DNS modificados.

## MVP y preparación técnica — 2026-10-13

Se implementaron fases 02–06 en orden de dependencia; todavía no se consideran listas para publicación. Astro/React/Tailwind, cinco motores y formularios, cinco guías draft, controles editoriales, bloqueo de etiquetas opcionales y CI. No hay CMP real ni cargador de anuncios. Las pantallas legales son avisos de trabajo, no políticas aprobadas.

Verificaciones locales realizadas:

- npm ci: correcto con caché temporal; la caché npm habitual tenía permisos incompatibles. Se mantuvo intacta.
- npm run lint: ESLint correcto; incluye comprobación de frontmatter, títulos/canonical duplicados y fuentes con URL/fecha. No puede demostrar veracidad factual; la revisión humana sigue siendo obligatoria.
- ASTRO_TELEMETRY_DISABLED=1 npm run typecheck: 0 errores, 0 warnings, 0 hints. La variable evita escribir preferencias de telemetría fuera del proyecto.
- npm run test: 35 pruebas unitarias correctas, cinco motores y denegación de servicios opcionales.
- npm run build: correcto, 15 páginas estáticas. Las cinco guías draft no generan rutas. Sitemap vacío deliberadamente; noindex global.
- npm run test:e2e: ocho pruebas correctas con Chromium, ejemplos de cinco herramientas, axe WCAG, móvil 360 px sin desbordamiento, entradas inválidas, foco/teclado, parámetros compartidos, 404, enlaces, metadatos únicos y ausencia de peticiones externas.
- Fallo corregido: test LED esperaba el resultado de seis horas cuando el ejemplo usa dos. Referencia independiente correcta: (60−9)/1000×2×30×0,20 = 0,612 €/mes; presentación 0,61 €.
- Auditoría npm: una dependencia editorial inicial introducía cuatro avisos moderados transitivos; se sustituyó antes del commit por yaml. Instalación posterior informa cero vulnerabilidades conocidas.

Límites: axe no sustituye auditoría manual completa con lector de pantalla; _headers se verifica realmente en Cloudflare tras despliegue autorizado; canonical requiere URL real. No afirmar conformidad legal o Core Web Vitals medidos. CI remota se verificará en el PR. Las fases editoriales, monetización y operaciones conservan gates manuales pendientes.

- Smoke repetido con servidor nuevo en puerto 4322 y --ignore-lock: ocho pruebas correctas. Evita reutilizar un servidor antiguo o el modo background inferido por Astro en agentes.
- Protección main verificada vía API: quality requerido y actualizado, una aprobación, administradores incluidos, force-push y borrado desactivados.

## Verificación de cuentas e integración

- PR #2 abierto: https://github.com/jabrodriguez2608-rgb/Google_ADS/pull/2.
- Permiso Workflow verificado por subida correcta de los archivos de Actions.
- Cloudflare GitHub App verificada en su pantalla de configuración: Only select repositories; un repositorio, Google_ADS. No se almacenan IDs privados ni credenciales en el repo.
- Formulario Pages contiene npm run build y dist, sin guardar/desplegar. No hay QA de un despliegue remoto porque no se ha publicado.
- CI remota iniciada; su estado actual se consulta en los checks del PR (no confundir inicio con éxito).
