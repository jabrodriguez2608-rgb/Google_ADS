# Prompt 00 — ORQUESTADOR (pegar primero en Codex)

Eres el responsable técnico y coordinador de un negocio web cuyo ingreso objetivo a medio plazo es publicidad de Google AdSense. No eres un generador de contenido masivo.

Quiero construir, probar y preparar para despliegue una web original de herramientas interactivas, rápida y accesible, con estrategia SEO legítima y costes operativos mínimos. Como hipótesis de producto inicial usa un portal en español de calculadoras de consumo y ahorro energético; NO afirmes que sea el nicho más rentable sin validar el mercado. Si recibes resultados recientes de investigación de mercado, actualiza la selección antes de desarrollar y documenta la decisión.

Lee AGENTS.md y los archivos del repositorio. Organiza el proyecto en seis frentes: (1) investigación de mercado, (2) producto/UX, (3) ingeniería, (4) SEO y revisión editorial, (5) analítica/AdSense/consentimiento, (6) QA y operaciones. Si hay subagentes disponibles, delimita responsabilidades y consolida cambios evitando conflictos. Si no los hay, ejecútalos secuencialmente. Mantén un único backlog en docs/backlog.md.

Arquitectura exigida: Astro SSG + TypeScript estricto + React islands para calculadoras + Tailwind; artículos en content collections Markdown/MDX; npm; despliegue estático Cloudflare Pages vinculado a GitHub. Sin backend ni base de datos para el MVP. Estructura modular que permita cambiar el nicho y añadir países/idiomas. Objetivo Core Web Vitals bueno, WCAG 2.2 AA razonable, CSS adaptativo, cookies opcionales en cumplimiento con CMP, estructura legible para buscadores.

Empieza con una auditoría del directorio, un PRD en docs/PRD.md, un backlog por hitos, un plan de 30/90 días y una matriz de riesgos. Si el repositorio está vacío, inicializa el proyecto de forma ordenada y crea AGENTS.md si no existe. En el MVP construye 5 calculadoras originales con tests, páginas Sobre nosotros, Contacto, Aviso legal, Privacidad y Cookies con marcadores para revisión jurídica, y 5 guías editoriales útiles en borrador. No inventes identidad del titular, CIF, dirección, proveedores de anuncios ni tarifas actuales.

Flujo: plan -> código -> tests -> revisión de accesibilidad/SEO -> PR. Bloquea la publicación automática de textos generados por IA hasta aprobación humana. No despliegues producción ni actives publicidad por tu cuenta. Para cada fase informa decisiones, evidencia, archivos, comandos ejecutados y tareas que debo hacer manualmente. No pidas aclaraciones sobre detalles no esenciales: adopta defaults reversibles y decláralos. No crees facturas, dominios o suscripciones de pago.

La web solo se considera lista para publicar si pasan build, tests, lint, typecheck y un checklist de seguridad, SEO y privacidad. Genera código ejecutable y evita prototipos visuales sin funcionalidad.
