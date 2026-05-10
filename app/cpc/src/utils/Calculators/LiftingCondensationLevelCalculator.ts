import type { CalculatorResult } from '../../types/calculator.types';

export type LiftingCondensationLevelInput = {
  temperature: number;
  dewPoint: number;
};

export type LiftingCondensationLevelResult = CalculatorResult<'lcl'>;

/**
 * Estimates lifting condensation level from temperature and dew point spread.
 * The result represents approximate cloud-base height in meters for the UI display.
 */
export function calculateLiftingCondensationLevel({
  temperature,
  dewPoint,
}: LiftingCondensationLevelInput): LiftingCondensationLevelResult {
  const lcl = 125 * (temperature - dewPoint);

  return { lcl };
}
