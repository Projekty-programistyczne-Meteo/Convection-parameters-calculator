import type { CalculatorResult } from '../../types/calculator.types';

export type StabilityInput = {
  ambientTemperature: number; // T(500 mb envir)
  parcelTemperature: number; // T(500 mb parcel)
};

export type StabilityResult = CalculatorResult<'li'>;

/**
 * Calculates the Lifted Index by subtracting parcel temperature from environmental temperature at 500 mb.
 * The result describes atmospheric stability and feeds the stability calculator UI.
 */
export function calculateStabilityOfTheAtmosphere(
  input: StabilityInput,
): StabilityResult {
  const { ambientTemperature, parcelTemperature } = input;

  const li = ambientTemperature - parcelTemperature;

  return { li };
}
