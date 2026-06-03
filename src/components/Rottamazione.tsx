import { Recycle, FileCheck, CalendarPlus } from "lucide-react";

const STEPS = [
  {
    icon: FileCheck,
    title: "Mostraci il tuo abbonamento",
    desc: "Hai un abbonamento annuale ancora attivo in un'altra palestra? Portaci la prova dei mesi che ti restano."
  },
  {
    icon: Recycle,
    title: "Sottoscrivi Annuale o Biennale",
    desc: "Scegli un piano Annuale o Biennale di House of Muscle. La rottamazione vale solo su questi piani."
  },
  {
    icon: CalendarPlus,
    title: "Aggiungiamo i mesi residui",
    desc: "I mesi che ti restavano — fino a un massimo di 6 — si sommano gratuitamente alla tua iscrizione da noi."
  }
];

export function Rottamazione() {
  return (
    <section id="rottamazione" className="landing-section">
      <header className="landing-section-header">
        <span className="eyebrow">Cambia palestra senza perderci</span>
        <h2 className="landing-section-title">Rottama il tuo vecchio abbonamento</h2>
        <p className="landing-section-sub">
          Stai pagando un abbonamento annuale in un'altra palestra e vuoi passare a noi?
          Non buttare via i mesi che hai già pagato: trasferiscili su House of Muscle.
        </p>
      </header>

      <div className="rottama-grid">
        {STEPS.map(({ icon: Icon, title, desc }, i) => (
          <article key={title} className="rottama-card">
            <span className="rottama-step-num">{i + 1}</span>
            <span className="rottama-icon" aria-hidden="true">
              <Icon size={22} />
            </span>
            <h3 className="rottama-card-title">{title}</h3>
            <p className="rottama-card-desc">{desc}</p>
          </article>
        ))}
      </div>

      <p className="rottama-note">
        Fino a 6 mesi aggiuntivi gratuiti · valido solo sui piani Annuale e Biennale
      </p>
    </section>
  );
}
