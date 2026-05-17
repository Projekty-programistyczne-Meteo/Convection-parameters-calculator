import type { WindUnit, WindUnitInfo } from '../../types/converter.types';

export const WIND_UNITS: WindUnitInfo[] = [
  { id: 'mps', label: 'Meters per second [m/s]' },
  { id: 'kmh', label: 'Kilometers per hour [km/h]' },
  { id: 'knot', label: 'Knots [kt]' },
  { id: 'mph', label: 'Miles per hour [mph]' },
];

/**
 * Converts a wind speed from the selected source unit into meters per second.
 * Meters per second is the shared base unit for the wind conversion workflow.
 */
export function toMetersPerSecond(value: number, from: WindUnit): number {
  switch (from) {
    case 'mps':
      return value;
    case 'kmh':
      return value * (1000 / 3600);
    case 'knot':
      return value * 0.515;
    case 'mph':
      return value * 0.447;
    default:
      return value;
  }
}

/**
 * Converts a meters-per-second wind speed into the requested target unit.
 * This keeps all target conversions in one place for easier formula review.
 */
export function fromMetersPerSecond(valueMps: number, to: WindUnit): number {
  switch (to) {
    case 'mps':
      return valueMps;
    case 'kmh':
      return valueMps * 3.6;
    case 'knot':
      return valueMps * 1.9426;
    case 'mph':
      return valueMps * 2.237;
    default:
      return valueMps;
  }
}

/**
 * Converts one input wind speed into every supported wind unit.
 * It preserves the original selected-unit value and uses meters per second as the intermediate base for the rest.
 */
export function convertAllWindUnits(
  inputValue: number,
  inputUnit: WindUnit,
): Record<WindUnit, number> {
  const valueInMps =
    inputUnit === 'mps' ? inputValue : toMetersPerSecond(inputValue, inputUnit);

  const result: Partial<Record<WindUnit, number>> = {};

  for (const unitInfo of WIND_UNITS) {
    const targetUnit = unitInfo.id;

    if (targetUnit === inputUnit) {
      result[targetUnit] = inputValue;
      continue;
    }

    if (inputUnit === 'mps') {
      result[targetUnit] = fromMetersPerSecond(inputValue, targetUnit);
    } else if (targetUnit === 'mps') {
      result[targetUnit] = valueInMps;
    } else {
      result[targetUnit] = fromMetersPerSecond(valueInMps, targetUnit);
    }
  }

  return result as Record<WindUnit, number>;
}
