import { formatEuro } from '../plans';
import type { LeadFormData, MembershipPlan } from '../types';

interface SuccessPanelProps {
  selectedPlan: MembershipPlan;
  leadData: LeadFormData;
  onReset: () => void;
}

export function SuccessPanel({ selectedPlan, leadData, onReset }: SuccessPanelProps) {
  return (
    <div className="success-panel" role="status" aria-live="polite">
      <p className="eyebrow">Pre-order confermato (demo)</p>
      <h3>Registrazione simulata completata.</h3>
      <p>
        Abbiamo salvato il pre-order per <strong>{leadData.firstName} {leadData.lastName}</strong> sul piano{' '}
        <strong>{selectedPlan.name}</strong> ({formatEuro(selectedPlan.price)} {selectedPlan.billingType}).
      </p>
      <p>
        Contatto riepilogo: {leadData.email} - {leadData.phone}
      </p>
      <button type="button" className="btn btn--primary" onClick={onReset}>
        Nuovo pre-order demo
      </button>
    </div>
  );
}
