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

// 1) z jednostki źródłowej -> na °C
/**
 * Converts a temperature value from the selected source scale into Celsius.
 * Celsius is the shared intermediate scale used by the full temperature converter.
 */
export function toCelsius(foreignValue: number, from: TemperatureUnit): number {
  switch (from) {
    case 'celsius':
      return foreignValue;
    case 'kelvin':
      // x[K] = (x - 273.15)[°C]
      return foreignValue - 273.15;
    case 'fahrenheit':
      // x[°F] = (x - 32) * 5/9[°C]
      return (foreignValue - 32) * (5 / 9);
    case 'rankine':
      // x[°R] = (x - 491.67) * 5/9[°C]
      return ((foreignValue - 491.67) * 5) / 9;
    case 'delisle':
      // x[°De] = (100 - x) * 2/3[°C] => odwrotność: °C = 100 - (x * 2/3)
      return 100 - (foreignValue * 2) / 3;
    case 'newton':
      // x[°N] = (x * 100/33)[°C] => odwrotność: °C = x * 100/33
      return (foreignValue * 100) / 33;
    case 'reaumur':
      // x[°Re] = (x * 5/4)[°C] => odwrotność: °C = x * 5/4
      return (foreignValue * 5) / 4;
    case 'romer':
      // x[°Rø] = (x - 7.5) * 40/21[°C] => odwrotność: °C = (x - 7.5) * 40/21
      return ((foreignValue - 7.5) * 40) / 21;
    default:
      return foreignValue;
  }
}

// 2) z °C -> na docelową jednostkę
/**
 * Converts a Celsius temperature value into the requested target scale.
 * This is the second half of the two-step conversion path for non-Celsius inputs.
 */
export function fromCelsius(valueCelsius: number, to: TemperatureUnit): number {
  switch (to) {
    case 'celsius':
      return valueCelsius;
    case 'kelvin':
      // x[°C] = (x + 273.15)[K]
      return valueCelsius + 273.15;
    case 'fahrenheit':
      // x[°C] = (x * 9/5+32)[°F]
      return (valueCelsius * 9) / 5 + 32;
    case 'rankine':
      // x[°C] = (x+273.15) * 9/5[°R]
      return ((valueCelsius + 273.15) * 9) / 5;
    case 'delisle':
      // x[°C] = (100-x) * 3/2[°De]
      return ((100 - valueCelsius) * 3) / 2;
    case 'newton':
      // x[°C] = (x * 33/100)[°N]
      return (valueCelsius * 33) / 100;
    case 'reaumur':
      // x[°C] = (x * 4/5)[°Re]
      return (valueCelsius * 4) / 5;
    case 'romer':
      // x[°C] = (x * 21/40 + 7.5)[°Rø]
      return (valueCelsius * 21) / 40 + 7.5;
    default:
      return valueCelsius;
  }
}

// 3) metoda łącząca – na podstawie wyboru użytkownika
/**
 * Converts one input temperature into every supported temperature scale.
 * It preserves the original value for the selected unit and uses Celsius as the intermediate base for all others.
 */
export function convertAllUnits(
  inputValue: number,
  inputUnit: TemperatureUnit,
): Record<TemperatureUnit, number> {
  // jeśli już jest w °C, pomijamy toCelsius i lecimy od razu z fromCelsius
  const valueInCelsius =
    inputUnit === 'celsius' ? inputValue : toCelsius(inputValue, inputUnit);

  const result: Partial<Record<TemperatureUnit, number>> = {};

  for (const unitInfo of TEMPERATURE_UNITS) {
    const targetUnit = unitInfo.id;

    if (targetUnit === inputUnit) {
      // zawsze wyświetlamy też jednostkę wejściową (oryginalną wartość)
      result[targetUnit] = inputValue;
      continue;
    }

    if (inputUnit === 'celsius') {
      // przypadek 1: użytkownik wybiera °C → konwersja tylko z °C na inne jednostki
      result[targetUnit] = fromCelsius(inputValue, targetUnit);
    } else if (targetUnit === 'celsius') {
      // przypadek 2: wiersz z °C → używamy tylko toCelsius
      result[targetUnit] = valueInCelsius;
    } else {
      // przypadek 3: np. °F → K: najpierw do °C, potem z °C na docelową
      const intermediateC = valueInCelsius;
      result[targetUnit] = fromCelsius(intermediateC, targetUnit);
    }
  }

  return result as Record<TemperatureUnit, number>;
}
