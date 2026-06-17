import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { getExhibition, exhibitions } from './exhibitions-data.js';

/** A single exhibition detail page (route: "/exhibitions/:slug"). */
export default function Exhibition() {
  const { slug } = useParams();
  const ex = getExhibition(slug);

  if (!ex) {
    return (
      <main id="main-content">
        <section className="ContentArea">
          <div className="Page">
            <h1 className="Intro--title richtext">Exhibition not found</h1>
            <p className="Page--lead richtext">
              We couldn’t find that exhibition. <Link className="Link size-small" to="/exhibitions">Back to all exhibitions</Link>
            </p>
          </div>
        </section>
      </main>
    );
  }

  const others = exhibitions.filter((e) => e.slug !== ex.slug).slice(0, 3);

  return (
    <main id="main-content">
      <section className="Intro">
        <div className="Intro--inner">
          <div className="Intro--content">
            <div className="Image" style={{ '--image_width': 1240, '--image_height': 560 }}>
              <div className="Image--wrapper">
                <img className="Image--img" src={ex.image} alt={ex.title} />
              </div>
            </div>
          </div>
          <div className="Intro--top">
            <h1 className="Intro--title richtext">{ex.title}</h1>
          </div>
        </div>
      </section>

      <section className="ContentArea">
        <div className="Page">
          <Breadcrumb
            trail={[{ label: 'Home', to: '/' }, { label: 'Exhibitions', to: '/exhibitions' }]}
            current={ex.title}
          />

          <p className="ExhibitionCard--meta">{ex.floor} · {ex.dates}</p>
          <div className="TextImage--content richtext">
            {ex.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <p className="Page--back">
            <Link className="Link size-small" to="/exhibitions">All exhibitions</Link>
          </p>
        </div>
      </section>

      <section className="RelatedArea">
        <div className="MasonryGridWrapper">
          <h2 className="ExhibitionGrid--heading">More exhibitions</h2>
          <ul className="ExhibitionGrid">
            {others.map((o) => (
              <li className="ExhibitionGrid--item" key={o.slug}>
                <Link className="ExhibitionCard" to={`/exhibitions/${o.slug}`}>
                  <div className="ExhibitionCard--image">
                    <img className="ExhibitionCard--img" src={o.image} alt={o.title} loading="lazy" />
                  </div>
                  <div className="ExhibitionCard--body">
                    <h2 className="ExhibitionCard--title">{o.title}</h2>
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
