import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';

const humanize = (seg) =>
  seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

/** Placeholder for nav destinations that aren't built yet (catch-all route). */
export default function NotImplemented() {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const last = segments[segments.length - 1] || '';
  const title = !last || last === 'not-implemented' ? 'Coming soon' : humanize(last);

  return (
    <main id="main-content">
      <section className="ContentArea">
        <div className="Page NotImplemented">
          <Breadcrumb trail={[{ label: 'Home', to: '/' }]} current={title} />

          <p className="NotImplemented--tag">Coming soon</p>
          <h1 className="Intro--title richtext">{title}</h1>
          <div className="TextImage--content richtext">
            <p>This section is part of the navigation scaffold but doesn’t have
            content yet (<code>{pathname}</code>).</p>
            <p>
              <Link className="Link size-small" to="/">Back to Visitor Information</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
