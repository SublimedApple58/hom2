import type { MembershipPlan } from './types';

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'mensile',
    name: 'Mensile',
    price: 69,
    billingType: '/ mese',
    benefits: ['Accesso completo 24/7', 'Supporto staff in sala', 'Nessun vincolo annuale'],
    badge: 'Accesso',
  },
  {
    id: 'annuale',
    name: 'Annuale',
    price: 699,
    billingType: '/ anno',
    benefits: ['Miglior valore annuale', 'Attivazione prioritaria', 'Welcome kit House of Muscle'],
    badge: 'Best value',
  },
  {
    id: 'annuale-rateizzato',
    name: 'Annuale addebitato mensilmente',
    price: 59,
    billingType: '/ mese x 12',
    benefits: ['Impegno annuale con costo diluito', 'Tariffa bloccata', 'Accesso completo 24/7'],
    badge: 'Flessibile',
  },
];

export const formatEuro = (value: number): string =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
