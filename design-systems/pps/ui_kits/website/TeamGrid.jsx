// TeamGrid.jsx — "Meet the team" 3-up; one orange anchor card
function TeamGrid() {
  const team = [
    { role: 'Founder & Peace Director', name: 'Jeremy Pollack, Ph.D.', body: "As the founder of PPS, Jeremy oversees and consults with his team on all peace processes and regularly delivers keynote presentations on conflict resolution.", bg: 'navy', tone: '#3a4a55' },
    { role: 'Program Director / Peacebuilder', name: 'Sara Jeckovich, M.A.', body: "As a Program Director and Peacebuilder, Sara leads the charge on implementing our services and is our clients' first point of contact throughout the engagement.", bg: 'orange', tone: '#7d6f5e' },
    { role: 'Program Director / Peacebuilder', name: 'Luke Wiesner, M.A.', body: "As a Program Director and Peacebuilder, Luke consults with clients to design conflict intervention and prevention services tailored to their goals.", bg: 'navy', tone: '#5a6b4a' },
  ];

  return (
    <Section bg="bone" pad="lg">
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(28px, 3.4vw, 44px)',
        margin: '0 0 12px',
        lineHeight: 1.15,
        color: 'var(--pps-navy)',
      }}>
        <AccentWord>Who'll Be Working for You.</AccentWord>{' '}
        <span style={{ color: 'var(--pps-navy)' }}>Meet Our Team of Experts.</span>
      </h2>
      <p style={{ fontSize: 16, color: 'var(--pps-stone)', maxWidth: 640, margin: '0 0 56px', lineHeight: 1.6 }}>
        Our nationwide team of coaches, trainers, and peacebuilders have diverse conflict management experiences and methodologies that inform the solutions to your organization's needs. Here are just a few of our core staff members.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {team.map(m => {
          const isOrange = m.bg === 'orange';
          return (
            <div key={m.name} style={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(15,46,60,0.10)',
              display: 'flex', flexDirection: 'column',
              background: isOrange ? 'var(--pps-orange)' : 'var(--pps-navy)',
            }}>
              <div style={{
                aspectRatio: '4 / 5',
                background: `linear-gradient(135deg, ${m.tone} 0%, ${m.tone}cc 100%)`,
              }}></div>
              <div style={{ padding: '20px 22px 26px', color: '#fff' }}>
                <div style={{
                  fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em',
                  color: isOrange ? 'var(--pps-navy)' : 'var(--pps-orange)',
                  marginBottom: 8,
                }}>{m.role}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 12px', lineHeight: 1.15 }}>{m.name}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: isOrange ? '#fff' : 'rgba(255,255,255,0.88)', margin: '0 0 14px' }}>{m.body}</p>
                <div style={{
                  display: 'inline-flex', width: 24, height: 24, borderRadius: 3,
                  background: isOrange ? 'var(--pps-navy)' : 'rgba(255,255,255,0.12)',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <SocialIcon name="linkedin" size={13} color="#fff" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

window.TeamGrid = TeamGrid;
