// ArticleGrid.jsx — duotone-overlay article grid on dark photo bg
function ArticleGrid() {
  const articles = [
    { title: 'Horizontal Violence in Nursing: How to Recognize & Prevent It', tag: 'Organizational Culture', body: "It's no secret that the healthcare industry in the United States is rife with problems, and nowhere are these issues…", tone: '#5a6470', orange: false },
    { title: 'Test Image Post', tag: 'Uncategorized', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy…', tone: '#9a7a5a', orange: false },
    { title: 'How to Create a Team Charter: Template & Examples', tag: 'Uncategorized', body: "As a manager or team leader, it's imperative to keep your team running as smoothly as possible. While there are…", tone: '#8a6a4a', orange: true },
  ];

  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #2a2520 0%, #1a1815 100%)',
      padding: '112px 0',
      isolation: 'isolate',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(50% 60% at 50% 50%, rgba(15,46,60,0.45) 0%, rgba(0,0,0,0.7) 100%)' }}></div>
      <Container style={{ position: 'relative' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 4vw, 52px)', color: '#fff', margin: 0, lineHeight: 1.1 }}>Latest Articles</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 720, fontSize: 16, lineHeight: 1.6, margin: '14px 0 48px' }}>
          Read our latest blog posts to discover the latest research, tips, and advice to improve your workplace culture and resolve workplace conflicts more quickly.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {articles.map(a => (
            <article key={a.title} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                position: 'relative',
                aspectRatio: '5 / 4',
                background: a.orange
                  ? `linear-gradient(135deg, ${a.tone}, var(--pps-orange))`
                  : `linear-gradient(135deg, ${a.tone}, #c8b8a8)`,
                borderRadius: 4,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}>
                {a.orange && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(241,99,52,0.55)', mixBlendMode: 'multiply' }}></div>
                )}
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'var(--pps-orange)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 300, lineHeight: 1,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                }}>+</div>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17,
                color: a.orange ? 'var(--pps-orange-soft)' : 'var(--pps-orange)',
                margin: '18px 0 8px', lineHeight: 1.25,
              }}>{a.title}…</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, margin: '0 0 18px' }}>{a.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em',
                  color: 'var(--pps-orange)',
                }}>
                  <i data-lucide="tag" style={{ width: 12, height: 12 }}></i>
                  {a.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

window.ArticleGrid = ArticleGrid;
