/**
 * Content card used in the masonry grids. `links` renders the footer link list;
 * `children` is the body (rich text). Pass `image`/`titleIcon` when needed.
 */
export default function Teaser({ title, titleIcon = false, image, links = [], children }) {
  return (
    <div className="Teaser">
      <div className="Teaser--inner">
        <div className="Teaser--header">
          {image}
          <h3 className="Teaser--title">{title}</h3>
        </div>
        <div className="Teaser--body">
          <div className="Teaser--text richtext">{children}</div>
          <ul className="Teaser--linkList">
            {links.map((l) => (
              <li className="Teaser--linkList--link" key={l.href + l.label}>
                {l.element ?? (
                  <a className="Link size-small" title={l.label} href={l.href}>
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
