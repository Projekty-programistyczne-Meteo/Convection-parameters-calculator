/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import CalculatorsPage from '../../../../src/components/pages/CalculatorPage/CalculatorsPage';

describe('CalculatorsPage', () => {
  it('renders Calculators page', () => {
    cy.mount(<CalculatorsPage />);
  });
});

export {};
