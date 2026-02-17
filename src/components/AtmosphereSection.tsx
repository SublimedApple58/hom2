import { mediaAssets } from '../media';

export function AtmosphereSection() {
  return (
    <section className="atmosphere section-surface" id="vision">
      <div className="container atmosphere__layout">
        <div className="atmosphere__copy">
          <p className="eyebrow">La nostra visione</p>
          <h2>Vogliamo creare molto piu di una palestra.</h2>
          <p>
            Vogliamo costruire un punto di riferimento a San Nicolò per chi sceglie di investire su sé stesso.
          </p>
          <p>
            Uno spazio aperto a tutti, ma con standard alti. Un luogo dove chi inizia si sente accolto e chi ambisce a
            grandi risultati trova ciò che serve per raggiungerli.
          </p>
          <p>
            Il nostro obiettivo è semplice: aiutarti a diventare la versione migliore di te, ogni giorno. Perché te lo
            meriti, perché ne hai bisogno.
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
