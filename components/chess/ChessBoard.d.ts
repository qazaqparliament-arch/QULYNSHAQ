import * as React from 'react';
import { PieceType } from './ChessPiece';

/**
 * Кулыншақ ChessBoard — a teaching board that places pieces and highlights legal moves.
 *
 * @startingPoint section="Chess" subtitle="Teaching board with move highlights" viewport="700x420"
 */
export interface BoardPiece {
  square: string;            // e.g. 'e4'
  type: PieceType;
  color: 'white' | 'black';
}

export interface ChessBoardProps {
  /** Board is size×size. @default 8 */
  size?: number;
  /** Pixel size of each square. @default 46 */
  cell?: number;
  pieces?: BoardPiece[];
  /** Squares to highlight as legal moves (clay dots/rings). */
  moves?: string[];
  /** Square of the moving piece (amber ring). */
  origin?: string | null;
  /** Show file/rank coordinates. @default true */
  coords?: boolean;
  style?: React.CSSProperties;
}

export function ChessBoard(props: ChessBoardProps): JSX.Element;
