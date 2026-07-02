import React from 'react';

/**
 * Кулыншақ — Select
 * Native-backed dropdown styled to match Input. Warm paper fill, chevron glyph.
 */
export function Select({
  label,
  hint,
  error,
  options = [],          // [{value, label}] or [string]
  size = 'md',
  full = true,
  placeholder,
  style = {},
  id,
  ...rest
}) {
  const heights = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const borderColor = error ? 'var(--clay-400)' : focus ? 'var(--teal-400)' : 'var(--line)';

  return (
    <div style={{ width: full ? '100%' : 'auto', ...style }}>
      {label && (
        <label htmlFor={selId} style={{
          display: 'block', marginBottom: '6px',
          font: `var(--fw-bold) var(--text-sm)/1.2 var(--font-display)`, color: 'var(--ink-2)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={selId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%', height: heights[size], padding: '0 40px 0 14px',
            appearance: 'none', WebkitAppearance: 'none',
            background: 'var(--surface)', color: 'var(--ink)',
            border: `var(--bw-1) solid ${borderColor}`, borderRadius: 'var(--radius-md)',
            boxShadow: focus ? '0 0 0 3px var(--teal-100)' : 'none',
            font: `var(--fw-medium) var(--text-base)/1 var(--font-body)`,
            cursor: 'pointer', outline: 'none',
            transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span aria-hidden style={{
          position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'var(--ink-3)', fontSize: '12px',
        }}>▾</span>
      </div>
      {(hint || error) && (
        <div style={{
          marginTop: '5px', font: `var(--fw-medium) var(--text-xs)/1.3 var(--font-body)`,
          color: error ? 'var(--clay-500)' : 'var(--ink-3)',
        }}>{error || hint}</div>
      )}
    </div>
  );
}
