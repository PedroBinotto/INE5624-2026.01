import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import Slideshow from '../components/Slideshow.jsx';
import Teaser from '../components/Teaser.jsx';
import Image from '../components/Image.jsx';
import Icon from '../components/Icon.jsx';

const slides = [
  { src: '/assets/img-1.jpg', alt: 'Aktuelles Aussenbild', title: 'Aktuelles Aussenbild', width: 1240, height: 562 },
  { src: '/assets/img-2.jpg', alt: 'Im Urwald der Dinos', title: 'Im Urwald der Dinos', width: 1240, height: 552 },
  { src: '/assets/img-3.jpg', alt: 'Ticinosuchus ferox', title: 'Ticinosuchus ferox Archosaurier Thecodotier', width: 1240, height: 563 },
];

const subpages = [
  { label: 'How to find us', to: '/how-to-find-us' },
  { label: 'Registration for groups', to: '/registration-for-groups' },
  { label: 'Barrier-free accessibility', to: '/accessibility' },
];

/** The original "Visitor Information" landing page (route: "/"). */
export default function Home() {
  return (
    <main id="main-content">
      <Breadcrumb trail={[{ label: 'Home', to: '/' }]} current="Visitor Information" subpages={subpages} />

      <section className="Intro">
        <div className="Intro--inner">
          <div className="Intro--content">
            <Slideshow slides={slides} autoplay={3000} />
          </div>
          <div className="Intro--top">
            <h1 className="Intro--title richtext">Visitor Information</h1>
          </div>
        </div>
      </section>

      <section className="ContentArea">
        <div className="TextImage">
          <div className="TextImage--inner">
            <div className="TextImage--content richtext">
              <p>
                Welcome to the Natural History Museum of the University of Zurich. The
                Anthropological, Botanical, Palaeontological and Zoological museums of the
                University of Zurich were merged to form the Natural History Museum that
                opened its doors to the public on March 19, 2024.<br /><br />
                We recommend that you visit the museum on a sunny day, when the crowds are
                generally smaller!
              </p>
            </div>
          </div>
        </div>

        <section className="RelatedAreaInpage">
          <div className="RelatedAreaInpage--body">
            <div className="MasonryGridWrapper">
              <h2 className="visuallyhidden">Additional Information</h2>
              <div className="MasonryGrid">
                <div className="MasonryGrid--item">
                  <Teaser title="Opening hours">
                    <p>
                      Tuesday – Sunday: 10 a.m. – 5 p.m.<br />
                      Thursdays: 5:30 – 8:00 p.m. (for adults only)
                    </p>
                    <p>
                      <span className="attention">
                        During the following weeks the basement will be closed to visitors from Tuesday to Friday:<br />
                        - 23 March to 20 April 2026<br />
                        - 3 May to 3 July 2026<br />
                        The basement is open normally at weekends.
                      </span>
                    </p>
                  </Teaser>
                </div>

                <div className="MasonryGrid--item">
                  <Teaser title="Opening hours on holidays">
                    <p>
                      <strong>Christmas:</strong><br />
                      - 24.12., 25.12. and 26.12. closed<br />
                      <strong>New Year's Eve/New Year:</strong><br />
                      - 31.12., 1.1. and 2.1. closed<br />
                      <strong>Easter:</strong><br />
                      - Holy Thursday 10 a.m. – 5 p.m. &amp; 5:30 – 8:00 p.m.<br />
                      - Good Friday, Easter Saturday and Easter Sunday 10 a.m. – 5 p.m.<br />
                      - Easter Monday closed<br />
                      <strong>Ascension Day and Whitsun:</strong><br />
                      - Ascension Day 10 a.m. – 5 p.m. &amp; 5:30 – 8:00 p.m.<br />
                      - Whitsun Saturday &amp; Sunday 10 a.m. – 5 p.m.<br />
                      - Whit Monday closed<br /><br />
                      - Sechseläuten Monday closed<br />
                      - 1 May, Labour Day closed<br />
                      - 1 August Federal holiday closed<br />
                      - Knabenschiessen Monday closed<br />
                      - Bettag Sunday 10 a.m. – 5 p.m.
                    </p>
                  </Teaser>
                </div>

                <div className="MasonryGrid--item">
                  <Teaser
                    title="Registration for groups"
                    links={[{
                      label: 'Obligatory online registration for groups',
                      element: (
                        <Link className="Link size-small" to="/registration-for-groups">
                          Obligatory online registration for groups
                        </Link>
                      ),
                    }]}
                  >
                    <p>An online registration is obligatory for groups.</p>
                  </Teaser>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="RelatedArea">
        <div className="MasonryGridWrapper">
          <h2 className="visuallyhidden">Additional Information</h2>
          <div className="MasonryGrid">
            <div className="MasonryGrid--item">
              <Teaser title="Free entrance">
                <p>By making a donation via the exit pricing box (cash or TWINT), you can help to ensure that admission remains free.&nbsp;</p>
                <p>
                  The museum is wheelchair accessible<br />
                  <strong>Attention:&nbsp;</strong>Children under 12 must be accompanied by an adult
                </p>
              </Teaser>
            </div>

            <div className="MasonryGrid--item">
              <Teaser
                title={
                  <span className="Link layout-standalone size-small">
                    Filmprogramm
                    <span className="Link--icon"><Icon name="16--link-internal" /></span>
                  </span>
                }
                image={
                  <div className="Teaser--image">
                    <Image
                      src="https://www.nmz.uzh.ch/dam/jcr:8f085cec-3dfc-4db8-96f2-bcddcf63ea23/Film_Supersinne_der_Tiere_Hoeren_Schwarzbaer.jpg"
                      width={320}
                      height={145}
                    />
                  </div>
                }
                links={[{ label: 'Filmprogram', href: 'https://www.nmz.uzh.ch/de/dauerausstellung/kino.html' }]}
              >
                <p>
                  Vorführung Dienstag–Samstag 11:00 und 15:00 Uhr, am Sonntag 11:00 und 16:00 Uhr<br />
                  <strong>02.–14.06.26<br />Grizzlys – Riesenbären in Nordamerika<br />(43 Min., ab 10 J.)</strong>
                </p>
              </Teaser>
            </div>
          </div>
        </div>
      </section>

      <div className="CrawlerLinks">
        <ul>
          <li><Link to="/how-to-find-us">How to find us</Link></li>
          <li><Link to="/registration-for-groups">Registration for groups</Link></li>
          <li><Link to="/accessibility">Barrier-free accessibility</Link></li>
        </ul>
      </div>
    </main>
  );
}
