// Кулыншақ website — Lesson detail screen
const { Button, Badge, Card, Callout, ChessPiece, ChessBoard, QRTag, StepList } = window.DesignSystem_d688da;

function VideoPlayer({ lesson, mobile }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div style={{
      position: 'relative', aspectRatio: '16 / 9', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
      background: 'linear-gradient(150deg, var(--teal-500), var(--teal-700))', border: '3px solid var(--ink)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.16, backgroundImage: 'radial-gradient(var(--paper-hi) 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }} />
      <ChessPiece type={lesson.piece} size={mobile ? 70 : 104} color="white" style={{ position: 'absolute', opacity: 0.9 }} />
      <button onClick={() => setPlaying(!playing)} style={{
        position: 'relative', width: mobile ? 62 : 78, height: mobile ? 62 : 78, borderRadius: '50%',
        background: 'var(--clay-400)', color: 'var(--paper-hi)', border: '4px solid var(--paper-hi)',
        boxShadow: 'var(--shadow-lg)', cursor: 'pointer', fontSize: mobile ? 24 : 30, paddingLeft: playing ? 0 : 5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{playing ? '❚❚' : '▶'}</button>
      <div style={{ position: 'absolute', bottom: 12, left: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
        <Badge tone="ink">{playing ? '0:12' : '0:00'} / {lesson.mins}:00</Badge>
        <span style={{ color: 'var(--paper-hi)', font: 'var(--fw-bold) 13px var(--font-mono)', opacity: 0.8 }}>YouTube · Кулыншақ</span>
      </div>
    </div>
  );
}

// Видеосы қорапта ашылатын сабақтар үшін: кейс ішінде не бар — шолу видеосы
function BoxPeekVideo({ mobile }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div style={{
      position: 'relative', aspectRatio: '16 / 9', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
      background: 'linear-gradient(150deg, #55705C, #37473C)', border: '3px solid var(--ink)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.14, backgroundImage: 'radial-gradient(#F5EEDA 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }} />
      <div style={{ position: 'relative', font: `var(--fw-black) ${mobile ? 19 : 26}px var(--font-display)`, color: '#F5EEDA', textAlign: 'center', padding: '0 16px' }}>
        Қорап ішінде не бар?
      </div>
      <button onClick={() => setPlaying(!playing)} style={{
        position: 'relative', width: mobile ? 62 : 78, height: mobile ? 62 : 78, borderRadius: '50%',
        background: 'var(--clay-400)', color: '#FCF8EF', border: '4px solid #FCF8EF',
        boxShadow: 'var(--shadow-lg)', cursor: 'pointer', fontSize: mobile ? 24 : 30, paddingLeft: playing ? 0 : 5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{playing ? '❚❚' : '▶'}</button>
      <div style={{ position: 'absolute', bottom: 12, left: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
        <Badge tone="ink">видео шолу</Badge>
        <span style={{ color: '#F5EEDA', font: 'var(--fw-bold) 13px var(--font-mono)', opacity: 0.85 }}>YouTube · Кулыншақ</span>
      </div>
    </div>
  );
}

function LessonScreen({ lesson, onNav, onOpen, mobile }) {
  const lessons = window.KU_DATA.lessons;
  const l = lesson || lessons[2];
  const idx = lessons.findIndex((x) => x.slug === l.slug);
  const prev = lessons[idx - 1], next = lessons[idx + 1];

  // Кітап беті сияқты парақтау: алдымен ағымдағы бет «көтеріліп» жабылады
  // (rotateY 0 → ±90°), дәл сол сәтте сабақ ауысады да, жаңа бет қарсы
  // жақтан жазылып ашылады (∓90° → 0). Түбі (түптеу) — сол жақта.
  const pageRef = React.useRef(null);
  const shadeRef = React.useRef(null);
  const flipping = React.useRef(false);
  const pendingIn = React.useRef(null);

  const turnTo = (target, dir) => {
    const page = pageRef.current;
    if (!target || !page || flipping.current) return;
    flipping.current = true;
    const out = dir === 'next' ? -90 : 90;
    const a = page.animate([
      { transform: 'rotateY(0deg)' },
      { transform: `rotateY(${out}deg)` },
    ], { duration: 380, easing: 'cubic-bezier(.55,.06,.68,.19)', fill: 'forwards' });
    if (shadeRef.current) {
      shadeRef.current.animate([{ opacity: 0 }, { opacity: 0.22 }], { duration: 380, fill: 'forwards' });
    }
    a.onfinish = () => { pendingIn.current = dir; onOpen(target); };
    a.oncancel = () => { flipping.current = false; };
  };

  React.useEffect(() => {
    const dir = pendingIn.current;
    if (!dir) return;
    pendingIn.current = null;
    const page = pageRef.current, shade = shadeRef.current;
    if (!page) { flipping.current = false; return; }
    page.getAnimations().forEach((a) => a.cancel());
    if (shade) shade.getAnimations().forEach((a) => a.cancel());
    const from = dir === 'next' ? 90 : -90;
    const a = page.animate([
      { transform: `rotateY(${from}deg)` },
      { transform: 'rotateY(0deg)' },
    ], { duration: 430, easing: 'cubic-bezier(.17,.67,.3,1)', fill: 'both' });
    if (shade) shade.animate([{ opacity: 0.22 }, { opacity: 0 }], { duration: 430, fill: 'both' });
    a.onfinish = () => { flipping.current = false; };
    a.oncancel = () => { flipping.current = false; };
  }, [l.slug]);

  return (
    <div style={{ perspective: '2000px' }}>
    <div ref={pageRef} style={{ transformOrigin: 'left center', willChange: 'transform', position: 'relative', background: 'var(--bg)' }}>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: mobile ? '20px 16px 50px' : '34px 28px 70px' }}>
      <button onClick={() => onNav('learn')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--teal-500)', font: 'var(--fw-bold) 15px var(--font-display)', padding: 0, marginBottom: 16 }}>← Барлық сабақ</button>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <ChessPiece type={l.piece} size={40} disc tone="brand" />
        <Badge tone="neutral">Сабақ {String(l.n).padStart(2, '0')}</Badge>
        <Badge tone={l.tone} variant="solid">{l.level}</Badge>
      </div>
      <h1 style={{ fontSize: mobile ? 34 : 48, margin: '10px 0 0' }}>{l.kk} <span style={{ color: 'var(--ink-4)', fontWeight: 700, fontSize: '0.6em' }}>· {l.ru}</span></h1>
      <p style={{ fontSize: mobile ? 17 : 20, color: 'var(--ink-2)', maxWidth: 640, marginTop: 6 }}>{l.move}</p>

      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.3fr 0.7fr', gap: 24, marginTop: 22, alignItems: 'start' }}>
        {l.videoFree ? <VideoPlayer lesson={l} mobile={mobile} /> : <BoxPeekVideo mobile={mobile} />}
        <Card variant="cut" pad="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          {l.videoFree ? (
            <React.Fragment>
              <div style={{ font: 'var(--fw-bold) 15px var(--font-display)', color: 'var(--ink-2)', textAlign: 'center' }}>Телефоннан қара</div>
              <QRTag seed={'lesson-' + l.slug} caption={l.kk + ' — видео сабақ'} size={mobile ? 130 : 150} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div style={{ font: 'var(--fw-bold) 15px var(--font-display)', color: 'var(--ink-2)', textAlign: 'center' }}>Толық сабақ — қорапта</div>
              <QRTag seed={'booklet-' + l.slug} caption="Кітапшадағы QR" size={mobile ? 120 : 140} />
              <p style={{ fontSize: 13, color: 'var(--ink-3)', textAlign: 'center', margin: 0, lineHeight: 1.5 }}>
                {l.kk} сабағының толық видеосы қораптағы кітапшаның QR-кодымен ашылады.
              </p>
              <Button variant="accent" size="sm" onClick={() => onNav('order')}>Қорапты алу</Button>
            </React.Fragment>
          )}
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.85fr 1.15fr', gap: 26, marginTop: 34, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MoveBoard key={l.slug} cell={mobile ? 36 : 48} piece={l.piece} origin={l.origin} moves={l.moves} />
        </div>
        <div>
          <h2 style={{ fontSize: mobile ? 24 : 30 }}>{l.kk} қалай жүреді?</h2>
          <Callout tone="rule" title="Ереже" style={{ marginTop: 8 }}>{l.rule}</Callout>
          <div style={{ marginTop: 16 }}>
            <StepList steps={[
              { title: 'Фигураны қой', body: l.origin.toUpperCase() + ' шаршысына ' + (l.acc || l.kk.toLowerCase() + 'ды') + ' орналастыр.' },
              { title: 'Мүмкін жүрістер', body: 'Қызыл нүктелер — фигура жүре алатын шаршылар.' },
              { title: 'Өзің сынап көр', body: 'Видеомен бірге тақтада қайтала.' },
            ]} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
        <Button variant="ghost" disabled={!prev} onClick={() => turnTo(prev, 'prev')} iconLeft={<span>←</span>}>
          {prev ? prev.kk : 'Басы'}
        </Button>
        <Button variant="primary" disabled={!next} onClick={() => turnTo(next, 'next')} iconRight={<span>→</span>}>
          Келесі: {next ? next.kk : 'Бітті!'}
        </Button>
      </div>
    </div>
    <div ref={shadeRef} style={{
      position: 'absolute', inset: 0, opacity: 0, pointerEvents: 'none', zIndex: 30,
      background: 'linear-gradient(90deg, rgba(33,29,26,0.55), rgba(33,29,26,0) 55%)',
    }} />
    </div>
    </div>
  );
}

Object.assign(window, { LessonScreen });
