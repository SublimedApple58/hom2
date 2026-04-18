import { Dumbbell, Activity, Waves, type LucideIcon } from "lucide-react";

/**
 * "Cosa trovi in palestra" — solo aree fisiche che esistono oggettivamente.
 * Zero claim su servizi soft (corsi, PT, schede) che dipendono dall'istruttore.
 */
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const FEATURES: FeatureItem[] = [
  {
    icon: Dumbbell,
    title: "Area pesi liberi",
    desc: "Bilancieri olimpici, manubri da 2 a 50 kg, panche piane, inclinate e declinate, rack per squat e stacco."
  },
  {
    icon: Activity,
    title: "Macchine isotoniche",
    desc: "Linea completa per ogni gruppo muscolare: pettorali, dorso, spalle, gambe, braccia, core."
  },
  {
    icon: Waves,
    title: "Area cardio",
    desc: "Tapis roulant, cyclette verticali e reclinate, ellittiche, vogatori. Sempre abbastanza macchine disponibili."
  },
  {
    icon: Dumbbell,
    title: "Spogliatoi e servizi",
    desc: "Docce calde, armadietti personali, phon. Spazi puliti e riordinati più volte al giorno."
  }
];

export function Features() {
  return (
    <section id="features" className="landing-section">
      <header className="landing-section-header">
        <span className="eyebrow">La palestra</span>
        <h2 className="landing-section-title">Cosa trovi qui dentro</h2>
        <p className="landing-section-sub">
          Attrezzatura completa per allenamento con i pesi, funzionale e cardio.
          Niente fronzoli, tutto quello che serve per allenarsi bene.
        </p>
      </header>

      <div className="features-grid">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="dash-card feature-card">
            <span className="feature-card-icon" aria-hidden="true">
              <Icon size={22} />
            </span>
            <div className="feature-card-body">
              <h3 className="feature-card-title">{title}</h3>
              <p className="feature-card-desc">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
