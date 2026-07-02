// Кулыншақ website — Learn (all lessons) screen
const { Button, Badge, Card, ChessPiece, QRTag } = window.DesignSystem_d688da;

function LessonCard({ lesson, onOpen, mobile }) {
  const l = lesson;
  return (
    <Card variant="paper" pad="none" interactive onClick={() => onOpen(l)} style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 14, padding: 18, alignItems: 'center', background: 'var(--amber-100)', borderBottom: '2px dashed var(--line)' }}>
        <ChessPiece type={l.piece} size={46} disc tone="paper" />
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Badge tone="neutral" size="sm">Сабақ {String(l.n).padStart(2, '0')}</Badge>
            <Badge tone={l.tone} size="sm">{l.level}</Badge>
          </div>
          <div style={{ font: 'var(--fw-black) 22px var(--font-display)', color: 'var(--ink)', marginTop: 5 }}>{l.kk}</div>
        </div>
      </div>
      <div style={{ padding: 18 }}>
        <p style={{ fontSize: 15, color: 'var(--ink-2)', margin: 0, minHeight: 44 }}>{l.move}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
          <span style={{ font: 'var(--fw-bold) 13px var(--font-mono)', color: 'var(--ink-3)' }}>▶ {l.mins} мин видео</span>
          <Button variant="primary" size="sm" onClick={(e) => { e.stopPropagation(); onOpen(l); }}>Бастау</Button>
        </div>
      </div>
    </Card>
  );
}

function LearnScreen({ onOpen, mobile }) {
  const lessons = window.KU_DATA.lessons;
  return (
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: mobile ? '28px 16px 50px' : '48px 28px 70px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span className="ku-eyebrow">Оқу жолы</span>
          <h1 style={{ fontSize: mobile ? 34 : 46, margin: '8px 0 0' }}>Фигуралар мектебі</h1>
          <p style={{ fontSize: 17, color: 'var(--ink-3)', marginTop: 6, maxWidth: 520 }}>
            Әр фигураның өз сабағы бар. Ретімен жүр — оңайдан күрделіге.
          </p>
        </div>
        <div style={{ display: mobile ? 'none' : 'block' }}>
          <QRTag seed="learn-index" caption="Толық курс · YouTube" size={96} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 18, marginTop: 28 }}>
        {lessons.map((l) => <LessonCard key={l.slug} lesson={l} onOpen={onOpen} mobile={mobile} />)}
      </div>
    </div>
  );
}

Object.assign(window, { LearnScreen, LessonCard });
