import { ArrowRight, Check, Sparkles } from "lucide-react";
import { checkoutUrlFor } from "../config";
import { PLANS, computeSavingsPct, formatEuroCents } from "../lib/plans";

/**
 * Listino abbonamenti — replica 1:1 della UI delle .checkout-tier-card del gestionale
 * (stesso badge "Più scelto", stesso chip savings, stesso blocco rate).
 * Le CTA puntano direttamente al checkout del gestionale con il tier preselezionato.
 */
export function Pricing() {
  return (
    <section id="pricing" className="landing-section">
      <header className="landing-section-header">
        <span className="eyebrow">Abbonamenti</span>
        <h2 className="landing-section-title">Scegli il tuo piano</h2>
        <p className="landing-section-sub">
          Paga una volta, rinnovi quando ti pare. Nessun rinnovo automatico,
          nessuna sorpresa sul conto. Per i piani annuali è in arrivo il pagamento a rate.
        </p>
      </header>

      <div className="pricing-grid">
        {PLANS.map((plan) => {
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

              <p
                id={`plan-${plan.id}-title`}
                className="pricing-card-kicker"
              >
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
                  oppure {plan.installments.count} × {formatEuroCents(plan.installments.amountCents)}
                  <span style={{ opacity: 0.6 }}> · a rate (presto disponibile)</span>
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
                  <span>Nessun rinnovo automatico</span>
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
    </section>
  );
}
