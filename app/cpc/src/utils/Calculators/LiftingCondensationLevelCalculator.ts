// src/utils/Calculators/LiftingCondensationLevelCalculator.ts

export type LiftingCondensationLevelInput = {
  temperature: number;
  dewPoint: number;
};

export type LiftingCondensationLevelResult = {
  lcl: number;
};

export function calculateLiftingCondensationLevel({
  temperature,
  dewPoint,
}: LiftingCondensationLevelInput): LiftingCondensationLevelResult {
  const lcl = 125 * (temperature - dewPoint);

  return { lcl };
}
