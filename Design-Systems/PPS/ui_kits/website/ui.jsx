// ui.jsx — shared primitives for the PPS website kit
const { useState } = React;

function Container({ children, style, ...rest }) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)', ...style }} {...rest}>
      {children}
    </div>
  );
}

function Section({ children, bg = 'bone', pad = 'lg', style }) {
  const bgs = {
    bone: 'var(--pps-bone)',
    mist: 'var(--pps-mist)',
    navy: 'var(--pps-navy)',
    white: '#fff',
  };
  const pads = { sm: '48px 0', md: '72px 0', lg: '112px 0', xl: '144px 0' };
  return (
    <section style={{ background: bgs[bg], padding: pads[pad], color: bg === 'navy' ? '#fff' : 'inherit', ...style }}>
      <Container>{children}</Container>
    </section>
  );
}

function Eyebrow({ children, color = 'orange', style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: color === 'orange' ? 'var(--pps-orange)' : 'var(--pps-navy)',
      marginBottom: 12,
      ...style,
    }}>
      {children}
    </div>
  );
}

function AccentWord({ children, italic = true }) {
  return (
    <span style={{ color: 'var(--pps-orange)', fontStyle: italic ? 'italic' : 'normal' }}>
      {children}
    </span>
  );
}

function Button({ variant = 'orange', size = 'md', children, onClick, full = false, style }) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const variants = {
    orange: { bg: hover ? 'var(--pps-orange-deep)' : 'var(--pps-orange)', color: '#fff', border: 'none' },
    navy:   { bg: hover ? 'var(--pps-navy-deep)' : 'var(--pps-navy)', color: '#fff', border: 'none' },
    outline:{ bg: 'transparent', color: 'var(--pps-navy)', border: '1.5px solid var(--pps-navy)' },
    ghost:  { bg: 'transparent', color: hover ? 'var(--pps-orange-deep)' : 'var(--pps-orange)', border: 'none' },
  };
  const sizes = { sm: '10px 20px 10px 20px', md: '14px 30px', lg: '18px 36px' };
  const v = variants[variant];
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        background: v.bg,
        color: v.color,
        border: v.border,
        padding: sizes[size],
        borderRadius: 999,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: size === 'lg' ? 16 : 14,
        letterSpacing: 0,
        cursor: 'pointer',
        transition: 'background 150ms ease, color 150ms ease, transform 100ms ease',
        transform: pressed ? 'scale(0.98)' : 'scale(1)',
        width: full ? '100%' : 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

window.Container = Container;
window.Section = Section;
window.Eyebrow = Eyebrow;
window.AccentWord = AccentWord;
window.Button = Button;
