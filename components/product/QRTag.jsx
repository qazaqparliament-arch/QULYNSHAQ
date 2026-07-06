import React from 'react';

/**
 * Құлыншақ — QRTag
 * Every lesson carries a QR code that opens its YouTube video. This renders a styled QR
 * PLACEHOLDER (a deterministic faux-module grid) inside the brand's tag frame — swap the
 * grid for a real generated QR in production. Includes a play affordance + caption.
 */
function moduleGrid(seed, n = 21) {
  // Simple deterministic PRNG so the same `seed` always yields the same pattern.
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  const rand = () => { h += 0x6D2B79F5; let t = Math.imul(h ^ (h >>> 15), 1 | h); t ^= t + Math.imul(t ^ (t >>> 7), 61 | t); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const cells = [];
  const finder = (r, c) => (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7);
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (finder(r, c)) {
      const inCorner = (rr, cc, or, oc) => { const lr = rr - or, lc = cc - oc; return lr === 0 || lr === 6 || lc === 0 || lc === 6 || (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4); };
      let on = false;
      if (r < 7 && c < 7) on = inCorner(r, c, 0, 0);
      else if (r < 7 && c >= n - 7) on = inCorner(r, c, 0, n - 7);
      else on = inCorner(r, c, n - 7, 0);
      cells.push(on);
    } else {
      cells.push(rand() > 0.55);
    }
  }
  return { cells, n };
}

export function QRTag({
  seed = 'lesson-01',
  href,                  // real destination (YouTube) — used as title/aria only here
  caption = 'Сканерлеп видеоны қара',
  size = 120,
  play = true,
  style = {},
  ...rest
}) {
  const { cells, n } = React.useMemo(() => moduleGrid(seed), [seed]);
  const px = Math.floor(size / n);
  const grid = px * n;

  return (
    <div
      title={href || seed}
      style={{
        display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        padding: 12, background: 'var(--surface)',
        border: 'var(--bw-2) solid var(--ink)', borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)', ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: `repeat(${n}, ${px}px)`,
          gridAutoRows: `${px}px`, width: grid, height: grid, background: 'var(--paper-hi)',
        }}>
          {cells.map((on, i) => (
            <span key={i} style={{ background: on ? 'var(--ink)' : 'transparent' }} />
          ))}
        </div>
        {play && (
          <span aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: grid * 0.3, height: grid * 0.3, borderRadius: '50%',
            background: 'var(--clay-400)', color: 'var(--paper-hi)',
            border: '3px solid var(--paper-hi)', boxShadow: 'var(--shadow-sm)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: grid * 0.13, paddingLeft: 2,
          }}>▶</span>
        )}
      </div>
      {caption && (
        <div style={{ font: 'var(--fw-bold) var(--text-xs)/1.2 var(--font-display)', color: 'var(--ink-2)', textAlign: 'center', maxWidth: grid + 24 }}>
          {caption}
        </div>
      )}
    </div>
  );
}
