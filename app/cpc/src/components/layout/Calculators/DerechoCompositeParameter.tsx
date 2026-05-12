import { calculateDerechoCompositeParameter } from '../../../utils/Calculators/DerechoCompositeParameterCalculator';
import type { DerechoCompositeParameterResult } from '../../../types/calculator.types';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

/**
 * Renders the Derecho Composite Parameter calculator with inputs for instability, shear, and mean wind.
 * It collects string form values, converts them through the shared calculator hook, and displays the DCP result.
 */
function DerechoCompositeParameter() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    {
      dcape: string;
      mucape: string;
      shear06km: string;
      meanWind06km: string;
    },
    DerechoCompositeParameterResult
  >({
    initialFields: {
      dcape: '',
      mucape: '',
      shear06km: '',
      meanWind06km: '',
    },
    calculate: ({ dcape, mucape, shear06km, meanWind06km }) =>
      calculateDerechoCompositeParameter({
        dcape,
        mucape,
        shear06km,
        meanWind06km,
      }),
  });

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            Derecho Composite Parameter
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Derecho Composite Parameter calculated from DCAPE, MUCAPE, 0–6 km
            shear, and 0–6 km mean wind.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <NumberInput
            id="dcape"
            label="DCAPE (J/kg)"
            value={fields.dcape}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('dcape', value)}
          />

          <NumberInput
            id="mucape"
            label="MUCAPE (J/kg)"
            value={fields.mucape}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('mucape', value)}
          />

          <NumberInput
            id="shear06km"
            label="0–6 km shear (kt)"
            value={fields.shear06km}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('shear06km', value)}
          />

          <NumberInput
            id="meanWind06km"
            label="0–6 km mean wind (kt)"
            value={fields.meanWind06km}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('meanWind06km', value)}
          />
        </div>

        <div className="flex justify-center">
          <Button onClick={handleCalculate}>Calculate</Button>
        </div>

        <CalculationResultBox
          formula="DCP = (DCAPE / 980) × (MUCAPE / 2000) × (0–6 km shear / 20) × (0–6 km mean wind / 16)"
          result={formatNumericValue(result?.dcp)}
          description="Enter DCAPE and MUCAPE in J/kg, and 0–6 km shear and mean wind in kt. The result is the Derecho Composite Parameter (DCP)."
        />
      </div>
    </section>
  );
}

export default DerechoCompositeParameter;
