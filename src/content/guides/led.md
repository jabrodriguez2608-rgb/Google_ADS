---
title: "Cómo comparar el coste energético de dos bombillas"
description: "Compara dos potencias con el mismo tiempo de uso y distingue diferencia de energía de amortización de una compra."
status: draft
author: 'Asistencia de IA; revisión humana pendiente'
reviewedAt: null
sources:
  - title: "EIA: Measuring electricity"
    url: https://www.eia.gov/energyexplained/electricity/measuring-electricity.php
    consultedAt: '2026-10-13'
  - title: "Comisión Europea: Light Sources"
    url: https://energy-efficient-products.ec.europa.eu/product-list/light-sources_en
    consultedAt: '2026-10-13'
---

Borrador pendiente de revisión editorial humana. Fuentes consultadas el 13 de octubre de 2026; esta fecha no acredita revisión humana.

## Comprueba primero qué estás comparando

Dos potencias distintas no garantizan el mismo servicio de iluminación. Revisa la información del producto y las características que necesitas. La [Comisión Europea reúne información sobre fuentes luminosas y etiquetado](https://energy-efficient-products.ec.europa.eu/product-list/light-sources_en). La calculadora compara consumos; no certifica equivalencia luminosa, compatibilidad ni calidad.

Introduce la potencia de cada bombilla, un tiempo de uso común y tu precio de energía. Mantener iguales horas y días permite aislar el efecto de cambiar la potencia.

## Ejemplo propio: 60 W y 9 W

Suponemos dos opciones ficticias de 60 W y 9 W, utilizadas 4 horas diarias durante 30 días. El precio hipotético es 0,20 €/kWh. Estos datos no son una recomendación de producto ni una equivalencia garantizada.

| Opción | Cálculo de energía | Energía | Coste |
| --- | --- | --- | --- |
| A, 60 W | 60 / 1000 × 4 × 30 | 7,20 kWh | 1,44 € |
| B, 9 W | 9 / 1000 × 4 × 30 | 1,08 kWh | 0,216 €, mostrado 0,22 € |

La diferencia sin redondear es 6,12 kWh y 1,224 €, mostrada como 1,22 €. Se calcula con `(W de A − W de B) / 1000 × horas × días × precio`. La relación entre potencia, tiempo y energía está descrita por la [EIA](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php).

## El porcentaje tiene una referencia

En este supuesto, la reducción de energía respecto de A es `6,12 / 7,20 × 100 = 85 %`. Es el resultado de esos dos datos de potencia, no un porcentaje universal de las LED. Si la potencia inicial es cero, el porcentaje no tiene denominador válido: compara kWh y euros sin anunciar un porcentaje.

## Diferencia de coste no equivale a amortización

El cálculo no incluye precio de compra, sustituciones, vida útil ni instalación. Tampoco añade términos fijos o impuestos. Para decidir una compra necesitas esos datos y verificar que ambas opciones sirven para tu luminaria. Si la segunda potencia es mayor, la diferencia puede ser negativa: no debe ocultarse ni presentarse como ahorro.

Reproduce la comparación en la [herramienta LED](/herramientas/led/). Para estudiar un cambio de horas de uso, pasa a [escenarios](/herramientas/escenarios/).

## Metodología y autoría

Texto elaborado con asistencia de IA. Ejemplo numérico propio construido con supuestos explícitos; no procede de mediciones de hogares ni de una tarifa comercial. Requiere comprobación técnica y aprobación editorial humana antes de publicarse.
