import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './chrome/Layout.jsx';
import Home from './pages/Home.jsx';
import Exhibitions from './pages/Exhibitions.jsx';
import Exhibition from './pages/Exhibition.jsx';
import Accessibility from './pages/Accessibility.jsx';
import RegistrationForGroups from './pages/RegistrationForGroups.jsx';
import NotImplemented from './pages/NotImplemented.jsx';

/**
 * Routing for the reconstructed site. The shared header/footer chrome lives in
 * Layout; each route renders its own <main> into the Outlet.
 *
 * Top-bar links resolve as:
 *   Visitor Information (button)            -> "/" (this page)
 *     • Schedule visit                      -> /not-implemented
 *     • Accessibility                       -> /accessibility
 *   Exhibitions                             -> /exhibitions  (-> /exhibitions/:slug)
 *   Agenda (in German)                      -> /not-implemented
 *   Schools                                 -> /not-implemented
 *   Guided Tours and Events (button)        -> /not-implemented
 *     • Registration for groups             -> /registration-for-groups
 *     • Birthday parties for children       -> /not-implemented
 *   Collections                             -> /not-implemented
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="exhibitions/:slug" element={<Exhibition />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="registration-for-groups" element={<RegistrationForGroups />} />
          {/* Every other nav destination lands here */}
          <Route path="*" element={<NotImplemented />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
