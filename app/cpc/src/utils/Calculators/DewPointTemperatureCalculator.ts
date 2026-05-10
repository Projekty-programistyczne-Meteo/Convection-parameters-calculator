import type { CalculatorResult } from '../../types/calculator.types';

export type DewPointTemperatureInput = {
  temperature: number;
  relativeHumidity: number;
};

export type DewPointTemperatureResult = CalculatorResult<'dewPointTemperature'>;

/**
 * Calculates an approximate dew point temperature from air temperature and relative humidity.
 * The formula is intentionally small so the UI can display the same relationship clearly.
 */
export function calculateDewPointTemperature({
  temperature,
  relativeHumidity,
}: DewPointTemperatureInput): DewPointTemperatureResult {
  const dewPointTemperature = temperature - (100 - relativeHumidity) / 5;

  return { dewPointTemperature };
}
