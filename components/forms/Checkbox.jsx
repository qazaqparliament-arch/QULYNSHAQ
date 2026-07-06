import React from 'react';

/**
 * Құлыншақ — Checkbox
 * Chunky rounded checkbox with an ink check. Controlled or uncontrolled.
 */
export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  tone = 'brand',        // brand | teal
  style = {},
  id,
  ...rest
}) {
  const cbId = id || React.useId();
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const fill = tone === 'teal' ? 'var(--teal-400)' : 'var(--amber-400)';

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={cbId} style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        position: 'relative', width: 24, height: 24, flex: '0 0 auto',
        background: on ? fill : 'var(--surface)',
        border: `var(--bw-1) solid ${on ? 'transparent' : 'var(--ink-4)'}`,
        borderRadius: 'var(--radius-xs)',
        transition: 'background var(--dur-fast), border-color var(--dur-fast)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <input type="checkbox" id={cbId} checked={on} disabled={disabled} onChange={toggle}
          style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', margin: 0, cursor: 'inherit' }} {...rest} />
        <span aria-hidden style={{
          color: 'var(--ink)', fontSize: 15, fontWeight: 900, lineHeight: 1,
          transform: on ? 'scale(1)' : 'scale(0)',
          transition: 'transform var(--dur-fast) var(--ease-bounce)',
        }}>✓</span>
      </span>
      {label && <span style={{ font: `var(--fw-medium) var(--text-base)/1.3 var(--font-body)`, color: 'var(--ink)' }}>{label}</span>}
    </label>
  );
}
