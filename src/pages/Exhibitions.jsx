import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { exhibitions } from './exhibitions-data.js';

/** Grid of all current exhibitions (route: "/exhibitions"). */
export default function Exhibitions() {
  return (
    <main id="main-content">
      <section className="ContentArea">
        <div className="Page">
          <Breadcrumb trail={[{ label: 'Home', to: '/' }]} current="Exhibitions" />

          <h1 className="Intro--title richtext">Exhibitions</h1>
          <div className="TextImage--content richtext Page--lead">
            <p>Discover our current exhibitions — from native wildlife and Ice Age life to
            dinosaurs and the fossils of Monte San Giorgio.</p>
          </div>

          <ul className="ExhibitionGrid">
            {exhibitions.map((ex) => (
              <li className="ExhibitionGrid--item" key={ex.slug}>
                <Link className="ExhibitionCard" to={`/exhibitions/${ex.slug}`}>
                  <div className="ExhibitionCard--image">
                    <img className="ExhibitionCard--img" src={ex.image} alt={ex.title} loading="lazy" />
                  </div>
                  <div className="ExhibitionCard--body">
                    <p className="ExhibitionCard--meta">{ex.floor} · {ex.dates}</p>
                    <h2 className="ExhibitionCard--title">{ex.title}</h2>
                    <p className="ExhibitionCard--teaser">{ex.teaser}</p>
                    <span className="Link size-small ExhibitionCard--more">More</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
