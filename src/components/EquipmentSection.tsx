import { mediaAssets } from '../media';

const machineBrands = ['Star Trac', 'Nautilus', 'Cybex', 'Icarian', 'Hammer Strength'];

export function EquipmentSection() {
  return (
    <section className="equipment section-surface" id="equipment">
      <div className="container">
        <p className="eyebrow">Attrezzature</p>
        <h2>Solo macchinari di altissimo livello, firmati dai brand piu riconosciuti al mondo.</h2>

        <div className="equipment__ticker" aria-hidden="true">
          <p>{machineBrands.concat(machineBrands).join(' • ')}</p>
        </div>

        <div className="equipment__layout">
          <div className="equipment__copy">
            <p>
              Abbiamo scelto solo macchinari di altissimo livello, firmati dai brand più riconosciuti nel mondo del
              fitness internazionale.
            </p>
            <p>
              Attrezzature moderne, ergonomiche e progettate per offrire il massimo in termini di sicurezza, comfort e
              risultati.
            </p>
            <p>
              Non la solita palestra con macchine standard dei soliti brand commerciali, ma un ambiente professionale,
              pensato per garantire un&apos;esperienza superiore a ogni allenamento.
            </p>
            <ul className="equipment__list">
              <li>Standard qualitativo internazionale in ogni area di lavoro</li>
              <li>Massima attenzione a sicurezza, comfort e performance</li>
              <li>Se devi impegnarti, meriti il meglio: ed il meglio è Made in U.S.A.</li>
            </ul>
          </div>

          <div className="equipment__visuals">
            <img src={mediaAssets.equipmentOne} alt="Area attrezzi professionale" loading="lazy" />
            <img src={mediaAssets.equipmentTwo} alt="Dettaglio macchinari per allenamento" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
