import React from 'react';

/**
 * Кулыншақ — ChessPiece
 * A single chess piece rendered from Unicode glyphs, in the brand's token/disc style.
 * The knight (♞ / «ат») is the mascot tie-in — a horse, like кулыншақ (foal).
 *
 * type: 'king'|'queen'|'rook'|'bishop'|'knight'|'pawn'
 * color: 'white' | 'black'  (piece colour, not the disc)
 */
const GLYPHS = {
  king:   { black: '♚', white: '♔', kk: 'Патша' },
  queen:  { black: '♛', white: '♕', kk: 'Уәзір' },
  rook:   { black: '♜', white: '♖', kk: 'Тұра' },
  bishop: { black: '♝', white: '♗', kk: 'Пілта' },
  knight: { black: '♞', white: '♘', kk: 'Ат' },
  pawn:   { black: '♟', white: '♙', kk: 'Сарбаз' },
};

export function ChessPiece({
  type = 'knight',
  color = 'black',       // white | black
  size = 44,
  disc = false,          // render on a token disc
  tone = 'brand',        // disc tone: brand | teal | paper
  label = false,         // show Kazakh name under the glyph
  style = {},
  ...rest
}) {
  const g = GLYPHS[type] || GLYPHS.knight;
  const glyph = g[color] || g.black;
  const discTones = {
    brand: 'var(--amber-100)',
    teal:  'var(--teal-100)',
    paper: 'var(--surface)',
  };

  const glyphEl = (
    <span aria-hidden style={{
      fontSize: disc ? size * 0.62 : size,
      lineHeight: 1,
      color: color === 'white' ? 'var(--paper-hi)' : 'var(--ink)',
      textShadow: color === 'white' ? '0 0 1px var(--ink), 0 1px 0 rgba(33,29,26,0.35)' : 'none',
    }}>{glyph}</span>
  );

  return (
    <span
      role="img"
      aria-label={`${g.kk}${color === 'white' ? ' (ақ)' : ' (қара)'}`}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4, ...style }}
      {...rest}
    >
      {disc ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: size, height: size, borderRadius: 'var(--radius-pill)',
          background: discTones[tone] || discTones.brand,
          border: '2px solid var(--ink)',
          boxShadow: 'var(--shadow-sm)',
        }}>{glyphEl}</span>
      ) : glyphEl}
      {label && (
        <span style={{ font: `var(--fw-bold) var(--text-2xs)/1 var(--font-display)`, color: 'var(--ink-3)', letterSpacing: '0.03em' }}>
          {g.kk}
        </span>
      )}
    </span>
  );
}

ChessPiece.GLYPHS = GLYPHS;
