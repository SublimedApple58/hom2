import type { MembershipPlan } from './types';

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'mensile',
    name: 'Mensile',
    price: 69,
    billingType: '/ mese',
    benefits: ['Accesso completo area macchine', 'Supporto staff in sala', 'Nessun vincolo annuale'],
    badge: 'Pre-order',
  },
  {
    id: 'annuale',
    name: 'Annuale',
    price: 699,
    billingType: '/ anno',
    benefits: ['Miglior valore annuale', 'Priorita attivazione apertura', 'Welcome kit HOUSE OF MUSCLE 2.0'],
    badge: 'Pre-order',
  },
  {
    id: 'annuale-rateizzato',
    name: 'Annuale addebitato mensilmente',
    price: 59,
    billingType: '/ mese x 12',
    benefits: ['Impegno annuale con costo diluito', 'Blocco tariffa pre-apertura', 'Accesso promo lancio aprile'],
    badge: 'Pre-order',
  },
];

export const formatEuro = (value: number): string =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
