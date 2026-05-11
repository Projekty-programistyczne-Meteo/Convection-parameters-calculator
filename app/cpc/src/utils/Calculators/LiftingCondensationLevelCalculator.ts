import type {
  LiftingCondensationLevelInput,
  LiftingCondensationLevelResult,
} from '../../types/calculator.types';

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
