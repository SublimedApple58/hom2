import { appConfig } from '../config';

interface HeroSectionProps {
  onPrimaryCta: () => void;
}

export function HeroSection({ onPrimaryCta }: HeroSectionProps) {
  return (
    <section className="hero section-surface" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__content">
        <p className="eyebrow">Pre-order aperto ora</p>
        <h1 className="hero__title">{appConfig.brandName}</h1>
        <p className="hero__location">
          L&apos;America del ferro arriva a {appConfig.city}, {appConfig.province}.
        </p>
        <p className="hero__subtitle">
          Solo macchinari seri. Zero compromessi. Preordina ora il tuo abbonamento.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={onPrimaryCta}>
            Blocca il tuo posto
          </button>
          <a href="#equipment" className="btn btn--ghost">
            Scopri i macchinari
          </a>
        </div>
        <ul className="hero__highlights" aria-label="Punti chiave">
          <li>Hardcore setup</li>
          <li>Linee premium selezionate</li>
          <li>Apertura prevista ad aprile 2026</li>
        </ul>
      </div>
    </section>
  );
}
