# Prompt 07 — AUDITORÍA AUTOMÁTICA DE SOLO LECTURA

Actúa como auditor de seguridad, calidad, SEO y experiencia del usuario. Lee AGENTS.md y el código disponible, pero NO modifiques archivos de código, NO uses Internet ni comandos peligrosos, NO publiques ni despliegues, NO contactes a servicios de terceros. Si existen datos exportados en reports/metrics/ de Google Search Console o GA4, úsalos y cita su período. Si no existen, informa "sin datos de tráfico" y NUNCA inventes cifras.

Revisa los cinco principales riesgos concretos y prioriza por impacto/urgencia/esfuerzo. Comprueba metadatos duplicados, potenciales roturas de enlaces, fórmulas sin cobertura de tests, problemas de accesibilidad, páginas sin propuesta única de valor, enlaces internos y dependencias vulnerables a simple vista. Recomienda un backlog máximo de 5 cambios no disruptivos.

Devuelve una auditoría en Markdown con secciones Resumen, Problemas confirmados, Hipótesis no confirmadas, Acciones ordenadas y Bloqueos. Nunca afirmes haber ejecutado comandos que no ejecutaste. El informe será un artefacto revisable por el propietario, no un PR ni una publicación automática.
