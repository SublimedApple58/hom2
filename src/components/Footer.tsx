import { Mail, MapPin, Clock } from "lucide-react";
import { LOGIN_URL, CHECKOUT_URL } from "../config";

/**
 * Inline SVG per il logo Instagram — lucide v1 ha rimosso i brand icons,
 * quindi lo disegniamo noi nello stesso stile (24x24, stroke 2, currentColor).
 */
function InstagramGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/**
 * Footer con contatti placeholder — l'utente li sostituirà con i dati reali.
 */
export function Footer() {
  return (
    <footer className="landing-footer landing">
      <div className="landing-footer-top">
        <div className="landing-footer-brand">
          <div className="landing-footer-brand-row">
            <img src="/logo.jpeg" alt="" className="landing-footer-brand-logo" />
            <span>
              <span className="landing-footer-brand-name">House of Muscle</span>
              <span className="landing-footer-brand-kicker">EST. 2024</span>
            </span>
          </div>
          <p className="landing-footer-brand-tagline">
            Palestra per chi vuole allenarsi sul serio. Iscriviti online,
            entra con il tuo codice.
          </p>
          <div className="landing-footer-socials" aria-label="Seguici">
            <a
              href="https://instagram.com"
              className="landing-footer-social-icon"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramGlyph size={16} />
            </a>
            <a
              href="mailto:info@houseofmuscle.it"
              className="landing-footer-social-icon"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="landing-footer-col">
          <h4 className="landing-footer-col-title">Palestra</h4>
          <ul>
            <li>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <MapPin size={14} aria-hidden="true" />
                Via Esempio 123, Roma
              </span>
            </li>
            <li>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Clock size={14} aria-hidden="true" />
                Lun–Dom · 06:00–23:00
              </span>
            </li>
            <li>
              <a href="mailto:info@houseofmuscle.it">info@houseofmuscle.it</a>
            </li>
          </ul>
        </div>

        <div className="landing-footer-col">
          <h4 className="landing-footer-col-title">Account</h4>
          <ul>
            <li>
              <a href={LOGIN_URL}>Accedi</a>
            </li>
            <li>
              <a href={CHECKOUT_URL}>Iscriviti</a>
            </li>
            <li>
              <a href="#faq">Domande frequenti</a>
            </li>
          </ul>
        </div>

        <div className="landing-footer-col">
          <h4 className="landing-footer-col-title">Legale</h4>
          <ul>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Termini e condizioni</a>
            </li>
            <li>
              <a href="#">Regolamento palestra</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="landing-footer-bottom">
        <span>© 2024–{new Date().getFullYear()} House of Muscle. Tutti i diritti riservati.</span>
        <span>P. IVA 00000000000</span>
      </div>
    </footer>
  );
}
