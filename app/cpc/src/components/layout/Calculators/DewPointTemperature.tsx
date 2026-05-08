import {
  calculateDewPointTemperature,
  type DewPointTemperatureResult,
} from '../../../utils/Calculators/DewPointTemperatureCalculator';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

/**
 * Renders the dew point temperature calculator from air temperature and relative humidity inputs.
 * It keeps the form wiring local while delegating parsing and result state to the calculator hook.
 */
function DewPointTemperature() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    {
      temperature: string;
      relativeHumidity: string;
    },
    DewPointTemperatureResult
  >({
    initialFields: {
      temperature: '',
      relativeHumidity: '',
    },
    calculate: ({ temperature, relativeHumidity }) =>
      calculateDewPointTemperature({
        temperature,
        relativeHumidity,
      }),
  });

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            7) Td
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Dew point temperature calculated from air temperature and relative
            humidity.
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
            id="relativeHumidity"
            label="Relative humidity (%)"
            value={fields.relativeHumidity}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('relativeHumidity', value)}
          />

          <div className="flex justify-center">
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>
        </div>

        <CalculationResultBox
          formula="Td = T - ((100 - RH) / 5)"
          result={formatNumericValue(result?.dewPointTemperature)}
          description="Enter air temperature in °C and relative humidity in %. The result is the approximate dew point temperature expressed in °C."
        />
      </div>
    </section>
  );
}

export default DewPointTemperature;
