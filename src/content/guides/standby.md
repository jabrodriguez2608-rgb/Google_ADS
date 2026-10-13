---
title: "Cómo medir y sumar el consumo en espera de varios equipos"
description: "Organiza una medición de standby sin duplicar horas y comprueba el coste conjunto con un ejemplo de dos equipos."
status: draft
author: 'Asistencia de IA; revisión humana pendiente'
reviewedAt: null
sources:
  - title: "EIA: Measuring electricity"
    url: https://www.eia.gov/energyexplained/electricity/measuring-electricity.php
    consultedAt: '2026-10-13'
  - title: "IDAE: Serie SPAHOUSEC"
    url: https://www.idae.es/informacion-y-publicaciones/estudios-informes-y-estadisticas/estudios-del-consumo-de-los-hogares-espanoles-serie-spahousec
    consultedAt: '2026-10-13'
---

Borrador pendiente de revisión editorial humana. Fuentes consultadas el 13 de octubre de 2026; esta fecha no acredita revisión humana.

## Haz un inventario antes de sumar

Anota para cada equipo su potencia en espera, las horas diarias en ese estado y los días del periodo. Usa un valor medido o documentado para ese modo concreto: los vatios durante el funcionamiento normal no son los vatios en espera. El [IDAE estudia equipamientos y hábitos de consumo doméstico](https://www.idae.es/informacion-y-publicaciones/estudios-informes-y-estadisticas/estudios-del-consumo-de-los-hogares-espanoles-serie-spahousec); aquí no trasladamos porcentajes de hogares a tu caso.

Define estados que no se solapen. Si has anotado 6 horas de funcionamiento, no puedes asignar otras 24 horas de espera al mismo equipo en ese día. Si una medición de energía abarca el día completo, no le sumes nuevamente el standby del mismo día.

## Ejemplo propio con dos equipos ficticios

Para un mes de 30 días, suponemos un equipo A de 2 W en espera durante 20 horas/día y un equipo B de 0,5 W durante 24 horas/día. No representan modelos comerciales ni valores habituales.

| Equipo | Operación | Energía del periodo |
| --- | --- | --- |
| A | 2 / 1000 × 20 × 30 | 1,20 kWh |
| B | 0,5 / 1000 × 24 × 30 | 0,36 kWh |
| Total | 1,20 + 0,36 | 1,56 kWh |

Con el precio hipotético de 0,20 €/kWh, el coste conjunto es 0,312 €, mostrado como 0,31 €. La fórmula suma la energía de cada equipo y multiplica por el precio común. La conversión W a kWh se basa en las [unidades descritas por la EIA](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php).

## Qué cambio estás comparando

Eliminar las horas de espera de A en este supuesto reduciría 1,20 kWh y 0,24 € del coste de energía del periodo. No implica que debas desconectarlo: comprueba el manual, funciones necesarias y condiciones de uso. La herramienta no evalúa la seguridad de apagar equipos ni el coste de accesorios.

Si el medidor muestra cero, comprueba su resolución antes de concluir que no existe consumo. Registra duración y modo de la observación. Mantén los resultados como estimación si no conoces la potencia con suficiente precisión.

Introduce el inventario en la [calculadora de standby](/herramientas/standby/). Si necesitas valorar el funcionamiento activo, usa la [calculadora de consumo](/herramientas/consumo/) en una estimación separada.

## Metodología y autoría

Texto elaborado con asistencia de IA. Ejemplo numérico propio construido con supuestos explícitos; no procede de mediciones de hogares ni de una tarifa comercial. Requiere comprobación técnica y aprobación editorial humana antes de publicarse.
