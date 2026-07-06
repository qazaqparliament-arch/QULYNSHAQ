import React from 'react';

/**
 * Құлыншақ — Button
 * Chunky, tactile, kid-friendly. Solid "printed edge" underneath that compresses on press.
 */
export function Button({
  children,
  variant = 'primary',   // primary | secondary | accent | outline | ghost
  size = 'md',           // sm | md | lg
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 'var(--control-h-sm)', padding: '0 16px', font: 'var(--text-sm)', radius: 'var(--radius-sm)', gap: '8px' },
    md: { height: 'var(--control-h-md)', padding: '0 22px', font: 'var(--text-base)', radius: 'var(--radius-md)', gap: '9px' },
    lg: { height: 'var(--control-h-lg)', padding: '0 30px', font: 'var(--text-lg)', radius: 'var(--radius-lg)', gap: '11px' },
  };
  const variants = {
    primary:   { bg: 'var(--amber-400)', fg: 'var(--ink)',          edge: 'var(--amber-600)', border: 'transparent' },
    secondary: { bg: 'var(--teal-400)',  fg: 'var(--paper-hi)',     edge: 'var(--teal-600)',  border: 'transparent' },
    accent:    { bg: 'var(--clay-400)',  fg: 'var(--paper-hi)',     edge: 'var(--clay-600)',  border: 'transparent' },
    outline:   { bg: 'transparent',      fg: 'var(--ink)',          edge: 'var(--ink)',       border: 'var(--ink)' },
    ghost:     { bg: 'transparent',      fg: 'var(--ink)',          edge: 'transparent',      border: 'transparent' },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const flat = variant === 'ghost';

  const [pressed, setPressed] = React.useState(false);
  const lift = flat ? 0 : 4;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        width: full ? '100%' : 'auto',
        height: s.height,
        padding: s.padding,
        font: `var(--fw-bold) ${s.font}/1 var(--font-display)`,
        letterSpacing: '0.005em',
        color: v.fg,
        background: v.bg,
        border: `var(--bw-1) solid ${v.border}`,
        borderRadius: s.radius,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        boxShadow: flat ? 'none' : `0 ${pressed ? 1 : lift}px 0 ${v.edge}`,
        transform: pressed && !flat ? `translateY(${lift - 1}px)` : 'translateY(0)',
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast)',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex', fontSize: '1.15em' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex', fontSize: '1.15em' }}>{iconRight}</span>}
    </button>
  );
}
