// src/components/Converters/VerticalVelocity.tsx

import { useState } from 'react';
import {
  calculateVerticalVelocity,
  type VerticalVelocityResult,
} from '../../../utils/Calculators/VerticalVelocityCalculator';

function formatValue(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return '';
  }

  return value.toFixed(2);
}

function VerticalVelocity() {
  const [cin, setCin] = useState<string>('');
  const [result, setResult] = useState<VerticalVelocityResult | null>(null);

  const handleCalculate = () => {
    const numericCin = Number(cin.replace(',', '.'));

    if (Number.isNaN(numericCin) || numericCin < 0) {
      setResult(null);
      return;
    }

    const computed = calculateVerticalVelocity({
      cin: numericCin,
    });

    setResult(computed);
  };

  return (
    <section className="bg-[#F6F1F1] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            3) Vertical velocity
          </h2>
          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Vertical lifting velocity calculated from CIN value.
          </p>
        </header>

        {/* Form */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-2">
            <label
              htmlFor="cin"
              className="block text-base font-semibold text-stone-900"
            >
              CIN (J/kg)
            </label>
            <input
              id="cin"
              type="number"
              inputMode="decimal"
              placeholder="(type value positive) {default: 0}"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
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
            Wlift ={' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              &radic;
              <span style={{ textDecoration: 'overline' }}>
                &nbsp;2 × CIN&nbsp;
              </span>
            </span>
            {result && (
              <span className="ml-2 text-sm font-bold text-green-700 md:text-base">
                = {formatValue(result.wLift)}
              </span>
            )}
          </p>

          <p className="mt-2 text-xs text-stone-600 md:text-sm">
            Enter CIN value in J/kg. The result is the theoretical lifting
            velocity expressed in m/s.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VerticalVelocity;
