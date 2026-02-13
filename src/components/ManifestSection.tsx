import { mediaAssets } from '../media';

export function ManifestSection() {
  return (
    <section className="manifest section-surface" id="manifesto">
      <div className="container manifest__layout">
        <div className="manifest__copy">
          <p className="eyebrow">Manifesto</p>
          <h2>Qui il ferro non e arredamento: e cultura.</h2>
          <p>
            HOUSE OF MUSCLE 2.0 nasce con un obiettivo semplice: riportare un modello di allenamento americano serio
            in Italia, senza compromessi estetici e senza finta motivazione da social.
          </p>
          <p>
            Ogni zona e progettata per la performance: selezione macchine, progressione carichi, gestione flussi e
            rispetto per chi si allena davvero. Niente fronzoli, niente ambiente da passerella.
          </p>
          <p className="manifest__quote">
            “Se vuoi allenarti forte, devi allenarti in un posto che parla la tua stessa lingua: intensita, disciplina,
            risultati.”
          </p>
        </div>

        <figure className="manifest__media">
          <img src={mediaAssets.manifesto} alt="Allenamento intenso in palestra professionale" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
