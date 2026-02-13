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
        <p className="eyebrow">Pre-order Membership</p>
        <h2>Tre formule, una sola direzione: allenarti in una palestra vera.</h2>
        <p className="plans__intro">
          Scegli il modello che preferisci, blocca il tuo accesso prima dell&apos;apertura di aprile e assicurati una
          posizione prioritaria nel lancio della struttura.
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
          Questo listino e dimostrativo per il prototipo cliente: i prezzi finali possono essere aggiornati prima della
          pubblicazione definitiva.
        </p>
      </div>
    </section>
  );
}
