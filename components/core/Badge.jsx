import React from 'react';

/**
 * Кулыншақ — Badge
 * Small status/label pill. Use for lesson numbers, difficulty, "new", counts.
 */
export function Badge({
  children,
  tone = 'brand',        // brand | teal | clay | olive | neutral | ink
  variant = 'soft',      // soft | solid | outline
  size = 'md',           // sm | md
  iconLeft = null,
  style = {},
  ...rest
}) {
  const tones = {
    brand:   { soft: ['var(--amber-100)', 'var(--amber-700)'], solid: ['var(--amber-400)', 'var(--ink)'],      line: 'var(--amber-600)' },
    teal:    { soft: ['var(--teal-100)', 'var(--teal-600)'],   solid: ['var(--teal-400)', 'var(--paper-hi)'],  line: 'var(--teal-500)' },
    clay:    { soft: ['var(--clay-100)', 'var(--clay-600)'],   solid: ['var(--clay-400)', 'var(--paper-hi)'],  line: 'var(--clay-500)' },
    olive:   { soft: ['var(--olive-100)', 'var(--olive-600)'], solid: ['var(--olive-400)', 'var(--paper-hi)'], line: 'var(--olive-600)' },
    neutral: { soft: ['var(--paper-deep)', 'var(--ink-2)'],    solid: ['var(--ink-3)', 'var(--paper-hi)'],     line: 'var(--line)' },
    ink:     { soft: ['var(--ink)', 'var(--paper-hi)'],        solid: ['var(--ink)', 'var(--paper-hi)'],       line: 'var(--ink)' },
  };
  const t = tones[tone] || tones.brand;
  const isSolid = variant === 'solid' || tone === 'ink';
  const [bg, fg] = isSolid ? t.solid : t.soft;
  const dims = size === 'sm'
    ? { padding: '2px 8px', font: 'var(--text-2xs)' }
    : { padding: '4px 11px', font: 'var(--text-xs)' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: dims.padding,
        font: `var(--fw-bold) ${dims.font}/1.3 var(--font-display)`,
        letterSpacing: '0.02em',
        color: fg,
        background: variant === 'outline' ? 'transparent' : bg,
        border: variant === 'outline' ? `var(--bw-1) solid ${t.line}` : 'none',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
    </span>
  );
}
