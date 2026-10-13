import { describe, it, expect } from "vitest";
import {
  mayLoadOptionalService,
  reopenPreferences,
  calculatorEvent,
  registerConsentAdapter,
} from "./optional-services";
describe("optional services fail closed", () => {
  it("blocks ads, analytics and events without configured CMP", () => {
    expect(mayLoadOptionalService("ads")).toBe(false);
    expect(mayLoadOptionalService("analytics")).toBe(false);
    expect(calculatorEvent("consumo")).toBeNull();
    expect(reopenPreferences()).toBe(false);
  });
  it("rejects an unverified adapter", () => {
    registerConsentAdapter({
      verified: false,
      adsAllowed: () => true,
      analyticsAllowed: () => true,
      reopen: () => {
        throw new Error("must not run");
      },
    });
    expect(reopenPreferences()).toBe(false);
  });
});
