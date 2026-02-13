const machineBrands = ['Star Trac', 'Nautilus', 'Cybex', 'Icarian', 'Hammer Strength'];

export function EquipmentSection() {
  return (
    <section className="equipment section-surface" id="equipment">
      <div className="container">
        <p className="eyebrow">Machine Room</p>
        <h2>Linee selezionate: Star Trac, Nautilus, Cybex, Icarian, Hammer Strength.</h2>
        <p>
          Ogni macchina e stata scelta per portare uno standard USA autentico: stabilita, biomeccanica, carichi
          seri e costruzione industriale.
        </p>
        <div className="equipment__grid">
          {machineBrands.map((brand) => (
            <article className="equipment__card" key={brand}>
              <h3>{brand}</h3>
              <p>Selezione premium pre-apertura per atleti e appassionati no-excuses.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
