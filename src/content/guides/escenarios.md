---
title: "Cómo separar el efecto del uso y del precio de la electricidad"
description: "Construye escenarios comparables y descubre qué cambia al modificar una sola variable con una tabla reproducible."
status: draft
author: 'Asistencia de IA; revisión humana pendiente'
reviewedAt: null
sources:
  - title: "EIA: Measuring electricity"
    url: https://www.eia.gov/energyexplained/electricity/measuring-electricity.php
    consultedAt: '2026-10-13'
  - title: "CNMC: Entiende tu factura"
    url: https://www.cnmc.es/prensa/entiende-tu-factura-20231002
    consultedAt: '2026-10-13'
---

Borrador pendiente de revisión editorial humana. Fuentes consultadas el 13 de octubre de 2026; esta fecha no acredita revisión humana.

## Cambia una variable cada vez

Una proyección sirve para explorar supuestos. Define primero una referencia y duplica sus datos antes de modificar horas, potencia o precio. Si cambias todo a la vez, obtendrás un total distinto sin saber qué factor lo explica.

La relación usada es `kWh = W / 1000 × horas/día × días`; el coste resulta de multiplicar kWh por €/kWh. La [EIA documenta las unidades](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php). La herramienta no estima qué escenario sucederá.

## Ejemplo propio: tres escenarios de un mismo aparato ficticio

Usamos una potencia media supuesta de 100 W y 30 días. Todos los precios son hipotéticos.

| Escenario | Horas/día | €/kWh | kWh | Coste de energía |
| --- | --- | --- | --- | --- |
| Referencia | 4 | 0,20 | 12 | 2,40 € |
| Menos uso | 3 | 0,20 | 9 | 1,80 € |
| Precio mayor | 4 | 0,25 | 12 | 3,00 € |

En «menos uso», la diferencia es −3 kWh y −0,60 € respecto de la referencia. En «precio mayor», la energía no cambia y el coste aumenta 0,60 €. Esta separación evita confundir una variación monetaria con una variación de consumo.

## Dos cambios pueden compensarse

Si combinas 3 horas diarias con 0,25 €/kWh, el resultado es 9 kWh y 2,25 €. Frente a la referencia, consumos un 25 % inferiores producen un coste solo un 6,25 % menor: `(2,40 − 2,25) / 2,40 × 100`. El ejemplo demuestra una relación matemática, no anticipa precios futuros.

## Pon nombre y límites al supuesto

Usa etiquetas como «tres horas al día», no «ahorro garantizado». Conserva el periodo de comparación y anota cómo has obtenido la potencia media. En usos estacionales, repetir un mes doce veces debe marcarse como repetición del supuesto, no como previsión meteorológica o factura anual.

El precio introducido debe corresponder al componente que deseas modelar. La [CNMC ofrece ayuda para identificar los conceptos del recibo](https://www.cnmc.es/prensa/entiende-tu-factura-20231002). No sumamos automáticamente impuestos, potencia contratada u otros cargos.

Crea tu tabla en la [calculadora de escenarios](/herramientas/escenarios/). Si los precios cambian entre grupos de consumo, utiliza la [herramienta de periodos](/herramientas/periodos/).

## Metodología y autoría

Texto elaborado con asistencia de IA. Ejemplo numérico propio construido con supuestos explícitos; no procede de mediciones de hogares ni de una tarifa comercial. Requiere comprobación técnica y aprobación editorial humana antes de publicarse.
