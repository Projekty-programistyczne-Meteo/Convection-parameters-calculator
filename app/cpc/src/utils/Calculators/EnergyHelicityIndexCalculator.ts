export type EnergyHelicityIndexInput = {
  cape: number;
  srh: number;
};

export type EnergyHelicityIndexResult = {
  ehi: number;
};

/**
 * Calculates Energy Helicity Index from CAPE and storm-relative helicity.
 * It returns the EHI in an object to match the shared calculator result pattern.
 */
export function calculateEnergyHelicityIndex({
  cape,
  srh,
}: EnergyHelicityIndexInput): EnergyHelicityIndexResult {
  const ehi = (cape * srh) / 160000;

  return { ehi };
}
