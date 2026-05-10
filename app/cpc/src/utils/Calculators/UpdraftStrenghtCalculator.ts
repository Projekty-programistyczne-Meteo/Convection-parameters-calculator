import type {
  UpdraftStrenghtInput,
  UpdraftStrenghtResult,
} from '../../types/calculator.types';

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
