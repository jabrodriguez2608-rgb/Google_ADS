---
title: "Cómo estimar el coste de un aparato sin confundir W y kWh"
description: "Calcula energía y coste con un ejemplo reproducible y aprende qué datos necesitas para interpretar una estimación mensual."
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

## Empieza por la pregunta que puedes responder

Esta estimación responde cuánto costaría la energía de un aparato con una potencia media y un uso determinados. No predice tu factura. Anota potencia en W, horas de uso al día, días de uso del mes y precio en €/kWh. El precio del ejemplo es un supuesto, no una tarifa vigente.

Los W expresan potencia y los kWh energía. La [EIA explica estas unidades](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php). La fórmula que usamos es `energía (kWh) = W / 1000 × horas/día × días`. Después: `coste (€) = energía × €/kWh`.

## Ejemplo propio: 80 W durante cinco horas

Supongamos 80 W de potencia media, 5 horas diarias, 30 días y 0,20 €/kWh. El cálculo es `80 / 1000 × 5 × 30 = 12 kWh`; el coste de esa energía es `12 × 0,20 = 2,40 €`. Repetir exactamente ese mes doce veces da 144 kWh y 28,80 €. Esa proyección representa 360 días de uso, no un calendario real de 365 días.

Si reduces el uso a tres horas con los demás datos iguales, obtienes 7,2 kWh y 1,44 €. La diferencia calculada es 0,96 € al mes. No es una promesa de ahorro: depende de que esos supuestos describan tu uso.

## La potencia de la placa puede no ser la media

En nuestro modelo, una potencia constante resume todo el intervalo. Si el aparato tiene varios modos, registra cada tramo o usa una media obtenida de una medición representativa. No conviertas automáticamente la potencia máxima de una ficha en consumo continuo. Tampoco sumes de nuevo un consumo medido que ya incluye esos modos.

Introduce cero horas si no hay uso; no utilices números negativos. Conserva decimales durante el cálculo y redondea euros al presentar el resultado, no cada multiplicación.

## Cómo interpretar el resultado

El total solo incluye energía multiplicada por el precio introducido. No añade potencia contratada, alquiler, impuestos ni otros conceptos. La [herramienta de la CNMC](https://www.cnmc.es/prensa/entiende-tu-factura-20231002) ayuda a identificar los conceptos de una factura y el tipo de contrato.

Prueba los datos en la [calculadora de consumo](/herramientas/consumo/). Para comparar cambios de uso y precio, utiliza [escenarios](/herramientas/escenarios/).

## Metodología y autoría

Texto elaborado con asistencia de IA. Ejemplo numérico propio construido con supuestos explícitos; no procede de mediciones de hogares ni de una tarifa comercial. Requiere comprobación técnica y aprobación editorial humana antes de publicarse.
