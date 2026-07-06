import React from 'react';

/**
 * Құлыншақ — IconButton
 * Square/round tactile button for a single glyph (Lucide icon or Unicode chess piece).
 */
export function IconButton({
  children,
  label,                 // accessible label (required in practice)
  variant = 'soft',      // soft | solid | outline | ghost
  size = 'md',           // sm | md | lg
  round = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = { sm: 34, md: 44, lg: 54 };
  const dim = sizes[size] || sizes.md;
  const variants = {
    soft:    { bg: 'var(--amber-100)', fg: 'var(--amber-700)', border: 'transparent' },
    solid:   { bg: 'var(--ink)',       fg: 'var(--paper-hi)',  border: 'transparent' },
    outline: { bg: 'var(--surface)',   fg: 'var(--ink)',       border: 'var(--ink)' },
    ghost:   { bg: 'transparent',      fg: 'var(--ink)',       border: 'transparent' },
  };
  const v = variants[variant] || variants.soft;
  const [hover, setHover] = React.useState(false);

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dim,
        height: dim,
        fontSize: dim * 0.46,
        color: v.fg,
        background: v.bg,
        border: `var(--bw-1) solid ${v.border}`,
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: hover && !disabled ? 'translateY(-1px)' : 'none',
        boxShadow: hover && !disabled ? 'var(--shadow-sm)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast)',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
