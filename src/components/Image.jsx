/**
 * The site's responsive image box. Width/height set the intrinsic aspect ratio
 * via the CSS custom properties the stylesheet expects.
 */
export default function Image({ src, alt = '', title, width = 1240, height = 700, className = '' }) {
  return (
    <div className={`Image ${className}`.trim()} style={{ '--image_width': width, '--image_height': height }}>
      <div className="Image--wrapper">
        <img className="Image--img" src={src} alt={alt} title={title} />
      </div>
    </div>
  );
}
