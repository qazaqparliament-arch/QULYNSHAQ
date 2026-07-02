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

// Hero-анимация: жабық қорап ашылады, ішінен фигуралар ретімен шығып,
// ақ пен қара болып ойын басындағыдай өз орындарына тізіледі.
const HB_WHITE = { rook: '♖', knight: '♘', bishop: '♗', queen: '♕', king: '♔', pawn: '♙' };
const HB_BLACK = { rook: '♜', knight: '♞', bishop: '♝', queen: '♛', king: '♚', pawn: '♟' };
const HB_BACK = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

function BoxArt({ mobile }) {
  const { useRef, useEffect, useState } = React;
  const S = mobile ? 30 : 38;
  const B = S * 8;
  const lidRef = useRef(null);
  const pieceRefs = useRef([]);
  const beamRef = useRef(null);
  const badgeRef = useRef(null);
  const chipRefs = useRef([]);
  const animsRef = useRef([]);
  const [done, setDone] = useState(false);

  // Шығу реті: алдымен ақтар (1-қатар фигуралар → 2-қатар сарбаздар),
  // сосын қаралар (8-қатар → 7-қатар).
  const lineup = [];
  HB_BACK.forEach((t, f) => lineup.push({ g: HB_WHITE[t], f, r: 1 }));
  for (let f = 0; f < 8; f++) lineup.push({ g: HB_WHITE.pawn, f, r: 2 });
  HB_BACK.forEach((t, f) => lineup.push({ g: HB_BLACK[t], f, r: 8 }));
  for (let f = 0; f < 8; f++) lineup.push({ g: HB_BLACK.pawn, f, r: 7 });

  const play = () => {
    animsRef.current.forEach((a) => a.cancel());
    animsRef.current = [];
    setDone(false);

    // 1-кезең: қораптың қақпағы ашылады
    const lid = lidRef.current;
    if (lid) {
      lid.style.display = 'flex';
      const la = lid.animate([
        { transform: 'perspective(900px) rotateX(0deg)', opacity: 1, offset: 0 },
        { transform: 'perspective(900px) rotateX(0deg)', opacity: 1, offset: 0.25 },
        { transform: 'perspective(900px) rotateX(-106deg)', opacity: 1, offset: 0.82 },
        { transform: 'perspective(900px) rotateX(-116deg)', opacity: 0, offset: 1 },
      ], { duration: 1700, easing: 'cubic-bezier(.6,.05,.3,1)', fill: 'forwards' });
      animsRef.current.push(la);
    }

    // 2–3-кезең: фигуралар ортадан шығып, орындарына ұшады
    lineup.forEach((p, i) => {
      const el = pieceRefs.current[i];
      if (!el) return;
      const t = 8 - p.r;
      const sdx = B / 2 - (p.f * S + S / 2);
      const sdy = B / 2 - (t * S + S / 2);
      const lift = S * 1.1;
      const delay = i < 16
        ? 1500 + i * 105                          // ақтар
        : 1500 + 16 * 105 + 900 + (i - 16) * 105; // сосын қаралар
      const a = el.animate([
        { opacity: 0, transform: `translate(${sdx}px, ${sdy + S * 0.4}px) scale(0.12)`, offset: 0 },
        { opacity: 1, transform: `translate(${sdx}px, ${sdy - S * 0.9}px) scale(1.18)`, offset: 0.32 },
        { opacity: 1, transform: `translate(${sdx / 2}px, ${(sdy - S * 0.9) / 2 - lift / 2}px) scale(1.06)`, offset: 0.62 },
        { opacity: 1, transform: 'translate(0px, 0px) scale(1.12, 0.88)', offset: 0.9 },
        { opacity: 1, transform: 'translate(0px, 0px) scale(1)', offset: 1 },
      ], { duration: 900, delay, easing: 'cubic-bezier(.5,.08,.35,1)', fill: 'both' });
      animsRef.current.push(a);
    });

    // 4-кезең: әлемдегі ең қысқа партия — «Ақымақ маты» (1. f3 e5 2. g4 Уh4#)
    const MB = 1500 + 16 * 105 + 900 + 15 * 105 + 900 + 500;

    const slide = (idx, from, to, delay, dur) => {
      const el = pieceRefs.current[idx];
      if (!el) return;
      const dx = (to.f - from.f) * S, dy = (from.r - to.r) * S;
      animsRef.current.push(el.animate([
        { transform: 'translate(0px, 0px)', offset: 0 },
        { transform: `translate(${dx}px, ${dy * 0.5 - S * 0.25}px) scale(1.08)`, offset: 0.55 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, offset: 1 },
      ], { duration: dur, delay, easing: 'cubic-bezier(.5,.1,.4,1)', fill: 'forwards' }));
    };

    const chip = (i, delay, persist) => {
      const el = chipRefs.current[i];
      if (!el) return;
      const frames = persist
        ? [
            { opacity: 0, transform: 'translate(-50%, 8px) scale(0.8)', offset: 0 },
            { opacity: 1, transform: 'translate(-50%, 0px) scale(1)', offset: 0.3 },
            { opacity: 1, transform: 'translate(-50%, 0px) scale(1)', offset: 1 },
          ]
        : [
            { opacity: 0, transform: 'translate(-50%, 8px) scale(0.8)', offset: 0 },
            { opacity: 1, transform: 'translate(-50%, 0px) scale(1)', offset: 0.18 },
            { opacity: 1, transform: 'translate(-50%, 0px) scale(1)', offset: 0.82 },
            { opacity: 0, transform: 'translate(-50%, -8px) scale(0.9)', offset: 1 },
          ];
      animsRef.current.push(el.animate(frames, { duration: persist ? 700 : 1050, delay, fill: 'both' }));
    };

    chip(0, MB - 150, false);
    slide(13, { f: 5, r: 2 }, { f: 5, r: 3 }, MB, 450);          // 1. f3
    chip(1, MB + 850, false);
    slide(28, { f: 4, r: 7 }, { f: 4, r: 5 }, MB + 1000, 550);   // 1… e5
    chip(2, MB + 1850, false);
    slide(14, { f: 6, r: 2 }, { f: 6, r: 4 }, MB + 2000, 550);   // 2. g4
    chip(3, MB + 2850, true);

    // 2… Уәзір d8 → h4 (доғамен ұшады)
    const q = pieceRefs.current[19];
    if (q) {
      const dx = 4 * S, dy = 4 * S;
      animsRef.current.push(q.animate([
        { transform: 'translate(0px, 0px) scale(1)', offset: 0 },
        { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - S * 1.5}px) scale(1.3)`, offset: 0.55 },
        { transform: `translate(${dx}px, ${dy}px) scale(1.15, 0.85)`, offset: 0.9 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, offset: 1 },
      ], { duration: 850, delay: MB + 3000, easing: 'cubic-bezier(.5,.08,.35,1)', fill: 'forwards' }));
    }

    // Шабуыл сызығы: h4 → e1 (уәзірден патшаға)
    const beam = beamRef.current;
    if (beam) {
      const len = Math.hypot(3 * S, 3 * S);
      beam.setAttribute('stroke-dasharray', len);
      animsRef.current.push(beam.animate([
        { opacity: 0, strokeDashoffset: len, offset: 0 },
        { opacity: 1, strokeDashoffset: len, offset: 0.08 },
        { opacity: 1, strokeDashoffset: 0, offset: 0.4 },
        { opacity: 1, strokeDashoffset: 0, offset: 0.75 },
        { opacity: 0, strokeDashoffset: 0, offset: 1 },
      ], { duration: 2000, delay: MB + 3900, fill: 'both' }));
    }

    // Ақ патша құлайды
    const king = pieceRefs.current[4];
    if (king) {
      animsRef.current.push(king.animate([
        { transform: 'translate(0px, 0px) rotate(0deg)', offset: 0 },
        { transform: `translate(${-S * 0.04}px, -2px) rotate(-9deg)`, offset: 0.3 },
        { transform: `translate(${S * 0.14}px, ${S * 0.05}px) rotate(76deg)`, offset: 0.75 },
        { transform: `translate(${S * 0.16}px, ${S * 0.02}px) rotate(69deg)`, offset: 0.88 },
        { transform: `translate(${S * 0.16}px, ${S * 0.04}px) rotate(73deg)`, offset: 1 },
      ], { duration: 900, delay: MB + 4100, easing: 'cubic-bezier(.55,.06,.5,1)', fill: 'forwards' }));
    }

    // «ШАХ ЖӘНЕ МАТ!» белгісі
    const badge = badgeRef.current;
    if (badge) {
      animsRef.current.push(badge.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.2) rotate(-14deg)', offset: 0 },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1.14) rotate(4deg)', offset: 0.6 },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1) rotate(-3deg)', offset: 1 },
      ], { duration: 650, delay: MB + 4400, easing: 'cubic-bezier(.34,1.4,.5,1)', fill: 'forwards' }));
    }

    const timer = setTimeout(() => setDone(true), MB + 5400);
    animsRef.current.push({ cancel: () => clearTimeout(timer) });
  };

  useEffect(() => {
    const t = setTimeout(play, 400);
    return () => { clearTimeout(t); animsRef.current.forEach((a) => a.cancel()); };
  }, []);

  const squares = [];
  for (let i = 0; i < 64; i++) {
    const r = Math.floor(i / 8), c = i % 8;
    squares.push(<div key={i} style={{ background: (r + c) % 2 ? 'var(--square-dark)' : 'var(--square-light)' }} />);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div onClick={play} title="Қайта ашу" style={{
        position: 'relative', transform: 'rotate(-3deg)', cursor: 'pointer',
        padding: 12, background: 'var(--ink)', borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-xl)',
      }}>
        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: `repeat(8, ${S}px)`, gridAutoRows: `${S}px`,
          borderRadius: 'var(--radius-sm)', overflow: 'hidden',
        }}>
          {squares}
          {lineup.map((p, i) => (
            <span key={i} ref={(el) => { pieceRefs.current[i] = el; }} style={{
              position: 'absolute', left: p.f * S, top: (8 - p.r) * S, width: S, height: S,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: S * 0.74, lineHeight: 1, color: 'var(--ink)', opacity: 0,
              transformOrigin: '50% 82%',
              textShadow: '0 1px 2px rgba(33,29,26,0.35)', pointerEvents: 'none', zIndex: 2,
            }}>{p.g}</span>
          ))}
          <svg width={B} height={B} style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3,
            filter: 'drop-shadow(0 0 3px #FF5470) drop-shadow(0 0 9px rgba(255,84,112,0.6))',
          }}>
            <line ref={beamRef} x1={7.5 * S} y1={4.5 * S} x2={4.5 * S} y2={7.5 * S}
              stroke="#FF5470" strokeWidth="3.5" strokeLinecap="round" style={{ opacity: 0 }} />
          </svg>
        </div>
        <div ref={lidRef} style={{
          position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
          background: 'var(--ink)', borderRadius: 'var(--radius-lg)',
          transformOrigin: '50% 0%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
          boxShadow: '0 10px 24px rgba(33,29,26,0.35)',
        }}>
          <div style={{
            position: 'absolute', inset: 10, border: '2px dashed rgba(252,248,239,0.35)',
            borderRadius: 'var(--radius-md)',
          }} />
          <span style={{ fontSize: S * 1.5, lineHeight: 1, color: 'var(--amber-400)' }}>♞</span>
          <span style={{ font: `var(--fw-black) ${S * 0.62}px var(--font-display)`, color: 'var(--paper-hi)', letterSpacing: '-0.02em' }}>Кулыншақ</span>
          <span style={{ font: `var(--fw-bold) ${S * 0.34}px var(--font-display)`, color: 'var(--amber-200)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Шахмат жинағы</span>
        </div>
        {['1. f3', '1… e5', '2. g4', '2… Уh4 — мат!'].map((label, i) => (
          <div key={label} ref={(el) => { chipRefs.current[i] = el; }} style={{
            position: 'absolute', top: -16, left: '50%', transform: 'translate(-50%, 0)',
            opacity: 0, zIndex: 7, pointerEvents: 'none', whiteSpace: 'nowrap',
            background: 'var(--ink)', color: 'var(--paper-hi)', border: '2px solid var(--amber-400)',
            borderRadius: 'var(--radius-pill)', padding: '5px 14px',
            font: `var(--fw-black) ${mobile ? 13 : 15}px var(--font-mono)`,
          }}>{label}</div>
        ))}
        <div ref={badgeRef} style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          opacity: 0, zIndex: 8, pointerEvents: 'none', textAlign: 'center',
          background: 'var(--clay-400)', color: 'var(--paper-hi)', border: '3px solid var(--ink)',
          borderRadius: 'var(--radius-lg)', padding: mobile ? '10px 16px' : '14px 22px',
          boxShadow: 'var(--shadow-xl)',
        }}>
          <div style={{ font: `var(--fw-black) ${mobile ? 20 : 26}px var(--font-display)`, letterSpacing: '-0.01em' }}>ШАХ ЖӘНЕ МАТ!</div>
          <div style={{ font: `var(--fw-bold) ${mobile ? 11 : 13}px var(--font-display)`, color: 'var(--clay-100)', marginTop: 3 }}>Әлемдегі ең қысқа партия — 2 жүріс</div>
        </div>
      </div>
      <div style={{
        font: 'var(--fw-bold) 13px var(--font-display)', color: 'var(--ink-3)',
        opacity: done ? 1 : 0, transition: 'opacity 0.4s',
      }}>↻ Тақтаны бассаң — бәрі қайта ойнайды</div>
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
