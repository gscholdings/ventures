// Header.jsx — utility row + nav. Sticky contact rail is rendered separately in index.
const { useState: useHeaderState } = React;

function Header() {
  const [searchOpen, setSearchOpen] = useHeaderState(false);
  const navItems = ['Home', 'Services', 'About', 'Testimonials', 'Online Courses', '*Free Stuff*', 'Resources', 'Contact'];
  const social = ['facebook', 'linkedin', 'twitter', 'instagram', 'tiktok', 'google', 'yelp'];

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid var(--pps-fog)' }}>
      {/* Utility row */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--pps-fog)' }}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px clamp(20px, 4vw, 48px)', fontSize: 12, color: 'var(--pps-stone)' }}>
          <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <i data-lucide="phone" style={{ width: 13, height: 13, color: 'var(--pps-orange)' }}></i>
              Call us now <strong style={{ color: 'var(--pps-navy)', fontWeight: 600 }}>+(800) 650-1429</strong>
            </span>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <i data-lucide="mail" style={{ width: 13, height: 13, color: 'var(--pps-orange)' }}></i>
              support@pollackpeacebuilding.com
            </span>
            <button onClick={() => setSearchOpen(o => !o)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', color: 'var(--pps-stone)' }}>
              <i data-lucide="search" style={{ width: 14, height: 14 }}></i>
            </button>
            {searchOpen && (
              <input autoFocus placeholder="Search…" style={{ border: '1px solid var(--pps-fog)', borderRadius: 4, padding: '4px 10px', fontSize: 12, fontFamily: 'var(--font-sans)' }} />
            )}
          </div>
        </Container>
      </div>

      {/* Main row */}
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px clamp(20px, 4vw, 48px)', gap: 28 }}>
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', borderBottom: 'none' }}>
          <img src="../../assets/logo-color.png" alt="Pollack Peacebuilding" style={{ height: 44 }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          {navItems.map((n, i) => (
            <a key={n} href="#" style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: i === 0 ? 'var(--pps-orange)' : 'var(--pps-navy)',
              borderBottom: 'none',
            }}>{n}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, color: 'var(--pps-navy)' }}>
          {social.map(s => (
            <SocialIcon key={s} name={s} size={14} color="var(--pps-navy)" style={{ opacity: 0.75 }} />
          ))}
        </div>
      </Container>
    </header>
  );
}

function ContactRail() {
  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'var(--pps-orange)',
      color: '#fff',
      padding: '14px 8px',
      writingMode: 'vertical-rl',
      borderRadius: '6px 0 0 6px',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      zIndex: 50,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      boxShadow: '0 8px 20px rgba(15,46,60,0.18)',
    }}>
      <i data-lucide="message-circle" style={{ width: 14, height: 14 }}></i>
      Contact Us
    </div>
  );
}

window.Header = Header;
window.ContactRail = ContactRail;
