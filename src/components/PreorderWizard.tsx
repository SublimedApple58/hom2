import { useEffect, useMemo, useReducer, useState } from 'react';
import type { CheckoutState, CheckoutStatus, LeadFormData, MembershipPlan, MockPaymentData } from '../types';
import { formatEuro } from '../plans';
import { SuccessPanel } from './SuccessPanel';
import { WizardStepLead } from './WizardStepLead';
import { WizardStepPaymentMock } from './WizardStepPaymentMock';
import { WizardStepPlan } from './WizardStepPlan';

interface PreorderWizardProps {
  plans: MembershipPlan[];
  disclaimerText: string;
  planIntent: string | null;
  onPlanIntentHandled: () => void;
}

interface SetLeadAction {
  type: 'set_lead';
  field: keyof LeadFormData;
  value: string | boolean;
}

interface SetPaymentAction {
  type: 'set_payment';
  field: keyof MockPaymentData;
  value: string;
}

type CheckoutAction =
  | SetLeadAction
  | SetPaymentAction
  | { type: 'set_plan'; planId: string }
  | { type: 'next_step' }
  | { type: 'prev_step' }
  | { type: 'set_status'; status: CheckoutStatus }
  | { type: 'reset' };

const initialLeadData: LeadFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  privacyAccepted: false,
};

const initialPaymentData: MockPaymentData = {
  cardNumber: '',
  cardHolder: '',
  expiry: '',
  cvv: '',
};

const initialState: CheckoutState = {
  step: 1,
  selectedPlanId: '',
  leadData: initialLeadData,
  paymentData: initialPaymentData,
  status: 'idle',
};

function checkoutReducer(state: CheckoutState, action: CheckoutAction): CheckoutState {
  switch (action.type) {
    case 'set_lead':
      return {
        ...state,
        leadData: {
          ...state.leadData,
          [action.field]: action.value,
        },
      };
    case 'set_payment':
      return {
        ...state,
        paymentData: {
          ...state.paymentData,
          [action.field]: action.value,
        },
      };
    case 'set_plan':
      return {
        ...state,
        selectedPlanId: action.planId,
      };
    case 'next_step':
      return {
        ...state,
        step: state.step === 3 ? 3 : ((state.step + 1) as CheckoutState['step']),
      };
    case 'prev_step':
      return {
        ...state,
        step: state.step === 1 ? 1 : ((state.step - 1) as CheckoutState['step']),
      };
    case 'set_status':
      return {
        ...state,
        status: action.status,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function validateLeadData(data: LeadFormData): Partial<Record<keyof LeadFormData, string>> {
  const errors: Partial<Record<keyof LeadFormData, string>> = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'Inserisci il nome.';
  }
  if (!data.lastName.trim()) {
    errors.lastName = 'Inserisci il cognome.';
  }
  if (!data.email.trim()) {
    errors.email = 'Inserisci una email valida.';
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email.trim())) {
      errors.email = 'Formato email non valido.';
    }
  }
  const phoneDigits = data.phone.replace(/\D/g, '');
  if (phoneDigits.length < 8) {
    errors.phone = 'Inserisci un numero di telefono valido.';
  }
  if (!data.privacyAccepted) {
    errors.privacyAccepted = 'Devi accettare la privacy per continuare.';
  }

  return errors;
}

function validatePaymentData(data: MockPaymentData): Partial<Record<keyof MockPaymentData, string>> {
  const errors: Partial<Record<keyof MockPaymentData, string>> = {};
  const cardDigits = data.cardNumber.replace(/\D/g, '');

  if (cardDigits.length < 13) {
    errors.cardNumber = 'Numero carta non valido.';
  }
  if (!data.cardHolder.trim()) {
    errors.cardHolder = 'Inserisci il nome intestatario.';
  }
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(data.expiry.trim())) {
    errors.expiry = 'Usa formato MM/AA.';
  }
  if (!/^\d{3,4}$/.test(data.cvv.trim())) {
    errors.cvv = 'CVV non valido.';
  }

  return errors;
}

function isObjectEmpty(value: object): boolean {
  return Object.keys(value).length === 0;
}

