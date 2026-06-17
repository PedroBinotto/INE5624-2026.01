import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import MainNav from './MainNav.jsx';

/** Site header: logo, mobile search/burger, and the main navigation. */
export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => setMobileOpen(false), [pathname]);

  // The stylesheet drives the off-canvas menu from this html class.
  useEffect(() => {
    document.documentElement.classList.toggle('mobilenav-open', mobileOpen);
    return () => document.documentElement.classList.remove('mobilenav-open');
  }, [mobileOpen]);

  return (
    <header className="Header">
      <p className="visuallyhidden" aria-level="1" role="heading">Header</p>
      <div className="Header--top">
        <div className="Header--logo">
          <Link className="Logo" to="/">
            <img src="/assets/img-0.svg" alt="Logo of the Natural History Museum, to homepage" width="208" height="92" />
          </Link>
        </div>
        <div className="Header--mobileButtons">
          <Link className="Header--search" to="/search">
            <span className="visuallyhidden">Search</span>
            <Icon name="24--search" />
          </Link>
          <button
            className="Header--burger"
            type="button"
            aria-controls="main-nav"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="visuallyhidden">Open/Close Navigation</span>
            <span className="Header--burger--open"><Icon name="24--menu" /></span>
            <span className="Header--burger--close"><Icon name="24--close" /></span>
          </button>
        </div>
      </div>
      <div className="Header--bottom">
        <div className="Header--bottom--inner">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
