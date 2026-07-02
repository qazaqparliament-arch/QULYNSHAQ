import React from 'react';

/**
 * Кулыншақ — StepList
 * Numbered assembly / how-to steps for the booklet-on-screen. Each step is a paper row
 * with an amber number disc; optional fold-line divider evokes the buildable box.
 */
export function StepList({
  steps = [],            // [{ title, body }] or [string]
  start = 1,
  folds = true,          // dashed fold-line dividers between steps
  style = {},
  ...rest
}) {
  const norm = steps.map((s) => (typeof s === 'string' ? { title: s } : s));
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      {norm.map((s, i) => (
        <li key={i} style={{
          display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) 0',
          borderBottom: folds && i < norm.length - 1 ? '2px dashed var(--line)' : 'none',
        }}>
          <span style={{
            flex: '0 0 auto', width: 38, height: 38, borderRadius: 'var(--radius-pill)',
            background: 'var(--amber-400)', color: 'var(--ink)',
            border: '2px solid var(--ink)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            font: 'var(--fw-black) var(--text-lg)/1 var(--font-display)',
          }}>{start + i}</span>
          <div style={{ minWidth: 0, paddingTop: 3 }}>
            {s.title && <div style={{ font: 'var(--fw-bold) var(--text-lg)/1.3 var(--font-display)', color: 'var(--ink)' }}>{s.title}</div>}
            {s.body && <div style={{ font: 'var(--fw-regular) var(--text-sm)/1.55 var(--font-body)', color: 'var(--ink-2)', marginTop: 2 }}>{s.body}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
