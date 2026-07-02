import * as React from 'react';

/** Кулыншақ Callout — boxed tip/rule/warning for the lesson & booklet voice. */
export interface CalloutProps {
  children?: React.ReactNode;
  title?: string;
  /** Teaching intent. @default "tip" */
  tone?: 'tip' | 'rule' | 'warning' | 'fun';
  /** Override the default glyph. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Callout(props: CalloutProps): JSX.Element;
