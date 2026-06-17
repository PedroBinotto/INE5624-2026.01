import spriteRaw from '../assets/sprite.svg?raw';

// Inline the icon sprite once near the document root so every <use href="#…">
// resolves. dangerouslySetInnerHTML is the standard way to embed a static,
// trusted SVG sprite in React.
const sprite = spriteRaw
  .replace(/<\?xml[^>]*\?>/, '')
  .replace('<svg ', '<svg aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden" ');

export default function Sprite() {
  return <div hidden dangerouslySetInnerHTML={{ __html: sprite }} />;
}
