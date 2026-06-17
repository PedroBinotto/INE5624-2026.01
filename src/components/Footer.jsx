import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

const GOOGLE_MAPS =
  'https://www.google.com/maps/place/Universit%C3%A4t+Z%C3%BCrich/@47.3745896,8.5486629,17z';

const quicklinks = [
  { label: 'UZH museums & collections', href: 'https://www.uzh.ch/cmsssl/en/explore/museums.html' },
  { label: 'Faculty of Science', href: 'http://www.mnf.uzh.ch/en.html' },
  { label: 'Life Science Zurich', href: 'https://www.lifescience-zurich.uzh.ch/en.html' },
  { label: 'Science Lab UZH', href: 'https://www.sciencelab.uzh.ch/en.html' },
];

const social = [
  { label: 'Instagram', icon: '16--instagram', href: 'https://www.instagram.com/naturhistorisches_museum_uzh/' },
  { label: 'Facebook', icon: '16--facebook', href: 'https://www.facebook.com/profile.php?id=61558474912939' },
];

export default function Footer() {
  return (
    <footer className="Footer">
      <p className="visuallyhidden" aria-level="1" role="heading">Footer</p>

      <div className="Footer--main">
        <div className="Footer--column">
          <div className="FooterLinkList">
            <h2 className="FooterLinkList--title">Contact</h2>
            <div className="FooterLinkList--text richtext">
              <p>
                Natural History Museum University of Zürich<br />
                Karl-Schmid-Strasse 4<br />
                CH-8006 Zurich<br />
                <a href={GOOGLE_MAPS} target="_blank" rel="noreferrer">Google maps</a>
              </p>
              <p>
                Tel: +41 44 634 38 38<br />
                <a href="mailto:info@nmz.uzh.ch?subject=NMZ%20Info">Mail</a>
              </p>
              <p><strong>Regular opening hours</strong></p>
              <p>
                Tuesday–Sunday 10 a.m. – 5 p.m.<br />
                Thursday evening 5:30 – 8:00 p.m. (for adults)
              </p>
              <p>Free entrance, wheelchair accessible</p>
            </div>
            <ul className="FooterLinkList--list">
              <li className="FooterLink--item">
                <a className="Link size-small" href="https://www.nmz.uzh.ch/de/besucherinformation/Newsletter0.html">
                  Register for our newsletter (in German)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Footer--column">
          {/* The original map canvas was filled by an external mapping API not
              present in the static artifact; kept as a placeholder. */}
          <div className="Map">
            <div className="Map--container">
              <div className="Map--canvas" />
            </div>
          </div>
        </div>

        <div className="Footer--column">
          <div className="FooterLinkList">
            <h2 className="FooterLinkList--title">Quicklinks</h2>
            <ul className="FooterLinkList--list">
              {quicklinks.map((q) => (
                <li className="FooterLink--item" key={q.href}>
                  <a className="Link size-small" title={q.label} href={q.href} target="_blank" rel="noreferrer">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="Footer--column">
          <div className="FooterSocialMediaList">
            <h2 className="FooterSocialMediaList--title">Follow us</h2>
            <ul className="FooterSocialMediaList--list">
              {social.map((s) => (
                <li className="FooterSocialMediaList--item" key={s.label}>
                  <a className="FooterSocialMediaList--link" href={s.href} target="_blank" rel="noreferrer">
                    <Icon name={s.icon} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="Footer--bottom">
        <h2 className="visuallyhidden">Additional links</h2>
        <div className="Footer--logos">
          <div className="Footer--logos--list">
            <div className="Footer--logos--item">
              <a className="Footer--logo" href="https://www.uzh.ch/en.html" target="_blank" rel="noreferrer">
                <img src="/assets/img-4.svg" alt="Logo of the University of Zurich, to homepage" />
              </a>
            </div>
          </div>
        </div>

        <div className="FooterMeta FooterMeta--has-languages">
          <p className="FooterMeta--copyright">©&nbsp;2023 Universität Zürich</p>
          <nav>
            <ul className="FooterMeta--linkList">
              <li><a className="FooterMeta--link" href="https://www.nmz.uzh.ch/en/impressum.html">About this site</a></li>
              <li><Link className="FooterMeta--link" to="/contact">Contact</Link></li>
              <li><a className="FooterMeta--link" href="https://www.uzh.ch/en/privacy.html">Data Protection Statement</a></li>
            </ul>
            <ul className="FooterMeta--linkList FooterMeta--languages">
              <li className="FooterMeta--list--item">
                <Link className="FooterMeta--link" to="/de" hrefLang="de">Deutsch</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
