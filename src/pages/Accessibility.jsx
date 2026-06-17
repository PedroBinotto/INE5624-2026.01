import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';

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
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
