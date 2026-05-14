/// <reference types="cypress" />

import { CalculatorsPage } from '../pages/CalculatorsPage';

describe('Calculator E2E tests', () => {
  const calculatorsPage = new CalculatorsPage();

  const calculatorCases = [
    {
      name: 'Stability of the atmosphere',
      buttonIndex: 0,
      inputs: [
        { selector: '#ambientTemperature', value: '-10' },
        { selector: '#parcelTemperature', value: '-5' },
      ],
      expectedResult: '= -5.00',
    },
    {
      name: 'Updraft Strenght',
      buttonIndex: 1,
      inputs: [{ selector: 'input[id="cape"]', value: '2000', index: 0 }],
      expectedResult: '= 63.25',
    },
    {
      name: 'Vertical velocity',
      buttonIndex: 2,
      inputs: [{ selector: '#cin', value: '200' }],
      expectedResult: '= 20.00',
    },
    {
      name: 'Energy Helicity Index',
      buttonIndex: 3,
      inputs: [
        { selector: 'input[id="cape"]', value: '2000', index: 1 },
        { selector: '#srh', value: '160' },
      ],
      expectedResult: '= 2.00',
    },
    {
      name: 'Derecho Composite Parameter',
      buttonIndex: 4,
      inputs: [
        { selector: '#dcape', value: '980' },
        { selector: '#mucape', value: '2000' },
        { selector: '#shear06km', value: '20' },
        { selector: '#meanWind06km', value: '16' },
      ],
      expectedResult: '= 1.00',
    },
    {
      name: 'Lifting Condensation Level',
      buttonIndex: 5,
      inputs: [
        { selector: 'input[id="temperature"]', value: '20', index: 0 },
        { selector: '#dewPoint', value: '12' },
      ],
      expectedResult: '= 1000.00',
    },
    {
      name: 'Dew Point Temperature',
      buttonIndex: 6,
      inputs: [
        { selector: 'input[id="temperature"]', value: '20', index: 1 },
        { selector: '#relativeHumidity', value: '50' },
      ],
      expectedResult: '= 10.00',
    },
    {
      name: 'UVV',
      buttonIndex: 7,
      inputs: [{ selector: 'input[id="cape"]', value: '2500', index: 2 }],
      expectedResult: '= 70.71',
    },
  ];

  calculatorCases.forEach((testCase) => {
    it(`calculates ${testCase.name}`, () => {
      calculatorsPage.visitCalculators();

      testCase.inputs.forEach((input) => {
        const field = cy.get(input.selector);

        if (input.index === undefined) {
          field.clear().type(input.value);
          return;
        }

        field.eq(input.index).clear().type(input.value);
      });

      calculatorsPage.clickCalculateByIndex(testCase.buttonIndex);
      calculatorsPage.shouldShowResult(testCase.expectedResult);
    });
  });
});

export {};
