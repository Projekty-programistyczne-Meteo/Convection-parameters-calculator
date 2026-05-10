import { useState } from 'react';
import type {
  PrimitiveFields,
  ParsedFields,
  UseCalculatorFormConfig,
} from '../types/calculator.types';

/**
 * Manages calculator form fields, numeric parsing, optional validation, and computed result state.
 * Calculator components use this hook to avoid repeating input parsing and invalid-value handling.
 */
export function useCalculatorForm<TFields extends PrimitiveFields, TResult>({
  initialFields,
  calculate,
  validate,
}: UseCalculatorFormConfig<TFields, TResult>) {
  const [fields, setFields] = useState<TFields>(initialFields);
  const [result, setResult] = useState<TResult | null>(null);

  /**
   * Updates one named form field while keeping the remaining field values unchanged.
   */
  const setField = <K extends keyof TFields>(key: K, value: string) => {
    setFields((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /**
   * Parses current field strings, validates numeric input, and stores the calculated result.
   */
  const handleCalculate = () => {
    const parsedValues = Object.entries(fields).reduce((acc, [key, value]) => {
      acc[key as keyof TFields] = Number(value.replace(',', '.'));
      return acc;
    }, {} as ParsedFields<TFields>);

    const hasNaN = Object.values(parsedValues).some((value) =>
      Number.isNaN(value),
    );

    if (hasNaN) {
      setResult(null);
      return;
    }

    if (validate && !validate(parsedValues)) {
      setResult(null);
      return;
    }

    const computed = calculate(parsedValues);
    setResult(computed);
  };

  return {
    fields,
    result,
    setField,
    handleCalculate,
    setResult,
  };
}
