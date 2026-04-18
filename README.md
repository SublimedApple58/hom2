# House of Muscle — Landing

Landing page pubblica di **House of Muscle**. Vite + React 19 + TypeScript, CSS puro (nessun Tailwind), design system allineato al gestionale interno.

Tutte le CTA principali ("Iscriviti", "Accedi", pricing card) puntano al gestionale in hosting su `https://app.houseofmuscle.it`, dove avvengono iscrizione, pagamento e gestione dell'abbonamento.

## Requisiti

- Node 20+
- npm 10+

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Variabili d'ambiente

Copia `.env.example` in `.env.local` se vuoi sovrascrivere l'URL del gestionale:

```
VITE_APP_URL=https://app.houseofmuscle.it
```

In assenza di valore, il default è `https://app.houseofmuscle.it`.

## Dove mettere mano

| File | Contenuto |
|------|-----------|
| `src/index.css` | Design tokens, palette, typography, componenti (`.button-primary`, `.dash-card`, `.pricing-card`, …) |
| `src/config.ts` | URL gestionale e helper CTA |
| `src/lib/plans.ts` | Listino abbonamenti (MONTHLY/YEARLY/BIENNIAL) — single source of truth |
| `src/components/*.tsx` | Una sezione per file (Navbar, Hero, Pricing, Faq, …) |
| `public/logo.jpeg` + `favicon*.png` | Brand asset |

## Deploy (Vercel)

Il progetto è configurato per Vercel (`vercel.json` → framework Vite).

1. Nuovo progetto Vercel con questa repo.
2. Imposta `VITE_APP_URL=https://app.houseofmuscle.it` nelle env di produzione.
3. Assegna come dominio pubblico `houseofmuscle.it` (il sottodominio `app.houseofmuscle.it` resta sul progetto del gestionale).
