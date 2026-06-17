import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

/**
 * "Go back one level" link, shown bottom-right at the end of a page.
 * `to` is the parent route, `label` names it (e.g. "Exhibitions").
 */
export default function BackLink({ to, label }) {
  return (
    <div className="BackLink">
      <Link className="Link size-small BackLink--link" to={to}>
        Back to {label}
      </Link>
    </div>
  );
}
