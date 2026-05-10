import type {
  DewPointTemperatureInput,
  DewPointTemperatureResult,
} from '../../types/calculator.types';

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
