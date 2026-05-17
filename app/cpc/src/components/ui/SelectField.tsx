import type { SelectFieldProps } from '../../types/ui.types';

/**
 * Shared select input component for choosing one typed option from a list.
 * It keeps the generic option id type while providing consistent label, styling, and dropdown affordance.
 */
function SelectField<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: SelectFieldProps<T>) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-base font-semibold text-cpc-text-primary"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          className="h-12 w-full appearance-none rounded-sm border border-zinc-400 bg-cpc-background-input-output-global px-4 pr-14 text-sm text-cpc-text-primary outline-none transition focus:border-sky-700 focus:bg-cpc-background-select-focus"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-cpc-text-primary">
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
  );
}

export default SelectField;
