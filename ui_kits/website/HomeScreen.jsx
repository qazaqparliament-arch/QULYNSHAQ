// Кулыншақ website — Home screen
const { Button, Badge, Card, Sticker, ChessPiece, ChessBoard, Callout } = window.DesignSystem_d688da;

function Hero({ onNav, mobile }) {
  return (
    <section style={{
      background: 'linear-gradient(180deg, var(--amber-100), var(--paper) 70%)',
      padding: mobile ? '30px 16px 40px' : '56px 28px 64px',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.05fr 0.95fr',
        gap: mobile ? 28 : 40, alignItems: 'center',
      }}>
        <div>
          <span className="ku-eyebrow">Құрастыр · Жапсыр · Ойна</span>
          <h1 style={{ fontSize: mobile ? 40 : 62, margin: '10px 0 0', color: 'var(--ink)' }}>
            Шахматты<br />ойнап үйрен
          </h1>
          <p style={{ fontSize: mobile ? 17 : 20, color: 'var(--ink-2)', maxWidth: 460, marginTop: 14 }}>
            Кулыншақ — өзің құрастыратын шахмат қорабы. Фигураларды жина, стикерлерін жапсыр, әр сабақтың QR-ын сканерлеп видеодан үйрен.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onNav('order')} iconRight={<span>♞</span>}>Қорапты алу</Button>
            <Button variant="outline" size="lg" onClick={() => onNav('learn')}>Сабақтарды көру</Button>
          </div>
          <div style={{ display: 'flex', gap: 20, marginTop: 26, flexWrap: 'wrap' }}>
            <Stat n="6" label="видео сабақ" />
            <Stat n="32" label="құрастырмалы фигура" />
            <Stat n="4+" label="жас" />
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <BoxArt mobile={mobile} />
          <div style={{ position: 'absolute', top: -6, right: mobile ? 10 : 30 }}>
            <Sticker tone="clay" shape="seal" size={mobile ? 82 : 104} tilt={9}>
              <span style={{ font: 'var(--fw-black) 14px var(--font-display)', lineHeight: 1.05 }}>QR<br />видео</span>
            </Sticker>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div style={{ font: 'var(--fw-black) 30px var(--font-display)', color: 'var(--clay-500)' }}>{n}</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 600 }}>{label}</div>
    </div>
  );
}

// The foldable box "opened like a board" — built from CSS, not an image.
function BoxArt({ mobile }) {
  const S = mobile ? 30 : 40;
  const squares = [];
  for (let i = 0; i < 36; i++) {
    const r = Math.floor(i / 6), c = i % 6;
    squares.push(<div key={i} style={{ background: (r + c) % 2 ? 'var(--square-dark)' : 'var(--square-light)' }} />);
  }
  const pieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'pawn'];
  return (
    <div style={{
      position: 'relative', transform: 'rotate(-3deg)',
      padding: 12, background: 'var(--ink)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: `repeat(6, ${S}px)`, gridAutoRows: `${S}px`,
        borderRadius: 'var(--radius-sm)', overflow: 'hidden',
      }}>{squares}</div>
      <div style={{
        marginTop: 10, display: 'flex', justifyContent: 'space-around',
        background: 'var(--paper-deep)', borderRadius: 'var(--radius-sm)', padding: '8px 6px',
        border: '2px dashed var(--ink-4)',
      }}>
        {pieces.map((p) => <ChessPiece key={p} type={p} size={S * 0.7} />)}
      </div>
    </div>
  );
}

function WhatsInside({ mobile }) {
  const items = [
    { icon: '♟', t: 'Құрастырмалы фигуралар', d: 'Қатырғаз бөлшектерді тесіктер бойынша шығарып жина.' },
    { icon: '★', t: 'Стикер пак', d: 'Әр фигураға өз стикерін жапсыр — өзіңдікі болады.' },
    { icon: '📖', t: 'Кітап-нұсқаулық', d: 'Қалай құрастыру, қалай ойнау — қадам-қадаммен.' },
    { icon: '▶', t: 'QR видео сабақтар', d: 'Сканерле — YouTube-тағы видео сабақ ашылады.' },
  ];
  return (
    <section style={{ padding: mobile ? '40px 16px' : '64px 28px', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <h2 style={{ fontSize: mobile ? 30 : 38, textAlign: 'center' }}>Қорапта не бар?</h2>
      <p style={{ textAlign: 'center', color: 'var(--ink-3)', maxWidth: 520, margin: '6px auto 30px', fontSize: 17 }}>
        Бір қорап — тақта да, фигура да, сабақ та. Қорап тақтадай ашылып-жабылады.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', gap: 16 }}>
        {items.map((it) => (
          <Card key={it.t} variant="paper" pad="md" interactive>
            <div style={{ fontSize: 30, marginBottom: 8 }}>{it.icon}</div>
            <div style={{ font: 'var(--fw-bold) 18px var(--font-display)', color: 'var(--ink)' }}>{it.t}</div>
            <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 4, lineHeight: 1.5 }}>{it.d}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function HowItWorks({ mobile }) {
  const steps = [
    ['Құрастыр', 'Бөлшектерді шығарып фигураларды жина.'],
    ['Жапсыр', 'Стикерлермен фигураларды безендір.'],
    ['Сканерле', 'Сабақтың QR-ын телефонмен оқы.'],
    ['Ойна', 'Видеомен бірге ойнап үйрен.'],
  ];
  return (
    <section style={{ background: 'var(--teal-400)', padding: mobile ? '40px 16px' : '58px 28px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <h2 style={{ fontSize: mobile ? 30 : 38, color: 'var(--paper-hi)', textAlign: 'center' }}>Қалай жұмыс істейді</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 16, marginTop: 28 }}>
          {steps.map(([t, d], i) => (
            <div key={t} style={{ background: 'var(--paper-hi)', borderRadius: 'var(--radius-xl)', padding: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--amber-400)', border: '2px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'var(--fw-black) 20px var(--font-display)' }}>{i + 1}</div>
              <div style={{ font: 'var(--fw-bold) 19px var(--font-display)', marginTop: 12 }}>{t}</div>
              <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 4 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeekLesson({ onNav, mobile }) {
  const l = window.KU_DATA.lessons[2]; // knight
  return (
    <section style={{ padding: mobile ? '40px 16px' : '64px 28px', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: 32, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ChessBoard cell={mobile ? 36 : 44} pieces={[{ square: l.origin, type: l.piece, color: 'black' }]} origin={l.origin} moves={l.moves} />
        </div>
        <div>
          <Badge tone="teal" variant="solid">Сабақ 03 · Ат</Badge>
          <h2 style={{ fontSize: mobile ? 28 : 36, margin: '12px 0 0' }}>Ат тұлпардай секіреді</h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', marginTop: 8 }}>{l.move}</p>
          <div style={{ marginTop: 16 }}>
            <Callout tone="rule" title="Ереже">{l.rule}</Callout>
          </div>
          <div style={{ marginTop: 18 }}>
            <Button variant="secondary" size="lg" onClick={() => onNav('lesson')} iconRight={<span>→</span>}>Сабаққа кіру</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ onNav, mobile }) {
  return (
    <div>
      <Hero onNav={onNav} mobile={mobile} />
      <WhatsInside mobile={mobile} />
      <HowItWorks mobile={mobile} />
      <PeekLesson onNav={onNav} mobile={mobile} />
    </div>
  );
}

Object.assign(window, { HomeScreen });
