import { ArrowRight, LogIn } from "lucide-react";
import { LOGIN_URL, CHECKOUT_URL } from "../config";

/**
 * Hero principale — nessuna foto di stock: logo + dual radial brand
 * (che arriva dal body, il wrapper locale aggiunge solo un glow extra).
 */
export function Hero() {
  return (
    <section id="top" className="landing-hero">
      <div className="landing-hero-logo-wrap">
        <img src="/logo.jpeg" alt="House of Muscle" className="landing-hero-logo" />
      </div>

      <span className="landing-hero-kicker">Palestra · Dal 2024</span>

      <h1 className="landing-hero-title">
        Allenati <span>senza</span> complicazioni.
      </h1>

      <p className="landing-hero-sub">
        House of Muscle è una palestra pensata per chi vuole allenarsi sul serio.
        Iscriviti online, carica i documenti, entra con il tuo codice personale.
        Niente code alla reception, niente contratti infiniti.
      </p>

      <div className="landing-hero-ctas">
        <a href={CHECKOUT_URL} className="button button-primary large">
          Iscriviti ora <ArrowRight size={18} aria-hidden="true" />
        </a>
        <a href={LOGIN_URL} className="button button-ghost large">
          <LogIn size={16} aria-hidden="true" />
          Sono già iscritto
        </a>
      </div>

      <span className="landing-hero-foot">
        <span className="landing-hero-foot-dot" aria-hidden="true" />
        Nessun rinnovo automatico · Pagamento sicuro
      </span>
    </section>
  );
}
