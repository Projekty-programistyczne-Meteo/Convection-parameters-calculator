// src/utils/Calculators/DewPointTemperatureCalculator.ts

export type DewPointTemperatureInput = {
  temperature: number;
  relativeHumidity: number;
};

export type DewPointTemperatureResult = {
  dewPointTemperature: number;
};

export function calculateDewPointTemperature({
  temperature,
  relativeHumidity,
}: DewPointTemperatureInput): DewPointTemperatureResult {
  const dewPointTemperature = temperature - (100 - relativeHumidity) / 5;

  return { dewPointTemperature };
}
