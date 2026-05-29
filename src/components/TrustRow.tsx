import { CalendarDays, Clock, RefreshCw, Crosshair, Users, Trophy } from "lucide-react";

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
          <Clock size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">24 ore al giorno</span>
          <span className="landing-trust-label">Accesso H24 con codice personale</span>
        </span>
      </div>

      <div className="landing-trust-item">
        <span className="landing-trust-icon" aria-hidden="true">
          <RefreshCw size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">Parco macchine in continuo aggiornamento</span>
          <span className="landing-trust-label">Attrezzatura sempre al top</span>
        </span>
      </div>

      <div className="landing-trust-item">
        <span className="landing-trust-icon" aria-hidden="true">
          <Crosshair size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">Eccellenza biomeccanica</span>
          <span className="landing-trust-label">Macchinari costruiti sulla persona e non il contrario</span>
        </span>
      </div>

      <div className="landing-trust-item">
        <span className="landing-trust-icon" aria-hidden="true">
          <Users size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">Personale altamente qualificato</span>
          <span className="landing-trust-label">Non abbiamo saputi. Abbiamo patuti.</span>
        </span>
      </div>

      <div className="landing-trust-item">
        <span className="landing-trust-icon" aria-hidden="true">
          <Trophy size={20} />
        </span>
        <span className="landing-trust-text">
          <span className="landing-trust-value">Gente che ha fatto il lavoro</span>
          <span className="landing-trust-label">Gente che è cambiata davvero.</span>
        </span>
      </div>
    </section>
  );
}