export function PreorderWizard({ plans, disclaimerText, planIntent, onPlanIntentHandled }: PreorderWizardProps) {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  const [leadErrors, setLeadErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [paymentErrors, setPaymentErrors] = useState<Partial<Record<keyof MockPaymentData, string>>>({});
  const [stepError, setStepError] = useState('');

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === state.selectedPlanId) ?? null,
    [plans, state.selectedPlanId],
  );

  useEffect(() => {
    if (!planIntent) {
      return;
    }

    dispatch({ type: 'set_plan', planId: planIntent });
    setStepError('');
    onPlanIntentHandled();
  }, [onPlanIntentHandled, planIntent]);

  const handleNext = () => {
    if (state.step === 1) {
      const errors = validateLeadData(state.leadData);
      setLeadErrors(errors);
      if (!isObjectEmpty(errors)) {
        return;
      }
      dispatch({ type: 'next_step' });
      return;
    }

    if (state.step === 2) {
      if (!state.selectedPlanId) {
        setStepError('Seleziona un piano per continuare.');
        return;
      }
      setStepError('');
      dispatch({ type: 'next_step' });
    }
  };

  const handleSubmit = async () => {
    const errors = validatePaymentData(state.paymentData);
    setPaymentErrors(errors);
    if (!isObjectEmpty(errors)) {
      return;
    }

    dispatch({ type: 'set_status', status: 'submitting' });
    await new Promise((resolve) => {
      const delay = 900 + Math.floor(Math.random() * 300);
      setTimeout(resolve, delay);
    });
    dispatch({ type: 'set_status', status: 'success' });
  };

  const resetWizard = () => {
    setLeadErrors({});
    setPaymentErrors({});
    setStepError('');
    dispatch({ type: 'reset' });
  };

  const steps = ['Dati', 'Piano', 'Pagamento'];

  return (
    <section className="preorder section-surface" id="pre-order">
      <div className="container">
        <p className="eyebrow">Checkout Pre-order</p>
        <h2>Registra il tuo pre-order in 3 step.</h2>
        <div className="preorder__layout">
          <aside className="preorder__summary" aria-label="Riepilogo pre-order">
            <h3>Riepilogo rapido</h3>
            <p>Seleziona il tuo piano, completa i dati e finalizza il pagamento mock.</p>
            <div className="summary-box">
              <strong>Piano selezionato</strong>
              <p>{selectedPlan ? selectedPlan.name : 'Nessun piano selezionato'}</p>
              <strong>Importo</strong>
              <p>{selectedPlan ? `${formatEuro(selectedPlan.price)} ${selectedPlan.billingType}` : '--'}</p>
            </div>
            <p className="summary-note">Apertura prevista ad aprile 2026. Posti pre-order limitati.</p>
          </aside>

          <div className="wizard-panel" id="preorder-wizard">
            <div className="wizard-progress" role="list" aria-label="Progressione checkout">
              {steps.map((stepLabel, index) => {
                const stepNumber = index + 1;
                const isCurrent = state.step === stepNumber;
                const isDone = state.step > stepNumber;

                return (
                  <span
                    key={stepLabel}
                    role="listitem"
                    className={`wizard-progress__item ${isCurrent ? 'is-current' : ''} ${isDone ? 'is-done' : ''}`}
                  >
                    {stepNumber}. {stepLabel}
                  </span>
                );
              })}
            </div>

            {state.status === 'success' && selectedPlan ? (
              <SuccessPanel selectedPlan={selectedPlan} leadData={state.leadData} onReset={resetWizard} />
            ) : (
              <>
                {state.step === 1 ? (
                  <WizardStepLead
                    data={state.leadData}
                    errors={leadErrors}
                    onChange={(field, value) => dispatch({ type: 'set_lead', field, value })}
                  />
                ) : null}

                {state.step === 2 ? (
                  <WizardStepPlan
                    plans={plans}
                    selectedPlanId={state.selectedPlanId}
                    onSelect={(planId) => {
                      dispatch({ type: 'set_plan', planId });
                      setStepError('');
                    }}
                    stepError={stepError}
                  />
                ) : null}

                {state.step === 3 ? (
                  <WizardStepPaymentMock
                    data={state.paymentData}
                    errors={paymentErrors}
                    onChange={(field, value) => dispatch({ type: 'set_payment', field, value })}
                  />
                ) : null}

                <div className="wizard-actions">
                  {state.step > 1 ? (
                    <button
                      type="button"
                      className="btn btn--ghost"
                      onClick={() => dispatch({ type: 'prev_step' })}
                      disabled={state.status === 'submitting'}
                    >
                      Indietro
                    </button>
                  ) : (
                    <span />
                  )}

                  {state.step < 3 ? (
                    <button type="button" className="btn btn--primary" onClick={handleNext}>
                      Continua
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn--primary"
                      onClick={handleSubmit}
                      disabled={state.status === 'submitting'}
                    >
                      {state.status === 'submitting' ? 'Elaborazione demo...' : 'Conferma pre-order demo'}
                    </button>
                  )}
                </div>
              </>
            )}

            <p className="disclaimer">{disclaimerText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
