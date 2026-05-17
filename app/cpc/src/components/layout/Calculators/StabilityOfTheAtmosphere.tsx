import { calculateStabilityOfTheAtmosphere } from '../../../utils/Calculators/StabilityOfTheAtmosphereCalculator';
import type { StabilityResult } from '../../../types/calculator.types';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

/**
 * Renders the Lifted Index calculator for comparing environmental and parcel temperatures.
 * It keeps the calculator UI focused on the two 500 mb temperature inputs and the formatted LI output.
 */
function StabilityOfTheAtmosphere() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    {
      ambientTemperature: string;
      parcelTemperature: string;
    },
    StabilityResult
  >({
    initialFields: {
      ambientTemperature: '',
      parcelTemperature: '',
    },
    calculate: ({ ambientTemperature, parcelTemperature }) =>
      calculateStabilityOfTheAtmosphere({
        ambientTemperature,
        parcelTemperature,
      }),
  });

  return (
    <section className="bg-cpc-background-calculators px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-cpc-text-primary md:text-2xl">
            Stability of the atmosphere
          </h2>
          <p className="mt-2 text-xs text-cpc-text-secondary md:text-sm">
            Lifted Index (LI) calculated from the environmental and air parcel
            temperature at 500 mb pressure level. Negative values indicate
            unstable conditions favorable for convection, while positive values
            suggest more stable air.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <NumberInput
            id="ambientTemperature"
            label="Ambient temperature (°C)"
            value={fields.ambientTemperature}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('ambientTemperature', value)}
          />

          <NumberInput
            id="parcelTemperature"
            label="Air parcel temperature (°C)"
            value={fields.parcelTemperature}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('parcelTemperature', value)}
          />

          <div className="flex justify-center lg:justify-start">
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>
        </div>

        <CalculationResultBox
          formula="LI = T(500 mb envir) - T(500 mb parcel)"
          result={formatNumericValue(result?.li)}
          description="Enter both temperatures in degrees Celsius. Positive LI values indicate more stable conditions, negative values – unstable atmosphere."
        />
      </div>
    </section>
  );
}

export default StabilityOfTheAtmosphere;
