import {
  TEMPERATURE_UNITS,
  convertAllUnits,
} from '../../../utils/Converters/TemperatureConversion';
import type { TemperatureUnit } from '../../../types/converter.types';
import { useUnitsConverter } from '../../../hooks/useUnitsConverter';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import SelectField from '../../ui/SelectField';
import ResultsTable from '../../ui/ResultsTable';

/**
 * Provides the temperature conversion form and result table for all supported temperature scales.
 * It delegates conversion state to the shared units converter hook and formats empty results for display.
 */
function TemperatureUnitsConverter() {
  const {
    valueInput,
    selectedUnit,
    results,
    setValueInput,
    setSelectedUnit,
    handleConvert,
  } = useUnitsConverter<TemperatureUnit>({
    defaultUnit: 'celsius',
    convertAll: convertAllUnits,
  });

  const rows = TEMPERATURE_UNITS.map((unit) => ({
    id: unit.id,
    label: unit.label,
    value: formatNumericValue(results[unit.id], { emptyValue: '—' }),
  }));

  return (
    <section className="bg-cpc-background-calculators px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-5 text-xl font-bold tracking-tight text-cpc-text-primary md:text-2xl">
          Temperature Units Converter
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <NumberInput
            id="temperatureValue"
            label="Temperature value:"
            placeholder="(type value positive or negative) {default: 0}"
            value={valueInput}
            onChange={setValueInput}
          />

          <SelectField<TemperatureUnit>
            id="temperatureUnit"
            label="Temperature unit:"
            value={selectedUnit}
            options={TEMPERATURE_UNITS}
            onChange={setSelectedUnit}
          />

          <div className="flex justify-center lg:justify-start">
            <Button onClick={handleConvert} className="w-30 px-4">
              Convert
            </Button>
          </div>
        </div>

        <ResultsTable
          leftHeader="Temperature Units"
          rightHeader="Converted Values"
          rows={rows}
        />

        <p className="mt-4 text-xs text-cpc-text-secondary">
          When a Celsius value is selected, conversions are calculated directly
          from degrees Celsius. When other units are selected, conversions first
          go through degrees Celsius (°C) and then to the target units.
        </p>
      </div>
    </section>
  );
}

export default TemperatureUnitsConverter;
