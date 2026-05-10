import type { UnitInfo } from '../../types/converter.types';

export type WindUnit = 'mps' | 'kmh' | 'knot' | 'mph';

export type WindUnitInfo = UnitInfo<WindUnit>;

export const WIND_UNITS: WindUnitInfo[] = [
  { id: 'mps', label: 'Meters per second [m/s]' },
  { id: 'kmh', label: 'Kilometers per hour [km/h]' },
  { id: 'knot', label: 'Knots [kt]' },
  { id: 'mph', label: 'Miles per hour [mph]' },
];

// Stałe konwersji (zaokrąglone, standardowe w meteorologii)
// 1 m/s = 3.6 km/h
// 1 knot ≈ 1.852 km/h
// 1 mph ≈ 1.60934 km/h
// 1 km/h ≈ 0.27778 m/s
// [web:314][web:316][web:321][web:319]

// 1) z jednostki źródłowej -> na m/s
/**
 * Converts a wind speed from the selected source unit into meters per second.
 * Meters per second is the shared base unit for the wind conversion workflow.
 */
export function toMetersPerSecond(value: number, from: WindUnit): number {
  switch (from) {
    case 'mps':
      return value;
    case 'kmh':
      // 1 km/h ≈ 0.27778 m/s
      return value * (1000 / 3600); // ~0.277777...
    case 'knot':
      // 1 knot ≈ 0.514444 m/s [web:316][web:320]
      return value * 0.515;
    case 'mph':
      // 1 mph ≈ 0.44704 m/s (bo 1 mph ≈ 1.60934 km/h) [web:319][web:321]
      return value * 0.447;
    default:
      return value;
  }
}

// 2) z m/s -> na docelową jednostkę
/**
 * Converts a meters-per-second wind speed into the requested target unit.
 * This keeps all target conversions in one place for easier formula review.
 */
export function fromMetersPerSecond(valueMps: number, to: WindUnit): number {
  switch (to) {
    case 'mps':
      return valueMps;
    case 'kmh':
      // 1 m/s = 3.6 km/h [web:321][web:325]
      return valueMps * 3.6;
    case 'knot':
      // knots = m/s × 1.94384 [web:316][web:320]
      return valueMps * 1.9426;
    case 'mph':
      // mph = m/s × 2.23694 [web:316]
      return valueMps * 2.237;
    default:
      return valueMps;
  }
}

// 3) metoda łącząca – przelicza z wybranej jednostki na wszystkie cztery
/**
 * Converts one input wind speed into every supported wind unit.
 * It preserves the original selected-unit value and uses meters per second as the intermediate base for the rest.
 */
export function convertAllWindUnits(
  inputValue: number,
  inputUnit: WindUnit,
): Record<WindUnit, number> {
  // jeśli już jest w m/s, pomijamy toMetersPerSecond
  const valueInMps =
    inputUnit === 'mps' ? inputValue : toMetersPerSecond(inputValue, inputUnit);

  const result: Partial<Record<WindUnit, number>> = {};

  for (const unitInfo of WIND_UNITS) {
    const targetUnit = unitInfo.id;

    if (targetUnit === inputUnit) {
      // zawsze pokazujemy też jednostkę wejściową (oryginalna wartość)
      result[targetUnit] = inputValue;
      continue;
    }

    if (inputUnit === 'mps') {
      // przypadek 1: użytkownik wybiera m/s → bezpośrednio z m/s na wszystkie
      result[targetUnit] = fromMetersPerSecond(inputValue, targetUnit);
    } else if (targetUnit === 'mps') {
      // przypadek 2: wiersz z m/s → używamy tylko toMetersPerSecond
      result[targetUnit] = valueInMps;
    } else {
      // przypadek 3: np. km/h → knots: najpierw do m/s, potem z m/s na docelową
      const intermediateMps = valueInMps;
      result[targetUnit] = fromMetersPerSecond(intermediateMps, targetUnit);
    }
  }

  return result as Record<WindUnit, number>;
}
