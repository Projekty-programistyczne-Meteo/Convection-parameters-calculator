import { useState } from 'react';

type UnitId = string;

export interface UnitsConverterConfig<U extends UnitId> {
  defaultUnit: U;
  convertAll: (value: number, from: U) => Partial<Record<U, number>>;
}

export interface UseUnitsConverterReturn<U extends UnitId> {
  valueInput: string;
  selectedUnit: U;
  results: Partial<Record<U, number>>;
  setValueInput: (next: string) => void;
  setSelectedUnit: (next: U) => void;
  handleConvert: () => void;
}

/**
 * Manages a generic units converter form, selected source unit, and latest conversion results.
 * Converter components provide the concrete conversion function while this hook owns shared UI state.
 */
export function useUnitsConverter<U extends UnitId>(
  config: UnitsConverterConfig<U>,
): UseUnitsConverterReturn<U> {
  const { defaultUnit, convertAll } = config;

  const [valueInput, setValueInput] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<U>(defaultUnit);
  const [results, setResults] = useState<Partial<Record<U, number>>>({});

  /**
   * Parses the current input value and refreshes the result map for the selected source unit.
   */
  const handleConvert = () => {
    const numericValue = Number(valueInput.replace(',', '.'));

    if (Number.isNaN(numericValue)) {
      setResults({});
      return;
    }

    const converted = convertAll(numericValue, selectedUnit);
    setResults(converted);
  };

  return {
    valueInput,
    selectedUnit,
    results,
    setValueInput,
    setSelectedUnit,
    handleConvert,
  };
}
