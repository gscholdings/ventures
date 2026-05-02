// LogoBar.jsx — "trusted by" client strip
function LogoBar() {
  const clients = [
    { name: 'Deloitte', style: { fontFamily: 'Helvetica, Arial', fontWeight: 800, color: '#000', fontSize: 22, letterSpacing: '-0.02em' } },
    { name: 'Portland HA', style: { fontFamily: 'Georgia', fontWeight: 700, color: 'var(--pps-navy)', fontSize: 14 }, sub: true },
    { name: 'instacart', style: { fontFamily: 'Helvetica', fontWeight: 800, color: '#43B02A', fontSize: 22 } },
    { name: 'Coca-Cola', style: { fontFamily: 'Georgia', fontWeight: 700, color: '#E61A27', fontSize: 14 }, circle: true },
    { name: 'Robinhood', style: { fontFamily: 'Helvetica', fontWeight: 700, color: '#00C805', fontSize: 18 } },
    { name: 'UMass', style: { fontFamily: 'Georgia, serif', fontWeight: 700, color: 'var(--pps-navy)', fontSize: 14 }, sub: true },
  ];

  return (
    <Section bg="white" pad="md">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        {clients.map(c => (
          <div key={c.name} style={{
            ...c.style,
            opacity: 0.85,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            ...(c.circle ? { borderRadius: '50%', border: '2px solid #E61A27', padding: '14px 12px', fontSize: 11 } : {}),
          }}>
            {c.sub ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
                <span style={{ fontSize: 10, opacity: 0.7 }}>UNIVERSITY OF</span>
                <span style={{ fontSize: 18 }}>{c.name === 'UMass' ? 'Massachusetts' : 'PORTLAND'}</span>
                <span style={{ fontSize: 9, opacity: 0.6 }}>{c.name === 'UMass' ? 'Amherst · Boston · Lowell' : 'HOUSING AUTHORITY · MAINE'}</span>
              </div>
            ) : c.name}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 28 }}>
        {[0, 1, 2, 3].map(i => (
          <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === 1 ? 'var(--pps-navy)' : 'var(--pps-fog)' }}></span>
        ))}
      </div>
    </Section>
  );
}

window.LogoBar = LogoBar;
