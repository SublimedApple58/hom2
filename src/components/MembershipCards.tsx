import { formatEuro } from '../plans';
import type { MembershipPlan } from '../types';

interface MembershipCardsProps {
  plans: MembershipPlan[];
  onSelectPlan: (planId: string) => void;
}

export function MembershipCards({ plans, onSelectPlan }: MembershipCardsProps) {
  return (
    <section className="plans section-surface" id="abbonamenti">
      <div className="container">
        <p className="eyebrow">Abbonamenti attivi</p>
        <h2>Scegli il piano e allenati subito.</h2>
        <p className="plans__intro">
          House of Muscle è operativa 24/7: scegli la formula che segue il tuo obiettivo e attiva l&apos;iscrizione in
          pochi minuti.
        </p>

        <div className="plans__table" role="list" aria-label="Piani abbonamento disponibili">
          {plans.map((plan, index) => (
            <article key={plan.id} className="plans__row" role="listitem" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="plans__row-main">
                <p className="plans__badge">{plan.badge}</p>
                <h3>{plan.name}</h3>
                <ul>
                  {plan.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="plans__row-side">
                <p className="plans__price">
                  {formatEuro(plan.price)} <span>{plan.billingType}</span>
                </p>
                <button type="button" className="btn btn--primary" onClick={() => onSelectPlan(plan.id)}>
                  Attiva ora
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="plans__smallprint">Tariffe aggiornabili in base a promozioni e servizi inclusi.</p>
      </div>
    </section>
  );
}
