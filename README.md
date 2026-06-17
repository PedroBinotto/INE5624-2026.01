# UZH Natural History Museum — "Visitor Information" (React reproduction)

A workable React + Vite project reconstructed from `unchanged.html`, a single-file
scrape (produced by [`monolith`](https://github.com/Y2Z/monolith)) of
<https://www.nmz.uzh.ch/en/besucherinformation.html>.

The original artifact was a ~13 MB unmaintainable blob with **everything inlined**
as base64 (CSS, fonts, images, icons). This project pulls those apart into real,
editable files and renders the page in a normal dev workflow.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## How it's structured

The page was originally rendered from raw HTML strings; it has since been
**rebuilt as idiomatic React components** — no `html-react-parser`, no imperative
DOM manipulation. Routing is handled by `react-router-dom`.

```
index.html                  App shell (mounts React)
src/
  main.jsx                  React entry; imports the stylesheets
  App.jsx                   Routes (react-router)
  chrome/Layout.jsx         Sprite + Header + <Outlet/> + Footer
  components/
    Header.jsx              Logo, mobile burger (useState), search
    MainNav.jsx             Top-bar nav; dropdowns are React state (aria-expanded)
    Breadcrumb.jsx          Trail + optional subpages flyout (state-driven)
    Footer.jsx              Contact / Quicklinks / social / meta
    Slideshow.jsx           Hero carousel on swiper/react
    Teaser.jsx              Content card used in the grids
    Image.jsx               Responsive image box
    Icon.jsx                One sprite icon (<use href="#name">)
    Sprite.jsx              Inlines the icon sprite once
  data/nav.js               Top-bar menu model (edit the menu here)
  pages/
    Home.jsx                "Visitor Information" landing page ("/")
    Exhibitions.jsx         Grid of all exhibitions ("/exhibitions")
    Exhibition.jsx          Single exhibition ("/exhibitions/:slug")
    Accessibility.jsx       Two-column: text + live map ("/accessibility")
    RegistrationForGroups.jsx  Group registration form
    NotImplemented.jsx      Placeholder for unbuilt nav destinations ("*")
    exhibitions-data.js     Exhibition content model
  styles/uzh-main.css       The site's full stylesheet (decoded, fonts embedded)
  styles/pages.css          Styles for the scaffolded pages
  assets/sprite.svg         Icon sprite (imported + inlined by Sprite.jsx)
public/assets/              img-0..4 (logos, slideshow), sprite.svg
extracted/                  Reference dumps from the original scrape
```

### Routes & top-bar wiring

| Nav item | Route |
|----------|-------|
| Visitor Information ▸ Schedule visit | `/not-implemented` |
| Visitor Information ▸ Accessibility | `/accessibility` |
| Exhibitions | `/exhibitions` → `/exhibitions/:slug` |
| Agenda (in German), Schools, Collections | `/not-implemented` |
| Guided Tours and Events ▸ Registration for groups | `/registration-for-groups` |
| Guided Tours and Events ▸ Birthday parties for children | `/not-implemented` |

Any other top-bar / header destination (search, Contact, Deutsch, …) falls
through to the `NotImplemented` placeholder via the `*` route. Footer links to
real external UZH pages are left as normal outbound links.

### Interactivity (idiomatic React)

- **Mobile menu / nav dropdowns / breadcrumb flyout** — plain `useState`. The
  stylesheet already reacts to `aria-expanded` and the `mobilenav-open` /
  `navitem-open` html classes, so components just render those (the html classes
  are synced in a `useEffect`). Outside-click / Esc close via scoped listeners.
- **Slideshow** — the official `swiper/react` `<Swiper>` / `<SwiperSlide>`
  components (autoplay, external arrows + pagination wired through refs).
- **Icons** — `<Sprite/>` inlines `src/assets/sprite.svg` once; `<Icon name="…"/>`
  references a symbol by id.

## What was recovered / reproduced

- **Styling** — the inlined `<link rel="stylesheet" data:…>` (1.9 MB) was decoded
  to `src/styles/uzh-main.css`. Web fonts remain embedded as data URIs inside it,
  so the project is fully offline.
- **Images** — 5 unique inlined images extracted to `public/assets/`.
- **Icons** — every `<use>` had its sprite-fragment id destroyed by the scraper,
  but the ids equal the `.Icon[data-name]` values, so they were restored. The
  sprite is now bundled (`src/assets/sprite.svg`) and inlined by `<Sprite/>`.
- **Interactivity** — the original logic lived in a *remote* `main.js` that
  `monolith` left as a URL (never inlined), so it was re-implemented as React
  components/state (see "Interactivity" above) rather than ported vanilla JS.

## Known limitations

- **Footer map** renders empty. The original `.js-Map` canvas was filled by a
  dynamic mapping library/API tied to the live site; that dependency is not part
  of the static artifact.
- **Content** is the original museum copy plus placeholder exhibition text
  (`exhibitions-data.js`) for the scaffolded pages — swap in real content as
  needed. Footer links still point at the real external UZH pages.
- Analytics (Matomo) and the original jQuery bundle were intentionally dropped.

The original scraped scripts are preserved verbatim under `extracted/` for
reference if you want to compare behaviour.
