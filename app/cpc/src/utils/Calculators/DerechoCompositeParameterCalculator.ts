export type DerechoCompositeParameterInput = {
  dcape: number;
  mucape: number;
  shear06km: number;
  meanWind06km: number;
};

export type DerechoCompositeParameterResult = {
  dcp: number;
};

/**
 * Calculates the Derecho Composite Parameter from DCAPE, MUCAPE, shear, and mean wind inputs.
 * The returned object keeps the result shape stable for calculator UI components.
 */
export function calculateDerechoCompositeParameter({
  dcape,
  mucape,
  shear06km,
  meanWind06km,
}: DerechoCompositeParameterInput): DerechoCompositeParameterResult {
  const dcp =
    (dcape / 980) * (mucape / 2000) * (shear06km / 20) * (meanWind06km / 16);

  return { dcp };
}
