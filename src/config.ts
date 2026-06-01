/**
 * URL del gestionale (app di iscrizione, login, dashboard) dove puntano le CTA.
 * Sovrascrivibile da env `VITE_APP_URL` in fase di deploy.
 */
export const APP_URL = import.meta.env.VITE_APP_URL ?? "https://app.houseofmuscle.it";

/** Login: landing del gestionale (home post-login). */
export const LOGIN_URL = APP_URL;
/** Iscrizione: pagina di registrazione del gestionale. */
export const CHECKOUT_URL = `${APP_URL}/register`;

/** Helper per la CTA "Iscriviti a tier X" delle pricing card. */
export function checkoutUrlFor(tier: string, installments = false): string {
  const base = `${CHECKOUT_URL}?tier=${tier}`;
  return installments ? `${base}&pay=installments` : base;
}
