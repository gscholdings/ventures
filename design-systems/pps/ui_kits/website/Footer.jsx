// Footer.jsx — navy footer with logo + columns
function Footer() {
  const cols = [
    { head: 'Services', items: ['Conflict Coaching', 'Team Mediation', 'Workplace Training', 'Online Courses', 'Keynote Speaking'] },
    { head: 'Company', items: ['About', 'Our Team', 'Testimonials', 'Press', 'Contact'] },
    { head: 'Resources', items: ['Articles', 'Free Stuff', 'Case Studies', 'Newsletter'] },
  ];
  return (
    <footer style={{ background: 'var(--pps-navy)', color: '#fff', padding: '72px 0 32px' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <img src="../../assets/logo-white-transparent.png" alt="PPS" style={{ height: 56, marginBottom: 18 }} />
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.6, maxWidth: 340 }}>
              From acute friction to cohesive unity. We're the workplace conflict resolution experts.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 18, color: 'rgba(255,255,255,0.7)' }}>
              {['facebook', 'linkedin', 'twitter', 'instagram'].map(s => (
                <SocialIcon key={s} name={s} size={16} color="rgba(255,255,255,0.7)" />
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.head}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--pps-orange)', marginBottom: 16 }}>{c.head}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(i => (
                  <li key={i}><a href="#" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, borderBottom: 'none' }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 56, paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
          <span>© 2026 Pollack Peacebuilding Systems. All rights reserved.</span>
          <span>+(800) 650-1429 · support@pollackpeacebuilding.com</span>
        </div>
      </Container>
    </footer>
  );
}

window.Footer = Footer;
