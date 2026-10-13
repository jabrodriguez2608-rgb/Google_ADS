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
