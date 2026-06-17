import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

/**
 * Breadcrumb trail. `trail` is the ancestor links; `current` is the current
 * page label. If `subpages` are given, the current item becomes a toggle that
 * opens a flyout of sibling/child pages (state-driven, closes on outside click).
 */
export default function Breadcrumb({ trail = [], current, subpages = [] }) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (itemRef.current && !itemRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    // The original stylesheet ships `.Breadcrumb { visibility: hidden }` and the
    // site's (absent) main.js revealed it. An inline style guarantees it shows
    // regardless of any higher-specificity rule in the bundled CSS.
    <nav className="Breadcrumb" style={{ visibility: 'visible' }}>
      <ol className="Breadcrumb--list" aria-label="Breadcrumb">
        {trail.map((t) => (
          <li className="Breadcrumb--list--item" key={t.to}>
            <Link className="Breadcrumb--link" to={t.to}>{t.label}</Link>
            <Icon name="16--breadcrumb-separator" />
          </li>
        ))}

        <li className="Breadcrumb--list--item" ref={itemRef}>
          {subpages.length > 0 ? (
            <>
              <button
                className="Breadcrumb--btn"
                type="button"
                aria-expanded={open}
                aria-current="page"
                onClick={() => setOpen((o) => !o)}
              >
                {current}
                <span className="visuallyhidden">Show subpages</span>
                <Icon name="16--breadcrumb-arrow" />
              </button>
              <div className={`Breadcrumb--flyout${open ? ' is-open' : ''}`}>
                <div className="Breadcrumb--flyout--inner">
                  <ul className="Breadcrumb--flyout--list">
                    {subpages.map((s) => (
                      <li className="Breadcrumb--flyout--item" key={s.to}>
                        <Link className="Breadcrumb--flyout--link" to={s.to}>{s.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <span aria-current="page">{current}</span>
          )}
        </li>
      </ol>
    </nav>
  );
}
