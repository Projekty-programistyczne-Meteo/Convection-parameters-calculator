import {
  calculateUpwardVerticalVelocity,
  type UpwardVerticalVelocityResult,
} from '../../../utils/Calculators/upwardVerticalVelocityCalculator';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

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
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            8) UVV (Upward Vertical Velocity)
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Upward vertical velocity calculated from CAPE.
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
