import type { CalculatorResult } from '../../types/calculator.types';

export type UpwardVerticalVelocityInput = {
  cape: number;
};

export type UpwardVerticalVelocityResult = CalculatorResult<'uvv'>;

/**
 * Calculates theoretical upward vertical velocity from CAPE.
 * The result is returned as uvv for direct display in the UVV calculator component.
 */
export function calculateUpwardVerticalVelocity({
  cape,
}: UpwardVerticalVelocityInput): UpwardVerticalVelocityResult {
  const uvv = Math.sqrt(2 * cape);

  return { uvv };
}
