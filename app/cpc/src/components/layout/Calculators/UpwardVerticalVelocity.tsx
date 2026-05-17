import { calculateUpwardVerticalVelocity } from '../../../utils/Calculators/UpwardVerticalVelocityCalculator';
import type { UpwardVerticalVelocityResult } from '../../../types/calculator.types';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

/**
 * Renders the upward vertical velocity calculator from a CAPE value.
 * It shares the same non-negative CAPE validation pattern as other velocity calculators.
 */
function UpwardVerticalVelocity() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    { cape: string },
    UpwardVerticalVelocityResult
  >({
    initialFields: {
      cape: '',
    },
    calculate: ({ cape }) =>
      calculateUpwardVerticalVelocity({
        cape,
      }),
    validate: ({ cape }) => cape >= 0,
  });

  return (
    <section className="bg-cpc-background-calculators px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-cpc-text-primary md:text-2xl">
            UVV (Upward Vertical Velocity)
          </h2>
          <p className="mt-2 text-xs text-cpc-text-secondary md:text-sm">
            Upward vertical velocity calculated from CAPE. It gives an estimate
            of how fast air parcels can rise in a buoyant atmosphere, which
            affects storm organization and precipitation potential.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <NumberInput
            id="cape"
            label="CAPE (J/kg)"
            value={fields.cape}
            placeholder="(type value positive) {default: 0}"
            onChange={(value) => setField('cape', value)}
          />

          <div className="flex justify-center">
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>
        </div>

        <CalculationResultBox
          formula={
            <>
              UVV ={' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                &radic;
                <span style={{ textDecoration: 'overline' }}>
                  &nbsp;2 × CAPE&nbsp;
                </span>
              </span>
            </>
          }
          result={formatNumericValue(result?.uvv)}
          description="Enter CAPE value in J/kg. The result is the theoretical maximum upward vertical velocity expressed in m/s."
        />
      </div>
    </section>
  );
}

export default UpwardVerticalVelocity;
