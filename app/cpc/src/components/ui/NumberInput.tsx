// src/components/ui/NumberInput.tsx

type NumberInputProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

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
