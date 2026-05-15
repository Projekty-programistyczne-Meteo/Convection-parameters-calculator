import type {
  TemperatureUnit,
  TemperatureUnitInfo,
} from '../../types/converter.types';

export const TEMPERATURE_UNITS: TemperatureUnitInfo[] = [
  { id: 'celsius', label: 'Celsius [°C]' },
  { id: 'kelvin', label: 'Kelvin [K]' },
  { id: 'fahrenheit', label: 'Fahrenheit [°F]' },
  { id: 'rankine', label: 'Rankine [°R]' },
  { id: 'delisle', label: 'Delisle [°D]' },
  { id: 'newton', label: 'Newton [°N]' },
  { id: 'reaumur', label: 'Réaumur [°Re]' },
  { id: 'romer', label: 'Rømer [°Rø]' },
];

/**
 * Converts a temperature value from the selected source scale into Celsius.
 * Celsius is the shared intermediate scale used by the full temperature converter.
 */
export function toCelsius(foreignValue: number, from: TemperatureUnit): number {
  switch (from) {
    case 'celsius':
      return foreignValue;
    case 'kelvin':
      return foreignValue - 273.15;
    case 'fahrenheit':
      return (foreignValue - 32) * (5 / 9);
    case 'rankine':
      return ((foreignValue - 491.67) * 5) / 9;
    case 'delisle':
      return 100 - (foreignValue * 2) / 3;
    case 'newton':
      return (foreignValue * 100) / 33;
    case 'reaumur':
      return (foreignValue * 5) / 4;
    case 'romer':
      return ((foreignValue - 7.5) * 40) / 21;
    default:
      return foreignValue;
  }
}

/**
 * Converts a Celsius temperature value into the requested target scale.
 * This is the second half of the two-step conversion path for non-Celsius inputs.
 */
export function fromCelsius(valueCelsius: number, to: TemperatureUnit): number {
  switch (to) {
    case 'celsius':
      return valueCelsius;
    case 'kelvin':
      return valueCelsius + 273.15;
    case 'fahrenheit':
      return (valueCelsius * 9) / 5 + 32;
    case 'rankine':
      return ((valueCelsius + 273.15) * 9) / 5;
    case 'delisle':
      return ((100 - valueCelsius) * 3) / 2;
    case 'newton':
      return (valueCelsius * 33) / 100;
    case 'reaumur':
      return (valueCelsius * 4) / 5;
    case 'romer':
      return (valueCelsius * 21) / 40 + 7.5;
    default:
      return valueCelsius;
  }
}

/**
 * Converts one input temperature into every supported temperature scale.
 * It preserves the original value for the selected unit and uses Celsius as the intermediate base for all others.
 */
export function convertAllUnits(
  inputValue: number,
  inputUnit: TemperatureUnit,
): Record<TemperatureUnit, number> {
  const valueInCelsius =
    inputUnit === 'celsius' ? inputValue : toCelsius(inputValue, inputUnit);

  const result: Partial<Record<TemperatureUnit, number>> = {};

  for (const unitInfo of TEMPERATURE_UNITS) {
    const targetUnit = unitInfo.id;

    if (targetUnit === inputUnit) {
      result[targetUnit] = inputValue;
      continue;
    }

    if (inputUnit === 'celsius') {
      result[targetUnit] = fromCelsius(inputValue, targetUnit);
    } else if (targetUnit === 'celsius') {
      result[targetUnit] = valueInCelsius;
    } else {
      result[targetUnit] = fromCelsius(valueInCelsius, targetUnit);
    }
  }

  return result as Record<TemperatureUnit, number>;
}
