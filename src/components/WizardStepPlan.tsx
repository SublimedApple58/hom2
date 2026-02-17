import { formatEuro } from '../plans';
import type { MembershipPlan } from '../types';

interface WizardStepPlanProps {
  plans: MembershipPlan[];
  selectedPlanId: string;
  onSelect: (planId: string) => void;
  stepError: string;
}

export function WizardStepPlan({ plans, selectedPlanId, onSelect, stepError }: WizardStepPlanProps) {
  return (
    <div className="wizard-step">
      <h3>Scegli il piano</h3>
      <p>Seleziona la formula più adatta al tuo obiettivo.</p>
      <div className="wizard-plan-grid">
        {plans.map((plan) => (
          <button
            type="button"
            key={plan.id}
            className={`wizard-plan ${selectedPlanId === plan.id ? 'is-selected' : ''}`}
            onClick={() => onSelect(plan.id)}
            aria-pressed={selectedPlanId === plan.id}
          >
            <span className="wizard-plan__badge">{plan.badge}</span>
            <strong>{plan.name}</strong>
            <span className="wizard-plan__price">
              {formatEuro(plan.price)} {plan.billingType}
            </span>
          </button>
        ))}
      </div>
      {stepError ? <span className="field-error">{stepError}</span> : null}
    </div>
  );
}
