const faqItems = [
  {
    question: 'La palestra è davvero aperta 24 ore su 24, 7 giorni su 7?',
    answer: 'Sì. House of Muscle è pensata per allenarti quando vuoi, senza limiti di orario.',
  },
  {
    question: 'È adatta anche a chi parte da zero?',
    answer:
      'Assolutamente sì. Non importa il livello di partenza: qui trovi un ambiente accogliente ma con standard alti.',
  },
  {
    question: 'Che tipo di attrezzature troverò?',
    answer:
      'Solo macchinari professionali dei brand top internazionali, scelti per sicurezza, ergonomia e risultati reali.',
  },
  {
    question: 'Il flusso registrazione e pagamento di questa pagina è reale?',
    answer:
      'No. In questa fase è una simulazione prototipo per presentazione: nessun addebito reale viene effettuato.',
  },
];

export function FaqSection() {
  return (
    <section className="faq section-surface" id="faq">
      <div className="container">
        <p className="eyebrow">FAQ Rapida</p>
        <h2>Domande frequenti</h2>

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
