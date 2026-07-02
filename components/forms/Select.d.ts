import * as React from 'react';

/** Кулыншақ Select — styled native dropdown matching Input. */
export interface SelectOption { value: string; label: string; }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Array of {value,label} or plain strings. */
  options?: Array<SelectOption | string>;
  placeholder?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default true */
  full?: boolean;
}

export function Select(props: SelectProps): JSX.Element;
