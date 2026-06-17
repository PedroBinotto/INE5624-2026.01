/**
 * Renders one icon from the inlined SVG sprite (see <Sprite/>). `name` matches
 * a sprite symbol id, e.g. "16--link-internal" or "24--search".
 */
export default function Icon({ name }) {
  return (
    <span className="Icon" data-name={name}>
      <svg>
        <use href={`#${name}`} />
      </svg>
    </span>
  );
}
