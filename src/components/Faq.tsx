import { ChevronDown } from "lucide-react";

/**
 * FAQ con <details>/<summary> nativi — a11y built-in, zero libreria, zero JS.
 */
const QA: Array<{ q: string; a: string }> = [
  {
    q: "L'abbonamento si rinnova in automatico?",
    a: "No. Quando il tuo abbonamento scade, resta scaduto finché non scegli tu di rinnovarlo dal gestionale. Nessun addebito a sorpresa sulla carta."
  },
  {
    q: "Posso pagare con carta?",
    a: "Sì, tutti i pagamenti avvengono con carta tramite SumUp (circuito sicuro europeo). Per gli abbonamenti annuali e biennali arriverà presto anche la rateizzazione."
  },
  {
    q: "Serve il certificato medico?",
    a: "Sì, è obbligatorio per allenarti. Lo carichi online quando ti iscrivi: basta una foto. Ti avvisiamo quando scade per farti rinnovare in tempo."
  },
  {
    q: "Quali sono gli orari?",
    a: "Siamo aperti 7 giorni su 7 con orario esteso mattina e sera. Gli orari precisi li trovi sul nostro profilo Instagram e in bacheca in sede."
  },
  {
    q: "Come faccio a entrare in palestra?",
    a: "Ti diamo un codice personale quando la tua iscrizione è completa (documenti approvati + pagamento ricevuto). Lo usi al tornello all'ingresso — niente tessere fisiche."
  },
  {
    q: "Posso annullare l'iscrizione?",
    a: "L'abbonamento è a durata fissa (1, 12 o 24 mesi). Non si interrompe a metà strada, ma non paghi mai nulla oltre quello che hai comprato."
  }
];

export function Faq() {
  return (
    <section id="faq" className="landing-section">
      <header className="landing-section-header">
        <span className="eyebrow">Domande frequenti</span>
        <h2 className="landing-section-title">Le risposte alle domande più comuni</h2>
      </header>

      <div className="faq-list">
        {QA.map(({ q, a }) => (
          <details key={q} className="faq-item">
            <summary>
              <span>{q}</span>
              <ChevronDown size={18} className="faq-item-chevron" aria-hidden="true" />
            </summary>
            <div className="faq-item-body">{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
