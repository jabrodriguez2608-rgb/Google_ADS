# MVP local de herramientas energéticas y preparación de CI

El proyecto tenía únicamente investigación y un kit de prompts. Añade Astro SSG, React en cinco calculadoras y Tailwind, motores TypeScript con validación y fórmulas, guías Markdown en draft excluidas del build, navegación y páginas informativas de trabajo.

Incluye bloqueo de servicios opcionales por defecto, pruebas unitarias y de navegador, CI de GitHub y runbook de Cloudflare Pages. No incorpora anuncios, GA4 activo, CMP ficticia ni despliegue automático desde Actions. El artefacto sigue siendo de revisión: noindex global y sitemap vacío; no está listo para publicar.

Validación: npm ci, lint, typecheck, 35 tests unitarios, build estático y ocho smoke tests con accesibilidad automatizada a 360 px. Resultados y limitaciones en docs/QA.md. Revisión humana editorial/legal, identidad y configuración de producción pendientes.

Este PR se basa en la rama de investigación para separar su diff. No mergear sin revisión humana ni activar producción.
