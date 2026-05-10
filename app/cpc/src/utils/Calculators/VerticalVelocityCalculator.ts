import type { CalculatorResult } from '../../types/calculator.types';

export type VerticalVelocityInput = {
  cin: number;
};

export type VerticalVelocityResult = CalculatorResult<'wLift'>;

/**
 * Calculates theoretical lifting velocity from CIN.
 * The result is returned as wLift so the vertical velocity component can format it consistently.
 */
export function calculateVerticalVelocity({
  cin,
}: VerticalVelocityInput): VerticalVelocityResult {
  const wLift = Math.sqrt(2 * cin);

  return { wLift };
}
