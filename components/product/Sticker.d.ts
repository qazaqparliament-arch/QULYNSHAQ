import * as React from 'react';

/**
 * Кулыншақ Sticker — the peel-and-stick look from the physical sticker pack.
 *
 * @startingPoint section="Product" subtitle="Peel-and-stick sticker treatment" viewport="700x220"
 */
export interface StickerProps {
  children?: React.ReactNode;
  /** @default "rounded" */
  shape?: 'rounded' | 'circle' | 'seal';
  /** @default "amber" */
  tone?: 'amber' | 'teal' | 'clay' | 'paper';
  /** Pixel size (square). @default 96 */
  size?: number;
  /** Resting tilt in degrees. @default -6 */
  tilt?: number;
  /** Show the curled-corner shadow. @default true */
  peel?: boolean;
  style?: React.CSSProperties;
}

export function Sticker(props: StickerProps): JSX.Element;
