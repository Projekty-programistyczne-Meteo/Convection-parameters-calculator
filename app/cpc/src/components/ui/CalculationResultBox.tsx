type CalculationResultBoxProps = {
  formula: React.ReactNode;
  result?: string;
  description: string;
};

/**
 * Displays a calculator formula, optional computed result, and short explanatory text in one reusable block.
 * Calculator sections use it to keep result presentation consistent across different formulas.
 */
function CalculationResultBox({
  formula,
  result,
  description,
}: CalculationResultBoxProps) {
  return (
    <div className="mt-6 rounded-sm border border-zinc-400 bg-[#f1fbe2] px-4 py-4 md:px-6 md:py-5">
      <p className="text-sm font-semibold text-stone-900 md:text-base">
        {formula}
        {result && (
          <span className="ml-2 text-sm font-bold text-green-700 md:text-base">
            = {result}
          </span>
        )}
      </p>

      <p className="mt-2 text-xs text-stone-600 md:text-sm">{description}</p>
    </div>
  );
}

export default CalculationResultBox;
