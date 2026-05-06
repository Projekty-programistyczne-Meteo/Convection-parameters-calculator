// src/utils/Converters/StabilityOfTheAtmosphereCalculator.ts

export type StabilityInput = {
  ambientTemperature: number; // T(500 mb envir)
  parcelTemperature: number; // T(500 mb parcel)
};

export type StabilityResult = {
  li: number; // Lifted Index
};

/**
 * Oblicza Lifted Index:
 * LI = T(500 mb envir) - T(500 mb parcel)
 */
export function calculateStabilityOfTheAtmosphere(
  input: StabilityInput,
): StabilityResult {
  const { ambientTemperature, parcelTemperature } = input;

  const li = ambientTemperature - parcelTemperature;

  return { li };
}
