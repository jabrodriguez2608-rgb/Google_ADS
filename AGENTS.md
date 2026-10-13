# AGENTS.md — reglas persistentes para Codex

## Objetivo
Construir un portal de utilidades energéticas útiles, fiables y rápidas, capaz de monetizar mediante Google AdSense una vez aceptado; el tema es una hipótesis y puede cambiar tras el estudio de mercado.

## Producto y estándares
- Público inicial: España, idioma es-ES. Sin prometer ingresos, posiciones SEO, aprobación de AdSense ni resultados de herramientas.
- Stack predeterminado: Astro (SSG), TypeScript estricto, componentes React solo en calculadoras, Tailwind, contenido Markdown/MDX, npm, despliegue Cloudflare Pages.
- El sitio funcionará sin base de datos, API de pago ni autenticación en el MVP.
- Los cálculos se hacen localmente en navegador y deben tener tests unitarios y explicaciones de fórmula. Ninguna estimación se hace pasar por factura real ni tarifa confirmada.
- Cada artículo o utilidad debe resolver una intención de búsqueda con valor original verificable. No crear páginas masivas para manipular rankings, ni usar scraping no autorizado.
- Datos variables (precios de energía, legislación, tarifas) deben tener fuente y fecha de consulta; si no hay datos fiables se pedirá que el usuario introduzca el precio y se mostrará el supuesto.

## Seguridad y revisiones
- Trabajar en ramas feature/* y abrir Pull Requests. No mergear a main, desplegar producción ni registrar dominios sin autorización explícita del propietario.
- No modificar presupuestos, billing, DNS, robots.txt de producción, políticas de privacidad o activación publicitaria sin revisión humana.
- No almacenar tokens, IDs privados o API keys en el repo. Variables en secrets/env; no loguear datos personales.
- No usar tráfico artificial, bots para impresiones/clics ni clicks incentivados. No insertar anuncios hasta que AdSense acepte la web y se cumplan consentimiento y requisitos.
- GA4/AdSense solo deben cargarse conforme a la implementación y configuración de una CMP certificada; implementar integración no equivale a afirmar conformidad legal.
- Toda afirmación pública que tenga consecuencias financieras, legales o técnicas requiere fuente verificable y revisión editorial humana.
- Mantener registros de decisión en docs/decisiones.md, y todo contenido en estado borrador hasta ser aprobado.

## Verificación obligatoria antes de terminar una tarea
1. npm ci, npm run lint, npm run typecheck, npm run test, npm run build (cuando existan los scripts).
2. Verificar accesibilidad y experiencia responsive (móvil 360px) y 404.
3. Verificar títulos y descriptions únicos, sitemap, robots, canonical, enlaces internos, noindex en previews.
4. Explicar archivos cambiados, comandos ejecutados, resultados y bloqueos; no inventar tests exitosos.
