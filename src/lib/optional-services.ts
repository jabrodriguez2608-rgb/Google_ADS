/** Fail closed until a certified CMP adapter has been implemented and reviewed.
 * Environment flags alone never authorize loading third-party code.
 */
export const optionalServices = {
  adsRequested: import.meta.env.PUBLIC_ENABLE_ADS === "true",
  adsClient: import.meta.env.PUBLIC_ADSENSE_CLIENT_ID ?? "",
  analyticsId: import.meta.env.PUBLIC_GA4_MEASUREMENT_ID ?? "",
  cmpConfigured: import.meta.env.PUBLIC_CMP_CONFIGURED === "true",
};
export interface ConsentAdapter {
  verified: boolean;
  analyticsAllowed: () => boolean;
  adsAllowed: () => boolean;
  reopen: () => void;
}
let adapter: ConsentAdapter | undefined;
export function registerConsentAdapter(candidate: ConsentAdapter) {
  if (candidate.verified) adapter = candidate;
}
export function reopenPreferences(): boolean {
  if (!adapter) return false;
  adapter.reopen();
  return true;
}
export function mayLoadOptionalService(service: "ads" | "analytics"): boolean {
  if (!adapter?.verified || !optionalServices.cmpConfigured) return false;
  return service === "ads"
    ? optionalServices.adsRequested &&
        /^ca-pub-\d{16}$/.test(optionalServices.adsClient) &&
        adapter.adsAllowed()
    : /^G-[A-Z0-9]+$/.test(optionalServices.analyticsId) &&
        adapter.analyticsAllowed();
}
/** No network or personal fields. Future reviewed adapter can consume this return value. */
export function calculatorEvent(tool: string) {
  return mayLoadOptionalService("analytics")
    ? { name: "calculator_completed", tool }
    : null;
}
