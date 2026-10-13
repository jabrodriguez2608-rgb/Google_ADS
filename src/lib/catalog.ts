export const tools = [
  {
    slug: "consumo",
    title: "Coste de un aparato",
    description:
      "Convierte potencia y horas de uso en energía y coste mensual.",
    number: "01",
  },
  {
    slug: "standby",
    title: "Consumo en espera",
    description:
      "Suma varios equipos y descubre cuánto supone mantenerlos en espera.",
    number: "02",
  },
  {
    slug: "led",
    title: "LED frente a otra bombilla",
    description:
      "Compara dos potencias y el tiempo para recuperar el coste del cambio.",
    number: "03",
  },
  {
    slug: "escenarios",
    title: "Tres escenarios de precio",
    description: "Compara el mismo uso con tres precios introducidos por ti.",
    number: "04",
  },
  {
    slug: "periodos",
    title: "Coste por periodos",
    description:
      "Desglosa energía y precio de hasta tres periodos, sin tarifas precargadas.",
    number: "05",
  },
] as const;
export type ToolSlug = (typeof tools)[number]["slug"];
