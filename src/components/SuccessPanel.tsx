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
      <p className="eyebrow">Iscrizione completata</p>
      <h3>Attivazione registrata con successo.</h3>
      <p>
        Abbiamo registrato l&apos;iscrizione di <strong>{leadData.firstName} {leadData.lastName}</strong> sul piano{' '}
        <strong>{selectedPlan.name}</strong> ({formatEuro(selectedPlan.price)} {selectedPlan.billingType}).
      </p>
      <p>
        Contatti associati: {leadData.email} - {leadData.phone}
      </p>
      <button type="button" className="btn btn--primary" onClick={onReset}>
        Nuova iscrizione
      </button>
    </div>
  );
}
