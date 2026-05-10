/**
 * Shared types for UI components.
 */

import type { ReactNode } from 'react';

/**
 * Props for the CalculationResultBox component.
 */
export type CalculationResultBoxProps = {
  formula: ReactNode;
  result?: string;
  description: string;
};

/**
 * Generic option type for select components.
 */
export type SelectOption<T extends string> = {
  id: T;
  label: string;
};

/**
 * Props for the SelectField component.
 */
export type SelectFieldProps<T extends string> = {
  id: string;
  label: string;
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
};

/**
 * Props for the NumberInput component.
 */
export type NumberInputProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

/**
 * Props for the Button component.
 */
export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
