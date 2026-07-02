import * as React from 'react';

/**
 * Кулыншақ QRTag — a lesson's scannable QR tag that opens its YouTube video.
 * NOTE: renders a deterministic faux-QR PLACEHOLDER; generate a real QR from `href` in production.
 *
 * @startingPoint section="Product" subtitle="Scan-for-video QR tag" viewport="700x240"
 */
export interface QRTagProps {
  /** Stable string → stable placeholder pattern. @default "lesson-01" */
  seed?: string;
  /** Real destination (YouTube URL); used for title/aria here. */
  href?: string;
  /** @default "Сканерлеп видеоны қара" */
  caption?: string;
  /** Pixel size of the code. @default 120 */
  size?: number;
  /** Show the central play badge. @default true */
  play?: boolean;
  style?: React.CSSProperties;
}

export function QRTag(props: QRTagProps): JSX.Element;
