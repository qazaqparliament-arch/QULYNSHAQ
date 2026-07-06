import React from 'react';

/**
 * Кулыншақ — Callout
 * Boxed tip/note for the booklet & lesson voice. A left "rule" strip + optional icon.
 * Tones map to teaching intents: tip, rule, warning, fun.
 */
export function Callout({
  children,
  title,
  tone = 'tip',          // tip | rule | warning | fun
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    tip:     { bg: 'var(--teal-100)',  rule: 'var(--teal-400)',  fg: 'var(--teal-700)',  glyph: '💡' },
    rule: { bg: 'var(--callout-rule-bg, var(--paper-deep))', rule: 'var(--callout-rule-strip, var(--ink))', fg: 'var(--callout-rule-fg, var(--ink-2))',     glyph: '♟' },
    warning: { bg: 'var(--clay-100)',  rule: 'var(--clay-400)',  fg: 'var(--clay-600)',  glyph: '!' },
    fun: { bg: 'var(--callout-fun-bg, var(--amber-100))', rule: 'var(--amber-400)', fg: 'var(--amber-700)', glyph: '★' },
  };
  const t = tones[tone] || tones.tip;

  return (
    <div
      role="note"
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        padding: 'var(--space-4) var(--space-5)',
        background: t.bg,
        borderRadius: 'var(--radius-lg)',
        borderLeft: `5px solid ${t.rule}`,
        color: 'var(--ink)',
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden
        style={{
          flex: '0 0 auto',
          fontSize: '1.25em',
          lineHeight: 1.2,
          color: t.fg,
        }}
      >
        {icon || t.glyph}
      </span>
      <div style={{ minWidth: 0 }}>
        {title && (
          <div style={{
            font: `var(--fw-bold) var(--text-base)/1.3 var(--font-display)`,
            color: t.fg,
            marginBottom: '2px',
          }}>{title}</div>
        )}
        <div style={{ font: `var(--fw-regular) var(--text-sm)/1.5 var(--font-body)`, color: 'var(--callout-body, var(--ink-2))' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
