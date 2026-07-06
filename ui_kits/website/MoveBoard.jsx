// Құлыншақ website — MoveBoard: интерактивті «фигура қалай жүреді» тақтасы.
// Фигураны бассаң — жүріс нүктелеріне неон сызықтар сызылады және фигураның
// псевдо-3D нұсқасы нүктелерге кезекпен «секіріп» барады. Нүктені бассаң —
// фигура дәл сол шаршыға ұшады.
const { ChessPiece: MBPiece } = window.DesignSystem_d688da;

const MB_FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const MB_GLYPHS = { king: '♚', queen: '♛', rook: '♜', bishop: '♝', knight: '♞', pawn: '♟' };
const MB_NEON = '#35F2D5';

if (!document.getElementById('moveboard-css')) {
  const mbStyle = document.createElement('style');
  mbStyle.id = 'moveboard-css';
  mbStyle.textContent = `
    @keyframes mb-draw { to { stroke-dashoffset: 0; } }
    @keyframes mb-linepulse { 0%, 100% { opacity: 0.95; } 50% { opacity: 0.4; } }
    @keyframes mb-dotpulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
    @keyframes mb-hintbob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    .mb-line {
      stroke: ${MB_NEON}; stroke-width: 3; stroke-linecap: round; fill: none;
      animation: mb-draw 0.45s ease-out forwards, mb-linepulse 1.8s ease-in-out infinite;
    }
    .mb-dot { animation: mb-dotpulse 1.6s ease-in-out infinite; }
  `;
  document.head.appendChild(mbStyle);
}

function mbParse(sq) {
  return { file: MB_FILES.indexOf(sq[0]), rank: parseInt(sq[1], 10) - 1 };
}

const mbSleep = (ms) => new Promise((r) => setTimeout(r, ms));

