const faqItems = [
  {
    question: 'Quando apre HOUSE OF MUSCLE 2.0?',
    answer: 'Apertura prevista ad aprile 2026 a San Nicolo, Teramo, con fase di onboarding prioritaria per chi preordina.',
  },
  {
    question: 'Il pagamento del prototipo e reale?',
    answer:
      'No. Registrazione e checkout in questa landing sono una simulazione completa pensata per presentazione commerciale.',
  },
  {
    question: 'Che tipo di palestra state costruendo?',
    answer:
      'Una sala orientata alla performance: macchinari selezionati, impostazione hardcore e cultura di allenamento concreta.',
  },
  {
    question: 'Il pre-order cosa mi garantisce?',
    answer:
      'Priorita di accesso in apertura, blocco dell offerta di lancio e canale diretto con il team per aggiornamenti ufficiali.',
  },
];

export function FaqSection() {
  return (
    <section className="faq section-surface" id="faq">
      <div className="container">
        <p className="eyebrow">FAQ Rapida</p>
        <h2>Domande frequenti sul pre-order</h2>

        <div className="faq__list" role="list">
          {faqItems.map((item) => (
            <article key={item.question} className="faq__item" role="listitem">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
