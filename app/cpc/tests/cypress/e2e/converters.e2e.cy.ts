/// <reference types="cypress" />

import { ConvertersPage } from '../pages/ConvertersPage';

describe('Converter E2E tests', () => {
  const convertersPage = new ConvertersPage();

  const temperatureCases = [
    {
      name: 'Celsius',
      unit: 'celsius',
      value: '0',
      expectedValues: ['0.00', '273.15', '32.00', '491.67', '150.00', '7.50'],
    },
    {
      name: 'Kelvin',
      unit: 'kelvin',
      value: '300',
      expectedValues: [
        '26.85',
        '300.00',
        '80.33',
        '540.00',
        '109.72',
        '8.86',
        '21.48',
        '21.60',
      ],
    },
    {
      name: 'Fahrenheit',
      unit: 'fahrenheit',
      value: '68',
      expectedValues: [
        '20.00',
        '293.15',
        '68.00',
        '527.67',
        '120.00',
        '6.60',
        '16.00',
        '18.00',
      ],
    },
    {
      name: 'Rankine',
      unit: 'rankine',
      value: '540',
      expectedValues: [
        '26.85',
        '300.00',
        '80.33',
        '540.00',
        '109.73',
        '8.86',
        '21.48',
        '21.60',
      ],
    },
    {
      name: 'Delisle',
      unit: 'delisle',
      value: '90',
      expectedValues: [
        '40.00',
        '313.15',
        '104.00',
        '563.67',
        '90.00',
        '13.20',
        '32.00',
        '28.50',
      ],
    },
    {
      name: 'Newton',
      unit: 'newton',
      value: '33',
      expectedValues: [
        '100.00',
        '373.15',
        '212.00',
        '671.67',
        '0.00',
        '33.00',
        '80.00',
        '60.00',
      ],
    },
    {
      name: 'Reaumur',
      unit: 'reaumur',
      value: '80',
      expectedValues: [
        '100.00',
        '373.15',
        '212.00',
        '671.67',
        '0.00',
        '33.00',
        '80.00',
        '60.00',
      ],
    },
    {
      name: 'Romer',
      unit: 'romer',
      value: '60',
      expectedValues: [
        '100.00',
        '373.15',
        '212.00',
        '671.67',
        '0.00',
        '33.00',
        '80.00',
        '60.00',
      ],
    },
  ];

  const windCases = [
    {
      name: 'meters per second',
      unit: 'mps',
      value: '10',
      expectedValues: ['10.00', '36.00', '19.43', '22.37'],
    },
    {
      name: 'kilometers per hour',
      unit: 'kmh',
      value: '72',
      expectedValues: ['20.00', '72.00', '38.85', '44.74'],
    },
    {
      name: 'knots',
      unit: 'knot',
      value: '20',
      expectedValues: ['10.30', '37.08', '20.00', '23.04'],
    },
    {
      name: 'miles per hour',
      unit: 'mph',
      value: '30',
      expectedValues: ['13.41', '48.28', '26.05', '30.00'],
    },
  ];

  temperatureCases.forEach((testCase) => {
    it(`converts ${testCase.name} to other temperature units`, () => {
      convertersPage.visitConverters();
      convertersPage.selectUnitBySelector('#temperatureUnit', testCase.unit);
      convertersPage.fillInputBySelector('#temperatureValue', testCase.value);
      convertersPage.clickConvertByIndex(0);
      convertersPage.shouldShowConvertedValues(testCase.expectedValues);
    });
  });

  windCases.forEach((testCase) => {
    it(`converts ${testCase.name} to other wind units`, () => {
      convertersPage.visitConverters();
      convertersPage.selectUnitBySelector('#windUnit', testCase.unit);
      convertersPage.fillInputBySelector('#windValue', testCase.value);
      convertersPage.clickConvertByIndex(1);
      convertersPage.shouldShowConvertedValues(testCase.expectedValues);
    });
  });
});

export {};
