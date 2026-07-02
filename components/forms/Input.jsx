import React from 'react';

/**
 * Кулыншақ — Input
 * Text field with optional label, hint, error, and leading glyph. Warm paper fill.
 */
export function Input({
  label,
  hint,
  error,
  leading = null,
  size = 'md',           // sm | md | lg
  full = true,
  style = {},
  id,
  ...rest
}) {
  const heights = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--clay-400)' : focus ? 'var(--teal-400)' : 'var(--line)';

  return (
    <div style={{ width: full ? '100%' : 'auto', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          display: 'block', marginBottom: '6px',
          font: `var(--fw-bold) var(--text-sm)/1.2 var(--font-display)`, color: 'var(--ink-2)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        height: heights[size], padding: '0 14px',
        background: 'var(--surface)',
        border: `var(--bw-1) solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? '0 0 0 3px var(--teal-100)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {leading && <span style={{ color: 'var(--ink-3)', display: 'inline-flex' }}>{leading}</span>}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none',
            background: 'transparent', color: 'var(--ink)',
            font: `var(--fw-regular) var(--text-base)/1 var(--font-body)`,
          }}
          {...rest}
        />
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
