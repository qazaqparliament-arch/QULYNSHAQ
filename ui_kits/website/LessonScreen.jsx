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

function LessonScreen({ lesson, onNav, onOpen, mobile }) {
  const lessons = window.KU_DATA.lessons;
  const l = lesson || lessons[2];
  const idx = lessons.findIndex((x) => x.slug === l.slug);
  const prev = lessons[idx - 1], next = lessons[idx + 1];

  return (
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
        <VideoPlayer lesson={l} mobile={mobile} />
        <Card variant="cut" pad="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ font: 'var(--fw-bold) 15px var(--font-display)', color: 'var(--ink-2)', textAlign: 'center' }}>Телефоннан қара</div>
          <QRTag seed={'lesson-' + l.slug} caption={l.kk + ' — видео сабақ'} size={mobile ? 130 : 150} />
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.85fr 1.15fr', gap: 26, marginTop: 34, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ChessBoard cell={mobile ? 36 : 48} pieces={[{ square: l.origin, type: l.piece, color: 'black' }]} origin={l.origin} moves={l.moves} />
        </div>
        <div>
          <h2 style={{ fontSize: mobile ? 24 : 30 }}>{l.kk} қалай жүреді?</h2>
          <Callout tone="rule" title="Ереже" style={{ marginTop: 8 }}>{l.rule}</Callout>
          <div style={{ marginTop: 16 }}>
            <StepList steps={[
              { title: 'Фигураны қой', body: l.origin.toUpperCase() + ' шаршысына ' + l.kk.toLowerCase() + 'ты орналастыр.' },
              { title: 'Мүмкін жүрістер', body: 'Қызыл нүктелер — фигура жүре алатын шаршылар.' },
              { title: 'Өзің сынап көр', body: 'Видеомен бірге тақтада қайтала.' },
            ]} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
        <Button variant="ghost" disabled={!prev} onClick={() => prev && onOpen(prev)} iconLeft={<span>←</span>}>
          {prev ? prev.kk : 'Басы'}
        </Button>
        <Button variant="primary" disabled={!next} onClick={() => next && onOpen(next)} iconRight={<span>→</span>}>
          Келесі: {next ? next.kk : 'Бітті!'}
        </Button>
      </div>
    </div>
  );
}

Object.assign(window, { LessonScreen });
