// src/components/Converters/DewPointTemperature.tsx

import { useState } from 'react';
import {
  calculateDewPointTemperature,
  type DewPointTemperatureResult,
} from '../../../utils/Calculators/DewPointTemperatureCalculator';

function formatValue(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return '';
  }

  return value.toFixed(2);
}

function DewPointTemperature() {
  const [temperature, setTemperature] = useState<string>('');
  const [relativeHumidity, setRelativeHumidity] = useState<string>('');
  const [result, setResult] = useState<DewPointTemperatureResult | null>(null);

  const handleCalculate = () => {
    const numericTemperature = Number(temperature.replace(',', '.'));
    const numericRelativeHumidity = Number(relativeHumidity.replace(',', '.'));

    if (
      Number.isNaN(numericTemperature) ||
      Number.isNaN(numericRelativeHumidity)
    ) {
      setResult(null);
      return;
    }

    const computed = calculateDewPointTemperature({
      temperature: numericTemperature,
      relativeHumidity: numericRelativeHumidity,
    });

    setResult(computed);
  };

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            7) Td
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Dew point temperature calculated from air temperature and relative
            humidity.
          </p>
        </header>

        {/* Form */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <div className="space-y-2">
            <label
              htmlFor="temperature"
              className="block text-base font-semibold text-stone-900"
            >
              Temperature (°C)
            </label>
            <input
              id="temperature"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="relativeHumidity"
              className="block text-base font-semibold text-stone-900"
            >
              Relative humidity (%)
            </label>
            <input
              id="relativeHumidity"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={relativeHumidity}
              onChange={(e) => setRelativeHumidity(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleCalculate}
              className="h-12 min-w-35 rounded-full border-2 border-[#0E5E97] bg-[#1569A8] px-6 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:scale-[1.03] hover:bg-[#0E5E97] hover:cursor-pointer"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Formula + result */}
        <div className="mt-6 rounded-sm border border-zinc-400 bg-[#f1fbe2] px-4 py-4 md:px-6 md:py-5">
          <p className="text-sm font-semibold text-stone-900 md:text-base">
            Td = T - ((100 - RH) / 5)
            {result && (
              <span className="ml-2 text-sm font-bold text-green-700 md:text-base">
                = {formatValue(result.dewPointTemperature)}
              </span>
            )}
          </p>

          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Enter air temperature in °C and relative humidity in %. The result
            is the approximate dew point temperature expressed in °C.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DewPointTemperature;
