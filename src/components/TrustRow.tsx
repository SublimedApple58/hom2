import { CalendarDays, ShieldCheck, Smartphone } from "lucide-react";

/**
 * Tre "fatti oggettivi" sul prodotto — non claim marketing.
 * Replica del pattern .dash-stats-row del gestionale.
 */
export function TrustRow() {
  return (
    <section aria-label="In breve" className="landing-trust">
      <div className="landing-trust-item">
        <span className="landing-trust-icon" aria-hidden="true">
          <CalendarDays size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">Aperti 7 giorni su 7</span>
          <span className="landing-trust-label">Orari estesi, mattina e sera</span>
        </span>
      </div>

      <div className="landing-trust-item">
        <span className="landing-trust-icon" aria-hidden="true">
          <ShieldCheck size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">Iscrizione in regola</span>
          <span className="landing-trust-label">Documenti e certificato gestiti online</span>
        </span>
      </div>

      <div className="landing-trust-item">
        <span className="landing-trust-icon" aria-hidden="true">
          <Smartphone size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">Tutto digitale</span>
          <span className="landing-trust-label">Niente carta, niente code</span>
        </span>
      </div>
    </section>
  );
}
