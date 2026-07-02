import * as React from 'react';

/**
 * Кулыншақ ChessPiece — a Unicode chess glyph in brand style, optionally on a token disc
 * and labelled with its Kazakh name.
 *
 * @startingPoint section="Chess" subtitle="Chess piece token with Kazakh names" viewport="700x200"
 */
export type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';

export interface ChessPieceProps {
  /** @default "knight" */
  type?: PieceType;
  /** Piece colour. @default "black" */
  color?: 'white' | 'black';
  /** Pixel size of the glyph (or disc). @default 44 */
  size?: number;
  /** Render on a coloured token disc. @default false */
  disc?: boolean;
  /** Disc tint. @default "brand" */
  tone?: 'brand' | 'teal' | 'paper';
  /** Show the Kazakh piece name below. @default false */
  label?: boolean;
  style?: React.CSSProperties;
}

export function ChessPiece(props: ChessPieceProps): JSX.Element;
