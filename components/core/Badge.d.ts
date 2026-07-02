import * as React from 'react';

/** Кулыншақ Badge — compact label/status pill (lesson number, difficulty, count). */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "brand" */
  tone?: 'brand' | 'teal' | 'clay' | 'olive' | 'neutral' | 'ink';
  /** @default "soft" */
  variant?: 'soft' | 'solid' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md';
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
