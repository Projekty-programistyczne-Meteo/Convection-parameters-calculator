/**
 * Shared types for calculator utilities and related functionality.
 */

/**
 * Generic type for calculator results that return a single numeric value.
 * @template T - The name of the result field (e.g., 'ehi', 'dcp', 'li')
 */
export type CalculatorResult<T extends string> = Record<T, number>;

/**
 * Base type for calculator input objects containing numeric parameters.
 */
export type CalculatorInput = Record<string, number>;

/**
 * Specific calculator input types.
 */
export type EnergyHelicityIndexInput = {
  cape: number;
  srh: number;
};

export type DewPointTemperatureInput = {
  temperature: number;
  relativeHumidity: number;
};

export type LiftingCondensationLevelInput = {
  temperature: number;
  dewPoint: number;
};

export type DerechoCompositeParameterInput = {
  dcape: number;
  mucape: number;
  shear06km: number;
  meanWind06km: number;
};

export type UpdraftStrenghtInput = {
  cape: number;
};

export type VerticalVelocityInput = {
  cin: number;
};

export type StabilityInput = {
  ambientTemperature: number; // T(500 mb envir)
  parcelTemperature: number; // T(500 mb parcel)
};

export type UpwardVerticalVelocityInput = {
  cape: number;
};

/**
 * Specific calculator result types using the generic CalculatorResult.
 */
export type EnergyHelicityIndexResult = CalculatorResult<'ehi'>;
export type DewPointTemperatureResult = CalculatorResult<'dewPointTemperature'>;
export type LiftingCondensationLevelResult = CalculatorResult<'lcl'>;
export type DerechoCompositeParameterResult = CalculatorResult<'dcp'>;
export type UpdraftStrenghtResult = CalculatorResult<'wMax'>;
export type VerticalVelocityResult = CalculatorResult<'wLift'>;
export type StabilityResult = CalculatorResult<'li'>;
export type UpwardVerticalVelocityResult = CalculatorResult<'uvv'>;

/**
 * Hook-related types for calculator forms.
 */
export type PrimitiveFields = Record<string, string>;
export type ParsedFields<T extends PrimitiveFields> = {
  [K in keyof T]: number;
};

export type UseCalculatorFormConfig<
  TFields extends PrimitiveFields,
  TResult,
> = {
  initialFields: TFields;
  calculate: (values: ParsedFields<TFields>) => TResult;
  validate?: (values: ParsedFields<TFields>) => boolean;
};
