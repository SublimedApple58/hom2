/**
 * Listino abbonamenti House of Muscle — single source of truth per la landing.
 * Allineato 1:1 con `TIER_CATALOG` nel gestionale (`apps/web/src/lib/subscription.ts`).
 */

export type PlanId = "DAILY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "BIENNIAL";

export type PlanInstallments = {
  count: number;
  amountCents: number;
};

export type Plan = {
  id: PlanId;
  label: string;
  oneShotCents: number;
  installments: PlanInstallments | null;
  durationLabel: string;
  unitLabel: string;
  popular: boolean;
};

export const PLANS: readonly Plan[] = [
  {
    id: "DAILY",
    label: "Giornaliero",
    oneShotCents: 1299,
    installments: null,
    durationLabel: "Durata 1 giorno",
    unitLabel: "al giorno",
    popular: false
  },
  {
    id: "MONTHLY",
    label: "Mensile",
    oneShotCents: 6999,
    installments: null,
    durationLabel: "Durata 1 mese",
    unitLabel: "al mese",
    popular: false
  },
  {
    id: "QUARTERLY",
    label: "Trimestrale",
    oneShotCents: 16999,
    installments: null,
    durationLabel: "Durata 3 mesi",
    unitLabel: "per 3 mesi",
    popular: false
  },
  {
    id: "YEARLY",
    label: "Annuale",
    oneShotCents: 44999,
    installments: { count: 12, amountCents: 4799 },
    durationLabel: "Durata 12 mesi",
    unitLabel: "all'anno",
    popular: true
  },
  {
    id: "BIENNIAL",
    label: "Biennale",
    oneShotCents: 74999,
    installments: { count: 2, amountCents: 37498 },
    durationLabel: "Durata 24 mesi",
    unitLabel: "per 24 mesi",
    popular: false
  }
] as const;

export const MONTHLY_REFERENCE_CENTS = 6999;

export function formatEuroCents(cents: number): string {
  const euros = cents / 100;
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(euros) ? 0 : 2,
    maximumFractionDigits: 2
  }).format(euros);
}

export function computeSavingsPct(
  tierCents: number,
  tier: PlanId,
  monthlyCents = MONTHLY_REFERENCE_CENTS
): number | null {
  const months =
    tier === "QUARTERLY" ? 3 :
    tier === "YEARLY" ? 12 :
    tier === "BIENNIAL" ? 24 : 0;
  if (months === 0) return null;
  const monthlyEquivalent = months * monthlyCents;
  if (monthlyEquivalent <= 0) return null;
  const savings = monthlyEquivalent - tierCents;
  if (savings <= 0) return null;
  return Math.round((savings / monthlyEquivalent) * 100);
}
