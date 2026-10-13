import { useEffect, useState, type SyntheticEvent } from "react";
import {
  appliance,
  standby,
  led,
  scenarios,
  periods,
  parseDecimal,
  LIMITS,
} from "../lib/calculators";
import type { ToolSlug } from "../lib/catalog";
type Values = Record<string, string>;
type Row = { label: string; kwh: number; cost: number };
const format = (n: number) =>
  new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(n);
const defaults: Values = {
  watts: "1000",
  hours: "2",
  days: "30",
  price: "0,20",
  oldWatts: "60",
  newWatts: "9",
  purchase: "5",
  w1: "2",
  h1: "20",
  w2: "3",
  h2: "20",
  w3: "0",
  h3: "0",
  p1: "0,15",
  p2: "0,20",
  p3: "0,30",
  k1: "40",
  k2: "30",
  k3: "20",
};
const limits: Record<string, number> = {
  watts: LIMITS.watts,
  hours: 24,
  days: 31,
  price: 100,
  oldWatts: LIMITS.watts,
  newWatts: LIMITS.watts,
  purchase: LIMITS.purchaseCost,
  w1: LIMITS.watts,
  w2: LIMITS.watts,
  w3: LIMITS.watts,
  h1: 24,
  h2: 24,
  h3: 24,
  p1: 100,
  p2: 100,
  p3: 100,
  k1: LIMITS.kwh,
  k2: LIMITS.kwh,
  k3: LIMITS.kwh,
};
export default function Calculator({ kind }: { kind: ToolSlug }) {
  const [values, setValues] = useState<Values>({
    ...defaults,
    price: "",
    p1: "",
    p2: "",
    p3: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rows, setRows] = useState<Row[]>([]);
  const [note, setNote] = useState("");
  const [share, setShare] = useState("");
  const keys =
    kind === "consumo"
      ? ["watts", "hours", "days", "price"]
      : kind === "standby"
        ? ["w1", "h1", "w2", "h2", "w3", "h3", "days", "price"]
        : kind === "led"
          ? ["oldWatts", "newWatts", "hours", "days", "price", "purchase"]
          : kind === "escenarios"
            ? ["watts", "hours", "days", "p1", "p2", "p3"]
            : ["k1", "p1", "k2", "p2", "k3", "p3"];
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setValues((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(defaults)) {
        const value = params.get(key);
        if (value !== null && value.length < 30) {
          try {
            parseDecimal(value, key, limits[key]);
            next[key] = value;
          } catch {
            /* Parámetro inválido descartado. */
          }
        }
      }
      return next;
    });
  }, []);
  function field(key: string, label: string) {
    return (
      <label key={key} htmlFor={key}>
        {label}
        <input
          id={key}
          name={key}
          inputMode="decimal"
          value={values[key]}
          aria-invalid={!!errors[key]}
          aria-describedby={errors[key] ? `${key}-error` : "inputs-help"}
          onChange={(e) => {
            setValues({ ...values, [key]: e.target.value });
            setRows([]);
            setShare("");
            setNote("");
          }}
        />
        {errors[key] && (
          <span id={`${key}-error`} className="error">
            {errors[key]}
          </span>
        )}
      </label>
    );
  }
  function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: Record<string, string> = {};
    for (const key of keys) {
      try {
        parseDecimal(values[key], "Valor", limits[key]);
      } catch (err) {
        found[key] = (err as Error).message;
      }
    }
    setErrors(found);
    setShare("");
    if (Object.keys(found).length) {
      setRows([]);
      requestAnimationFrame(() =>
        document.getElementById(Object.keys(found)[0])?.focus(),
      );
      return;
    }
    const common = {
      watts: values.watts,
      hoursPerDay: values.hours,
      daysPerMonth: values.days,
      price: values.price,
    };
    let next: Row[] = [];
    let explanation =
      "Año estimado = 12 repeticiones de este mes. No es un calendario de 365 días.";
    if (kind === "consumo") {
      const r = appliance(common);
      next = [
        { label: "Mes indicado", kwh: r.monthlyKwh, cost: r.monthlyCost },
        { label: "12 meses iguales", kwh: r.annualKwh, cost: r.annualCost },
      ];
    }
    if (kind === "standby") {
      const r = standby({
        devices: [1, 2, 3].map((n) => ({
          watts: values[`w${n}`],
          hoursPerDay: values[`h${n}`],
        })),
        daysPerMonth: values.days,
        price: values.price,
      });
      next = r.items.map((x, i) => ({
        label: `Equipo ${i + 1} / mes`,
        kwh: x.monthlyKwh,
        cost: x.monthlyCost,
      }));
      next.push({
        label: "Total mensual",
        kwh: r.monthlyKwh,
        cost: r.monthlyCost,
      });
      explanation = `Total de 12 meses iguales: ${format(r.annualCost)} €. Solo horas en espera, sin sumar funcionamiento activo.`;
    }
    if (kind === "led") {
      const r = led({
        ...common,
        oldWatts: values.oldWatts,
        newWatts: values.newWatts,
        purchaseCost: values.purchase,
      });
      next = [
        {
          label: "Otra bombilla / mes",
          kwh: r.before.monthlyKwh,
          cost: r.before.monthlyCost,
        },
        {
          label: "LED / mes",
          kwh: r.after.monthlyKwh,
          cost: r.after.monthlyCost,
        },
        {
          label: "Diferencia / mes",
          kwh: r.monthlySavingsKwh,
          cost: r.monthlySavings,
        },
      ];
      explanation = `Diferencia en 12 meses iguales: ${format(r.annualSavings)} €. ${r.paybackMonths === null ? "Sin retorno calculable: no hay ahorro positivo." : `Retorno simple: ${format(r.paybackMonths)} meses.`} No compara luminosidad, vida útil ni mantenimiento.`;
    }
    if (kind === "escenarios") {
      next = scenarios({
        ...common,
        prices: [values.p1, values.p2, values.p3],
      }).map((r, i) => ({
        label: `Escenario ${i + 1} / mes`,
        kwh: r.monthlyKwh,
        cost: r.monthlyCost,
      }));
      explanation =
        "Se mantiene el mismo consumo y solo cambia el precio. Estos escenarios no son previsiones ni probabilidades.";
    }
    if (kind === "periodos") {
      const r = periods({
        items: [1, 2, 3].map((n) => ({
          kwh: values[`k${n}`],
          price: values[`p${n}`],
        })),
      });
      next = r.items.map((r, i) => ({
        label: `Periodo ${i + 1}`,
        kwh: r.kwh,
        cost: r.cost,
      }));
      next.push({ label: "Total", kwh: r.totalKwh, cost: r.totalCost });
      explanation =
        "Todos los periodos deben corresponder al mismo intervalo de facturación y no solaparse. No se presuponen horarios oficiales.";
    }
    setRows(next);
    setNote(explanation);
  }
  return (
    <div className="workspace">
      <form className="card" onSubmit={submit} noValidate>
        <h2>Introduce tus supuestos</h2>
        <p id="inputs-help">
          Admite coma o punto decimal, sin separadores de miles. Todos los
          valores son obligatorios; usa cero si no aplica.
        </p>
        <div className="fields">
          {(kind === "consumo" || kind === "escenarios") &&
            field("watts", "Potencia media (W)")}
          {(kind === "consumo" || kind === "escenarios" || kind === "led") &&
            field("hours", "Horas de uso al día (0–24)")}
          {kind !== "periodos" && field("days", "Días del mes (0–31)")}
          {kind !== "periodos" &&
            kind !== "escenarios" &&
            field("price", "Tu precio de energía (€/kWh)")}
          {kind === "led" && (
            <>
              {field("oldWatts", "Potencia de otra bombilla (W)")}
              {field("newWatts", "Potencia LED (W)")}
              {field("purchase", "Coste de sustitución (€)")}
            </>
          )}
        </div>
        {kind === "standby" &&
          [1, 2, 3].map((n) => (
            <fieldset key={n}>
              <legend>Equipo {n}</legend>
              <div className="fields">
                {field(`w${n}`, "Potencia en espera (W)")}
                {field(`h${n}`, "Horas en espera al día (0–24)")}
              </div>
            </fieldset>
          ))}
        {(kind === "escenarios" || kind === "periodos") &&
          [1, 2, 3].map((n) => (
            <fieldset key={n}>
              <legend>
                {kind === "periodos" ? "Periodo" : "Escenario"} {n}
              </legend>
              {kind === "periodos" &&
                field(`k${n}`, "Energía del periodo (kWh)")}
              {field(`p${n}`, "Precio supuesto (€/kWh)")}
            </fieldset>
          ))}
        {Object.keys(errors).length > 0 && (
          <p role="alert" className="error">
            Revisa los campos indicados.
          </p>
        )}
        <div className="actions">
          <button type="submit">Calcular</button>
          <button
            type="button"
            className="secondary"
            onClick={() => {
              setValues({ ...defaults });
              setRows([]);
              setErrors({});
              setNote("");
              setShare("");
            }}
          >
            Cargar ejemplo ficticio
          </button>
        </div>
        <small>
          Los precios del ejemplo son inventados para explicar la operación; no
          son tarifas actuales.
        </small>
      </form>
      <section className="card result" aria-live="polite" aria-atomic="true">
        <h2>Tu resultado</h2>
        {rows.length === 0 ? (
          <p className="empty">
            Completa los datos y pulsa Calcular para ver energía y coste por
            separado.
          </p>
        ) : (
          <>
            <div className="table-wrap">
              <table>
                <caption>Estimación con los datos introducidos</caption>
                <thead>
                  <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">kWh</th>
                    <th scope="col">€</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">{r.label}</th>
                      <td>{format(r.kwh)}</td>
                      <td>{format(r.cost)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{note}</p>
            <button
              type="button"
              className="secondary"
              onClick={() => {
                const url = new URL(window.location.href);
                url.search = "";
                url.hash = "";
                for (const key of keys) url.searchParams.set(key, values[key]);
                setShare(url.href);
              }}
            >
              Preparar enlace con estos datos
            </button>
            {share && (
              <p className="share">
                <a href={share}>Enlace a este escenario</a>
                <small>
                  Contiene únicamente los números introducidos. Puedes copiar el
                  enlace.
                </small>
              </p>
            )}
          </>
        )}
        <p className="notice">
          Solo coste de energía. No añadimos potencia contratada, cuotas,
          impuestos ni peajes. Comprueba qué conceptos incluye el precio que
          introduces.
        </p>
      </section>
    </div>
  );
}
