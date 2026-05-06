// src/components/Converters/DerechoCompositeParameter.tsx

import { useState } from 'react';
import {
  calculateDerechoCompositeParameter,
  type DerechoCompositeParameterResult,
} from '../../../utils/Calculators/DerechoCompositeParameterCalculator';

function formatValue(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return '';
  }

  return value.toFixed(2);
}

function DerechoCompositeParameter() {
  const [dcape, setDcape] = useState<string>('');
  const [mucape, setMucape] = useState<string>('');
  const [shear06km, setShear06km] = useState<string>('');
  const [meanWind06km, setMeanWind06km] = useState<string>('');
  const [result, setResult] = useState<DerechoCompositeParameterResult | null>(
    null,
  );

  const handleCalculate = () => {
    const numericDcape = Number(dcape.replace(',', '.'));
    const numericMucape = Number(mucape.replace(',', '.'));
    const numericShear06km = Number(shear06km.replace(',', '.'));
    const numericMeanWind06km = Number(meanWind06km.replace(',', '.'));

    if (
      Number.isNaN(numericDcape) ||
      Number.isNaN(numericMucape) ||
      Number.isNaN(numericShear06km) ||
      Number.isNaN(numericMeanWind06km)
    ) {
      setResult(null);
      return;
    }

    const computed = calculateDerechoCompositeParameter({
      dcape: numericDcape,
      mucape: numericMucape,
      shear06km: numericShear06km,
      meanWind06km: numericMeanWind06km,
    });

    setResult(computed);
  };

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            5) Derecho Composite Parameter
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Derecho Composite Parameter calculated from DCAPE, MUCAPE, 0–6 km
            shear, and 0–6 km mean wind.
          </p>
        </header>

        {/* Form */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-2">
            <label
              htmlFor="dcape"
              className="block text-base font-semibold text-stone-900"
            >
              DCAPE (J/kg)
            </label>
            <input
              id="dcape"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={dcape}
              onChange={(e) => setDcape(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="mucape"
              className="block text-base font-semibold text-stone-900"
            >
              MUCAPE (J/kg)
            </label>
            <input
              id="mucape"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={mucape}
              onChange={(e) => setMucape(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="shear06km"
              className="block text-base font-semibold text-stone-900"
            >
              0–6 km shear (kt)
            </label>
            <input
              id="shear06km"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={shear06km}
              onChange={(e) => setShear06km(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="meanWind06km"
              className="block text-base font-semibold text-stone-900"
            >
              0–6 km mean wind (kt)
            </label>
            <input
              id="meanWind06km"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={meanWind06km}
              onChange={(e) => setMeanWind06km(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>
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

        {/* Formula + result */}
        <div className="mt-6 rounded-sm border border-zinc-400 bg-[#f1fbe2] px-4 py-4 md:px-6 md:py-5">
          <p className="text-sm font-semibold text-stone-900 md:text-base">
            DCP = (DCAPE / 980) × (MUCAPE / 2000) × (0–6 km shear / 20) × (0–6
            km mean wind / 16)
            {result && (
              <span className="ml-2 text-sm font-bold text-green-700 md:text-base">
                = {formatValue(result.dcp)}
              </span>
            )}
          </p>

          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Enter DCAPE and MUCAPE in J/kg, and 0–6 km shear and mean wind in
            kt. The result is the Derecho Composite Parameter (DCP).
          </p>
        </div>
      </div>
    </section>
  );
}

export default DerechoCompositeParameter;
