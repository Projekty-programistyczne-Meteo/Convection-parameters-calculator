// src/components/Converters/StabilityOfTheAtmosphere.tsx

import { useState } from 'react';
import {
  calculateStabilityOfTheAtmosphere,
  type StabilityResult,
} from '../../../utils/Calculators/StabilityOfTheAtmosphereCalculator';

function formatValue(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return '';
  }
  return value.toFixed(2);
}

function StabilityOfTheAtmosphere() {
  const [ambientTemperature, setAmbientTemperature] = useState<string>('');
  const [parcelTemperature, setParcelTemperature] = useState<string>('');
  const [result, setResult] = useState<StabilityResult | null>(null);

  const handleCalculate = () => {
    const ambient = Number(ambientTemperature.replace(',', '.'));
    const parcel = Number(parcelTemperature.replace(',', '.'));

    if (Number.isNaN(ambient) || Number.isNaN(parcel)) {
      setResult(null);
      return;
    }

    const computed = calculateStabilityOfTheAtmosphere({
      ambientTemperature: ambient,
      parcelTemperature: parcel,
    });

    setResult(computed);
  };

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Nagłówek */}
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            1) Stability of the atmosphere
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Lifted Index (LI) calculated from the environmental and air parcel
            temperature at 500 mb pressure level.
          </p>
        </header>

        {/* Formularz */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <div className="space-y-2">
            <label
              htmlFor="ambientTemperature"
              className="block text-base font-semibold text-stone-900"
            >
              Ambient temperature (°C)
            </label>
            <input
              id="ambientTemperature"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={ambientTemperature}
              onChange={(e) => setAmbientTemperature(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="parcelTemperature"
              className="block text-base font-semibold text-stone-900"
            >
              Air parcel temperature (°C)
            </label>
            <input
              id="parcelTemperature"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={parcelTemperature}
              onChange={(e) => setParcelTemperature(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={handleCalculate}
              className="h-12 min-w-35 rounded-full border-2 border-[#0E5E97] bg-[#1569A8] px-6 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:scale-[1.03] hover:bg-[#0E5E97] hover:cursor-pointer"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Wzór + wynik */}
        <div className="mt-6 rounded-sm border border-zinc-400 bg-[#f1fbe2] px-4 py-4 md:px-6 md:py-5">
          <p className="text-sm font-semibold text-stone-900 md:text-base">
            LI = T(500 mb envir) - T(500 mb parcel)
            {result && (
              <span className="ml-2 text-sm font-bold text-green-700 md:text-base">
                = {formatValue(result.li)}
              </span>
            )}
          </p>

          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Enter both temperatures in degrees Celsius. Positive LI values
            indicate more stable conditions, negative values – unstable
            atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StabilityOfTheAtmosphere;
