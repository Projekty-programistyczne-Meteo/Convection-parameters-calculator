import { calculateVerticalVelocity } from '../../../utils/Calculators/VerticalVelocityCalculator';
import type { VerticalVelocityResult } from '../../../types/calculator.types';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

/**
 * Renders the vertical lifting velocity calculator from a CIN value.
 * It validates CIN as non-negative and displays the Wlift result with the square-root formula.
 */
function VerticalVelocity() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    { cin: string },
    VerticalVelocityResult
  >({
    initialFields: {
      cin: '',
    },
    calculate: ({ cin }) =>
      calculateVerticalVelocity({
        cin,
      }),
    validate: ({ cin }) => cin >= 0,
  });

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            3) Vertical velocity
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Vertical lifting velocity calculated from CIN value.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <NumberInput
            id="cin"
            label="CIN (J/kg)"
            value={fields.cin}
            placeholder="(type value positive) {default: 0}"
            onChange={(value) => setField('cin', value)}
          />

          <div className="flex justify-center lg:justify-start">
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>
        </div>

        <CalculationResultBox
          formula={
            <>
              Wlift ={' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                &radic;
                <span style={{ textDecoration: 'overline' }}>
                  &nbsp;2 × CIN&nbsp;
                </span>
              </span>
            </>
          }
          result={formatNumericValue(result?.wLift)}
          description="Enter CIN value in J/kg. The result is the theoretical lifting velocity expressed in m/s."
        />
      </div>
    </section>
  );
}

export default VerticalVelocity;
