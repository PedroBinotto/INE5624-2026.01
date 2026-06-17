import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import BackLink from '../components/BackLink.jsx';

const MUSEUM = { lat: 47.3745896, lng: 8.5486629 };
const OSM_EMBED =
  `https://www.openstreetmap.org/export/embed.html?bbox=8.5396%2C47.3706%2C8.5576%2C47.3786&layer=mapnik&marker=${MUSEUM.lat}%2C${MUSEUM.lng}`;
const OSM_LINK = `https://www.openstreetmap.org/?mlat=${MUSEUM.lat}&mlon=${MUSEUM.lng}#map=17/${MUSEUM.lat}/${MUSEUM.lng}`;

/** Two-column accessibility page: text (left) + map location (right). */
export default function Accessibility() {
  return (
    <main id="main-content">
      <section className="ContentArea">
        <div className="Page">
          <Breadcrumb trail={[{ label: 'Home', to: '/' }]} current="Accessibility" />

          <h1 className="Intro--title richtext">Barrier-free accessibility</h1>

          <div className="TwoCol">
            <div className="TwoCol--map" aria-label="Map showing the museum location">
              <div className="MapEmbed">
                <iframe
                  title="Museum location map"
                  src={OSM_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="MapEmbed--caption">
                <a className="Link size-small" href={OSM_LINK} target="_blank" rel="noreferrer">
                  View larger map
                </a>
              </p>
            </div>

            <aside className="TwoCol--text TextImage--content richtext">
              <p>Natural History Museum University of Zürich</p>
              <p>Karl-Schmid-Strasse 4</p>
              <p>CH-8006 Zurich</p>
              <p>Google maps</p>
              <p></p>
              <p>Tel: +41 44 634 38 38</p>

              <h2>Regular opening hours</h2>

              <p>Tuesdasy–Sunday 10 a.m. – 5 p.m.</p>
              <p>Thursday evening 5:30 –8:00 p.m. (for adults)</p>
              <p></p>
              <p>Free entrance, wheelchair accessible</p>

              <h2>Per-person visitation cost</h2>
              <p>General admission to the permanent exhibitions is free of charge. Optional
              guided formats are billed per person:</p>
              <p>
                Guided tour (per person): CHF 12.–<br />
                Reduced — students, AHV/IV, with a valid card: CHF 8.–<br />
                Children under 12 (accompanied): free<br />
                School classes (per pupil): CHF 5.–<br />
                Family ticket (2 adults + children): CHF 30.–
              </p>
              <p>Groups of 10 or more qualify for the reduced rate. Tickets can be paid by
              card or TWINT at the front desk.</p>

              <h2>Accessibility information</h2>
              <p>The museum is fully wheelchair accessible. A step-free entrance leads to
              lifts serving every exhibition floor, and accessible toilets are available on
              each level.</p>
              <p>Wheelchairs and folding stools can be borrowed free of charge at the front
              desk. Assistance dogs are welcome throughout the building, and large-print
              floor plans are available on request.</p>
              <p>Two accessible parking spaces are located directly in front of the entrance.
              For visits requiring additional support, please
              {' '}<Link className="Link size-small" to="/registration-for-groups">let us know in advance</Link>.</p>
            </aside>
          </div>
        </div>
      </section>

      <BackLink to="/" label="Home" />
    </main>
  );
}
