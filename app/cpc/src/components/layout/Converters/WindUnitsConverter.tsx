import {
  WIND_UNITS,
  convertAllWindUnits,
} from '../../../utils/Converters/WindConvertion';
import type { WindUnit } from '../../../types/converter.types';
import { useUnitsConverter } from '../../../hooks/useUnitsConverter';
import { formatNumericValue } from '../../../utils/formatNumericValue';
import Button from '../../ui/Button';
import NumberInput from '../../ui/NumberInput';
import SelectField from '../../ui/SelectField';
import ResultsTable from '../../ui/ResultsTable';

/**
 * Provides the wind speed conversion form and result table for all supported wind units.
 * It uses meters per second as the shared base unit through the reusable converter hook.
 */
function WindUnitsConverter() {
  const {
    valueInput,
    selectedUnit,
    results,
    setValueInput,
    setSelectedUnit,
    handleConvert,
  } = useUnitsConverter<WindUnit>({
    defaultUnit: 'mps',
    convertAll: convertAllWindUnits,
  });

  const rows = WIND_UNITS.map((unit) => ({
    id: unit.id,
    label: unit.label,
    value: formatNumericValue(results[unit.id], { emptyValue: '—' }),
  }));

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-5 text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
          Wind Units Converter
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <NumberInput
            id="windValue"
            label="Wind speed value:"
            placeholder="(type value positive or negative) {default: 0}"
            value={valueInput}
            onChange={setValueInput}
          />

          <SelectField<WindUnit>
            id="windUnit"
            label="Wind speed unit:"
            value={selectedUnit}
            options={WIND_UNITS}
            onChange={setSelectedUnit}
          />

          <div className="flex justify-center lg:justify-start">
            <Button onClick={handleConvert} className="w-30 px-4">
              Convert
            </Button>
          </div>
        </div>

        <ResultsTable
          leftHeader="Wind Speed Units"
          rightHeader="Converted Values"
          rows={rows}
        />

        <p className="mt-4 text-xs text-stone-600">
          All conversions use meters per second (m/s) as the base meteorological
          unit. When another unit is selected, values are first converted to m/s
          and then to the remaining units.
        </p>
      </div>
    </section>
  );
}

export default WindUnitsConverter;
