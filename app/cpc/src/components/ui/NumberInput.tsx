import type { NumberInputProps } from '../../types/ui.types';

/**
 * Shared numeric input component with label, placeholder, and controlled value wiring.
 * Calculator and converter forms use it to keep decimal entry styling and behavior consistent.
 */
function NumberInput({
  id,
  label,
  value,
  placeholder,
  onChange,
}: NumberInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-base font-semibold text-stone-900"
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-sm border border-zinc-400 bg-[#ECECEC] px-3 text-sm text-stone-900 outline-none transition focus:border-sky-700 focus:bg-white"
      />
    </div>
  );
}

export default NumberInput;
