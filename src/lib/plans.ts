/**
 * Listino abbonamenti House of Muscle — single source of truth per la landing.
 * Allineato 1:1 con `TIER_CATALOG` nel gestionale (`apps/web/src/lib/subscription.ts`).
 * Se cambia il listino, aggiornare qui E lì insieme.
 */

export type PlanId = "MONTHLY" | "YEARLY" | "BIENNIAL";

export type PlanInstallments = {
  count: number;
  amountCents: number;
};

export type Plan = {
  id: PlanId;
  label: string;
  oneShotCents: number;
  installments: PlanInstallments | null;
  /** Durata "umana" da mostrare nelle card. */
  durationLabel: string;
  /** Unità di prezzo: "al mese" / "all'anno" / "per 24 mesi". */
  unitLabel: string;
  /** Card evidenziata con badge "Più scelto". */
  popular: boolean;
};

export const PLANS: readonly Plan[] = [
  {
    id: "MONTHLY",
    label: "Mensile",
    oneShotCents: 7000,
    installments: null,
    durationLabel: "Durata 1 mese",
    unitLabel: "al mese",
    popular: false
  },
  {
    id: "YEARLY",
    label: "Annuale",
    oneShotCents: 45000,
    installments: { count: 12, amountCents: 4700 },
    durationLabel: "Durata 12 mesi",
    unitLabel: "all'anno",
    popular: true
  },
  {
    id: "BIENNIAL",
    label: "Biennale",
    oneShotCents: 70000,
    installments: { count: 24, amountCents: 4000 },
    durationLabel: "Durata 24 mesi",
    unitLabel: "per 24 mesi",
    popular: false
  }
] as const;

export const MONTHLY_REFERENCE_CENTS = 7000;

/** Formatta centesimi in "45,00 €" (locale IT, senza decimali inutili). */
export function formatEuroCents(cents: number): string {
  const euros = cents / 100;
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(euros) ? 0 : 2,
    maximumFractionDigits: 2
  }).format(euros);
}

/**
 * Calcola la % di sconto vs costo mensile equivalente (identico al gestionale).
 * Es: YEARLY 450€ vs 12×70€ = 840€ → −46%.
 */
export function computeSavingsPct(
  tierCents: number,
  tier: PlanId,
  monthlyCents = MONTHLY_REFERENCE_CENTS
): number | null {
  const months = tier === "YEARLY" ? 12 : tier === "BIENNIAL" ? 24 : 0;
  if (months === 0) return null;
  const monthlyEquivalent = months * monthlyCents;
  if (monthlyEquivalent <= 0) return null;
  const savings = monthlyEquivalent - tierCents;
  if (savings <= 0) return null;
  return Math.round((savings / monthlyEquivalent) * 100);
}
