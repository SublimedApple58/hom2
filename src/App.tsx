import { useState } from 'react';
import { appConfig } from './config';
import { AtmosphereSection } from './components/AtmosphereSection';
import { EquipmentSection } from './components/EquipmentSection';
import { FaqSection } from './components/FaqSection';
import { FooterContacts } from './components/FooterContacts';
import { HeroSection } from './components/HeroSection';
import { ManifestSection } from './components/ManifestSection';
import { MembershipCards } from './components/MembershipCards';
import { SignupWizard } from './components/SignupWizard';
import { membershipPlans } from './plans';

function App() {
  const [planIntent, setPlanIntent] = useState<string | null>(null);

  const scrollToSignup = () => {
    document.getElementById('iscrizione')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handlePlanSelect = (planId: string) => {
    setPlanIntent(planId);
    scrollToSignup();
  };

  return (
    <>
      <HeroSection onPrimaryCta={scrollToSignup} />
      <main>
        <ManifestSection />
        <EquipmentSection />
        <AtmosphereSection />
        <MembershipCards plans={membershipPlans} onSelectPlan={handlePlanSelect} />
        <SignupWizard
          plans={membershipPlans}
          disclaimerText={appConfig.disclaimerText}
          planIntent={planIntent}
          onPlanIntentHandled={() => setPlanIntent(null)}
        />
        <FaqSection />
      </main>
      <FooterContacts />

      <button type="button" className="mobile-sticky-cta" onClick={scrollToSignup}>
        Iscriviti ora
      </button>
    </>
  );
}

export default App;
