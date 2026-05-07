// src/hooks/useUnitsConverter.ts

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

export function useUnitsConverter<U extends UnitId>(
  config: UnitsConverterConfig<U>,
): UseUnitsConverterReturn<U> {
  const { defaultUnit, convertAll } = config;

  const [valueInput, setValueInput] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<U>(defaultUnit);
  const [results, setResults] = useState<Partial<Record<U, number>>>({});

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
