import * as React from 'react';

/** Кулыншақ StepList — numbered assembly / how-to steps for the on-screen booklet. */
export interface Step { title?: string; body?: string; }
export interface StepListProps {
  /** Array of {title, body} or plain strings. */
  steps?: Array<Step | string>;
  /** First step number. @default 1 */
  start?: number;
  /** Dashed fold-line dividers between steps. @default true */
  folds?: boolean;
  style?: React.CSSProperties;
}

export function StepList(props: StepListProps): JSX.Element;
