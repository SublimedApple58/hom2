import type { MockPaymentData } from '../types';

interface WizardStepPaymentMockProps {
  data: MockPaymentData;
  errors: Partial<Record<keyof MockPaymentData, string>>;
  onChange: (field: keyof MockPaymentData, value: string) => void;
}

export function WizardStepPaymentMock({ data, errors, onChange }: WizardStepPaymentMockProps) {
  return (
    <div className="wizard-step">
      <h3>Pagamento (mock)</h3>
      <p>Simulazione checkout prototipo. Nessun addebito reale verra effettuato.</p>
      <div className="wallet-badges" aria-label="Wallet disponibili in demo">
        <span>Apple Pay</span>
        <span>Google Pay</span>
      </div>
      <div className="form-grid">
        <label>
          Numero carta
          <input
            type="text"
            inputMode="numeric"
            value={data.cardNumber}
            onChange={(event) => onChange('cardNumber', event.target.value)}
            placeholder="4242 4242 4242 4242"
          />
          {errors.cardNumber ? <span className="field-error">{errors.cardNumber}</span> : null}
        </label>
        <label>
          Intestatario
          <input
            type="text"
            value={data.cardHolder}
            onChange={(event) => onChange('cardHolder', event.target.value)}
            placeholder="Mario Rossi"
          />
          {errors.cardHolder ? <span className="field-error">{errors.cardHolder}</span> : null}
        </label>
        <label>
          Scadenza
          <input
            type="text"
            value={data.expiry}
            onChange={(event) => onChange('expiry', event.target.value)}
            placeholder="MM/AA"
          />
          {errors.expiry ? <span className="field-error">{errors.expiry}</span> : null}
        </label>
        <label>
          CVV
          <input
            type="password"
            inputMode="numeric"
            value={data.cvv}
            onChange={(event) => onChange('cvv', event.target.value)}
            placeholder="123"
          />
          {errors.cvv ? <span className="field-error">{errors.cvv}</span> : null}
        </label>
      </div>
    </div>
  );
}
