/**
 * URL del gestionale (app di iscrizione, login, dashboard) dove puntano le CTA.
 * Sovrascrivibile da env `VITE_APP_URL` in fase di deploy.
 */
export const APP_URL = import.meta.env.VITE_APP_URL ?? "https://app.houseofmuscle.it";

export const LOGIN_URL = `${APP_URL}/login`;
export const CHECKOUT_URL = `${APP_URL}/checkout`;

/** Helper per la CTA "Iscriviti a tier X" delle pricing card. */
export function checkoutUrlFor(tier: "MONTHLY" | "YEARLY" | "BIENNIAL"): string {
  return `${CHECKOUT_URL}?tier=${tier}`;
}
