import React from 'react';

/**
 * Кулыншақ — Card
 * Paper surface with a soft warm shadow. Variants echo the physical kit:
 *   paper   — default raised card
 *   cut     — printed "cut-line" ink border (like a piece to punch out)
 *   sunk    — recessed panel on the page
 */
export function Card({
  children,
  variant = 'paper',     // paper | cut | sunk
  pad = 'md',            // none | sm | md | lg
  interactive = false,
  onClick,
  style = {},
  ...rest
}) {
  const pads = { none: '0', sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };
  const variants = {
    paper: { background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)' },
    cut:   { background: 'var(--surface)', border: 'var(--bw-2) solid var(--ink)', boxShadow: 'none' },
    sunk:  { background: 'var(--paper-deep)', border: '1px solid var(--line)', boxShadow: 'inset 0 2px 6px rgba(33,29,26,0.06)' },
  };
  const v = variants[variant] || variants.paper;
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onPointerEnter={() => interactive && setHover(true)}
      onPointerLeave={() => interactive && setHover(false)}
      style={{
        borderRadius: 'var(--radius-xl)',
        padding: pads[pad] ?? pads.md,
        cursor: interactive ? 'pointer' : 'default',
        transform: hover ? 'translateY(-3px)' : 'none',
        boxShadow: hover ? 'var(--shadow-lg)' : v.boxShadow,
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...v,
        ...(hover ? {} : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
