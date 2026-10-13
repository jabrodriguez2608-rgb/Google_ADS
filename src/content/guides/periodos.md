---
title: "Cómo calcular energía con varios precios por periodo"
description: "Suma kWh por precio sin confundir periodos con una tarifa confirmada y comprueba un desplazamiento de consumo hipotético."
status: draft
author: 'Asistencia de IA; revisión humana pendiente'
reviewedAt: null
sources:
  - title: "CNMC: Entiende tu factura"
    url: https://www.cnmc.es/prensa/entiende-tu-factura-20231002
    consultedAt: '2026-10-13'
---

Borrador pendiente de revisión editorial humana. Fuentes consultadas el 13 de octubre de 2026; esta fecha no acredita revisión humana.

## Necesitas energía y precio de cada grupo

Para cada periodo introduce kWh y €/kWh correspondientes al mismo intervalo. El nombre del periodo es una etiqueta: la calculadora no determina horarios oficiales, festivos ni tarifas vigentes. Consulta tu contrato y los datos del intervalo que estás modelando. La [CNMC explica que su herramienta permite identificar el tipo de contrato y los conceptos de la factura](https://www.cnmc.es/prensa/entiende-tu-factura-20231002).

La fórmula de este modelo es `coste = suma(kWh del periodo × precio del periodo)`. No basta con promediar precios si los consumos son distintos.

## Ejemplo propio con tres precios hipotéticos

| Grupo | Energía | Precio supuesto | Coste |
| --- | --- | --- | --- |
| A | 40 kWh | 0,25 €/kWh | 10,00 € |
| B | 30 kWh | 0,18 €/kWh | 5,40 € |
| C | 50 kWh | 0,12 €/kWh | 6,00 € |
| Total | 120 kWh | — | 21,40 € |

El precio medio ponderado es `21,40 / 120 = 0,178333… €/kWh`. La media simple de los tres precios es 0,183333… €/kWh y, aplicada a 120 kWh, daría 22,00 €: no representa esa distribución. Si el consumo total es cero, el coste es cero y el precio medio no se calcula.

## Simula mover 10 kWh manteniendo el total

Si pasas 10 kWh de A a C con los mismos precios, A queda en 30 kWh y C en 60 kWh. El nuevo coste es `30 × 0,25 + 30 × 0,18 + 60 × 0,12 = 20,10 €`. La diferencia es 1,30 €, equivalente a `10 × (0,25 − 0,12)`.

Este escenario presupone que se pueden mover exactamente esos kWh sin cambiar el consumo total. No recomienda horarios de uso ni garantiza que un equipo mantenga el mismo consumo al cambiar su funcionamiento.

## Evita mezclar bases de cálculo

No dupliques kWh entre grupos. Comprueba que su suma coincide con el consumo que has decidido analizar. No combines un precio que incluya ciertos cargos con otro que los excluya sin explicar la diferencia. Un precio constante por grupo no reconstruye una secuencia de precios horarios variables: requiere energía y precio de cada intervalo o un precio ponderado apropiado.

El resultado modela solo los conceptos contenidos en los precios aportados. No añade impuestos, alquiler o potencia contratada por su cuenta y no es una factura. Reproduce la tabla en la [calculadora por periodos](/herramientas/periodos/) o compara supuestos generales en [escenarios](/herramientas/escenarios/).

## Metodología y autoría

Texto elaborado con asistencia de IA. Ejemplo numérico propio construido con supuestos explícitos; no procede de mediciones de hogares ni de una tarifa comercial. Requiere comprobación técnica y aprobación editorial humana antes de publicarse.
