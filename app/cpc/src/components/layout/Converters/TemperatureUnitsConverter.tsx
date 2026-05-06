import { useState } from 'react';
import {
  TEMPERATURE_UNITS,
  convertAllUnits,
  type TemperatureUnit,
} from '../../../utils/Converters/TemperatureConversion';

function formatValue(value: number): string {
  if (!Number.isFinite(value)) {
    return '—';
  }
  return value.toFixed(2);
}

function TemperatureUnitsConverter() {
  const [temperatureValue, setTemperatureValue] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<TemperatureUnit>('celsius');
  const [results, setResults] = useState<
    Partial<Record<TemperatureUnit, number>>
  >({});

  const handleConvert = () => {
    const numericValue = Number(temperatureValue.replace(',', '.'));

    if (Number.isNaN(numericValue)) {
      setResults({});
      return;
    }

    const converted = convertAllUnits(numericValue, selectedUnit);
    setResults(converted);
  };

  //   const selectedLabel =
  //     TEMPERATURE_UNITS.find((u) => u.id === selectedUnit)?.label ??
  //     'Celsius [°C]';

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Formularz */}
        <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl mb-5">
          1) Temperature Units Converter
        </h2>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <div className="space-y-2">
            <label
              htmlFor="temperatureValue"
              className="block text-base font-semibold text-stone-900"
            >
              Temperature value:
            </label>
            <input
              id="temperatureValue"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={temperatureValue}
              onChange={(e) => setTemperatureValue(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="temperatureUnit"
              className="block text-base font-semibold text-stone-900"
            >
              Temperature unit:
            </label>
            <div className="relative">
              <select
                id="temperatureUnit"
                value={selectedUnit}
                onChange={(e) =>
                  setSelectedUnit(e.target.value as TemperatureUnit)
                }
                className="h-12 w-full appearance-none rounded-sm border border-zinc-400 bg-[#ECECEC] px-4 pr-14 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
              >
                {TEMPERATURE_UNITS.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.label}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-stone-900">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={handleConvert}
              className="h-12 w-30 rounded-full border-2 border-[#0E5E97] bg-[#1569A8] px-4 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:scale-[1.03] hover:bg-[#0E5E97] hover:cursor-pointer"
            >
              Convert
            </button>
          </div>
        </div>

        {/* Tabela wyników */}
        <div className="mt-10 overflow-hidden rounded-sm border border-zinc-400 bg-[#ECECEC]">
          <div className="grid grid-cols-[2fr_1fr] bg-[#E0DBDB] px-4 py-3 text-sm font-semibold text-stone-900 md:px-6">
            <span>Temperature Units</span>
            <span className="text-right">Converted Values</span>
          </div>

          <div className="divide-y divide-zinc-300">
            {TEMPERATURE_UNITS.map((unit) => (
              <div
                key={unit.id}
                className="grid grid-cols-[2fr_1fr] px-4 py-3 text-sm text-stone-900 md:px-6"
              >
                <span>{unit.label}</span>
                <span className="text-right">
                  {results[unit.id] !== undefined
                    ? formatValue(results[unit.id] as number)
                    : '—'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mały opis pod spodem – opcjonalnie */}
        <p className="mt-4 text-xs text-stone-600">
          When a Celsius value is selected, conversions are calculated directly
          from degrees Celsius. When other units are selected, conversions first
          go through degrees Celsius (°C) and then to the target units.
        </p>
      </div>
    </section>
  );
}

export default TemperatureUnitsConverter;
