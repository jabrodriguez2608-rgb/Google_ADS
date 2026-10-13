import { describe, expect, it } from "vitest";
import {
  appliance,
  led,
  LIMITS,
  parseDecimal,
  periods,
  scenarios,
  standby,
} from "./index";

const example = { watts: 1000, hoursPerDay: 2, daysPerMonth: 30, price: 0.2 };
describe("números y límites", () => {
  it("admite coma decimal española, punto, espacios y cero", () => {
    expect(parseDecimal(" 0,25 ")).toBe(0.25);
    expect(parseDecimal("0.25")).toBe(0.25);
    expect(parseDecimal("0")).toBe(0);
  });
  it.each([
    "",
    " ",
    "1.000,50",
    "1,000.50",
    "1e3",
    "Infinity",
    "NaN",
    "12abc",
    "-1",
    NaN,
    Infinity,
    -Infinity,
    -1,
  ])("rechaza %s", (value) => {
    expect(() => parseDecimal(value)).toThrow(RangeError);
  });
  it.each(["watts", "hoursPerDay", "daysPerMonth", "price"] as const)(
    "acepta límite y rechaza exceso de %s",
    (key) => {
      expect(() => appliance({ ...example, [key]: LIMITS[key] })).not.toThrow();
      expect(() =>
        appliance({ ...example, [key]: LIMITS[key] + 0.01 }),
      ).toThrow();
      expect(() => appliance({ ...example, [key]: -0.01 })).toThrow();
    },
  );
});
describe("aparato", () => {
  it("referencia: 1 kW × 2 h × 30 días = 60 kWh, 12 €", () => {
    expect(appliance(example)).toEqual({
      monthlyKwh: 60,
      annualKwh: 720,
      monthlyCost: 12,
      annualCost: 144,
    });
  });
  it("conserva precisión interna y calcula con coma", () => {
    expect(
      appliance({
        watts: "10,5",
        hoursPerDay: "1,5",
        daysPerMonth: 30,
        price: "0,2",
      }).monthlyCost,
    ).toBeCloseTo(0.0945, 10);
  });
  it.each(["watts", "hoursPerDay", "daysPerMonth"] as const)(
    "sin consumo con %s cero",
    (key) => {
      expect(appliance({ ...example, [key]: 0 }).monthlyKwh).toBe(0);
    },
  );
  it("precio cero conserva energía", () => {
    expect(appliance({ ...example, price: 0 }).monthlyKwh).toBe(60);
    expect(appliance({ ...example, price: 0 }).monthlyCost).toBe(0);
  });
});
describe("standby", () => {
  it("suma equipos con tiempos diferentes: 3,6 + 1,5 kWh", () => {
    const result = standby({
      devices: [
        { watts: 5, hoursPerDay: 24 },
        { watts: 10, hoursPerDay: 5 },
      ],
      daysPerMonth: 30,
      price: 0.2,
    });
    expect(result.monthlyKwh).toBeCloseTo(5.1);
    expect(result.monthlyCost).toBeCloseTo(1.02);
    expect(result.items).toHaveLength(2);
  });
  it("valida cada equipo", () => {
    expect(() =>
      standby({
        devices: [{ watts: -1, hoursPerDay: 24 }],
        daysPerMonth: 30,
        price: 0.2,
      }),
    ).toThrow();
  });
});
describe("LED", () => {
  const input = {
    oldWatts: 60,
    newWatts: 10,
    hoursPerDay: 5,
    daysPerMonth: 30,
    price: 0.2,
    purchaseCost: 6,
  };
  it("ahorra 7,5 kWh/mes y 1,50 €/mes; retorno 4 meses", () => {
    const result = led(input);
    expect(result.monthlySavingsKwh).toBeCloseTo(7.5);
    expect(result.monthlySavings).toBeCloseTo(1.5);
    expect(result.annualSavings).toBeCloseTo(18);
    expect(result.paybackMonths).toBeCloseTo(4);
  });
  it("no inventa retorno sin ahorro o con consumo mayor", () => {
    expect(led({ ...input, newWatts: 60 }).paybackMonths).toBeNull();
    expect(led({ ...input, newWatts: 100 }).monthlySavings).toBeLessThan(0);
    expect(led({ ...input, newWatts: 100 }).paybackMonths).toBeNull();
    expect(led({ ...input, price: 0 }).paybackMonths).toBeNull();
    expect(led({ ...input, purchaseCost: 0 }).paybackMonths).toBe(0);
  });
  it("valida inversión", () => {
    expect(() => led({ ...input, purchaseCost: -1 })).toThrow();
    expect(() => led({ ...input, purchaseCost: Infinity })).toThrow();
    expect(() =>
      led({ ...input, purchaseCost: LIMITS.purchaseCost + 1 }),
    ).toThrow();
  });
});
describe("escenarios y periodos", () => {
  it("compara precios manteniendo 60 kWh", () => {
    const result = scenarios({ ...example, prices: [0.1, 0.2, 0.3] });
    expect(result.map((item) => item.monthlyCost)).toEqual([6, 12, 18]);
    expect(result.every((item) => item.monthlyKwh === 60)).toBe(true);
  });
  it("suma 100 × 0,1 + 50 × 0,3 = 25 €", () => {
    const result = periods({
      items: [
        { kwh: 100, price: "0,1" },
        { kwh: 50, price: 0.3 },
      ],
    });
    expect(result.totalCost).toBe(25);
    expect(result.totalKwh).toBe(150);
    expect(result.items.map((item) => item.cost)).toEqual([10, 15]);
  });
  it("valida todos los precios y energías", () => {
    expect(() => scenarios({ ...example, prices: [0.2, NaN] })).toThrow();
    expect(() => periods({ items: [{ kwh: -1, price: 0.2 }] })).toThrow();
    expect(() =>
      periods({ items: [{ kwh: LIMITS.kwh + 1, price: 0.2 }] }),
    ).toThrow();
    expect(periods({ items: [{ kwh: 0, price: 0 }] }).totalCost).toBe(0);
  });
  it("limita colecciones para evitar trabajo sin cota", () => {
    expect(() => scenarios({ ...example, prices: [] })).toThrow();
    expect(() =>
      scenarios({ ...example, prices: Array<number>(101).fill(0.2) }),
    ).toThrow();
    expect(() =>
      standby({ devices: [], daysPerMonth: 30, price: 0.2 }),
    ).toThrow();
    expect(() => periods({ items: [] })).toThrow();
  });
});
