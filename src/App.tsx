import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustRow } from "./components/TrustRow";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Rottamazione } from "./components/Rottamazione";
import { Story } from "./components/Story";
import { HowItWorks } from "./components/HowItWorks";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

/**
 * Landing page pubblica di House of Muscle.
 * Struttura (fisso): Nav → Hero → Trust → Features → Pricing → HowItWorks → FAQ → CTA finale → Footer.
 * Tutte le CTA primarie puntano al gestionale (APP_URL per login, APP_URL/register per iscrizione).
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main className="landing">
        <Hero />
        <TrustRow />
        <Features />
        <Pricing />
        <Rottamazione />
        <Story />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
