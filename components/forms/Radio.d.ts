import * as React from 'react';

/** Кулыншақ Radio — single round selector. Use RadioGroup for exclusive sets. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;

export interface RadioGroupProps {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: Array<{ value: string; label: string } | string>;
  gap?: number;
  /** @default "column" */
  direction?: 'row' | 'column';
  style?: React.CSSProperties;
}
export function RadioGroup(props: RadioGroupProps): JSX.Element;
