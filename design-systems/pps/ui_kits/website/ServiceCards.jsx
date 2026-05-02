// ServiceCards.jsx — "Got conflict?" 3-up card grid with circular icon medallions
function ServiceCards() {
  const cards = [
    { icon: 'target', title: 'Conflict Coaching', body: 'One-on-one sessions to help individuals navigate active disputes with clarity and confidence.', color: 'navy' },
    { icon: 'users', title: 'Team Mediation', body: 'Facilitated dialogue to surface underlying tensions and rebuild working relationships.', color: 'orange' },
    { icon: 'graduation-cap', title: 'Workplace Training', body: 'Workshops and certifications that prevent conflict before it derails productivity.', color: 'navy' },
  ];

  return (
    <Section bg="bone" pad="lg">
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(28px, 3.4vw, 40px)',
        textAlign: 'center',
        margin: '0 0 56px',
        lineHeight: 1.2,
        color: 'var(--pps-navy)',
      }}>
        <AccentWord>Got conflict?</AccentWord>{' '}
        We can help bring <AccentWord>peace</AccentWord> to your team
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {cards.map(c => (
          <div key={c.title} style={{
            position: 'relative',
            background: c.color === 'orange' ? 'var(--pps-orange)' : 'var(--pps-navy)',
            color: '#fff',
            paddingTop: 60,
            paddingBottom: 32,
            paddingLeft: 28,
            paddingRight: 28,
            borderRadius: 4,
            boxShadow: '0 8px 20px rgba(15,46,60,0.10)',
            transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 240ms',
          }}>
            {/* photo strip top */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 200,
              background: c.color === 'orange'
                ? 'linear-gradient(135deg,#c87a4a 0%, #f8a070 100%)'
                : 'linear-gradient(135deg,#3a4a55 0%, #647281 100%)',
              borderRadius: '4px 4px 0 0',
              transform: 'translateY(-150px)',
              boxShadow: '0 8px 16px rgba(15,46,60,0.18)',
            }}></div>
            {/* icon medallion */}
            <div style={{
              position: 'absolute', top: 36, left: '50%', transform: 'translateX(-50%)',
              width: 56, height: 56, borderRadius: '50%', background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(15,46,60,0.18)',
              zIndex: 2,
            }}>
              <i data-lucide={c.icon} style={{ width: 26, height: 26, color: c.color === 'orange' ? 'var(--pps-orange)' : 'var(--pps-navy)' }}></i>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 12px', textAlign: 'center' }}>{c.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: c.color === 'orange' ? '#fff' : 'rgba(255,255,255,0.85)', textAlign: 'center', margin: 0 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

window.ServiceCards = ServiceCards;
