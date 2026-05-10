import type { FormatNumericValueOptions } from '../types/utils.types';

/**
 * Formats finite numeric values with a fixed number of decimal places.
 * Null, undefined, and non-finite values are replaced with the configured empty display text.
 */
export function formatNumericValue(
  value: number | null | undefined,
  options: FormatNumericValueOptions = {},
): string {
  const { digits = 2, emptyValue = '' } = options;

  if (value === null || value === undefined || !Number.isFinite(value)) {
    return emptyValue;
  }

  return value.toFixed(digits);
}
