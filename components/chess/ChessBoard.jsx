import React from 'react';
import { ChessPiece } from './ChessPiece.jsx';

/**
 * Кулыншақ — ChessBoard
 * A teaching board. Renders an N×N grid (default 8), places pieces, and highlights
 * legal-move squares — built for the "how each piece moves" lessons.
 *
 * pieces: [{ square:'e4', type:'knight', color:'black' }]
 * moves:  ['c3','d2', ...]  -> clay dot highlights
 * origin: 'e4'              -> amber ring on the moving piece's square
 */
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function parseSquare(sq) {
  const file = FILES.indexOf(sq[0]);
  const rank = parseInt(sq[1], 10) - 1;
  return { file, rank };
}

export function ChessBoard({
  size = 8,               // board is size×size (use 8, or 5 for mini lessons)
  cell = 46,
  pieces = [],
  moves = [],
  origin = null,
  coords = true,
  style = {},
  ...rest
}) {
  const files = FILES.slice(0, size);
  const moveSet = new Set(moves);
  const pieceMap = {};
  pieces.forEach((p) => { pieceMap[p.square] = p; });

  const rows = [];
  for (let r = size - 1; r >= 0; r--) {
    const cells = [];
    for (let f = 0; f < size; f++) {
      const sq = files[f] + (r + 1);
      const dark = (f + r) % 2 === 1;
      const p = pieceMap[sq];
      const isMove = moveSet.has(sq);
      const isOrigin = origin === sq;
      cells.push(
        <div key={sq} style={{
          position: 'relative', width: cell, height: cell,
          background: dark ? 'var(--square-dark)' : 'var(--square-light)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: isOrigin ? 'inset 0 0 0 3px var(--amber-400)' : 'none',
        }}>
          {isMove && !p && (
            <span style={{ width: cell * 0.28, height: cell * 0.28, borderRadius: '50%', background: 'var(--square-move)' }} />
          )}
          {isMove && p && (
            <span style={{ position: 'absolute', inset: 3, borderRadius: '50%', boxShadow: 'inset 0 0 0 3px var(--square-move)' }} />
          )}
          {p && <ChessPiece type={p.type} color={p.color} size={cell * 0.74} />}
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
    <div
      style={{
        display: 'inline-block', padding: 6, background: 'var(--ink)',
        borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)',
        lineHeight: 0, ...style,
      }}
      {...rest}
    >
      <div style={{ borderRadius: 'var(--radius-xs)', overflow: 'hidden' }}>{rows}</div>
    </div>
  );
}
