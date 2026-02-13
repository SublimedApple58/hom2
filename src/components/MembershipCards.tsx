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
        <h2>Blocca il tuo posto prima dell&apos;apertura di aprile.</h2>
        <div className="plans__grid">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className="plans__card"
              style={{ animationDelay: `${index * 90}ms` }}
              aria-label={`Piano ${plan.name}`}
            >
              <span className="plans__badge">{plan.badge}</span>
              <h3>{plan.name}</h3>
              <p className="plans__price">
                {formatEuro(plan.price)} <span>{plan.billingType}</span>
              </p>
              <ul>
                {plan.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <button type="button" className="btn btn--primary btn--block" onClick={() => onSelectPlan(plan.id)}>
                Seleziona
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
