import { calculateEnergyHelicityIndex } from '../../../utils/Calculators/EnergyHelicityIndexCalculator';
import type { EnergyHelicityIndexResult } from '../../../types/calculator.types';
import { useCalculatorForm } from '../../../hooks/useCalculatorForm';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import CalculationResultBox from '../../ui/CalculationResultBox';

/**
 * Renders the Energy Helicity Index calculator for CAPE and storm-relative helicity values.
 * It passes parsed inputs to the EHI utility and presents the formatted result beside the formula.
 */
function EnergyHelicityIndex() {
  const { fields, result, setField, handleCalculate } = useCalculatorForm<
    {
      cape: string;
      srh: string;
    },
    EnergyHelicityIndexResult
  >({
    initialFields: {
      cape: '',
      srh: '',
    },
    calculate: ({ cape, srh }) =>
      calculateEnergyHelicityIndex({
        cape,
        srh,
      }),
  });

  return (
    <section className="bg-cpc-background-calculators px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-bold tracking-tight text-cpc-text-primary md:text-2xl">
            Energy Helicity Index
          </h2>
          <p className="mt-2 text-xs text-cpc-text-secondary md:text-sm">
            Energy Helicity Index calculated from CAPE and storm-relative
            helicity values. It helps assess the potential for rotating storms
            and severe storm development by combining atmospheric instability
            with wind shear.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <NumberInput
            id="cape"
            label="CAPE (J/kg)"
            value={fields.cape}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('cape', value)}
          />

          <NumberInput
            id="srh"
            label="Storm-relative helicity (m²/s²)"
            value={fields.srh}
            placeholder="(type value positive or negative) {default: 0}"
            onChange={(value) => setField('srh', value)}
          />

          <div className="flex justify-center lg:justify-start">
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>
        </div>

        <CalculationResultBox
          formula="EHI = (CAPE × SRH) / 1.6 × 10⁵"
          result={formatNumericValue(result?.ehi)}
          description="Enter CAPE in J/kg and storm-relative helicity in m²/s². The result is the Energy Helicity Index (EHI)."
        />
      </div>
    </section>
  );
}

export default EnergyHelicityIndex;
