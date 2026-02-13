import { mediaAssets } from '../media';

export function AtmosphereSection() {
  return (
    <section className="atmosphere section-surface" id="vision">
      <div className="container atmosphere__layout">
        <div className="atmosphere__copy">
          <p className="eyebrow">Visione</p>
          <h2>Un posto che ti costringe a dare di piu, ogni singola seduta.</h2>
          <p>
            Il progetto HOUSE OF MUSCLE 2.0 non vuole essere “carino”: vuole essere utile a chi ha obiettivi reali.
            Luci, suono, layout e attrezzatura sono pensati per concentrarti sul lavoro, non sulla distrazione.
          </p>
          <p>
            Pre-order significa entrare tra i primi, bloccare la tariffa di lancio e partecipare alla fase iniziale del
            club: quella in cui si costruisce la cultura della sala.
          </p>
        </div>

        <div className="atmosphere__gallery">
          <img src={mediaAssets.atmosphereOne} alt="Zona cardio e pesi in ambiente industriale" loading="lazy" />
          <img src={mediaAssets.atmosphereTwo} alt="Allenamento forza con bilanciere" loading="lazy" />
          <img src={mediaAssets.atmosphereThree} alt="Atleta durante una serie intensa" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
