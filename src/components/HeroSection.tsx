import { appConfig } from '../config';
import { mediaAssets } from '../media';

interface HeroSectionProps {
  onPrimaryCta: () => void;
}

export function HeroSection({ onPrimaryCta }: HeroSectionProps) {
  return (
    <section className="hero section-surface" id="top">
      <div className="hero__backdrop" aria-hidden="true">
        <img src={mediaAssets.heroMain} alt="Sala pesi intensa con macchinari professionali" loading="eager" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy">
          <p className="eyebrow">House of Muscle • San Nicolò, Teramo</p>
          <h1 className="hero__title">La palestra è attiva. Ora tocca a te.</h1>
          <p className="hero__location">
            {appConfig.brandName}: aperta 24 ore su 24, 7 giorni su 7, con macchinari professionali top di gamma.
          </p>
          <p className="hero__subtitle">
            Non è una palestra qualunque: è uno spazio costruito per chi vuole risultati concreti, disciplina e
            crescita.
          </p>
          <p className="hero__subtitle">
            Che tu voglia tornare in forma, sentirti meglio nel tuo corpo o alzare il livello delle performance, qui
            trovi il contesto giusto per farlo ogni giorno.
          </p>
          <p className="hero__subtitle">
            Allenati quando vuoi. Modella il tuo fisico con standard alti. Il momento giusto è adesso.
          </p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onPrimaryCta}>
              Iscriviti ora
            </button>
            <a href="#equipment" className="btn btn--ghost">
              Scopri le attrezzature
            </a>
          </div>

          <ul className="hero__kickers" aria-label="Valori chiave">
            <li>Aperta 24/7</li>
            <li>Macchinari premium USA</li>
            <li>Per ogni età e livello</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
