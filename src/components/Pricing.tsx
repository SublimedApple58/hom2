import { ArrowRight, Check, Crown } from "lucide-react";
import { checkoutUrlFor } from "../config";
import { PLANS, computeSavingsPct, formatEuroCents, MONTHLY_REFERENCE_CENTS } from "../lib/plans";

const GRID_IDS = ["MONTHLY", "YEARLY", "BIENNIAL"] as const;
const SECONDARY_IDS = ["DAILY", "QUARTERLY"] as const;

export function Pricing() {
  const yearly = PLANS.find((p) => p.id === "YEARLY")!;
  const gridPlans = PLANS.filter((p) => (GRID_IDS as readonly string[]).includes(p.id));
  const secondaryPlans = PLANS.filter((p) => (SECONDARY_IDS as readonly string[]).includes(p.id));

  // Featured: annuale a rate. Mensile equivalente 69,99 → 47,99 = risparmio %
  const monthlyInstallment = yearly.installments!.amountCents;
  const installmentSavingsPct = Math.round(
    ((MONTHLY_REFERENCE_CENTS - monthlyInstallment) / MONTHLY_REFERENCE_CENTS) * 100
  );

  return (
    <section id="pricing" className="landing-section">
      <header className="landing-section-header">
        <span className="eyebrow">Abbonamenti</span>
        <h2 className="landing-section-title">Scegli il tuo piano</h2>
        <p className="landing-section-sub">
          Allenati tutto l'anno pagando ogni mese. La formula scelta dalla
          maggior parte dei nostri iscritti.
        </p>
      </header>

      {/* ── HERO: Annuale a rate ─────────────────────────────────────── */}
      <article className="pricing-hero" aria-labelledby="plan-hero-title">
        <div className="pricing-hero-glow" aria-hidden="true" />

        <span className="pricing-hero-badge">
          <Crown size={12} aria-hidden="true" />
          La scelta n.1
        </span>

        <div className="pricing-hero-grid">
          <div className="pricing-hero-left">
            <p id="plan-hero-title" className="pricing-hero-kicker">
              Abbonamento Annuale · a rate
            </p>
            <div className="pricing-hero-price">
              <span className="pricing-hero-price-value">
                {formatEuroCents(monthlyInstallment)}
              </span>
              <span className="pricing-hero-price-unit">/ mese</span>
            </div>
            <p className="pricing-hero-detail">
              {yearly.installments!.count} rate mensili · accesso completo per un anno intero
            </p>
            <span className="pricing-hero-save">
              Solo {formatEuroCents(monthlyInstallment)} al mese invece di{" "}
              {formatEuroCents(MONTHLY_REFERENCE_CENTS)} — risparmi il {installmentSavingsPct}%
            </span>
          </div>

          <div className="pricing-hero-right">
            <ul className="pricing-hero-features">
              <li>
                <span className="pricing-card-feature-icon" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Accesso illimitato 7 giorni su 7</span>
              </li>
              <li>
                <span className="pricing-card-feature-icon" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Un anno intero di allenamento</span>
              </li>
              <li>
                <span className="pricing-card-feature-icon" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Paghi comodamente ogni mese</span>
              </li>
              <li>
                <span className="pricing-card-feature-icon" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Codice accesso personale</span>
              </li>
            </ul>

            <a href={checkoutUrlFor("YEARLY", true)} className="button button-primary pricing-hero-cta">
              Inizia adesso
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      <p className="pricing-alt-label">Oppure scegli un altro piano</p>

      {/* ── Grid piani standard ──────────────────────────────────────── */}
      <div className="pricing-grid">
        {gridPlans.map((plan) => {
          const savingsPct = computeSavingsPct(plan.oneShotCents, plan.id);
          const isYearly = plan.id === "YEARLY";

          return (
            <article
              key={plan.id}
              className="pricing-card"
              aria-labelledby={`plan-${plan.id}-title`}
            >
              <p id={`plan-${plan.id}-title`} className="pricing-card-kicker">
                {plan.label}
                {isYearly ? " · unica soluzione" : ""}
              </p>

              <div className="pricing-card-price">
                <span className="pricing-card-price-value">
                  {formatEuroCents(plan.oneShotCents)}
                </span>
                <span className="pricing-card-price-unit">{plan.unitLabel}</span>
              </div>

              {savingsPct ? (
                <span className="pricing-card-savings">
                  −{savingsPct}% rispetto al mensile
                </span>
              ) : (
                <span className="pricing-card-savings-empty">&nbsp;</span>
              )}

              <ul className="pricing-card-features">
                <li>
                  <span className="pricing-card-feature-icon" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>Accesso illimitato alla palestra</span>
                </li>
                <li>
                  <span className="pricing-card-feature-icon" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{plan.durationLabel}</span>
                </li>
                <li>
                  <span className="pricing-card-feature-icon" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>Codice accesso personale</span>
                </li>
              </ul>

              <div className="pricing-card-cta">
                <a href={checkoutUrlFor(plan.id)} className="button button-ghost">
                  Scegli {plan.label.toLowerCase()}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Riga piani secondari ─────────────────────────────────────── */}
      <div className="pricing-secondary">
        <p className="pricing-secondary-label">Disponibile anche</p>
        <div className="pricing-secondary-row">
          {secondaryPlans.map((plan) => (
            <a
              key={plan.id}
              href={checkoutUrlFor(plan.id)}
              className="pricing-secondary-item"
            >
              <span className="pricing-secondary-name">{plan.label}</span>
              <span className="pricing-secondary-price">{formatEuroCents(plan.oneShotCents)}</span>
              <span className="pricing-secondary-unit">{plan.unitLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
