# Backlog único

Actualizado: 2026-10-13. Estado global: investigación documental entregada; validación comercial pendiente. Todo contenido es borrador. Roles indican responsabilidades, no personas contratadas.

| ID | Hito / frente | Trabajo y criterio de cierre | Dependencia | Estado |
|---|---|---|---|---|
| M0 | Coordinación | Auditar directorio, leer instrucciones, Git y rama feature | Ninguna | Hecho local |
| M1 | Investigación | Comparar seis áreas, rúbrica, fuentes, 20 hipótesis y decisión | M0 | Entregado; revisión humana pendiente |
| M1.1 | Investigación | Exportaciones de demanda y muestra española, tres huecos útiles | M1; datos del propietario | Pendiente |
| M1.2 | Producto/UX | Cinco sesiones privadas, 4/5 comprenden y completan | M1.1 | Pendiente |
| M2 | Producto/ingeniería | Prompt 02: Astro, TS, React islands, Tailwind, navegación, estructura y 404 | M1 documentado | Pendiente; próximo hito técnico |
| M3 | Ingeniería | Prompt 03: cinco motores, límites, unidades, formularios y pruebas | M2 | Pendiente |
| M4 | SEO/editorial | Prompt 04: schema, solo approved, cinco guías draft, fuentes, plan editorial | M3 | Pendiente |
| M5 | Analítica/consentimiento | Prompt 05: carga bloqueada por defecto, CMP, ads.txt solo con ID real, documentación | M4 | Pendiente |
| M6 | QA/operaciones | Prompt 06: Actions, npm ci y todos los scripts, smoke, preparación Pages y runbook | M5 | Pendiente |
| M6.1 | Operaciones | Crear o indicar remoto y autenticar gh; publicar rama y abrir PR | Cuenta del propietario | Bloqueado por entorno |
| M6.2 | Operaciones | Ruleset main con PR/revisión/CI obligatorios; verificarlo en GitHub | M6.1 y CI | Pendiente |
| M7 | Editorial/QA | Prompt 09: auditoría preproducción, revisión humana de contenido e identidad/legal | M1.1–M6 | Pendiente |
| M8 | Propietario | Autorizar y realizar lanzamiento con Pages; comprobar HTTPS/SEO | M7 y autorización explícita | No autorizado |
| M9 | Operaciones/datos | Prompts 07–08: auditoría y optimización con datos reales | Lanzamiento | Pendiente |
| M10 | Propietario | AdSense/CMP validada y autorización específica de activación | Aprobación externa y revisión | No autorizado |

Cada hito de código exige tests y build antes de cierre, además de lint, typecheck, accesibilidad, móvil, 404 y SEO aplicables. No marcar como pasado un control no ejecutado. Registrar resultados en QA.md y decisiones en decisiones.md. Mantener cambios en feature/* y PR; no merge automático.

La validación de cuatro semanas discurre con trabajo local reversible; si invalida el nicho, reevaluar alcance antes de continuar. Los seis frentes del prompt maestro están representados arriba; coordinación consolida investigación y evita escrituras simultáneas en los mismos archivos.
