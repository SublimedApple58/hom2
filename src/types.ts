export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  billingType: string;
  benefits: string[];
  badge: string;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  privacyAccepted: boolean;
}

export interface PaymentData {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
}

export type CheckoutStatus = 'idle' | 'submitting' | 'success';

export interface CheckoutState {
  step: 1 | 2 | 3;
  selectedPlanId: string;
  leadData: LeadFormData;
  paymentData: PaymentData;
  status: CheckoutStatus;
}

export interface AppConfig {
  brandName: string;
  city: string;
  province: string;
  contactWhatsApp: string;
  contactEmail: string;
  disclaimerText: string;
}
