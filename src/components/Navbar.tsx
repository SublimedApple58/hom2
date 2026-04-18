import { useEffect, useState } from "react";
import { LOGIN_URL, CHECKOUT_URL } from "../config";

/**
 * Navbar fissa con stato "scrolled" che attiva glassmorphism dopo 40px.
 * Link ancora a sezioni interne; CTA Accedi/Iscriviti rimandano al gestionale.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Init sync (utile se l'utente ricarica mid-scroll).
    setScrolled(window.scrollY > 40);

    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`landing-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="landing-nav-inner">
        <a href="#top" className="landing-nav-brand" aria-label="House of Muscle — torna all'inizio">
          <img src="/logo.jpeg" alt="" className="landing-nav-logo" />
          <span className="landing-nav-brand-text">
            <span className="landing-nav-brand-name">House of Muscle</span>
            <span className="landing-nav-brand-kicker">EST. 2024</span>
          </span>
        </a>

        <div className="landing-nav-links" role="navigation" aria-label="Sezioni">
          <a href="#features" className="landing-nav-link">Palestra</a>
          <a href="#pricing" className="landing-nav-link">Abbonamenti</a>
          <a href="#how" className="landing-nav-link">Come funziona</a>
          <a href="#faq" className="landing-nav-link">FAQ</a>
        </div>

        <div className="landing-nav-ctas">
          <a href={LOGIN_URL} className="button button-ghost small">
            Accedi
          </a>
          <a href={CHECKOUT_URL} className="button button-primary small">
            Iscriviti
          </a>
        </div>
      </div>
    </nav>
  );
}
