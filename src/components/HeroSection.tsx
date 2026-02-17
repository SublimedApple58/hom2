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
          <p className="eyebrow">Nuova apertura a San Nicolò</p>
          <h1 className="hero__title">Diventa la versione migliore di te.</h1>
          <p className="hero__location">
            {appConfig.brandName}: la nuova palestra di San Nicolò, aperta 24 ore su 24, 7 giorni su 7.
          </p>
          <p className="hero__subtitle">
            A San Nicolò sta arrivando qualcosa di diverso. Una palestra pensata per chi vuole migliorarsi davvero.
          </p>
          <p className="hero__subtitle">
            Che tu voglia tornare in forma, sentirti meglio con il tuo corpo o portare le tue performance al livello
            successivo, qui troverai l&apos;ambiente giusto per farlo.
          </p>
          <p className="hero__subtitle">
            Allenati quando vuoi. Modella il tuo fisico come non hai mai fatto prima. Il momento giusto è adesso.
          </p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onPrimaryCta}>
              Inizia adesso
            </button>
            <a href="#manifesto" className="btn btn--ghost">
              Leggi il manifesto
            </a>
          </div>

          <ul className="hero__kickers" aria-label="Valori chiave">
            <li>Aperta 24/7</li>
            <li>Attrezzature di livello mondiale</li>
            <li>Per ogni eta e livello</li>
          </ul>
        </div>

        <div className="hero__visuals" aria-label="Moodboard palestra">
          <figure>
            <img src={mediaAssets.heroSecondary} alt="Atleta in allenamento con attrezzatura professionale" />
          </figure>
          <figure>
            <img src={mediaAssets.atmosphereOne} alt="Dettaglio manubri e zona libera" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}
