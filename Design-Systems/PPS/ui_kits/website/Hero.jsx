// Hero.jsx — full-bleed photo hero with two-tone CTAs and "As Seen On" rail
const { useState: useHeroState } = React;

function Hero() {
  const [active, setActive] = useHeroState('current');

  return (
    <div style={{
      position: 'relative',
      minHeight: 540,
      background: 'linear-gradient(120deg, #d6cabb 0%, #b8a89a 38%, #8a7a6a 100%)',
      overflow: 'hidden',
      isolation: 'isolate',
    }}>
      {/* Faux photo: warmth tones with soft vignette */}
      <div style={{
        position: 'absolute', inset: 0, background:
          'radial-gradient(60% 80% at 50% 60%, rgba(0,0,0,0) 30%, rgba(15,46,60,0.45) 100%), ' +
          'linear-gradient(120deg, rgba(255,255,255,0.15), rgba(15,46,60,0.05) 60%)',
      }}></div>

      {/* Subtle "people working" silhouettes */}
      <div aria-hidden="true" style={{ position:'absolute', inset:0, opacity: 0.18 }}>
        <div style={{ position:'absolute', left:'8%', top:'30%', width:160, height:200, borderRadius:'50% 50% 30% 30%', background:'#0F2E3C', filter:'blur(10px)' }}></div>
        <div style={{ position:'absolute', right:'12%', top:'34%', width:140, height:180, borderRadius:'50% 50% 30% 30%', background:'#0F2E3C', filter:'blur(10px)' }}></div>
      </div>

      <Container style={{ position: 'relative', padding: '72px clamp(20px, 4vw, 48px)', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 32 }}>
        <div style={{ maxWidth: 580 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            margin: 0,
            color: '#fff',
            textShadow: '0 2px 24px rgba(15,46,60,0.4)',
          }}>
            <span style={{ color: 'var(--pps-orange)' }}>Workplace Conflict<br/>Resolution</span><br/>
            <span style={{ color: '#fff' }}>Consulting Firm</span>
          </h1>
          <p style={{
            color: '#fff',
            fontSize: 16,
            lineHeight: 1.6,
            maxWidth: 480,
            marginTop: 18,
            textShadow: '0 1px 8px rgba(15,46,60,0.6)',
          }}>
            Do you have a current workplace conflict that needs to be addressed, or are you looking for training to reduce or prevent future conflicts? <strong>We're the Workplace Conflict Resolution experts!</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24, alignItems: 'flex-start' }}>
            <Button variant={active === 'current' ? 'orange' : 'outline'} size="md" onClick={() => setActive('current')} style={{ minWidth: 320 }}>
              We Have a Current Coworker Conflict
            </Button>
            <Button variant={active === 'training' ? 'navy' : 'outline'} size="md" onClick={() => setActive('training')} style={{ minWidth: 320 }}>
              We Need Conflict Resolution Training
            </Button>
          </div>
        </div>

        {/* As Seen On rail */}
        <div style={{
          background: 'rgba(255,255,255,0.92)',
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          alignItems: 'center',
          alignSelf: 'start',
          borderRadius: 4,
          backdropFilter: 'blur(4px)',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--pps-navy)' }}>As Seen On</div>
          {['ABC', 'CBS', 'NBC', 'FOX'].map(net => (
            <div key={net} style={{
              width: 66, height: 66, borderRadius: '50%', background: '#0F2E3C', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 18, letterSpacing: '0.03em',
            }}>
              {net.toLowerCase()}
            </div>
          ))}
        </div>
      </Container>

      {/* Play button overlay */}
      <button style={{
        position: 'absolute',
        left: '54%',
        top: '52%',
        width: 72, height: 72,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        border: '4px solid rgba(255,255,255,0.6)',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
      }}>
        <i data-lucide="play" style={{ width: 26, height: 26, color: 'var(--pps-orange)', fill: 'var(--pps-orange)' }}></i>
      </button>
    </div>
  );
}

window.Hero = Hero;
