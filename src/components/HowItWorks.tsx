import { UserPlus, FileCheck, KeyRound, type LucideIcon } from "lucide-react";

/**
 * Tre step che raccontano il flusso reale dell'iscrizione tramite il gestionale:
 * crea account → documenti → codice accesso.
 */
type Step = { n: string; icon: LucideIcon; title: string; desc: string };

const STEPS: Step[] = [
  {
    n: "1",
    icon: UserPlus,
    title: "Crea il tuo account",
    desc: "In due minuti online: email, dati personali, scelta dell'abbonamento. Paghi in modo sicuro con carta."
  },
  {
    n: "2",
    icon: FileCheck,
    title: "Carica i documenti",
    desc: "Carta d'identità e certificato medico dallo smartphone. Li verifichiamo noi, ti avvisiamo quando tutto è a posto."
  },
  {
    n: "3",
    icon: KeyRound,
    title: "Entra con il tuo codice",
    desc: "Ricevi un codice personale. Lo usi al tornello all'ingresso: niente tessere da dimenticare a casa."
  }
];

export function HowItWorks() {
  return (
    <section id="how" className="landing-section">
      <header className="landing-section-header">
        <span className="eyebrow">Iscrizione</span>
        <h2 className="landing-section-title">Come funziona</h2>
        <p className="landing-section-sub">
          Tre passaggi dall'iscrizione all'ingresso in palestra. Tutto online,
          tutto tracciato.
        </p>
      </header>

      <div className="how-grid">
        {STEPS.map(({ n, icon: Icon, title, desc }) => (
          <article key={n} className="how-step">
            <span className="how-step-number" aria-hidden="true">
              {n}
            </span>
            <Icon size={22} style={{ color: "#f09ca3", opacity: 0.9 }} aria-hidden="true" />
            <h3 className="how-step-title">{title}</h3>
            <p className="how-step-desc">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
