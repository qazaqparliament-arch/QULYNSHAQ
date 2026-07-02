import * as React from 'react';

/** Кулыншақ IconButton — compact square/round button holding a single glyph. */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** Accessible label — always provide. */
  label?: string;
  /** @default "soft" */
  variant?: 'soft' | 'solid' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Pill/circle instead of rounded square. @default false */
  round?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