function MoveBoard({ size = 8, cell = 46, piece = 'knight', origin = 'd4', moves = [], coords = true }) {
  const { useState, useRef, useEffect } = React;
  const [active, setActive] = useState(false);
  const [target, setTarget] = useState(null);
  const flyRef = useRef(null);
  const runId = useRef(0);
  const queueRef = useRef(null);

  const centre = (sq) => {
    const { file, rank } = mbParse(sq);
    return { x: file * cell + cell / 2, y: (size - 1 - rank) * cell + cell / 2 };
  };
  const o = centre(origin);

  const fly = (sq) => {
    const el = flyRef.current;
    if (!el) return Promise.resolve();
    const t = centre(sq);
    const dx = t.x - o.x, dy = t.y - o.y;
    const dist = Math.hypot(dx, dy);
    const lift = Math.min(cell * 1.2, cell * 0.6 + dist * 0.18);
    const anim = el.animate([
      { transform: 'translate(0px, 0px) scale(1)', offset: 0 },
      { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - lift}px) scale(1.25)`, offset: 0.55 },
      { transform: `translate(${dx}px, ${dy}px) scale(1.08, 0.92)`, offset: 0.9 },
      { transform: `translate(${dx}px, ${dy}px) scale(1)`, offset: 1 },
    ], { duration: 620 + dist * 2.2, easing: 'cubic-bezier(.5,.05,.35,1)', fill: 'forwards' });
    return anim.finished.catch(() => {});
  };

  const fade = (el, from, to) => {
    if (!el) return Promise.resolve();
    const anim = el.animate([{ opacity: from }, { opacity: to }], { duration: 190, fill: 'forwards' });
    return anim.finished.catch(() => {});
  };

  useEffect(() => {
    if (!active || !moves.length) return undefined;
    const myRun = ++runId.current;
    const el = flyRef.current;
    const alive = () => runId.current === myRun && flyRef.current === el;
    const reset = () => {
      if (el) { el.getAnimations().forEach((a) => a.cancel()); el.style.opacity = 0; }
    };
    (async () => {
      let i = 0;
      reset(); // алдыңғы сабақтан қалған fill-forwards трансформдарды өшіреміз
      await mbSleep(500); // сызықтар сызылып үлгерсін
      while (alive()) {
        const sq = queueRef.current || moves[i % moves.length];
        queueRef.current = null;
        setTarget(sq);
        await fade(el, 0, 1);
        if (!alive()) return;
        await fly(sq);
        if (!alive()) return;
        await mbSleep(560);
        if (!alive()) return;
        await fade(el, 1, 0);
        if (!alive()) return;
        reset();
        setTarget(null);
        i += 1;
        await mbSleep(220);
      }
    })();
    return () => {
      runId.current += 1;
      setTarget(null);
      reset();
    };
  }, [active, origin, moves.join(',')]);

  const togglePiece = () => setActive((a) => !a);
  const clickDot = (sq) => {
    queueRef.current = sq;
    if (!active) setActive(true);
  };

  const files = MB_FILES.slice(0, size);
  const moveSet = new Set(moves);
  const rows = [];
  for (let r = size - 1; r >= 0; r--) {
    const cells = [];
    for (let f = 0; f < size; f++) {
      const sq = files[f] + (r + 1);
      const dark = (f + r) % 2 === 1;
      const isMove = moveSet.has(sq);
      const isOrigin = origin === sq;
      const isTarget = target === sq;
      cells.push(
        <div key={sq}
          onClick={isMove ? () => clickDot(sq) : isOrigin ? togglePiece : undefined}
          style={{
            position: 'relative', width: cell, height: cell,
            background: dark ? 'var(--square-dark)' : 'var(--square-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: isOrigin ? `inset 0 0 0 3px ${active ? MB_NEON : 'var(--amber-400)'}` : 'none',
            cursor: isMove || isOrigin ? 'pointer' : 'default',
          }}>
          {isMove && (
            <span className="mb-dot" style={{
              width: cell * 0.32, height: cell * 0.32, borderRadius: '50%',
              background: active ? MB_NEON : 'var(--clay-400)',
              border: '2px solid var(--paper-hi)',
              boxShadow: active
                ? `0 0 8px ${MB_NEON}, 0 0 16px rgba(53,242,213,0.55)${isTarget ? `, 0 0 26px ${MB_NEON}` : ''}`
                : '0 1px 3px rgba(33,29,26,0.4)',
              transform: isTarget ? 'scale(1.35)' : undefined,
            }} />
          )}
          {isOrigin && (
            <span style={{ opacity: active ? 0.3 : 1, transition: 'opacity 0.25s', lineHeight: 0 }}>
              <MBPiece type={piece} color="black" size={cell * 0.74} />
            </span>
          )}
          {coords && f === 0 && (
            <span style={{ position: 'absolute', top: 2, left: 3, font: 'var(--fw-bold) 9px var(--font-mono)', color: dark ? 'var(--coord-light, var(--paper-hi))' : 'var(--coord-dark, var(--ink-3))', opacity: 0.75 }}>{r + 1}</span>
          )}
          {coords && r === 0 && (
            <span style={{ position: 'absolute', bottom: 1, right: 3, font: 'var(--fw-bold) 9px var(--font-mono)', color: dark ? 'var(--coord-light, var(--paper-hi))' : 'var(--coord-dark, var(--ink-3))', opacity: 0.75 }}>{files[f]}</span>
          )}
        </div>
      );
    }
    rows.push(<div key={r} style={{ display: 'flex' }}>{cells}</div>);
  }

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'inline-block', padding: 6, background: 'var(--ink)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', lineHeight: 0 }}>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xs)', overflow: 'hidden' }}>
          {rows}
          {active && (
            <svg width={size * cell} height={size * cell} style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3,
              filter: `drop-shadow(0 0 3px ${MB_NEON}) drop-shadow(0 0 9px rgba(53,242,213,0.6))`,
            }}>
              {moves.map((sq, i) => {
                const t = centre(sq);
                const len = Math.hypot(t.x - o.x, t.y - o.y);
                return (
                  <line key={sq} className="mb-line"
                    x1={o.x} y1={o.y} x2={t.x} y2={t.y}
                    strokeDasharray={len} strokeDashoffset={len}
                    style={{ animationDelay: `${i * 70}ms, ${450 + i * 70}ms` }} />
                );
              })}
            </svg>
          )}
          <div ref={flyRef} style={{ position: 'absolute', left: o.x, top: o.y, width: 0, height: 0, opacity: 0, zIndex: 4, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', left: -cell * 0.45, top: -cell * 0.8, width: cell * 0.9, height: cell * 0.9, perspective: '260px' }}>
              <span style={{
                position: 'absolute', bottom: -4, left: '18%', width: '64%', height: cell * 0.16,
                borderRadius: '50%', background: 'rgba(20,16,12,0.4)', filter: 'blur(3px)',
              }} />
              <span style={{
                display: 'block', fontSize: cell * 0.88, lineHeight: 1, textAlign: 'center',
                transform: 'rotateX(16deg)', color: 'var(--piece-black, var(--ink))',
                textShadow: `0 1px 0 #3a332c, 0 2px 0 #4a4136, 0 3px 1px #5c4e3f, 0 0 12px rgba(53,242,213,0.9), 0 0 26px rgba(53,242,213,0.5)`,
              }}>{MB_GLYPHS[piece] || '♟'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={active ? undefined : 'mb-hint'} style={{
        font: 'var(--fw-bold) 13px var(--font-display)', color: active ? 'var(--teal-500)' : 'var(--ink-3)',
        animation: active ? 'none' : 'mb-hintbob 2s ease-in-out infinite', textAlign: 'center',
      }}>
        {active ? 'Нүктені бассаң — фигура сол жаққа жүреді' : '👆 Фигураны басып көр — жүрістерін көрсетеді'}
      </div>
    </div>
  );
}

Object.assign(window, { MoveBoard });
