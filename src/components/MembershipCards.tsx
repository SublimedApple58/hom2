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
        <p className="eyebrow">Scegli come iniziare</p>
        <h2>Allenati quando vuoi, con una formula che segue il tuo ritmo.</h2>
        <p className="plans__intro">
          House of Muscle è aperta 24/7: scegli il piano più adatto al tuo percorso e inizia subito a lavorare sulla
          versione migliore di te.
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
                  Seleziona
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="plans__smallprint">
          Valori mostrati in demo per il prototipo. Il listino definitivo può essere aggiornato prima del lancio.
        </p>
      </div>
    </section>
  );
}
