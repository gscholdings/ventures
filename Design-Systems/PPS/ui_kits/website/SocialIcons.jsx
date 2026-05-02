// SocialIcons.jsx — inline SVG brand glyphs (Lucide dropped these).
// Single weight, ~1.5–1.75 stroke equivalent, sized via parent style.
function SocialIcon({ name, size = 14, color = 'currentColor', style }) {
  const paths = {
    facebook: <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z" />,
    linkedin: <g><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /><path d="M9 9h3.8v1.7h.05A4.2 4.2 0 0 1 16.6 8.7c4 0 4.7 2.6 4.7 6V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H9z" /></g>,
    twitter: <path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.6l7.9-9L1 2h7l4.8 6.4zM17.7 20h1.7L6.3 4H4.5z" />,
    instagram: <g fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill={color} /></g>,
    youtube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5 3z" />,
    tiktok: <path d="M16.5 3a5.5 5.5 0 0 0 4 4.5v3a8.5 8.5 0 0 1-4-1V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3z" />,
    google: <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.3c1.9-1.8 3-4.4 3-7.3zM12 22c2.7 0 5-1 6.7-2.5l-3.3-2.5a6 6 0 0 1-9-3.2H3v2.6A10 10 0 0 0 12 22zM6.4 13.8a6 6 0 0 1 0-3.6V7.5H3a10 10 0 0 0 0 9zM12 6a5.4 5.4 0 0 1 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.5l3.4 2.7A6 6 0 0 1 12 6z" />,
    yelp: <path d="M14 13l4.5-1.7c.7-.3.8-1.2.2-1.7l-3.4-3a1 1 0 0 0-1.6.6l-.6 4.6c-.1.7.6 1.4 1 1.2zm0 2.4l3 3.4a1 1 0 0 0 1.7-.3l1.5-3.7c.3-.7-.3-1.4-1-1.3l-4.6.6c-.7.1-.9 1-.6 1.3zm-3-2.4V3.4a1 1 0 0 0-1.2-1l-4.7 1.4a1 1 0 0 0-.6 1.6l5.4 7.3c.4.5 1.1.3 1.1-.7zm.5 4.6c0-.6-.7-.9-1.1-.5l-3.5 3.4a1 1 0 0 0 .6 1.7l3.6.4c.6.1 1.1-.5 1-1zm-3 -3.6L4 13.4a1 1 0 0 0 0 1.8l3.6 1.6c.7.3 1.4-.3 1.2-1l-.4-1.7z" />,
  };
  const glyph = paths[name];
  if (!glyph) return null;
  // facebook/twitter/youtube/google/yelp/tiktok use fill; linkedin uses fill; instagram uses stroke
  const useFill = name !== 'instagram';
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={useFill ? color : 'none'} aria-hidden="true" style={{ flexShrink: 0, ...style }}>
      {glyph}
    </svg>
  );
}

window.SocialIcon = SocialIcon;
