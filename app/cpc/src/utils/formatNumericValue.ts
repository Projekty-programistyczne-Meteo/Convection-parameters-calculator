// src/utils/formatters/formatNumericValue.ts

type FormatNumericValueOptions = {
  digits?: number;
  emptyValue?: string;
};

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
