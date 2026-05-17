# Logic

## Hooks

`src/hooks/useCalculatorForm.ts` manages repeated calculator behavior:

- stores form fields as strings,
- updates a single field by key,
- parses comma or dot decimal input into numbers,
- rejects invalid numeric input,
- optionally runs calculator-specific validation,
- stores the latest result or clears it when input is invalid.

`src/hooks/useUnitsConverter.ts` manages repeated converter behavior:

- stores the entered value as a string,
- stores the selected source unit,
- parses comma or dot decimal input,
- calls the provided `convertAll` function,
- stores the latest result map.

`src/hooks/useContactForm.ts` manages the support page contact form:

- stores contact form field state,
- validates and sanitizes submission payloads,
- manages Turnstile widget lifecycle,
- sends messages through EmailJS,
- exposes form callbacks for the presentational component.

## Calculator Utilities

Calculator utilities live in `src/utils/Calculators`. They are pure functions: each receives typed numeric input and returns a typed result object.

Current formulas:

- `calculateStabilityOfTheAtmosphere`: `li = ambientTemperature - parcelTemperature`.
- `calculateUpdraftStrenght`: `wMax = sqrt(2 * cape)`.
- `calculateVerticalVelocity`: `wLift = sqrt(2 * cin)`.
- `calculateEnergyHelicityIndex`: `ehi = (cape * srh) / 160000`.
- `calculateDerechoCompositeParameter`: `dcp = (dcape / 980) * (mucape / 2000) * (shear06km / 20) * (meanWind06km / 16)`.
- `calculateLiftingCondensationLevel`: `lcl = 125 * (temperature - dewPoint)`.
- `calculateDewPointTemperature`: `dewPointTemperature = temperature - (100 - relativeHumidity) / 5`.
- `calculateUpwardVerticalVelocity`: `uvv = sqrt(2 * cape)`.

Calculator UI components format results with `formatNumericValue` before displaying them.

## Converter Utilities

Converter utilities live in `src/utils/Converters`.

`TemperatureConversion.ts` defines:

- supported temperature units,
- `toCelsius` for converting any supported scale into Celsius,
- `fromCelsius` for converting Celsius into a target scale,
- `convertAllUnits` for converting one input value into every supported temperature unit.

Celsius is the intermediate base for non-Celsius temperature conversions.

`WindConvertion.ts` defines:

- supported wind units,
- `toMetersPerSecond` for converting any supported wind unit into meters per second,
- `fromMetersPerSecond` for converting meters per second into a target unit,
- `convertAllWindUnits` for converting one input value into every supported wind unit.

Meters per second is the intermediate base for non-m/s wind conversions.

## Formatting

`src/utils/formatNumericValue.ts` prepares optional numeric values for display. It helps UI components show a clean empty value before calculation and avoids duplicating formatting rules in calculators and converters.

## Contact Form Validation

`src/utils/formValidate.ts` owns contact form sanitation and validation:

- trims and normalizes names and email,
- lowercases email,
- preserves message line breaks while trimming whitespace,
- validates email format and length,
- requires a message between the configured limits,
- requires privacy policy acceptance,
- returns both validation errors and sanitized data.

This keeps `ContactForm.tsx` focused on rendering the contact form and delegating behavior to `useContactForm`.

## Types

Shared TypeScript files live in `src/types`:

- `calculator.types.ts` - calculator inputs, results, and calculator hook contracts.
- `converter.types.ts` - unit ids, unit metadata, converter config, and converter hook return shape.
- `contactForm.types.ts` - contact form data, initial state, and errors.
- `services.types.ts` - EmailJS and Turnstile service parameter types.
- `ui.types.ts` - reusable UI component props.
- `utils.types.ts` - utility-oriented shared types.

The type files act as stable contracts between UI components, hooks, services, and utilities.
