import {
  calculateUpdraftStrenght,
  type UpdraftStrenghtResult,
} from '../../../utils/Calculators/updraftStrenghtCalculator';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

function UpdraftStrenght() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    { cape: string },
    UpdraftStrenghtResult
  >({
    initialFields: {
      cape: '',
    },
    calculate: ({ cape }) =>
      calculateUpdraftStrenght({
        cape,
      }),
    validate: ({ cape }) => cape >= 0,
  });

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            2) Updraft Strenght
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Maximum theoretical updraft speed calculated from CAPE value.
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

          <div className="flex justify-center lg:justify-start">
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>
        </div>

        <CalculationResultBox
          formula={
            <>
              Wmax ={' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                &radic;
                <span style={{ textDecoration: 'overline' }}>
                  &nbsp;2 × CAPE&nbsp;
                </span>
              </span>
            </>
          }
          result={formatNumericValue(result?.wMax)}
          description="Enter CAPE value in J/kg. The result is the theoretical maximum updraft speed expressed in m/s."
        />
      </div>
    </section>
  );
}

export default UpdraftStrenght;
