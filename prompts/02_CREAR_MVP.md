# Prompt 02 — CREAR LA WEB

Lee docs/decision-nicho.md y AGENTS.md. Implementa el MVP en Astro SSG + TypeScript + React islands + Tailwind. No añadas dependencias sin razón explícita. Usa componentes accesibles y diseño editorial cuidado, con navbar, navegación por categorías, buscador local si aporta valor, tarjetas claras y footer completo.

Páginas: home, listado de herramientas, páginas individuales de herramientas, contenido editorial Markdown/MDX, metodología, sobre nosotros, contacto, aviso legal, política de privacidad, cookies, 404. Crea mensajes legales como borradores con TODOs que requieran datos reales y revisión profesional. Garantiza que ningún marcador TODO se presente como dato real.

Añade SEO: canonical, títulos únicos, metadescripciones genuinas, OpenGraph, sitemap XML, robots.txt, datos estructurados solo si describen fielmente contenido visible, RSS opcional, URL amigables y enlaces internos contextuales. No marques contenidos sin revisar como indexables. Los previews de staging requieren noindex y/o protección efectiva, nunca usar robots como mecanismo de seguridad.

Scripts npm obligatorios: dev, build, preview, lint, typecheck, test. Añade Vitest y Playwright para smoke tests con un ejemplo por cada calculadora. Mantén imágenes ligeras, HTML semántico, loading inteligente y sin dependencias de terceros innecesarias.

Trabaja con commits pequeños y prepara PR. Al terminar, ejecuta comandos disponibles y documenta resultados en docs/QA.md, sin declarar éxito si no se han ejecutado.
