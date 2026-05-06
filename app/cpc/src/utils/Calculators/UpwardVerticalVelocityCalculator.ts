// src/utils/Calculators/UpwardVerticalVelocityCalculator.ts

export type UpwardVerticalVelocityInput = {
  cape: number;
};

export type UpwardVerticalVelocityResult = {
  uvv: number;
};

export function calculateUpwardVerticalVelocity({
  cape,
}: UpwardVerticalVelocityInput): UpwardVerticalVelocityResult {
  const uvv = Math.sqrt(2 * cape);

  return { uvv };
}
