// Құлыншақ website — Header & Footer chrome
const { Button, Badge } = window.DesignSystem_d688da;

function Header({ route, onNav, mobile }) {
  const links = [
    ['home', 'Басты бет'],
    ['learn', 'Сабақтар'],
    ['assembly', 'Құрастыру'],
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 16, padding: mobile ? '12px 16px' : '14px 28px',
      background: 'var(--header-bg, rgba(245,238,221,0.86))', backdropFilter: 'blur(8px)',
      borderBottom: '2px solid var(--line)',
    }}>
      <button onClick={() => onNav('home')} style={{
        display: 'flex', alignItems: 'center', gap: 9, border: 'none', background: 'none', cursor: 'pointer',
      }}>
        <span style={{ fontSize: mobile ? 48 : 68, lineHeight: 1, color: 'var(--logo-knight, var(--ink))', margin: mobile ? '-12px 0' : '-18px 0', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.35))' }}>♞</span>
        <span style={{ font: 'var(--fw-black) 24px var(--font-display)', letterSpacing: '-0.02em', color: 'var(--ink)' }}>Құлыншақ</span>
      </button>
      {!mobile && (
        <nav style={{ display: 'flex', gap: 4 }}>
          {links.map(([k, label]) => (
            <button key={k} onClick={() => onNav(k)} style={{
              border: 'none', background: route === k ? 'var(--amber-100)' : 'transparent',
              color: route === k ? 'var(--amber-700)' : 'var(--ink-2)',
              font: 'var(--fw-bold) 15px var(--font-display)', padding: '9px 15px',
              borderRadius: 'var(--radius-pill)', cursor: 'pointer',
            }}>{label}</button>
          ))}
        </nav>
      )}
      <Button variant="accent" size={mobile ? 'sm' : 'md'} onClick={() => onNav('order')}>
        Тапсырыс{mobile ? '' : ' беру'}
      </Button>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      background: 'var(--footer-bg, var(--ink))', color: 'var(--footer-link, var(--paper))', padding: '40px 28px 30px',
    }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 24 }}>♞</span>
            <span style={{ font: 'var(--fw-black) 22px var(--font-display)', color: 'var(--footer-title, var(--paper-hi))' }}>Құлыншақ</span>
          </div>
          <p style={{ color: 'var(--footer-dim, var(--ink-4))', fontSize: 14, marginTop: 10, lineHeight: 1.6 }}>
            Балаға шахматты үйрететін құрастырмалы қорап. Әр сабақта — QR арқылы видео.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap' }}>
          <FooterCol title="Өнім" items={['Не бар қорапта', 'Құрастыру', 'Стикер пак']} />
          <FooterCol title="Оқу" items={['Барлық сабақ', 'Видео сабақтар', 'Ережелер']} />
          <FooterCol title="Байланыс" items={['WhatsApp', 'Instagram', 'YouTube']} />
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container)', margin: '26px auto 0', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.12)', color: 'var(--footer-dim, var(--ink-4))', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
        © 2026 Құлыншақ · Қазақстанда жасалған
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{ font: 'var(--fw-bold) 13px var(--font-display)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--amber-400)', marginBottom: 10 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {items.map((t) => <a key={t} href="#" style={{ color: 'var(--footer-link, var(--paper))', textDecoration: 'none', fontSize: 14 }}>{t}</a>)}
      </div>
    </div>
  );
}

Object.assign(window, { Header, Footer });
