import { useState } from 'react';
import { appConfig } from './config';
import { AtmosphereSection } from './components/AtmosphereSection';
import { EquipmentSection } from './components/EquipmentSection';
import { FaqSection } from './components/FaqSection';
import { FooterContacts } from './components/FooterContacts';
import { HeroSection } from './components/HeroSection';
import { ManifestSection } from './components/ManifestSection';
import { MembershipCards } from './components/MembershipCards';
import { PreorderWizard } from './components/PreorderWizard';
import { membershipPlans } from './plans';

function App() {
  const [planIntent, setPlanIntent] = useState<string | null>(null);

  const scrollToPreorder = () => {
    document.getElementById('pre-order')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handlePlanSelect = (planId: string) => {
    setPlanIntent(planId);
    scrollToPreorder();
  };

  return (
    <>
      <HeroSection onPrimaryCta={scrollToPreorder} />
      <main>
        <ManifestSection />
        <EquipmentSection />
        <AtmosphereSection />
        <MembershipCards plans={membershipPlans} onSelectPlan={handlePlanSelect} />
        <PreorderWizard
          plans={membershipPlans}
          disclaimerText={appConfig.disclaimerText}
          planIntent={planIntent}
          onPlanIntentHandled={() => setPlanIntent(null)}
        />
        <FaqSection />
      </main>
      <FooterContacts />

      <button type="button" className="mobile-sticky-cta" onClick={scrollToPreorder}>
        Inizia adesso
      </button>
    </>
  );
}

export default App;
