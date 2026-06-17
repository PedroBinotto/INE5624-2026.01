import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { mainNav, serviceNav } from '../data/nav.js';

const isActive = (to, pathname) => {
  if (to === '/not-implemented') return false;
  return to === '/' ? pathname === '/' : pathname.startsWith(to);
};

function ServiceNav() {
  return (
    <div className="MainNav--service">
      <h2 className="visuallyhidden">Section navigation</h2>
      <nav className="ServiceNav">
        <ul className="ServiceNav--list">
          {serviceNav.map((s) => (
            <li className="ServiceNav--list--item" key={s.label}>
              <Link className="ServiceNav--link" to={s.to}>{s.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link className="SearchTrigger" to="/search">
        <Icon name="24--search" />
        <span className="text">Search</span>
      </Link>
    </div>
  );
}

/**
 * Primary navigation. Dropdown open-state is React state — the stylesheet
 * reveals an overlay whenever its trigger has aria-expanded="true", so there's
 * no imperative DOM manipulation. The `navitem-open` html class (used by the CSS
 * for desktop overflow) is synced via an effect.
 */
export default function MainNav() {
  const { pathname } = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const navRef = useRef(null);

  // Close on navigation.
  useEffect(() => setOpenIndex(null), [pathname]);

  // Sync the html class the stylesheet expects.
  useEffect(() => {
    document.documentElement.classList.toggle('navitem-open', openIndex !== null);
    return () => document.documentElement.classList.remove('navitem-open');
  }, [openIndex]);

  // Close when clicking outside the nav or pressing Escape.
  useEffect(() => {
    if (openIndex === null) return;
    const onDocClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null);
    };
    const onKey = (e) => e.key === 'Escape' && setOpenIndex(null);
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [openIndex]);

  return (
    <div className="MainNav" id="main-nav">
      <ServiceNav />
      <h2 className="visuallyhidden">Main navigation</h2>
      <nav className="MainNav--inner" ref={navRef}>
        <ul className="MainNav--list">
          {mainNav.map((item, i) => {
            const active = isActive(item.to, pathname);
            const liClass = `MainNav--list--item${active ? ' is-active' : ''}`;

            if (!item.children) {
              return (
                <li className={liClass} key={item.label}>
                  <Link className="MainNav--link" to={item.to}>{item.label}</Link>
                </li>
              );
            }

            const open = openIndex === i;
            return (
              <li className={liClass} key={item.label}>
                <button
                  className="MainNav--link"
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {item.label}
                  <div className="MainNav--icon">
                    <Icon name="16--link-arrow-sm-right" />
                  </div>
                </button>

                <div className="MainNav--overlay">
                  <div className="MainNav--overlay--scroller">
                    <div className="MainNav--overlay--inner">
                      <div className="MainNav--sub" data-mainnav-index="1">
                        <div className="MainNav--sub--back">
                          <button className="Button" type="button" onClick={() => setOpenIndex(null)}>
                            <span className="Button--inner">Zurück</span>
                            <span className="Button--icon"><Icon name="16--link-arrow-sm-right" /></span>
                          </button>
                        </div>
                        <div className="MainNav--sub--title">
                          <Link className="Link layout-standalone size-small" to={item.to}>
                            <span className="visuallyhidden">{item.label}</span>
                            {item.label}
                            <span className="Link--icon"><Icon name="16--link-internal" /></span>
                          </Link>
                        </div>
                        <ul className="MainNav--sub--list">
                          {item.children.map((c) => (
                            <li className="MainNav--list--item" key={c.label}>
                              <Link className="MainNav--link" to={c.to}>{c.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
