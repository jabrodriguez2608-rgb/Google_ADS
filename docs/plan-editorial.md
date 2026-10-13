# Plan editorial — fase 04

Fecha: 2026-10-13. Estado: borrador; responsable humano de revisión pendiente de asignación por el propietario. La fecha de consulta de fuentes no acredita revisión editorial. La demanda del nicho sigue pendiente de validación, según [D-001](decision-nicho.md).

## Alcance y oportunidad

Cinco guías acompañan las cinco utilidades del MVP. Las palabras clave son hipótesis de intención, sin volúmenes, CPC, tráfico o promesas SEO. La oportunidad cualitativa consiste en resolver errores concretos de interpretación con ejemplos reproducibles. No expandir este catálogo hasta completar la validación de mercado y observar necesidades reales.

| Cluster y archivo | Hipótesis de búsqueda | Objetivo y aportación original | Enlace principal | Verificación humana requerida |
| --- | --- | --- | --- | --- |
| Consumo: `consumo.md` | calcular consumo aparato vatios horas | Distinguir potencia de energía y explicar por qué doce meses de 30 días no son 365 días | `/herramientas/consumo/` | Fórmula, unidades y alcance de la proyección |
| Espera: `standby.md` | calcular standby varios aparatos | Inventario por estados y prevención del doble cómputo de horas | `/herramientas/standby/` | Coherencia de estados, límites de medición y cautela sobre desconexión |
| Iluminación: `led.md` | comparar consumo bombilla LED | Comparación con el mismo uso, base del porcentaje y distinción frente a amortización | `/herramientas/led/` | Potencia frente a servicio luminoso y diferencia monetaria |
| Sensibilidad: `escenarios.md` | cuánto cambia coste al usar menos horas | Tabla que aísla uso y precio, más un escenario combinado | `/herramientas/escenarios/` | Cálculo de diferencias y ausencia de predicción de precios |
| Distribución: `periodos.md` | calcular coste kWh por periodos | Precio ponderado frente a media simple y traslado hipotético de 10 kWh | `/herramientas/periodos/` | Correspondencia entre intervalo, precio y consumo |

Cada fila necesita una persona identificada por el propietario que compruebe la exactitud técnica y apruebe el texto. Codex figura como asistencia de IA, sin biografía, credenciales ni identidad humana inventadas.

## Enlaces internos

Cada guía dirige a su calculadora. Consumo conecta con escenarios; standby con consumo; LED con escenarios; escenarios con periodos; periodos con escenarios. Se usan enlaces a herramientas, evitando enlaces públicos a otras guías todavía en borrador. Al aprobar una guía, revisar que todos sus destinos estén disponibles en el mismo despliegue. La aprobación del artículo no aprueba automáticamente la calculadora, ni viceversa.

## Flujo de revisión y publicación

1. La asistencia de IA prepara `draft`, fuentes consultadas y ejemplos propios.
2. Una persona verifica cada afirmación técnica o financiera, reproduce las operaciones y comprueba que las fuentes soportan el texto exacto. No basta con que una URL responda correctamente.
3. Se abre o actualiza el PR editorial con el texto concreto, evidencias y lista de cambios. El estado `review` sigue excluido de páginas y sitemap.
4. Tras aprobación humana registrada, el responsable actualiza `status: approved`, autoría auténtica y `reviewedAt`. Registrar identidad, fecha y referencia de la revisión en el PR. La publicación exige además la autorización de producción correspondiente.
5. Cualquier modificación material posterior devuelve el artículo a revisión antes de publicarse.

El frontmatter obligatorio contiene `title`, `description`, `status`, `author`, `reviewedAt` y `sources` con título, URL y fecha de consulta. `canonical` es opcional y no debe inventarse mientras no se haya decidido un dominio. Solo artículos aprobados deben generar rutas y aparecer en sitemap. Los cinco documentos de esta entrega permanecen en `draft` con `reviewedAt: null`.

Los controles automáticos deben rechazar slugs/URLs y títulos duplicados, campos ausentes, citas sin URL y fuentes malformadas. Los títulos y descriptions también deben ser únicos. La comprobación de enlaces debe marcar fuentes inaccesibles para revisión; una respuesta HTTP correcta no demuestra veracidad. Ningún detector automático garantiza identificar claims inventados: el gate humano por afirmación sigue siendo obligatorio. Si una fuente no se puede verificar, no aprobar el artículo hasta sustituirla o retirar la afirmación. Tests y build corresponden al coordinador al integrar esta fase; este documento no declara su resultado.

## Registro de fuentes consultadas

Consultadas en web el 2026-10-13:

- [EIA, Measuring electricity](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php): definición y relación entre potencia, horas y energía. No se usan precios estadounidenses.
- [CNMC, Entiende tu factura](https://www.cnmc.es/prensa/entiende-tu-factura-20231002): finalidad de la herramienta e identificación de conceptos y tipo de contrato. No se extraen tipos impositivos ni precios vigentes.
- [IDAE, serie SPAHOUSEC](https://www.idae.es/informacion-y-publicaciones/estudios-informes-y-estadisticas/estudios-del-consumo-de-los-hogares-espanoles-serie-spahousec): contexto de estudios de equipamiento y hábitos. No se extrapolan porcentajes de muestras al lector.
- [Comisión Europea, Light Sources](https://energy-efficient-products.ec.europa.eu/product-list/light-sources_en): información de fuentes luminosas y etiquetado. No se atribuye equivalencia comercial a las potencias ficticias.

Todos los precios numéricos de las guías son supuestos pedagógicos. Las tablas son cálculos propios, no datos de mercado. La energía y los euros se conservan sin redondear en operaciones intermedias; se muestran euros con dos decimales cuando corresponde.

## Revisión trimestral

Primera revisión prevista: 2027-01-13; siguientes: 2027-04-13, 2027-07-13 y 2027-10-13. Son hitos del backlog, no una automatización activa. El propietario debe asignar responsable antes de publicar.

En cada revisión: abrir todas las fuentes; registrar fecha, disponibilidad y soporte de cada afirmación; reproducir ejemplos con el motor actual; comprobar enlaces internos, accesibilidad de tablas y títulos; revisar contrato editorial y supuestos. Un cambio de fórmulas, tarifas citadas, legislación aplicable o fuente retirada dispara revisión extraordinaria. En ausencia de evidencia verificable, retirar la afirmación o mantener el contenido fuera de publicación. No actualizar `reviewedAt` de forma automática.
