import * as React from 'react';

/** Кулыншақ Checkbox — chunky rounded checkbox with a bouncy ink check. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  /** Fill colour when checked. @default "brand" */
  tone?: 'brand' | 'teal';
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
