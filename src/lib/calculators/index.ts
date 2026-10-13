/** Motores locales. W / 1000 = kW; kW × horas = kWh; kWh × €/kWh = €.
 * No se redondea internamente: presentación a 2 decimales para euros.
 * Año = 12 repeticiones del mes indicado, no un calendario de 365 días.
 * No incluyen costes fijos, impuestos ni peajes. Límites de producto, no legales.
 */
export type NumberInput = number | string;
export const LIMITS = {
  watts: 100_000,
  hoursPerDay: 24,
  daysPerMonth: 31,
  price: 100,
  purchaseCost: 1_000_000,
  kwh: 1_000_000,
  items: 100,
} as const;

/** Sin separador de miles ni notación exponencial en texto. Vacío nunca equivale a cero. */
export function parseDecimal(
  value: NumberInput,
  label = "Valor",
  max = Number.MAX_SAFE_INTEGER,
): number {
  if (typeof value === "string" && !/^\d+(?:[.,]\d+)?$/.test(value.trim())) {
    throw new RangeError(
      `${label}: introduce un número positivo o cero, sin separadores de miles.`,
    );
  }
  const parsed =
    typeof value === "number" ? value : Number(value.trim().replace(",", "."));
  if (!Number.isFinite(parsed) || parsed < 0 || parsed > max)
    throw new RangeError(`${label}: debe estar entre 0 y ${max}.`);
  return parsed;
}

export interface ApplianceInput {
  watts: NumberInput;
  hoursPerDay: NumberInput;
  daysPerMonth: NumberInput;
  price: NumberInput;
}
/** Energía en kWh y coste en euros; annual* repite el mes doce veces. */
export interface EnergyResult {
  monthlyKwh: number;
  annualKwh: number;
  monthlyCost: number;
  annualCost: number;
}
function energyResult(monthlyKwh: number, monthlyCost: number): EnergyResult {
  return {
    monthlyKwh,
    annualKwh: monthlyKwh * 12,
    monthlyCost,
    annualCost: monthlyCost * 12,
  };
}
function validateCount(items: readonly unknown[]): void {
  if (items.length < 1 || items.length > LIMITS.items)
    throw new RangeError(`Introduce entre 1 y ${LIMITS.items} elementos.`);
}
export function appliance(input: ApplianceInput): EnergyResult {
  const watts = parseDecimal(input.watts, "Potencia (W)", LIMITS.watts);
  const hours = parseDecimal(
    input.hoursPerDay,
    "Horas/día",
    LIMITS.hoursPerDay,
  );
  const days = parseDecimal(
    input.daysPerMonth,
    "Días/mes",
    LIMITS.daysPerMonth,
  );
  const price = parseDecimal(input.price, "Precio (€/kWh)", LIMITS.price);
  const monthlyKwh = (watts / 1000) * hours * days;
  return energyResult(monthlyKwh, monthlyKwh * price);
}
export interface StandbyInput {
  devices: { watts: NumberInput; hoursPerDay: NumberInput }[];
  daysPerMonth: NumberInput;
  price: NumberInput;
}
export interface StandbyResult extends EnergyResult {
  items: EnergyResult[];
}
/** Las horas corresponden solo a espera; no se añaden horas activas. */
export function standby(input: StandbyInput): StandbyResult {
  validateCount(input.devices);
  const items = input.devices.map((device) =>
    appliance({
      ...device,
      daysPerMonth: input.daysPerMonth,
      price: input.price,
    }),
  );
  return {
    items,
    ...energyResult(
      items.reduce((sum, item) => sum + item.monthlyKwh, 0),
      items.reduce((sum, item) => sum + item.monthlyCost, 0),
    ),
  };
}
export interface LedInput {
  oldWatts: NumberInput;
  newWatts: NumberInput;
  hoursPerDay: NumberInput;
  daysPerMonth: NumberInput;
  price: NumberInput;
  purchaseCost: NumberInput;
}
export interface LedResult {
  before: EnergyResult;
  after: EnergyResult;
  monthlySavingsKwh: number;
  monthlySavings: number;
  annualSavings: number;
  paybackMonths: number | null;
}
/** Retorno simple: inversión / ahorro mensual. null si no hay ahorro positivo.
 * No supone igual luminosidad, vida útil ni costes de mantenimiento.
 */
export function led(input: LedInput): LedResult {
  const before = appliance({ ...input, watts: input.oldWatts });
  const after = appliance({ ...input, watts: input.newWatts });
  const cost = parseDecimal(
    input.purchaseCost,
    "Coste de sustitución (€)",
    LIMITS.purchaseCost,
  );
  const monthlySavings = before.monthlyCost - after.monthlyCost;
  return {
    before,
    after,
    monthlySavingsKwh: before.monthlyKwh - after.monthlyKwh,
    monthlySavings,
    annualSavings: monthlySavings * 12,
    paybackMonths: monthlySavings > 0 ? cost / monthlySavings : null,
  };
}
export interface ScenariosInput {
  watts: NumberInput;
  hoursPerDay: NumberInput;
  daysPerMonth: NumberInput;
  prices: NumberInput[];
}
/** Mismo uso para cada precio, conserva orden. Son supuestos, no probabilidades. */
export function scenarios(input: ScenariosInput): EnergyResult[] {
  validateCount(input.prices);
  return input.prices.map((price) => appliance({ ...input, price }));
}
export interface PeriodsInput {
  items: { kwh: NumberInput; price: NumberInput }[];
}
export interface PeriodsResult {
  items: { kwh: number; price: number; cost: number }[];
  totalKwh: number;
  totalCost: number;
}
/** Suma de energía × precio por periodo manual; sin franjas legales implícitas. */
export function periods(input: PeriodsInput): PeriodsResult {
  validateCount(input.items);
  const items = input.items.map((item) => {
    const kwh = parseDecimal(item.kwh, "Energía (kWh)", LIMITS.kwh);
    const price = parseDecimal(item.price, "Precio (€/kWh)", LIMITS.price);
    return { kwh, price, cost: kwh * price };
  });
  return {
    items,
    totalKwh: items.reduce((sum, item) => sum + item.kwh, 0),
    totalCost: items.reduce((sum, item) => sum + item.cost, 0),
  };
}
