// src/hooks/useCalculatorForm.ts

import { useState } from 'react';

type PrimitiveFields = Record<string, string>;
type ParsedFields<T extends PrimitiveFields> = { [K in keyof T]: number };

type UseCalculatorFormConfig<TFields extends PrimitiveFields, TResult> = {
  initialFields: TFields;
  calculate: (values: ParsedFields<TFields>) => TResult;
  validate?: (values: ParsedFields<TFields>) => boolean;
};

export function useCalculatorForm<TFields extends PrimitiveFields, TResult>({
  initialFields,
  calculate,
  validate,
}: UseCalculatorFormConfig<TFields, TResult>) {
  const [fields, setFields] = useState<TFields>(initialFields);
  const [result, setResult] = useState<TResult | null>(null);

  const setField = <K extends keyof TFields>(key: K, value: string) => {
    setFields((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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
