// src/components/Converters/UpwardVerticalVelocity.tsx

import { useState } from 'react';
import {
  calculateUpwardVerticalVelocity,
  type UpwardVerticalVelocityResult,
} from '../../../utils/Calculators/UpwardVerticalVelocityCalculator';

function formatValue(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return '';
  }

  return value.toFixed(2);
}

function UpwardVerticalVelocity() {
  const [cape, setCape] = useState<string>('');
  const [result, setResult] = useState<UpwardVerticalVelocityResult | null>(
    null,
  );

  const handleCalculate = () => {
    const numericCape = Number(cape.replace(',', '.'));

    if (Number.isNaN(numericCape) || numericCape < 0) {
      setResult(null);
      return;
    }

    const computed = calculateUpwardVerticalVelocity({
      cape: numericCape,
    });

    setResult(computed);
  };

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            8) UVV (Upward Vertical Velocity)
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Upward vertical velocity calculated from CAPE.
          </p>
        </header>

        {/* Form */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
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
            UVV ={' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              &radic;
              <span style={{ textDecoration: 'overline' }}>
                &nbsp;2 × CAPE&nbsp;
              </span>
            </span>
            {result && (
              <span className="ml-2 text-sm font-bold text-green-700 md:text-base">
                = {formatValue(result.uvv)}
              </span>
            )}
          </p>

          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Enter CAPE value in J/kg. The result is the theoretical maximum
            upward vertical velocity expressed in m/s.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UpwardVerticalVelocity;
