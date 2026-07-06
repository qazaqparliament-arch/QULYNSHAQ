import React from 'react';

/**
 * Құлыншақ — Switch
 * Chunky toggle. Track goes teal when on; knob slides with a soft bounce.
 */
export function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const swId = id || React.useId();
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  const W = 50, H = 28, pad = 3, knob = H - pad * 2;

  return (
    <label htmlFor={swId} style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        position: 'relative', width: W, height: H, flex: '0 0 auto',
        background: on ? 'var(--teal-400)' : 'var(--ink-4)',
        borderRadius: 'var(--radius-pill)',
        transition: 'background var(--dur-base) var(--ease-out)',
      }}>
        <input type="checkbox" id={swId} checked={on} disabled={disabled} onChange={toggle}
          style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', margin: 0, cursor: 'inherit' }} {...rest} />
        <span aria-hidden style={{
          position: 'absolute', top: pad, left: on ? W - knob - pad : pad,
          width: knob, height: knob, borderRadius: '50%',
          background: 'var(--paper-hi)', boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--dur-base) var(--ease-bounce)',
        }} />
      </span>
      {label && <span style={{ font: `var(--fw-medium) var(--text-base)/1.3 var(--font-body)`, color: 'var(--ink)' }}>{label}</span>}
    </label>
  );
}
