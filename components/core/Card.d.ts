import * as React from 'react';

/**
 * Кулыншақ Card — warm paper surface for grouping content.
 *
 * @startingPoint section="Core" subtitle="Paper / cut-line / sunk surfaces" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** paper = raised, cut = ink cut-line border, sunk = recessed. @default "paper" */
  variant?: 'paper' | 'cut' | 'sunk';
  /** @default "md" */
  pad?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift on hover + pointer cursor. @default false */
  interactive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
