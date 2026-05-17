/**
 * Shared types for utility functions.
 */

/**
 * Options for formatting numeric values.
 */
export type FormatNumericValueOptions = {
  digits?: number;
  emptyValue?: string;
};

/**
 * Options for form validation.
 */
export type FormValidationOptions = {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
};

/**
 * Result of form validation.
 */
export type ValidationResult = {
  isValid: boolean;
  errors: string[];
};
