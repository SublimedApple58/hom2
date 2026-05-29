import { ArrowRight, Check, Sparkles } from "lucide-react";
import { checkoutUrlFor } from "../config";
import { PLANS, computeSavingsPct, formatEuroCents } from "../lib/plans";

const MAIN_IDS = ["MONTHLY", "YEARLY", "BIENNIAL"] as const;
const SECONDARY_IDS = ["DAILY", "QUARTERLY"] as const;

export function Pricing() {
  const mainPlans = PLANS.filter((p) => (MAIN_IDS as readonly string[]).includes(p.id));
  const secondaryPlans = PLANS.filter((p) => (SECONDARY_IDS as readonly string[]).includes(p.id));

  return (
    <section id="pricing" className="landing-section">
      <header className="landing-section-header">
        <span className="eyebrow">Abbonamenti</span>
        <h2 className="landing-section-title">Scegli il tuo piano</h2>
        <p className="landing-section-sub">
          Paga una volta, rinnovi quando ti pare. Per i piani annuali e biennali
          è disponibile il pagamento a rate.
        </p>
      </header>

      <div className="pricing-grid">
        {mainPlans.map((plan) => {
          const savingsPct = computeSavingsPct(plan.oneShotCents, plan.id);

          return (
            <article
              key={plan.id}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              aria-labelledby={`plan-${plan.id}-title`}
            >
              {plan.popular ? (
                <span className="pricing-card-badge">
                  <Sparkles size={10} aria-hidden="true" />
                  Più scelto
                </span>
              ) : null}

              <p id={`plan-${plan.id}-title`} className="pricing-card-kicker">
                {plan.label}
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
              ) : null}

              {plan.installments ? (
                <p className="pricing-card-installments">
                  oppure {plan.installments.count} × {formatEuroCents(plan.installments.amountCents)} a rate
                </p>
              ) : (
                <p className="pricing-card-installments-empty">&nbsp;</p>
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
                <a
                  href={checkoutUrlFor(plan.id)}
                  className={plan.popular ? "button button-primary" : "button button-ghost"}
                >
                  Iscriviti al piano {plan.label.toLowerCase()}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Secondary plans — subtle row */}
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
