import { calculateLiftingCondensationLevel } from '../../../utils/Calculators/LiftingCondensationLevelCalculator';
import type { LiftingCondensationLevelResult } from '../../../types/calculator.types';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

/**
 * Renders the lifting condensation level calculator using temperature and dew point inputs.
 * It shows the estimated cloud-base height result together with the formula explanation box.
 */
function LiftingCondensationLevel() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    {
      temperature: string;
      dewPoint: string;
    },
    LiftingCondensationLevelResult
  >({
    initialFields: {
      temperature: '',
      dewPoint: '',
    },
    calculate: ({ temperature, dewPoint }) =>
      calculateLiftingCondensationLevel({
        temperature,
        dewPoint,
      }),
  });

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            Lifting Condensation Level
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Lifting condensation level calculated from air temperature and dew
            point temperature.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <NumberInput
            id="temperature"
            label="Temperature (°C)"
            value={fields.temperature}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('temperature', value)}
          />

          <NumberInput
            id="dewPoint"
            label="Dew point temperature (°C)"
            value={fields.dewPoint}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('dewPoint', value)}
          />

          <div className="flex justify-center">
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>
        </div>

        <CalculationResultBox
          formula="LCL = 125 × (T - Td)"
          result={formatNumericValue(result?.lcl)}
          description="Enter air temperature and dew point temperature in °C. The result is the approximate lifting condensation level expressed in meters."
        />
      </div>
    </section>
  );
}

export default LiftingCondensationLevel;
