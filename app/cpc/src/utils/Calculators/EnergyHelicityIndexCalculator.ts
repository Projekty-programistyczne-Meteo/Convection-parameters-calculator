// src/utils/Calculators/EnergyHelicityIndexCalculator.ts

export type EnergyHelicityIndexInput = {
  cape: number;
  srh: number;
};

export type EnergyHelicityIndexResult = {
  ehi: number;
};

export function calculateEnergyHelicityIndex({
  cape,
  srh,
}: EnergyHelicityIndexInput): EnergyHelicityIndexResult {
  const ehi = (cape * srh) / 160000;

  return { ehi };
}
