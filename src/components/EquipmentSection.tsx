import { mediaAssets } from '../media';

const machineBrands = ['Star Trac', 'Nautilus', 'Cybex', 'Icarian', 'Hammer Strength'];

export function EquipmentSection() {
  return (
    <section className="equipment section-surface" id="equipment">
      <div className="container">
        <p className="eyebrow">Machine Room</p>
        <h2>Linee selezionate: Star Trac, Nautilus, Cybex, Icarian, Hammer Strength.</h2>

        <div className="equipment__ticker" aria-hidden="true">
          <p>{machineBrands.concat(machineBrands).join(' • ')}</p>
        </div>

        <div className="equipment__layout">
          <div className="equipment__copy">
            <p>
              In questa palestra ogni macchina e stata scelta per reggere volume, intensita e cicli pesanti. Nessuna
              scelta casuale: geometrie solide, leve coerenti, sensazione meccanica “old school” e qualita strutturale
              da sala americana.
            </p>
            <p>
              La promessa non e “premium” a parole: e premium quando entri, carichi e senti che l&apos;attrezzo risponde
              esattamente come deve, serie dopo serie.
            </p>
            <ul className="equipment__list">
              <li>Biomeccanica affidabile per lavoro serio su massa e forza</li>
              <li>Macchinari iconici per standard da vera hardcore gym</li>
              <li>Sala progettata per allenamenti ad alta densita, senza attese infinite</li>
            </ul>
          </div>

          <div className="equipment__visuals">
            <img src={mediaAssets.equipmentOne} alt="Area attrezzi heavy-duty" loading="lazy" />
            <img src={mediaAssets.equipmentTwo} alt="Dettaglio bilancieri e panca" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
