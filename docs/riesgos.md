# Matriz de riesgos

Borrador, 2026-10-13. Probabilidad e impacto son juicios cualitativos del proyecto, no estadísticas.

| Riesgo | Probabilidad / impacto | Mitigación y señal | Responsable |
|---|---|---|---|
| Demanda o ingreso insuficientes | Desconocida / alto | Exportaciones y datos reales; no escalar páginas por expectativa de RPM | Investigación/propietario |
| Producto indistinguible de competidores | Alta / alto | Comparar tareas reales y escenarios; pivotar si no hay mejora | Producto |
| Confundir estimación con factura | Media / alto | Supuestos visibles, precio manual, tests y prueba de comprensión | Ingeniería/editorial |
| Fórmulas incorrectas o límites ambiguos | Media / alto | Referencias independientes, casos frontera, unidades y anualización explícita | Ingeniería |
| Borradores filtrados en build o sitemap | Media / alto | Filtro approved por defecto y pruebas negativas del artefacto | SEO/QA |
| Publicidad o analítica sin controles | Media / alto | Denegar carga por defecto; CMP real y revisión humana | Monetización/QA |
| Identidad o textos legales inventados | Media / alto | Marcadores internos y revisión del titular; nunca publicar TODOs | Propietario/editorial |
| Despliegue accidental al conectar main | Media / alto | Posponer conexión Pages hasta autorización; evitar doble deploy | Operaciones |
| Dependencias vulnerables o secretos en Git | Media / alto | Mínimas dependencias, revisión y secrets externos; no logs sensibles | Ingeniería/operaciones |
| Barreras móviles o lectores de pantalla | Media / medio-alto | 360 px, teclado, foco, errores y lectura de resultados | Producto/QA |
| GitHub sin autenticación/remoto | Confirmada / medio | Preparar commits y cuerpo del PR local; configurar cuenta para publicar | Propietario |
| Series o documentos desactualizados | Media / alto | Fecha de consulta distinta de fecha del dato; revisión trimestral | Editorial |
