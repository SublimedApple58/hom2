import { mediaAssets } from '../media';

export function ManifestSection() {
  return (
    <section className="manifest section-surface" id="manifesto">
      <div className="container manifest__layout">
        <div className="manifest__copy">
          <h2>Qui non giudichiamo. Qui costruiamo.</h2>
          <p>Crediamo che ognuno abbia una versione migliore dentro di sé.</p>
          <p>Non importa l&apos;età. Non importa il livello di partenza. Non importa quante volte hai provato prima.</p>
          <p>Quello che conta è decidere di iniziare.</p>
          <p>
            Costruiamo forza. Costruiamo sicurezza. Costruiamo disciplina. Che tu voglia perdere peso, tonificare,
            aumentare massa muscolare o prepararti per competere, questo è il tuo spazio.
          </p>
          <p>La differenza non la fanno le promesse. La fanno le scelte quotidiane.</p>
          <p className="manifest__quote">E questa può essere la tua prima scelta giusta.</p>
        </div>

        <figure className="manifest__media">
          <img src={mediaAssets.manifesto} alt="Allenamento intenso in palestra professionale" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
