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
          <p className="eyebrow">Pre-order aperto ora</p>
          <h1 className="hero__title">{appConfig.brandName}</h1>
          <p className="hero__location">
            L&apos;America del ferro arriva a {appConfig.city}, {appConfig.province}.
          </p>
          <p className="hero__subtitle">
            Solo macchinari seri. Zero compromessi. Un ambiente pensato per chi vuole allenarsi forte, con setup
            tecnico, atmosfera da big gym USA e standard fuori scala per il territorio.
          </p>
          <p className="hero__subtitle">
            Nessuna foto di cantiere, solo visione: stiamo costruendo una sala dove ogni sessione deve lasciare il
            segno. Il pre-order serve a bloccare il tuo posto prima dell&apos;apertura di aprile.
          </p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onPrimaryCta}>
              Blocca il tuo posto
            </button>
            <a href="#equipment" className="btn btn--ghost">
              Scopri i macchinari
            </a>
          </div>

          <ul className="hero__kickers" aria-label="Valori chiave">
            <li>Hardcore setup</li>
            <li>Linee premium selezionate</li>
            <li>Apertura prevista ad aprile 2026</li>
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
