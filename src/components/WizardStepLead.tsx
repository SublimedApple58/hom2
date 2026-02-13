import type { LeadFormData } from '../types';

interface WizardStepLeadProps {
  data: LeadFormData;
  errors: Partial<Record<keyof LeadFormData, string>>;
  onChange: (field: keyof LeadFormData, value: string | boolean) => void;
}

export function WizardStepLead({ data, errors, onChange }: WizardStepLeadProps) {
  return (
    <div className="wizard-step">
      <h3>Dati personali</h3>
      <p>Inserisci i tuoi dati per bloccare il pre-order.</p>
      <div className="form-grid">
        <label>
          Nome
          <input
            type="text"
            value={data.firstName}
            onChange={(event) => onChange('firstName', event.target.value)}
            placeholder="Mario"
          />
          {errors.firstName ? <span className="field-error">{errors.firstName}</span> : null}
        </label>
        <label>
          Cognome
          <input
            type="text"
            value={data.lastName}
            onChange={(event) => onChange('lastName', event.target.value)}
            placeholder="Rossi"
          />
          {errors.lastName ? <span className="field-error">{errors.lastName}</span> : null}
        </label>
        <label>
          Email
          <input
            type="email"
            value={data.email}
            onChange={(event) => onChange('email', event.target.value)}
            placeholder="nome@email.it"
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>
        <label>
          Telefono
          <input
            type="tel"
            value={data.phone}
            onChange={(event) => onChange('phone', event.target.value)}
            placeholder="+39 333 1234567"
          />
          {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
        </label>
      </div>
      <label className="checkbox-field">
        <input
          type="checkbox"
          checked={data.privacyAccepted}
          onChange={(event) => onChange('privacyAccepted', event.target.checked)}
        />
        <span>Accetto l&apos;informativa privacy per la gestione del pre-order.</span>
      </label>
      {errors.privacyAccepted ? <span className="field-error">{errors.privacyAccepted}</span> : null}
    </div>
  );
}
