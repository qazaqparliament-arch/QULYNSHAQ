import React from 'react';

/**
 * Құлыншақ — Sticker
 * The peel-and-stick look from the physical sticker pack: thick chalk border, drop shadow,
 * a playful tilt. Wrap any content (emoji, glyph, short label, image).
 */
export function Sticker({
  children,
  shape = 'rounded',     // rounded | circle | seal
  tone = 'amber',        // amber | teal | clay | paper
  size = 96,
  tilt = -6,             // degrees
  peel = true,           // show the little curled corner shadow
  style = {},
  ...rest
}) {
  const tones = {
    amber: 'var(--amber-400)',
    teal:  'var(--teal-400)',
    clay:  'var(--clay-400)',
    paper: 'var(--paper-hi)',
  };
  const radius = shape === 'circle' || shape === 'seal' ? '50%' : 'var(--radius-lg)';
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size,
        background: tones[tone] || tones.amber,
        color: tone === 'paper' ? 'var(--ink)' : 'var(--paper-hi)',
        border: '4px solid var(--paper-hi)',
        borderRadius: radius,
        boxShadow: 'var(--shadow-sticker)',
        transform: `rotate(${hover ? 0 : tilt}deg) scale(${hover ? 1.05 : 1})`,
        transition: 'transform var(--dur-base) var(--ease-bounce)',
        textAlign: 'center',
        ...(shape === 'seal' ? { outline: '2px dashed var(--paper-hi)', outlineOffset: '-9px' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
      {peel && (
        <span aria-hidden style={{
          position: 'absolute', bottom: -2, right: -2, width: 18, height: 18,
          background: 'linear-gradient(135deg, transparent 50%, rgba(33,29,26,0.18) 50%)',
          borderBottomRightRadius: shape === 'rounded' ? 'var(--radius-lg)' : radius,
        }} />
      )}
    </div>
  );
}
