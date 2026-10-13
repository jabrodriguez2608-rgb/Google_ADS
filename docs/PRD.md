# PRD — portal de escenarios energéticos

Estado: borrador interno. Fecha: 2026-10-13. Responsable editorial: pendiente de designación por el propietario. Nombre comercial y dominio: pendientes; no inventados.

## Problema y público

Personas adultas en España que quieren traducir potencia, tiempo de uso y un precio propio en un coste orientativo y comparar hábitos. Hipótesis de necesidad aún por validar; ver [decisión de nicho](decision-nicho.md).

Resultado buscado: el usuario completa un cálculo, entiende unidades y limitaciones y puede modificar un supuesto para comparar. No se busca maximizar páginas artificialmente ni inducir clics publicitarios.

## Alcance funcional

| Utilidad | Entradas | Salida y valor específico |
|---|---|---|
| Aparato | W, horas/día, días/mes, €/kWh | kWh y coste mensual; anualización claramente definida |
| Standby | Varios equipos, W, horas en espera, días, precio | Desglose por equipo y suma, sin duplicar horas activas |
| LED | Dos potencias, uso, precio y coste de sustitución si procede | Diferencia energética y económica; retorno solo si ahorro positivo |
| Escenarios | Variantes de uso/potencia media/precio | Tabla bajo/base/alto con diferencias y supuestos; no intervalos estadísticos |
| Periodos | Energía o uso y precio por periodo manual | Suma desglosada; sin afirmar franjas o tarifas legales vigentes |

Motor TypeScript puro y tests de unidades, cero, negativos, decimales españoles, extremos, entradas no finitas y referencias calculadas independientemente. Compartir solo parámetros permitidos en URL, sin datos personales. Definir precisión interna y redondeo de presentación. No sumar costes fijos, impuestos o peajes implícitos. En aparatos cíclicos advertir diferencia entre potencia nominal y media medida.

## Producto y arquitectura

Astro SSG, TypeScript estricto, React islands solo donde se calculan resultados, Tailwind y content collections Markdown/MDX; npm y Cloudflare Pages. Sin backend, base de datos, registro ni API de pago. Separar motores, componentes, contenido y configuración de país para hacer reversible el nicho.

Home, herramientas, metodología, cinco utilidades, cinco guías draft, sobre nosotros, contacto, borradores legales y 404. Sin formulario que prometa enviar mensajes sin servicio real. Autoría e identidad solo con datos auténticos. Las guías complementan intenciones distintas; no generar variantes masivas por aparato o municipio.

Estados draft/review/approved; solo approved genera páginas y sitemap. Antes de revisión humana, el desarrollo se verifica localmente sin convertir borradores en contenido público. Previews con noindex por cabecera y meta; contenido sensible requiere protección efectiva. Nunca confiar en robots.txt para proteger borradores.

## Aceptación

- npm ci, lint, typecheck, test y build pasan; lockfile versionado.
- Cinco herramientas verificadas con Playwright, teclado, errores asociados a campos, anuncios de resultados y revisión a 360 px sin scroll horizontal involuntario.
- 404, enlaces, canonical, títulos y descriptions únicos, sitemap y exclusión de borradores verificados sobre dist.
- Contenido financiero/técnico con fuentes, fechas y revisión editorial humana.
- Sin peticiones a GA4/AdSense mientras falte consentimiento/CMP verificada o aprobación; IDs vacíos, anuncios desactivados.
- PR revisable, CI requerida y despliegue preparado, sin conexión ni publicación de producción antes de autorización.

## Éxito y exclusiones

Primero medir comprensión y finalización en pruebas privadas (objetivo propuesto 4/5); después datos reales de Search Console y eventos consentidos. Definir denominadores y no incluir ejecuciones automatizadas como tráfico de usuarios. No fijar previsión de ingresos: faltan demanda, RPM, costes y aprobación.

Fuera del MVP: asesoramiento contractual o normativo individual, OCR de facturas, catálogo de tarifas, compra de tráfico, afiliación, cuentas de usuario, instalaciones eléctricas y anuncios activos.
