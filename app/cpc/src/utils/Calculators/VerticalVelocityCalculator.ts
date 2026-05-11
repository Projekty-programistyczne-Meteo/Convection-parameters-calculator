import type {
  VerticalVelocityInput,
  VerticalVelocityResult,
} from '../../types/calculator.types';

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
