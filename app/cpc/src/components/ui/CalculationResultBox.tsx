import type { CalculationResultBoxProps } from '../../types/ui.types';

/**
 * Shared result display for calculator formulas, optional numeric output, and descriptions.
 * Calculator components use it to keep result messaging and styling consistent.
 */
function CalculationResultBox({
  formula,
  result,
  description,
}: CalculationResultBoxProps) {
  return (
    <div className="mt-6 rounded-sm border border-zinc-400 bg-cpc-background-calculation-result-box px-4 py-4 md:px-6 md:py-5">
      <p className="text-sm font-semibold text-cpc-text-primary md:text-base">
        {formula}
        {result && (
          <span className="ml-2 text-sm font-bold text-cpc-text-success md:text-base">
            = {result}
          </span>
        )}
      </p>

      <p className="mt-2 text-xs text-cpc-text-secondary md:text-sm">
        {description}
      </p>
    </div>
  );
}

export default CalculationResultBox;
