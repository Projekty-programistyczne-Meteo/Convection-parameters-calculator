export type UpdraftStrenghtInput = {
  cape: number;
};

export type UpdraftStrenghtResult = {
  wMax: number;
};

/**
 * Calculates theoretical maximum updraft speed from CAPE.
 * The result is returned as wMax so the UI can label it separately from other velocity outputs.
 */
export function calculateUpdraftStrenght({
  cape,
}: UpdraftStrenghtInput): UpdraftStrenghtResult {
  const wMax = Math.sqrt(2 * cape);

  return { wMax };
}
