/**
 * Shared types for converter utilities.
 */

/**
 * Generic type for unit information objects used in converters.
 * @template T - The unit type (e.g., TemperatureUnit, WindUnit)
 */
export type UnitInfo<T> = {
  id: T;
  label: string;
};
