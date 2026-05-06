// src/utils/Calculators/VerticalVelocityCalculator.ts

export type VerticalVelocityInput = {
  cin: number;
};

export type VerticalVelocityResult = {
  wLift: number;
};

export function calculateVerticalVelocity({
  cin,
}: VerticalVelocityInput): VerticalVelocityResult {
  const wLift = Math.sqrt(2 * cin);

  return { wLift };
}
