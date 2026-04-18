import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../config";

export function FinalCta() {
  return (
    <section className="landing-section" style={{ paddingTop: 32 }}>
      <div className="dash-hero final-cta">
        <span className="eyebrow">Pronto a iniziare?</span>
        <h2>Entra in House of Muscle oggi stesso.</h2>
        <p>
          Iscrizione online in pochi minuti. Porti solo lo zaino e la voglia di allenarti.
        </p>
        <div className="final-cta-ctas">
          <a href={CHECKOUT_URL} className="button button-primary large">
            Iscriviti ora <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
