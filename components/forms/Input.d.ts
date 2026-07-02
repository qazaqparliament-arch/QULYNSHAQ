import * as React from 'react';

/** Кулыншақ Input — labelled text field with hint/error and optional leading glyph. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  leading?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default true */
  full?: boolean;
}

export function Input(props: InputProps): JSX.Element;
