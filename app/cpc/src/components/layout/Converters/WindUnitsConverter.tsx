import { useState } from 'react';
import {
  WIND_UNITS,
  convertAllWindUnits,
  type WindUnit,
} from '../../../utils/Converters/WindConvertion';

function formatWindValue(value: number): string {
  if (!Number.isFinite(value)) {
    return '—';
  }
  // 1 miejsce po przecinku przy prędkościach wiatru zwykle wystarcza
  return value.toFixed(2);
}

function WindUnitsConverter() {
  const [windValue, setWindValue] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<WindUnit>('mps');
  const [results, setResults] = useState<Partial<Record<WindUnit, number>>>({});

  const handleConvert = () => {
    const numericValue = Number(windValue.replace(',', '.'));

    if (Number.isNaN(numericValue)) {
      setResults({});
      return;
    }

    const converted = convertAllWindUnits(numericValue, selectedUnit);
    setResults(converted);
  };

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Formularz */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <div className="space-y-2">
            <label
              htmlFor="windValue"
              className="block text-base font-semibold text-stone-900"
            >
              Wind speed value:
            </label>
            <input
              id="windValue"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={windValue}
              onChange={(e) => setWindValue(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="windUnit"
              className="block text-base font-semibold text-stone-900"
            >
              Wind speed unit:
            </label>
            <div className="relative">
              <select
                id="windUnit"
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value as WindUnit)}
                className="h-12 w-full appearance-none rounded-sm border border-zinc-400 bg-[#ECECEC] px-4 pr-14 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
              >
                {WIND_UNITS.map((unit) => (
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
            <span>Wind Speed Units</span>
            <span className="text-right">Converted Values</span>
          </div>

          <div className="divide-y divide-zinc-300">
            {WIND_UNITS.map((unit) => (
              <div
                key={unit.id}
                className="grid grid-cols-[2fr_1fr] px-4 py-3 text-sm text-stone-900 md:px-6"
              >
                <span>{unit.label}</span>
                <span className="text-right">
                  {results[unit.id] !== undefined
                    ? formatWindValue(results[unit.id] as number)
                    : '—'}
                </span>
              </div>
            ))}
          </div>
        </div>

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
