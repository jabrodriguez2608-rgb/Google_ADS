# Registro de decisiones

Todas fechadas 2026-10-13; decisiones técnicas reversibles, sin aprobación editorial ni autorización de producción.

| ID | Decisión | Motivo / evidencia | Consecuencia / revisión |
|---|---|---|---|
| D-001 | Mantener energía provisionalmente | Empate con hogar y evidencia incompleta; investigacion-mercado.md | Reabrir tras cuatro semanas; no afirmar validación comercial |
| D-002 | Precio manual, sin API ni tarifas actuales | Reduce mantenimiento y dependencia; prompt 03 | Resultados orientativos con supuestos; sin factura completa |
| D-003 | Diferenciación por escenarios, no por cálculo local | Luzómetro ya declara cálculo local y fórmulas | Validar mejora con tareas reales; no prometer novedad |
| D-004 | Astro SSG + TS estricto + React islands + Tailwind | Arquitectura prescrita por prompt maestro | Implementar en fase 02, aún no instalado |
| D-005 | Inicializar main únicamente con kit original; trabajar en feature/01-validacion-nicho | No existía Git | No se ha mergeado desarrollo a main |
| D-006 | Entregar PR preparado localmente | gh auth status sin sesión y sin remoto | No se puede afirmar PR abierto; falta acceso GitHub |
| D-007 | Separar investigación de escritorio de validación real | No hay volúmenes ni RPM verificados | Backlog conserva pruebas de cuatro semanas pendientes |
| D-008 | No adelantar CI ficticia ni deploy en fase documental | No existe package.json; fases 02–06 son secuenciales | Configurar CI real con scripts y lockfile en M6 |
| D-009 | Estado editorial draft por defecto y publicación solo approved | AGENTS.md y prompt 04 | Los documentos actuales son internos; no hay web publicada |
| D-010 | Investigación secundaria delegada en lectura, escritura centralizada | Prompt 00 pide delimitar frentes si hay subagentes | Agente investiga hogar/archivos/estudio; coordinador consolida |

## Continuación técnica

- D-011: usar el repositorio jabrodriguez2608-rgb/Google_ADS, abierto por el propietario; el conector GitHub pertenece a otra cuenta, por lo que se utiliza gh autenticado en la correcta.
- D-012: Astro 7 y Node 24 con versiones resueltas en lockfile; runtime SSG sin adaptador de servidor. React se carga solo en calculadoras.
- D-013: cero precios precargados en uso inicial; botón separado de ejemplo ficticio. Año = doce meses del patrón introducido. Escenarios MVP varían precio manteniendo uso constante; ampliar solo tras validar utilidad.
- D-014: guías draft excluidas, noindex global y sitemap vacío hasta lanzamiento revisado. No configurar URL canónica ficticia.
- D-015: monetización fail-closed, sin cargador de etiquetas hasta integrar CMP real y completar aprobación. No desarrollar banner casero.
- D-016: las dependencias de desarrollo se justifican por lint, tipos, Vitest, Playwright/axe, formato y validación editorial. Se descartó gray-matter tras alertas transitivas; yaml evita esa cadena.
- D-017: autorización de acceso a GitHub y Cloudflare recibida; conexión persistente Cloudflare→repositorio pendiente de confirmación específica solicitada tras rechazo automático. No implica autorización de producción, DNS, billing o anuncios.
