import React from 'react';

/**
 * Кулыншақ — Radio & RadioGroup
 * Round selector with an amber dot. Use RadioGroup for a set.
 */
export function Radio({ label, value, checked, onChange, name, disabled = false, style = {}, id, ...rest }) {
  const rId = id || React.useId();
  return (
    <label htmlFor={rId} style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        position: 'relative', width: 24, height: 24, flex: '0 0 auto',
        background: 'var(--surface)',
        border: `var(--bw-1) solid ${checked ? 'var(--amber-400)' : 'var(--ink-4)'}`,
        borderRadius: 'var(--radius-pill)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color var(--dur-fast)',
      }}>
        <input type="radio" id={rId} name={name} value={value} checked={checked} disabled={disabled}
          onChange={onChange}
          style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', margin: 0, cursor: 'inherit' }} {...rest} />
        <span aria-hidden style={{
          width: 12, height: 12, borderRadius: '50%', background: 'var(--amber-400)',
          transform: checked ? 'scale(1)' : 'scale(0)',
          transition: 'transform var(--dur-fast) var(--ease-bounce)',
        }} />
      </span>
      {label && <span style={{ font: `var(--fw-medium) var(--text-base)/1.3 var(--font-body)`, color: 'var(--ink)' }}>{label}</span>}
    </label>
  );
}

export function RadioGroup({ name, value, onChange, options = [], gap = 12, direction = 'column', style = {} }) {
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const groupName = name || React.useId();
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap, ...style }}>
      {norm.map((o) => (
        <Radio key={o.value} name={groupName} value={o.value} label={o.label}
          checked={value === o.value}
          onChange={() => onChange && onChange(o.value)} />
      ))}
    </div>
  );
}
