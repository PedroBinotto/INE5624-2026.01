import { Outlet } from 'react-router-dom';
import Sprite from '../components/Sprite.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

/** Site chrome shared by every route: icon sprite + header + page + footer. */
export default function Layout() {
  return (
    <div className="uzh-page">
      <Sprite />
      <a id="top" />
      <div className="SkipLink__container">
        <a className="Link layout-standalone icon-position-after SkipLink" href="#main-content">
          Skip navigation
        </a>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
