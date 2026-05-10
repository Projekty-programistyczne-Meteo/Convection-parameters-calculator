/**
 * Shared types for calculator utilities.
 */

/**
 * Generic type for calculator results that return a single numeric value.
 * @template T - The name of the result field (e.g., 'ehi', 'dcp', 'li')
 */
export type CalculatorResult<T extends string> = Record<T, number>;
