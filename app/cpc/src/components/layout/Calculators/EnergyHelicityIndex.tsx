// src/components/Converters/EnergyHelicityIndex.tsx

import { useState } from 'react';
import {
  calculateEnergyHelicityIndex,
  type EnergyHelicityIndexResult,
} from '../../../utils/Calculators/EnergyHelicityIndexCalculator';

function formatValue(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return '';
  }

  return value.toFixed(2);
}

function EnergyHelicityIndex() {
  const [cape, setCape] = useState<string>('');
  const [srh, setSrh] = useState<string>('');
  const [result, setResult] = useState<EnergyHelicityIndexResult | null>(null);

  const handleCalculate = () => {
    const numericCape = Number(cape.replace(',', '.'));
    const numericSrh = Number(srh.replace(',', '.'));

    if (Number.isNaN(numericCape) || Number.isNaN(numericSrh)) {
      setResult(null);
      return;
    }

    const computed = calculateEnergyHelicityIndex({
      cape: numericCape,
      srh: numericSrh,
    });

    setResult(computed);
  };

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            4) Energy Helicity Index
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Energy Helicity Index calculated from CAPE and storm-relative
            helicity values.
          </p>
        </header>

        {/* Form */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <div className="space-y-2">
            <label
              htmlFor="cape"
              className="block text-base font-semibold text-stone-900"
            >
              CAPE (J/kg)
            </label>
            <input
              id="cape"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={cape}
              onChange={(e) => setCape(e.target.value)}
              className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="srh"
              className="block text-base font-semibold text-stone-900"
            >
              Storm-relative helicity (m²/s²)
            </label>
            <input
              id="srh"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive or negative) {default: 0}"
              value={srh}
              onChange={(e) => setSrh(e.target.value)}
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

        {/* Formula + result */}
        <div className="mt-6 rounded-sm border border-zinc-400 bg-[#f1fbe2] px-4 py-4 md:px-6 md:py-5">
          <p className="text-sm font-semibold text-stone-900 md:text-base">
            EHI = (CAPE × SRH) / 1.6 × 10⁵
            {result && (
              <span className="ml-2 text-sm font-bold text-green-700 md:text-base">
                = {formatValue(result.ehi)}
              </span>
            )}
          </p>

          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Enter CAPE in J/kg and storm-relative helicity in m²/s². The result
            is the Energy Helicity Index (EHI).
          </p>
        </div>
      </div>
    </section>
  );
}

export default EnergyHelicityIndex;
