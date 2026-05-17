/**
 * Shared types for converter utilities and related functionality.
 */

/**
 * Generic type for unit information objects used in converters.
 * @template T - The unit type (e.g., TemperatureUnit, WindUnit)
 */
export type UnitInfo<T> = {
  id: T;
  label: string;
};

/**
 * Temperature unit types.
 */
export type TemperatureUnit =
  | 'celsius'
  | 'kelvin'
  | 'fahrenheit'
  | 'rankine'
  | 'delisle'
  | 'newton'
  | 'reaumur'
  | 'romer';

export type TemperatureUnitInfo = UnitInfo<TemperatureUnit>;

/**
 * Wind unit types.
 */
export type WindUnit = 'mps' | 'kmh' | 'knot' | 'mph';
export type WindUnitInfo = UnitInfo<WindUnit>;

/**
 * Hook-related types for unit converters.
 */
export type UnitId = string;

export interface UnitsConverterConfig<U extends UnitId> {
  defaultUnit: U;
  convertAll: (value: number, from: U) => Partial<Record<U, number>>;
}

export interface UseUnitsConverterReturn<U extends UnitId> {
  valueInput: string;
  selectedUnit: U;
  results: Partial<Record<U, number>>;
  setValueInput: (next: string) => void;
  setSelectedUnit: (next: U) => void;
  handleConvert: () => void;
}
