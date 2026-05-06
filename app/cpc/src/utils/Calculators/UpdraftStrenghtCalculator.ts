// src/utils/Calculators/UpdraftStrenghtCalculator.ts

export type UpdraftStrenghtInput = {
  cape: number;
};

export type UpdraftStrenghtResult = {
  wMax: number;
};

export function calculateUpdraftStrenght({
  cape,
}: UpdraftStrenghtInput): UpdraftStrenghtResult {
  const wMax = Math.sqrt(2 * cape);

  return { wMax };
}
